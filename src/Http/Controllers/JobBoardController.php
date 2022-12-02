<?php

namespace Doefom\Jobboard\Http\Controllers;

use App\Http\Controllers\Controller;

class JobBoardController extends Controller
{

    public function index()
    {
        return view('jobboard::cp.jobs.index');
    }

}
