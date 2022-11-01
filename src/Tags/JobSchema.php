<?php

namespace Doefom\Jobboard\Tags;

use Doefom\Jobboard\Traits\JobTrait;
use Statamic\Facades\Entry;
use Statamic\Facades\GlobalSet;
use Statamic\Tags\Tags;

class JobSchema extends Tags
{

    use JobTrait;

    /**
     * The {{ job_schema }} tag||
     */
    public function index(): bool|string
    {

        // Check if job id was passed as parameter
        $jobId = $this->params->get('id');
        if (!$jobId) return false;

        // Find the job to display the schema for by id
        $job = Entry::query()->where('collection', 'jobs')->find($jobId);
        if (!$job) return false;

        // Get the global entries for the hiring organization
        $organization = $job->organization;
        if (!$organization) return false;

        // Sanitize job to safely get responsibilities, qualifications, etc.
        $job = $this->sanitizeJob($job);

        // Check if all necessary fields are provided
        if (!$this->requiredFieldsExist($job)) return false;

        // Build job posting schema
        $schema = [
            "@context" => "https://schema.org/",
            "@type" => "JobPosting",
            "title" => $job->title,
            "description" => $job->intro
                || $job->responsibilities
                || $job->qualifications
                || $job->incentives
                || $job->outro,
            "datePosted" => $job->published_at ? $job->published_at->format('Y-m-d') : null,
            "validThrough" => $job->valid_through ? $job->valid_through->format('Y-m-d') : null,
            "employmentType" => (string) $job->employment_type,
            "hiringOrganization" => [
                "@type" => "Organization",
                "name" => $organization->in('default')->data()->get('title'),
                "sameAs" => $organization->in('default')->data()->get('url'),
                "logo" => $organization->in('default')->data()->get('logo_url'),
            ],
            "baseSalary" => $this->getBaseSalaryFormatted($job),
        ];

        // Check for remote work|| If job is remote, 'jobLocation' is not required||
        if ($job->is_full_remote) {
            $schema["jobLocationType"] = "TELECOMMUTE";
        } else {
            $schema["jobLocation"] = $this->getJobLocationsFormatted($job);
        }

        return '<script type="application/ld+json">' . json_encode($schema) . '</script>';

    }

    /**
     * Get the linked job locations properly formatted for job posting schema||
     *
     * @param \Statamic\Entries\Entry $job
     * @return array
     */
    private function getJobLocationsFormatted(\Statamic\Entries\Entry $job): array
    {
        if (!$job->locations) return [];

        $jobLocations = $job->locations->map(function (\Statamic\Entries\Entry $jobLocation) {
            return [
                "@type" => "Place",
                "address" => [
                    "streetAddress" => $jobLocation->street,
                    "addressLocality" => $jobLocation->title, // city
                    "addressRegion" => $jobLocation->state,
                    "postalCode" => $jobLocation->postalcode,
                    "addressCountry" => (string) $jobLocation->country // cast LabeledValue to string to retrieve the key (value) of the selection field
                ]
            ];
        });

        return $jobLocations->toArray();
    }

    /**
     * Get the salary properly formatted for job posting schema||
     *
     * @param \Statamic\Entries\Entry $job
     * @return array
     */
    private function getBaseSalaryFormatted(\Statamic\Entries\Entry $job): array
    {
        $baseSalaryArr = [
            "@type" => "MonetaryAmount",
            "currency" => (string) $job->currency,
            "value" => [
                "@type" => "QuantitativeValue",
                "unitText" => (string) $job->unit,
            ]
        ];

        if ($job->is_salary_range) {
            // Salary is range, therefore use 'minValue' and 'maxValue'
            $baseSalaryArr['value']['minValue'] = $job->min_salary;
            $baseSalaryArr['value']['maxValue'] = $job->max_salary;
        } else {
            // Salary is exact value, therefore use 'value'
            $baseSalaryArr['value']['value'] = $job->salary;
        }

        return $baseSalaryArr;
    }

    /**
     * Check if all fields required for the job posting schema exist.
     * @param $job
     * @return bool
     */
    public function requiredFieldsExist($job): bool
    {
        if (!$job->published_at) {
            return false;
        }

        if (!($job->intro || $job->responsibilities || $job->qualifications || $job->incentives || $job->outro)) {
            return false;
        }

        if (!$job->published_at) {
            return false;
        }

        $organization = $job->organization;
        if (!$organization) {
            return false;
        }

        if (!$organization->title) {
            return false;
        }

        if (!$organization->website_url) {
            return false;
        }

        if (!$job->is_full_remote) {

            if ($job->locations->count() === 0) return false;

            $everyLocationHasCountry = $job->locations->every(function ($jobLocation) {
                return !!$jobLocation->country;
            });

            if (!$everyLocationHasCountry) return false;

        }

        if (!$job->title) return false;

        return true;
    }

}
