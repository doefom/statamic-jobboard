<?php

use Doefom\Jobboard\Http\Controllers\JobBoardController;
use Illuminate\Support\Facades\Route;

Route::prefix('jobboard')->name('jobboard.')->group(function () {
    Route::get('/jobs', [JobBoardController::class, 'index']);
});
