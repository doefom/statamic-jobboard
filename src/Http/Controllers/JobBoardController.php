<?php

namespace Doefom\Jobboard\Http\Controllers;

use App\Http\Controllers\Controller;
use Doefom\Jobboard\Facades\Job;
use Illuminate\Support\Str;
use Statamic\Facades\Blueprint;

class JobBoardController extends Controller
{

    public function index()
    {
        $job = Job::make();
        $job->title = Str::random();
        $job->save();

        $data = Job::all();
        dd($data);

        Blueprint::setDirectory(__DIR__ . '/../../../resources/blueprints');
        $blueprint = Blueprint::find('jobs/job');
        $fields = $blueprint->fields()->preProcess();

        return view('jobboard::cp.jobs.index', [
            'blueprint' => $blueprint->toPublishArray(),
            'values' => $fields->values(),
            'meta' => $fields->meta(),
        ]);
    }

}
