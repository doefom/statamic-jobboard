<?php

namespace Doefom\Jobboard\Contracts;

interface JobContract
{

    public function id($id = null);

    public function title($title = null);

    public function save(): self;

    public function delete(): void;

    public function toArray(): array;

}
