<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});
Route::get('/co-founders', function () {
    return view('cofounders');
});
Route::get('/community', function () {
    return view('community');
});
Route::get('/rooms', function () {
    return view('rooms');
});
Route::get('/jobs', function () {
    return view('jobs');
});


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
