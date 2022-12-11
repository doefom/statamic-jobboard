<?php

use Doefom\Jobboard\Http\Controllers\JobBoardApiController;
use Doefom\Jobboard\Http\Controllers\JobBoardController;
use Illuminate\Support\Facades\Route;

Route::prefix('jobboard')->name('jobboard.')->group(function () {
    Route::get('/jobs', [JobBoardController::class, 'index'])->name('jobs');
    Route::get('/jobs/create', [JobBoardController::class, 'create'])->name('jobs.create');
});

Route::prefix('jobboard/api')->name('jobboard.api.')->group(function () {
    Route::get('/jobs', [JobBoardApiController::class, 'index'])->name('jobs');
    Route::post('/jobs', [JobBoardApiController::class, 'create'])->name('jobs.create');
});


