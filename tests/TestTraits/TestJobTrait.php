<?php

namespace Doefom\Jobboard\Tests\TestTraits;

use Carbon\Carbon;
use Statamic\Facades\Entry;

trait TestJobTrait
{

    /**
     * Create a fake job for testing purpose.
     * @param array $data Provide optional data for the job if the defaults don't match the use case.
     * @return mixed
     */
    public function fakeJob(array $data = null): mixed
    {
        if (!$data) {
            // Set defaults
            $data = [
                'title' => "Software Developer (m/f/d)",
                'intro' => "<p>This is a super cool organization we have here.</p>",
                'responsibilities' => "<p>Responsibilities</p>",
                'qualifications' => "<p>Qualifications</p>",
                'incentives' => "<p>Incentives</p>",
                'outro' => "<p>The outro</p>",
                'is_full_remote' => false,
                'employment_type' => 'FULL_TIME',
                'published_at' => Carbon::now()->format('Y-m-d'),
                'valid_through' => Carbon::now()->addMonths(3)->format('Y-m-d'),
                'currency' => 'EUR',
                'unit' => 'YEAR',
                'salary' => 48000,
            ];
        }

        return Entry::make()
            ->collection('jobs')
            ->blueprint('job')
            ->data($data);
    }

    /**
     * Create a fake organization for testing purpose.
     * @param array|null $data Provide optional data for the job organization if the defaults don't match the use case.
     * @return mixed
     */
    public function fakeJobOrganization(array $data = null): mixed
    {
        if (!$data) {
            // Set defaults
            $data = [
                'title' => 'My Organization GmbH',
                'website_url' => 'https://emplify-software.de',
                'logo_url' => 'https://emplify-software.de/wp-content/uploads/2020/03/emplify_software_logo.png'
            ];
        }

        return Entry::make()
            ->collection('jobs_organizations')
            ->blueprint('jobs_organization')
            ->data($data);
    }

    public function fakeJobLocation(array $data = null): mixed
    {
        if (!$data) {
            // Set defaults
            $data = [
                'title' => 'Berlin',
                'street' => 'Straße 01',
                'postalcode' => '16243',
                'state' => 'Baden-Württemberg',
                'country' => 'DE'
            ];
        }

        return Entry::make()
            ->collection('jobs_locations')
            ->blueprint('jobs_locations')
            ->data($data);
    }

}
