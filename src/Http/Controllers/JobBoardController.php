<?php

namespace Doefom\Jobboard\Http\Controllers;

use App\Http\Controllers\Controller;
use Statamic\Facades\Blueprint;

class JobBoardController extends Controller
{

    public function index()
    {

        Blueprint::setDirectory(__DIR__ . '/../../../resources/blueprints');
        $blueprint = Blueprint::find('jobs/job');
        $fields = $blueprint->fields()->preProcess();

        return view('jobboard::cp.jobs.index', [
            'blueprint' => $blueprint->toPublishArray(),
            'values' => $fields->values(),
            'meta' => $fields->meta(),
        ]);

    }

    public function create()
    {

        Blueprint::setDirectory(__DIR__ . '/../../../resources/blueprints');
        $blueprint = Blueprint::find('jobs/job');
        $fields = $blueprint->fields()->preProcess();

        return view('jobboard::cp.jobs.create', [
            'blueprint' => $blueprint->toPublishArray(),
            'values' => $fields->values(),
            'meta' => $fields->meta(),
        ]);

    }

}
