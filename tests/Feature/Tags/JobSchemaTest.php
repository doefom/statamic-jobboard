<?php

namespace Doefom\Jobboard\Tests\Feature\Tags;

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

        $jobLocation = Entry::make()
            ->collection('jobs_locations')
            ->blueprint('jobs_locations')
            ->data([
                'title' => 'Berlin',
                'street' => 'Straße 01',
                'postalcode' => '16243',
                'state' => 'Baden-Württemberg',
                'country' => 'DE'
            ]);
        $jobLocation->save();

        $jobOrganization = Entry::make()
            ->collection('jobs_organizations')
            ->blueprint('jobs_organization')
            ->data([
                'title' => 'My Organization GmbH',
                'url' => 'https://emplify-software.de',
                'logo_url' => 'https://emplify-software.de/wp-content/uploads/2020/03/emplify_software_logo.png'
            ]);
        $jobOrganization->save();

        $job = $this->fakeJob();
        $job->set('locations', [$jobLocation->id]);
        $job->set('organization', $jobOrganization->id);
        $job->save();

        $this->assertFalse((new JobSchema())->requiredFieldsExist($job));

        $jobLocation->delete();
        $jobOrganization->delete();
        $job->delete();
    }

}
