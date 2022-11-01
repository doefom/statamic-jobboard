<?php

namespace Doefom\Jobboard\Tests\TestTraits;

use Carbon\Carbon;
use Statamic\Facades\Entry;

trait TestJobTrait
{

    /**
     * @return mixed
     */
    public function fakeJob(): mixed
    {
        return Entry::make()
            ->collection('jobs')
            ->blueprint('job')
            ->data([
                'title' => "Software Developer (m/f/d)",
                'intro' => "<p>This is a super cool organization we have here.</p>",
                'responsibilities' => "<p>Responsibilities</p>",
                'qualifications' => "<p>Qualifications</p>",
                'incentives' => "<p>Incentives</p>",
                'outro' => "<p>The outro</p>",
                'is_full_remote' => false,
                'published_at' => Carbon::now()->format('Y-m-d'),
            ]);
    }

}
