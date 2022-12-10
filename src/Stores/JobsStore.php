<?php

namespace Doefom\Jobboard\Stores;

use Doefom\Jobboard\Facades\Job;
use Statamic\Facades\YAML;
use Statamic\Stache\Stores\BasicStore;

class JobsStore extends BasicStore
{

    public function key(): string
    {
        return 'jobs';
    }

    public function makeItemFromFile($path, $contents)
    {
        $data = YAML::file($path)->parse($contents);

        if (!$id = array_pull($data, 'id')) {
            $idGenerated = true;
            $id = app('stache')->generateId();
        }

        $job = Job::make()
            ->id($id)
            ->title(array_pull($data, 'title'));

        if (isset($idGenerated)) {
            $job->save();
        }

        return $job;
    }

}
