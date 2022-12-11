@extends('statamic::layout')

@section('title', 'Create Job')

@section('content')

    <job-create
        title="Create Job"
        action="{{ cp_route('jobboard.api.jobs.create') }}"
        :blueprint='@json($blueprint)'
        :meta='@json($meta)'
        :values='@json($values)'
    />

@endsection

<script>
</script>
