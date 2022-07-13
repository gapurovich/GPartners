@extends('layouts.app')

@section('content')
    <div id="app">
        <header-component></header-component>
        <example-component></example-component>
        <router-view></router-view>
    </div>
@endsection
