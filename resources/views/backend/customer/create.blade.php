@extends('backend.layouts.app')

@section('title', __('labels.backend.'.$module.'.management') . ' | ' . __('labels.backend.'.$module.'.select_address'))

@section('content')

    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        @lang('labels.backend.'.$module.'.management')
                        <small class="text-muted">@lang('labels.backend.'.$module.'.create')</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->
            <!--row-->

            <hr />

            <div class="row mt-4">
                <div class="col-md-7">
                    @include('backend.customer.includes.in_form_create')
                </div>
            </div>
        </div><!--card-body-->
    </div><!--card-->

@endsection