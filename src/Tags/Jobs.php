<?php

namespace Doefom\Jobboard\Tags;

use Doefom\Jobboard\Traits\JobTrait;
use Statamic\Tags\Tags;

class Jobs extends Tags
{

    use JobTrait;

    /**
     * The {{ jobs }} tag.
     *
     * @return string|array
     */
    public function index(): array|string
    {

        $jobs = \Statamic\Facades\Entry::query()->where('collection', 'jobs')->get();

        // Output linked items if exists.
        $jobs = $jobs->map(fn(\Statamic\Entries\Entry $job) => $this->sanitizeJob($job));

        return $jobs->toArray();

    }

}
