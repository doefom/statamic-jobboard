<?php

namespace Doefom\Jobboard\Contracts;

use Doefom\Jobboard\Builders\JobQueryBuilder;
use Statamic\Data\DataCollection;

interface JobRepositoryContract
{

    public function make(): JobContract;

    public function query(): JobQueryBuilder;

    public function all(): DataCollection;

    public function find($id): ?JobContract;

    public function save(JobContract $job): void;

    public function delete(JobContract $job): void;

}
