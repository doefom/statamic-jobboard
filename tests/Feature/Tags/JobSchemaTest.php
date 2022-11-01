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
            'city' => 'Berlin',
            'street' => 'Straße 01',
            'postalcode' => '16243',
            'state' => 'Baden-Württemberg',
            'country' => 'DE'
        ]);
        $jobLocation->save();

        $jobOrganization = Entry::make()->collection('jobs_organizations')->data([
            'title' => 'My Organization GmbH',
            'url' => 'https://emplify-software.de',
            'logo_url' => 'https://emplify-software.de/wp-content/uploads/2020/03/emplify_software_logo.png'
        ]);
        $jobOrganization->save();

        $job = Entry::make()->collection('jobs')->data([
            'title' => "Software Developer (m/f/d)",
            'intro' => "<p>This is a super cool organization we have here.</p>",
            'responsibilities' => "<p>Responsibilities</p>",
            'qualifications' => "<p>Qualifications</p>",
            'incentives' => "<p>Incentives</p>",
            'outro' => "<p>The outro</p>",
            'is_full_remote' => false,
            'locations' => [$jobLocation->id],
            'organization' => $jobOrganization->id
        ]);
        $job->save();

        $this->assertFalse((new JobSchema())->requiredFieldsExist($job));

        $jobLocation->delete();
        $jobOrganization->delete();
        $job->delete();
    }

}
