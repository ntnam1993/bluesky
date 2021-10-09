@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('strings.backend.dashboard.title'))

@section('content')
    <div class="row">
        <div class="col-md-4">
            <div class="card w-100 h-100">
                <div class="card-header"><b>Membership plan</b></div>
                <div class="card-body d-block">
                    <p class="font-weight-bold">Upgrade and get:</p>
                    <ul class="green-list">
                        <li>No sales tax on purchases <a href="https://planetexpress.com/sales-tax/" title="Sales Tax" class="text-grey"><i class="fas fa-questionmark-circle" aria-hidden="true"></i></a></li>
                        <li>Consolidation feature for maximum saving</li>
                        <li>45 days of free storage</li>
                    </ul>
                    <div class="text-md-right mt-4">
                        <div class="absolute-button">
                            <a href="{{ route('admin.transaction.membership.create') }}" class="btn btn-success btn-sm text-uppercase">
                                <i class="fa fa-arrow-circle-up" aria-hidden="true"></i> Upgrade
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--col-->
        <div class="col-md-4">
            <div class="card w-100 h-100">
                <div class="card-header"><b>Deposit</b></div>
                <div class="card-body">
                    <p class="border-t pt-2"><span>Current Total:</span>
                        <span class="fs-115 font-weight-bold text-black float-md-right d-block">${{ $logged_in_user->primary_wallet }}</span>
                    </p>
                    <div class="text-md-right mt-4">
                        <div class="absolute-button">
                            <a href="{{ route('admin.transaction.index',['type' => 'deposit']) }}" class="btn btn-light btn-sm text-uppercase">
                                <i class="fas fa-search" aria-hidden="true"></i> Details
                            </a>
                            <a href="{{ route('admin.transaction.create') }}" class="btn btn-success btn-sm text-uppercase font-weight-bold">
                                <i class="fas fa-plus" aria-hidden="true"></i> @lang('buttons.backend.transaction.add')
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--col-->
    </div><!--row-->
@endsection
