<?php

namespace Doefom\Jobboard\Tags;

use Statamic\Facades\Entry;
use Statamic\Tags\Tags;

class Jobs extends Tags
{

    protected static $handle = 'jobs';

    /**
     * The {{ jobs }} tag.
     *
     * @return string|array
     */
    public function index(): array|string
    {
        return Entry::query()->where('collection', 'jobs')->get()->toArray();
    }

}
