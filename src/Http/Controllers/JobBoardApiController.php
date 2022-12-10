<?php

namespace Doefom\Jobboard\Http\Controllers;

use App\Http\Controllers\Controller;
use Doefom\Jobboard\Facades\Job;
use Illuminate\Http\Request;

class JobBoardApiController extends Controller
{

    public function index(Request $request)
    {
        $jobs = Job::all();
        return $jobs;
    }

}
