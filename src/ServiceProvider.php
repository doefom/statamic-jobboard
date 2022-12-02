<?php

namespace Doefom\Jobboard;

use Doefom\Jobboard\Tags\JobSchema;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{

    protected $tags = [
        JobSchema::class
    ];

    protected $routes = [
        'cp' => __DIR__ . '/../routes/cp.php',
    ];

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
