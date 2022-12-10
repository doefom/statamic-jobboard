<?php

namespace Doefom\Jobboard;

use Doefom\Jobboard\Repositories\JobRepository;
use Doefom\Jobboard\Stores\JobsStore;
use Doefom\Jobboard\Tags\JobSchema;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Stache\Stache;

class ServiceProvider extends AddonServiceProvider
{

    protected $tags = [
        JobSchema::class
    ];

    protected $routes = [
        'cp' => __DIR__ . '/../routes/cp.php',
    ];

    protected $scripts = [
        __DIR__ . '/../dist/js/cp.js',
    ];

    public function bootAddon()
    {

        $jobsStore = new JobsStore();
        $jobsStore->directory(config('jobboard.jobs')); // , base_path('content/jobs')
        app(Stache::class)->registerStore($jobsStore);

    }

//    public function bootAddon()
//    {
//        parent::bootAddon();
//
//        $this->publishes([
//            __DIR__ . '/../content/collections' => base_path('content/collections'),
//            __DIR__ . '/../resources/blueprints' => resource_path('blueprints'),
//        ], 'doefom/jobboard');
//
//        Statamic::afterInstalled(function ($command) {
//            $command->call('vendor:publish', ['--tag' => 'doefom/jobboard']);
//        });
//    }

}
