@extends('backend.layouts.app')

@section('title', __('labels.backend.'.$module.'.management') . ' | ' . __('labels.backend.'.$module.'.edit'))

@push('before-styles')
    <link media="all" type="text/css" rel="stylesheet" href="{{ url('plugin/dropzone/dropzone.css') }}">
    <style type="text/css">
        .dropzone {
            border: 2px dashed #0087F7;
            border-radius: 5px;
            background: white;
        }
        .dz-image img{
            width: 120px;
            height: 120px;
        }
    </style>
@endpush

@push('before-scripts')
    <script type="text/javascript" src="{{ url('plugin/dropzone/dropzone.js') }}"></script>
    <script type="text/javascript">
        Dropzone.options.myDropzone= {
            url: '{!! route('admin.photo.upload',['item_id' => $package->id, 'item_type' => get_class($package)]) !!}',
            headers: {
                'X-CSRF-TOKEN': '{!! csrf_token() !!}'
            },
            autoProcessQueue: true,
            uploadMultiple: true,
            parallelUploads: 5,
            //maxFiles: 10,
            maxFilesize: 5,
            acceptedFiles: ".jpeg,.jpg,.png,.gif",
            dictFileTooBig: 'Image is bigger than 5MB',
            dictDefaultMessage: 'Drop files here or Click to Upload',
            dictRemoveFile: 'Remove',
            addRemoveLinks: true,
            init: function() {

                var thisDropzone = this;
                var mockFile     = package_photos;

                for (var key in mockFile){
                    if (mockFile.hasOwnProperty(key)) {
                        thisDropzone.emit("addedfile", mockFile[key]);
                        thisDropzone.emit("thumbnail", mockFile[key], mockFile[key].url);
                        thisDropzone.emit("complete", mockFile[key]);
                        this.on("maxfilesexceeded", function(file){
                            this.removeFile(mockFile[key]);
                        });
                    }
                }
            },
            success: function(file, response){
                if (response.success) {
                    file.files = response.files;
                } else {
                    file.files = '';
                }
            },
            removedfile: function(file) {
                var name       = file.name;
                var files      = file.files;
                var removeLink = files[name];

                $.ajax({
                    type: 'POST',
                    url: removeLink,
                    headers: {
                        'X-CSRF-TOKEN': '{!! csrf_token() !!}'
                    },
                    //data: "photo_id=",
                    dataType: 'html',
                    success: function(data) {

                    }
                });

                var _ref;
                if (file.previewElement) {
                    if ((_ref = file.previewElement) != null) {
                        _ref.parentNode.removeChild(file.previewElement);
                    }
                }
                return this._updateMaxFilesReachedClass();
            },
            previewsContainer: null,
            hiddenInputContainer: "body",
        }
    </script>
@endpush

@section('content')
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        @lang('labels.backend.'.$module.'.management')
                        <small class="text-muted">@lang('labels.backend.'.$module.'.show')</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->
            <!--row-->

            <hr />

            <div class="row mt-4">
                <div class="col-md-4">
                    <div class="box-image box-image-grid grid_6">
                        <div class="light_gallery">
                            @foreach($package_photos as $key => $photo)
                                <div class="img {{ $key == 0 ? 'big' : 'small' }} {{ ($key > 5) ? 'hide':'' }} {{ ($key == 5) ? 'end':'' }}" data-src="{{ $photo['url_large'] }}">
                                    <img class="img-responsive" src="{{ $photo['url'] }}">
                                    @if($key == 5 && $total_photo > 0)
                                        <span class="other">+{{ $total_photo }}</span>
                                    @endif
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <table class="table table-striped table-bordered-none">
                        <tr>
                            <th>
                                <p class="m-0">Package:</p>
                            </th>
                            <td>
                                <p class="m-0">{{ ($package->name != '') ? $package->name:'?' }}</p>
                            </td>
                        </tr>
                        <tr class="active">
                            <th>
                                <p class="m-0">Type:</p>
                            </th>
                            <td>
                                <p class="m-0">{{ ($package->type != '') ? config('package.type.'.$package->type) : '?' }}</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p class="m-0">Weight:</p>
                            </th>
                            <td>
                                <p class="m-0">{{ ($package->weight != '') ? $package->weight:'' }}</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p class="m-0">Width:</p>
                            </th>
                            <td>
                                <p class="m-0">{{ ($package->width != '') ? $package->width : '?' }}</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p class="m-0">Height:</p>
                            </th>
                            <td>
                                <p class="m-0">{{ ($package->height != '') ? $package->height : '?' }}</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p class="m-0">Length:</p>
                            </th>
                            <td>
                                <p class="m-0">{{ ($package->length != '') ? $package->length : '?' }}</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p class="m-0">Dimensional Weight:</p>
                            </th>
                            <td>
                                <p class="m-0">{{ ($package->d_weight != '') ? $package->d_weight : '?' }}</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="col-md-4">
                    <table class="table table-striped table-bordered-none">
                        <tr>
                            <th>
                                <p class="m-0">Sender:</p>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <p class="m-0">{{ ($package->sender_address != '') ? $package->sender_address : '?' }}</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p class="m-0">Incomming tracking no:</p>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <p class="m-0">{{ ($package->tracking_no != '') ? $package->tracking_no : '?' }}</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p class="m-0">Note:</p>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <p class="m-0">{{ ($package->note != '') ? $package->note : '?' }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button class="btn btn-sm">Download</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div><!--row-->

            @if($package->type == 'consolidate')
                <div class="card border-secondary">
                <div class="card-header">Packages in consolidation</div>
                <div class="card-body">
                    <table class="table table-striped">
                        <tr class="table-primary">
                            <th>ID</th>
                            <th>No</th>
                            <th>Type of consolidation</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        @if($package->childrens)
                            @foreach($package->childrens as $children)
                                <tr>
                                    <td>
                                        <p class="m-0">{{ $children->id }}</p>
                                    </td>
                                    <td>
                                        <a href="{{ route('admin.'.$module.'.show', $children) }}">
                                            {{ $children->tracking_no }}
                                        </a>
                                    </td>
                                    <td>
                                        <p class="m-0">
                                            {{ config('package.consolidation.type.'.$children->consolidation_type) }}
                                        </p>
                                    </td>
                                    <td>
                                        @if($children->consolidation_status == 1)
                                            <p class="m-0 text-success">Consolidated</p>
                                        @else
                                            <p class="m-0 text-warning">Processing</p>
                                        @endif
                                    </td>
                                    <td>
                                        <a href="{{ route('admin.'.$module.'.show', $children) }}" data-toggle="tooltip" data-placement="top" title="@lang('buttons.general.crud.view')" class="btn btn-info btn-sm">
                                            <i class="fas fa-eye"></i>
                                        </a>
                                        @if($package->status != \App\Models\Package\Package::PACKAGE_SUCCESS)
                                            <a href="{{ route('admin.package.consolidate.remove',$children) }}"
                                               data-toggle="tooltip" data-placement="top"
                                               title="@lang('buttons.general.crud.cancel')"
                                               class="btn btn-danger btn-sm"
                                               name="confirm_item"
                                               data-trans-button-cancel="@lang('buttons.general.cancel')"
                                               data-trans-button-confirm="@lang('buttons.general.ok')"
                                               data-trans-title="@lang('strings.backend.general.are_you_sure')"
                                               data-trans-text="">
                                                <i class="fas fa-ban"></i>
                                            </a>
                                        @endif
                                    </td>
                                </tr>
                            @endforeach
                        @endif
                    </table>
                </div>
            </div>
            @endif

            <div class="card border-secondary">
                <div class="card-header">Requests</div>
                <div class="card-body">
                    <table class="table table-striped">
                        <tr class="table-primary">
                            <th>Request</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Last update</th>
                            <th>Action</th>
                        </tr>
                        @if($package->requests)
                            @foreach($package->requests as $request)
                                <tr>
                                    <td>
                                        <p class="m-0">{{ $request->content }}</p>
                                        @if($request->files)
                                            @foreach($request->files as $file)
                                                <p class="m-0">
                                                    <a class="c-message-attachment" href="#">
                                                        <i class="fa fa-link" aria-hidden="true"></i>
                                                        <em>{{ $file->original_name }}</em>
                                                    </a>
                                                </p>
                                            @endforeach
                                        @endif
                                    </td>
                                    <td>
                                        @if($request->priority)
                                            <span class="badge badge-warning">Priority</span>
                                        @else
                                            <span class="badge badge-secondary">Normal</span>
                                        @endif
                                    </td>
                                    <td>
                                        @if($request->status == \App\Models\SpecialRequest::DONE)
                                            <span class="badge badge-success">Done</span>
                                        @elseif($request->status == \App\Models\SpecialRequest::CANCEL)
                                            <span class="badge badge-danger"><i class="fa fa-times" aria-hidden="true"></i> Canceled</span>
                                        @else
                                            <span class="badge badge-info">New</span>
                                        @endif
                                    </td>
                                    <td>
                                        {{ $request->updated_at->diffForHumans() }}
                                    </td>
                                    <td>
                                        @if($request->status != \App\Models\SpecialRequest::CANCEL)
                                            <a href="{{ route('admin.request.cancel', $request) }}"
                                               name="confirm_item"
                                               data-trans-button-cancel="@lang('buttons.general.cancel')"
                                               data-trans-button-confirm="@lang('buttons.general.ok')"
                                               data-trans-title="@lang('strings.backend.general.are_you_sure')"
                                               class="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="@lang('buttons.general.crud.delete')">
                                                <i class="fa fa-ban" aria-hidden="true"></i> Cancel
                                            </a>
                                        @endif
                                    </td>
                                </tr>
                            @endforeach
                        @endif
                    </table>
                </div>
            </div>

            <div class="card border-secondary">
                <div class="card-header">
                    Personal notes for package <br>
                    <small><em>These notes are for your records only. If you want to place any request, please use buttons above.</em></small>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-5">
                            {{ html()->form('POST', route('admin.note.store'))->class('form-horizontal')->open() }}
                                <h4>New note</h4>
                                <div class="form-group">
                                    {{ html()->label(__('validation.attributes.backend.'.$module.'.request.content').'(<span class="text-danger">*</span>)')
                                        ->class('form-control-label')
                                        ->for('content') }}

                                    {{ html()->textarea('content')
                                            ->class('form-control')
                                            ->placeholder(__('validation.attributes.backend.'.$module.'.request.content'))
                                            ->required() }}
                                </div><!--form-group-->
                            {{ html()->hidden('item_id',$package->id) }}
                            {{ html()->hidden('item_type',get_class($package)) }}
                            {{ form_submit(__('buttons.general.crud.create')) }}
                            {{ html()->closeModelForm() }}
                        </div>
                        <div class="col-md-7">
                            <table class="table table-striped">
                                <tr class="table-primary">
                                    <th>Note</th>
                                    <th>From</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                                @if($package->notes)
                                    @foreach($package->notes as $note)
                                        <tr>
                                            <td>
                                                <p class="m-0">{{ $note->content }}</p>
                                            </td>
                                            <td>
                                                @if($note->creator)
                                                    {{ $note->creator->name }}
                                                @endif
                                            </td>
                                            <td>{{ $note->updated_at->diffForHumans() }}</td>
                                            <td>
                                                <a href="{{ route('admin.note.destroy', $note) }}"
                                                   data-method="delete"
                                                   data-trans-button-cancel="@lang('buttons.general.cancel')"
                                                   data-trans-button-confirm="@lang('buttons.general.crud.delete')"
                                                   data-trans-title="@lang('strings.backend.general.are_you_sure')"
                                                   class="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="@lang('buttons.general.crud.delete')">
                                                    <i class="fas fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    @endforeach
                                @endif
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card border-secondary">
                <div class="card-header">
                    Upload Photo
                </div>
                <div class="card-body">
                    <div class="dropzone" id="my-dropzone"></div>
                </div>
            </div>

        </div><!--card-body-->

    </div><!--card-->
@endsection
