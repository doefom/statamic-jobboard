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

        // Sanitize the jobs so fields where reusable contents can be used always have a value.
        $jobs = $jobs->map(fn(\Statamic\Entries\Entry $job) => $this->sanitizeJob($job));

        return $jobs->toArray();

    }

}
