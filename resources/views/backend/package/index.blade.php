@extends('backend.layouts.app')

@section('title', app_name() . ' | '. __('labels.backend.'.$module.'.management'))

@push('after-scripts')
    <script type="text/javascript">
        function Consolidate(obj)
        {
            var link      = $(obj);
            const cancel  = (link.attr('data-trans-button-cancel')) ? link.attr('data-trans-button-cancel') : 'Cancel';
            const confirm = (link.attr('data-trans-button-confirm')) ? link.attr('data-trans-button-confirm') : 'Yes, delete';
            const title   = (link.attr('data-trans-title')) ? link.attr('data-trans-title') : 'Are you sure you want to Consolidate?';
            const empty   = (link.attr('data-trans-empty')) ? link.attr('data-trans-empty') : '';
            const text    = '';
            const consolidation_id = link.attr('data-consolidation-id');

            try {

                var items = [];
                $(".check").each(function (index,item) {
                    if (item.checked) {
                        items.push(item.value);
                    }
                });

                if (items.length < 1) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Message',
                        text: empty
                    });
                } else {

                    var values = items.join(',');

                    Swal.mixin({
                        customClass: {
                            confirmButton: 'btn btn-success',
                            cancelButton: 'btn btn-danger mr-2'
                        },
                        buttonsStyling: false
                    }).fire({
                        title: title,
                        text: text,
                        showCancelButton: true,
                        confirmButtonText: confirm,
                        cancelButtonText: cancel,
                        icon: 'info',
                        reverseButtons: true
                    }).then((result) => {
                        result.value && window.location.assign(link.attr('data-href')+'?items='+values+'&consolidation_id='+consolidation_id);
                    });

                }

            } catch (e) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: e
                });
            }
        }
    </script>
@endpush

@section('content')

    <div class="card">
        <div class="card-body">
            @include('backend.package.includes.filter')
        </div>
    </div>

    <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
            <a class="nav-link text-uppercase {{ (Request::get('status') == '') ? 'active':'' }}" href="{{ route('admin.package.index',['status' => '']) }}">
                ALL Package ({{ Arr::get($count_tab,'all_package') }})
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-uppercase {{ (Request::get('status') == \App\Models\Package\Package::PACKAGE_NEW && Request::get('status') != '') ? 'active':'' }}" href="{{ route('admin.package.index',['status' => \App\Models\Package\Package::PACKAGE_NEW]) }}">
                New Package ({{ Arr::get($count_tab,'count_new') }})
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-uppercase {{ (Request::get('status') == \App\Models\Package\Package::PACKAGE_PROCESSING) ? 'active':'' }}" href="{{ route('admin.package.index',['status' => \App\Models\Package\Package::PACKAGE_PROCESSING]) }}">
                Mail Out In Process ({{ Arr::get($count_tab,'count_mail_out') }})
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-uppercase {{ (Request::get('status') == \App\Models\Package\Package::PACKAGE_SUCCESS) ? 'active':'' }}" href="{{ route('admin.package.index',['status' => \App\Models\Package\Package::PACKAGE_SUCCESS]) }}">
                Sent packages ({{ Arr::get($count_tab,'count_sent') }})
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-uppercase {{ (Request::get('status') == \App\Models\Package\Package::PACKAGE_EXPECTED) ? 'active':'' }}" href="{{ route('admin.package.index',['status' => \App\Models\Package\Package::PACKAGE_EXPECTED]) }}">
                Expected packages ({{ Arr::get($count_tab,'count_expected') }})
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-uppercase {{ (Request::get('status') == \App\Models\Package\Package::PACKAGE_ERROR) ? 'active':'' }}" href="{{ route('admin.package.index',['status' => \App\Models\Package\Package::PACKAGE_ERROR]) }}">
                Error Package ({{ Arr::get($count_tab,'count_error') }})
            </a>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane active show" role="tabpanel">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-5">
                            <h4 class="card-title mb-0">
                                @lang('labels.backend.'.$module.'.management')
                            </h4>
                        </div><!--col-->

                        <div class="col-sm-7 pull-right">
                            @include('backend.'.$module.'.includes.header-buttons')
                        </div><!--col-->
                    </div><!--row-->

                    <div class="row mt-4">
                        <div class="col">
                            @if(Request::get('consolidation_id') > 0)
                                <p class="alert alert-warning alert-sm">Chose Package Add Consolidation</p>
                            @endif
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" id="check_all" placeholder="">
                                        </th>
                                        <th>@lang('labels.backend.'.$module.'.table.id')</th>
                                        <th>@lang('labels.backend.'.$module.'.table.photo')</th>
                                        <th>@lang('labels.backend.'.$module.'.table.info')</th>
                                        <th>@lang('labels.backend.'.$module.'.table.request')</th>
                                        <th>@lang('labels.backend.'.$module.'.table.quantity')</th>
                                        <th>@lang('labels.backend.'.$module.'.table.updated_at')</th>
                                        <th style="width: 80px">@lang('labels.general.actions')</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @if(!empty($packages))
                                        @foreach($packages as $package)
                                            <tr>
                                                <td>
                                                    @if($package->type != 'consolidate')
                                                        <input type="checkbox" class="check" name="check[]" value="{{ $package->id }}" placeholder="check">
                                                    @endif
                                                </td>
                                                <td>{{ $package->id }}</td>
                                                <td>
                                                    @if($package->photos)
                                                        <div class="light_gallery thumbnail-photo-small">
                                                            @foreach ($package->photos as $photo)
                                                                <a href="{{ $photo->showPicture('large') }}">
                                                                    <img style="width: 50px" class="img-responsive" src="{{ $photo->showPicture() }}">
                                                                </a>
                                                            @endforeach
                                                        </div>
                                                    @endif
                                                </td>
                                                <td>
                                                    <p class="m-0">
                                                        <em>Warehouse:</em>
                                                        @if($package->warehouse)
                                                            <b>{{ $package->warehouse->name }}</b>
                                                        @endif
                                                    </p>
                                                    <p class="m-0"><em>Type:</em> <b>{{ config('package.type.'.$package->type) }}</b></p>
                                                    <p class="m-0"><em>No:</em> {{ $package->tracking_no }}</p>
                                                    <p class="m-0"><em>Weight:</em> <b>{{ $package->weight }}</b></p>
                                                    <p><em>Size:</em> <b>{{ $package->length }} x {{ $package->width }} x {{ $package->height }}</b></p>
                                                    @if($package->status == \App\Models\Package\Package::PACKAGE_ERROR)
                                                        <p class="alert alert-danger alert-sm"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Package Error!</p>
                                                    @endif
                                                    @if($package->type == 'consolidate')
                                                        <p class="alert alert-info alert-sm">Package consolidated</p>
                                                    @endif
                                                </td>
                                                <td></td>
                                                <td>
                                                    <p class="m-0">
                                                        <span class="text-success">0/</span><span class="text-danger">{{ $package->quantity }}</span>
                                                    </p>
                                                </td>
                                                <td>{{ $package->updated_at->diffForHumans() }}</td>
                                                <td class="btn-td">
                                                    @include('backend.package.includes.process', ['package' => $package])
                                                </td>
                                            </tr>
                                        @endforeach
                                    @endif
                                    </tbody>
                                </table>
                            </div>
                        </div><!--col-->
                    </div><!--row-->
                    @if(!empty($packages))
                        <div class="row">
                            <div class="col-7">
                                <div class="float-left">
                                    {!! $packages->total() !!} {{ trans_choice('labels.backend.'.$module.'.table.total', $packages->total()) }}
                                </div>
                            </div><!--col-->

                            <div class="col-5">
                                <div class="float-right">
                                    {!! $packages->render() !!}
                                </div>
                            </div><!--col-->
                        </div><!--row-->
                    @endif
                </div><!--card-body-->
            </div><!--card-->
        </div>
    </div>
@endsection
