<?php

namespace Doefom\Jobboard\Tests\Tags;

use Doefom\Jobboard\Tags\JobSchema;
use Tests\TestCase;
use Statamic\Facades\Entry;

class JobSchemaTest extends TestCase
{

    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_that_true_is_true()
    {
        $this->assertTrue(true);
    }

    public function test_that_job_schema_tag_returns_false_when_not_enough_information()
    {

        $jobLocation = Entry::make()->collection('jobs_locations')->data([
            'id' => '12345',
            'city' => 'Berlin',
            'street' => 'Straße 01',
            'postalcode' => '16243',
            'state' => 'Baden-Württemberg',
            'country' => 'DE'
        ]);

        $job = Entry::make()->collection('jobs')->data([
            'id' => '123',
            'title' => "Software Developer (m/f/d)",
            'intro' => "<p>This is a super cool organization we have here.</p>",
            'responsibilities' => "<p>Responsibilities</p>",
            'qualifications' => "<p>Qualifications</p>",
            'incentives' => "<p>Incentives</p>",
            'outro' => "<p>The outro</p>",
            'is_full_remote' => false,
            'job_locations' => [$jobLocation->id],
        ]);

//        $this->assertTrue((new JobSchema())->requiredFieldsExist($job, $organization));

    }

}
