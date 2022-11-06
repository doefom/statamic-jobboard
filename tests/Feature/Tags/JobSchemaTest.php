<?php

namespace Doefom\Jobboard\Tests\Feature\Tags;

use Carbon\Carbon;
use Doefom\Jobboard\Tags\JobSchema;
use Doefom\Jobboard\Tests\TestTraits\TestJobTrait;
use Tests\TestCase;
use Statamic\Facades\Entry;

class JobSchemaTest extends TestCase
{

    use TestJobTrait;

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

        $jobLocation = $this->fakeJobLocation([
            'title' => 'Berlin',
            'street' => 'Straße 01',
            'postalcode' => '16243',
            'state' => 'Baden-Württemberg',
            // 'country' => 'DE' // Note: Country is required to pass test
        ]);
        $jobLocation->save();

        $jobOrganization = $this->fakeJobOrganization();
        $jobOrganization->save();

        // Provide insufficient information
        $job = $this->fakeJob([
            'title' => "Software Developer (m/f/d)",
            'intro' => "<p>This is a super cool organization we have here.</p>",
            'responsibilities' => "<p>Responsibilities</p>",
            'qualifications' => "<p>Qualifications</p>",
            'incentives' => "<p>Incentives</p>",
            'outro' => "<p>The outro</p>",
            'is_full_remote' => false,
            'published_at' => Carbon::now()->format('Y-m-d'),
        ]);

        // Assert job without locations AND organization
        $this->assertFalse((new JobSchema())->requiredFieldsExist($job));

        $job->set('locations', [$jobLocation->id]);
        $job->save();

        // Assert job without organization
        $this->assertFalse((new JobSchema())->requiredFieldsExist($job));

        $job->set('organization', $jobOrganization->id);
        $job->save();

        // Assert job without enough job data provided
        $this->assertFalse((new JobSchema())->requiredFieldsExist($job));

        $jobLocation->delete();
        $jobOrganization->delete();
        $job->delete();
    }

    public function test_that_job_schema_tag_returns_true_when_enough_information()
    {
        $jobLocation = $this->fakeJobLocation();
        $jobLocation->save();

        $jobOrganization = $this->fakeJobOrganization();
        $jobOrganization->save();

        // Provide sufficient information
        $job = $this->fakeJob();

        $job->set('locations', [$jobLocation->id]);
        $job->set('organization', $jobOrganization->id);
        $job->save();

        // Assert job without enough job data provided
        $this->assertTrue((new JobSchema())->requiredFieldsExist($job));

        $jobLocation->delete();
        $jobOrganization->delete();
        $job->delete();
    }

}
