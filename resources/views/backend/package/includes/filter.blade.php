{{ html()->form('GET', route('admin.package.index'))->class('form-horizontal')->open() }}
    <input type="hidden" name="status" value="{{ Request::get('status') }}">
    <div class="row">
        <div class="col-3">
            <div class="form-group">
                <label>Name</label>
                <div class="form-group reset-input input-prepend input-group">
                    <input class="form-control" type="text" name="name" value="{{ Request::get('name') }}" placeholder="">
                    <span class="fa fa-fw fa-times reset" aria-hidden="true" onclick="resetInput(this)"></span>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="form-group">
                <label>Created At</label>
                <div class="form-group reset-input input-prepend input-group">
                    <input class="form-control date_range_full" type="text" name="created_at" value="{{ Request::get('created_at') }}" autocomplete="off">
                    <span class="fa fa-fw fa-times reset" aria-hidden="true" onclick="resetInput(this)"></span>
                </div>
            </div>
        </div>
        <div class="col-2">
            <div class="form-group">
                <label>Warehouse</label>
                {{ html()->select('warehouse_id')
                            ->options($data_warehouses)
                            ->value(Request::get('warehouse_id'))
                            ->placeholder(__('validation.attributes.backend.'.$module.'.warehouse'))
                            ->class('form-control')
                             }}
            </div>
        </div>
        <div class="col-2">
            <div class="form-group">
                <label style="visibility: hidden">Search</label>
                <button type="submit" class="btn btn-md btn-primary form-control"><i class="fas fa-search"></i> Search</button>
            </div>
        </div>
    </div>
{{ html()->closeModelForm() }}