<?php

namespace Doefom\Jobboard\Repositories;

use Doefom\Jobboard\Builders\JobQueryBuilder;
use Doefom\Jobboard\Contracts\JobContract;
use Doefom\Jobboard\Contracts\JobRepositoryContract;
use Doefom\Jobboard\Data\Job;
use Statamic\Data\DataCollection;
use Statamic\Stache\Stache;

class JobRepository implements JobRepositoryContract
{

    protected $store;

    public function __construct(Stache $stache)
    {
        $this->store = $stache->store('jobs');
    }

    public function make(): JobContract
    {
        return new Job();
    }

    public function query(): JobQueryBuilder
    {
        return new JobQueryBuilder($this->store);
    }

    public function all(): DataCollection
    {
        return $this->query()->get();
    }

    public function find($id): ?JobContract
    {
        return $this->query()->where('id', $id)->first();
    }

    public function save(JobContract $job): void
    {
        $this->store->save($job);
    }

    public function delete(JobContract $job): void
    {
        $this->store->delete($job);
    }

}
