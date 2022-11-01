<?php

namespace Doefom\Jobboard;

use Illuminate\Support\Facades\Artisan;
use Statamic\Facades\CP\Nav;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{

    protected $tags = [
        \Doefom\Jobboard\Tags\JobSchema::class
    ];

    public function bootAddon()
    {
        parent::bootAddon();

        $this->publishes([
            __DIR__ . '/../content/collections' => base_path('content/collections'),
            __DIR__ . '/../resources/blueprints' => resource_path('blueprints'),
        ], 'doefom/jobboard');

        Statamic::afterInstalled(function ($command) {
            $command->call('vendor:publish', ['--tag' => 'doefom/jobboard']);
        });
    }

}
