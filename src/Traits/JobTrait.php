<?php

namespace Doefom\Jobboard\Traits;

use Statamic\Entries\Entry;

trait JobTrait
{

    public function sanitizeJob(Entry $job): Entry
    {

        if ($job->link_reusable_content_intro) {
            $job->intro = $job->reusable_content_intro->content;
        }

        if ($job->link_reusable_content_responsibilities) {
            $job->responsibilites = $job->reusable_content_responsibilities->content;
        }

        if ($job->link_reusable_content_qualifications) {
            $job->qualifications = $job->reusable_content_qualifications->content;
        }

        if ($job->link_reusable_content_incentives) {
            $job->incentives = $job->reusable_content_incentives->content;
        }

        if ($job->link_reusable_content_outro) {
            $job->outro = $job->reusable_content_outro->content;
        }

        return $job;

    }

}
