<?php

namespace Doefom\Jobboard;

use Statamic\Facades\CP\Nav;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{

    protected $tags = [
        \Doefom\Jobboard\Tags\Jobs::class
    ];

    public function bootAddon()
    {

        $this->publishes([
            __DIR__ . '/../content/collections' => base_path('content/collections'),
            __DIR__ . '/../resources/blueprints' => resource_path('blueprints'),
        ]);

    }

}
