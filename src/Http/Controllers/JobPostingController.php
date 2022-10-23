<?php

namespace Doefom\Jobboard\Http\Controllers;

class JobPostingController
{

    public function index()
    {
        return view('jobboard::index', ['title' => 'Jobboard']);
    }

}
