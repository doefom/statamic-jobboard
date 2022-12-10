<?php

namespace Doefom\Jobboard\Data;

use Doefom\Jobboard\Contracts\JobContract;
use Statamic\Data\ContainsData;
use Statamic\Data\ExistsAsFile;
use Statamic\Data\TracksQueriedColumns;
use Statamic\Facades\Stache;
use Statamic\Support\Traits\FluentlyGetsAndSets;

class Job implements JobContract
{

    use FluentlyGetsAndSets, ExistsAsFile, TracksQueriedColumns, ContainsData;

    public $id;
    public $title;

    protected $selectedQueryRelations = [];

    public function __construct()
    {
        $this->data = collect();
    }

    public function id($id = null)
    {
        return $this->fluentlyGetOrSet('id')->args(func_get_args());
    }

    public function title($title = null)
    {
        return $this->fluentlyGetOrSet('title')->args(func_get_args());
    }

    public function save(): self
    {
        if (!$this->id) {
            $this->id = app('stache')->generateId();
        }

        \Doefom\Jobboard\Facades\Job::save($this);

        return $this;
    }

    public function path()
    {
        return Stache::store('jobs')->directory() . str_slug($this->id) . '.yaml';
    }

    public function fileData()
    {
        return $this->toArray();
    }

    public function toArray(): array
    {
        return array_merge($this->data()->toArray(), [
            'id' => $this->id,
            'title' => $this->title,
        ]);
    }

    public function delete(): void
    {
        // TODO: Implement delete() method.
    }

    public function selectedQueryRelations($relations)
    {
        $this->selectedQueryRelations = $relations;

        return $this;
    }
}
