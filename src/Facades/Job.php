<?php

namespace Doefom\Jobboard\Facades;

use Doefom\Jobboard\Repositories\JobRepository;
use Statamic\Contracts\Entries\EntryRepository;

class Job extends \Illuminate\Support\Facades\Facade
{

    protected static function getFacadeAccessor()
    {

        return JobRepository::class;

    }

}
