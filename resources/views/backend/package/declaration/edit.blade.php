{{ html()->modelForm($declaration, 'PATCH', route('admin.declaration.update',$declaration))->class('form-horizontal')->open() }}
<div class="modal-header">
    <h4 class="modal-title">@lang('labels.backend.package.'.$module.'.edit_item')</h4>
    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
</div>
<div class="modal-body">
    <div class="form-group">
        {{ html()->label(__('validation.attributes.backend.'.$module.'.description').'(<span class="text-danger">*</span>)')
            ->class('form-control-label')
            ->for('description') }}

        {{ html()->text('description')
                ->class('form-control')
                ->placeholder(__('validation.attributes.backend.'.$module.'.description'))
                ->required() }}
    </div><!--form-group-->

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.backend.'.$module.'.quantity').'(<span class="text-danger">*</span>)')
                    ->class('form-control-label')
                    ->for('quantity') }}

                {{ html()->text('quantity')
                        ->class('form-control')
                        ->placeholder(0)
                        ->required() }}
            </div><!--form-group-->
        </div>
        <div class="col-md-6">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.backend.'.$module.'.price').'(<span class="text-danger">*</span>)')
                    ->class('form-control-label')
                    ->for('price') }}

                {{ html()->text('price')
                        ->class('form-control')
                        ->placeholder(0)
                        ->required() }}
            </div><!--form-group-->
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.backend.'.$module.'.origin').'(<span class="text-danger">*</span>)')
                    ->class('form-control-label')
                    ->for('origin_id') }}

                {{ html()->select('origin_id',$countries)
                        ->class('form-control')
                        ->placeholder(__('validation.attributes.backend.'.$module.'.origin'))
                        ->required() }}
            </div><!--form-group-->
        </div>
        <div class="col-md-6">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.backend.'.$module.'.battery'))
                    ->class('form-control-label')
                    ->for('battery') }}

                {{ html()->select('battery',$batteries)
                        ->class('form-control')
                        ->required() }}
            </div><!--form-group-->
        </div>
    </div>

</div>
<div class="modal-footer">
    <button class="btn btn-secondary" type="button" data-dismiss="modal">{{ __('buttons.general.close') }}</button>
    {{ form_submit(__('buttons.general.crud.save_change'),'btn btn-success') }}
</div>
{{ html()->closeModelForm() }}