<?php

namespace Doefom\Jobboard\Tags;

use Statamic\Facades\Entry;
use Statamic\Tags\Tags;

class Jobs extends Tags
{

    /**
     * The {{ jobs }} tag.
     *
     * @return string|array
     */
    public function index(): array|string
    {
        $jobs = Entry::query()
            ->where('collection', 'jobs')
            ->get();

        // Output linked
        $jobs = $jobs->map(function ($job) {

            if ($job->link_reusable_content_responsibilities) {
                $job->responsibilites = $job->reusable_content_responsibilities->content;
            }

            if ($job->link_reusable_content_qualifications) {
                $job->qualifications = $job->reusable_content_qualifications->content;
            }

            if ($job->link_reusable_content_incentives) {
                $job->incentives = $job->reusable_content_incentives->content;
            }

            return $job;

        });

        return $jobs->toArray();
    }

}
