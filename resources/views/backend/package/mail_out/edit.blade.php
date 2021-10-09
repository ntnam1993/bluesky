{{ html()->modelForm($mail_out, 'PATCH', route('admin.'.$module.'.mail_out.update', ['id' => $package->id,'mail_out_id' => $mail_out->id]))->class('form-horizontal')->open() }}
    <div class="modal-header">
        <h4 class="modal-title">@lang('labels.backend.'.$module.'.edit_item')</h4>
        <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
    </div>
    <div class="modal-body">
        <div class="form-group">
            {{ html()->label(__('validation.attributes.backend.'.$module.'.description'))
                ->class('form-control-label')
                ->for('description') }}

            {{ html()->text('description')
                    ->class('form-control')
                    ->placeholder(__('validation.attributes.backend.'.$module.'.description'))
                    ->required() }}
        </div><!--form-group-->

        <div class="form-group">
            {{ html()->label(__('validation.attributes.backend.'.$module.'.quantity'))
                ->class('form-control-label')
                ->for('quantity') }}

            {{ html()->text('quantity')
                    ->class('form-control')
                    ->placeholder(0)
                    ->required() }}
        </div><!--form-group-->

        <div class="form-group">
            {{ html()->label(__('validation.attributes.backend.'.$module.'.size'))
                ->class('form-control-label')
                }}
            <div class="form-row">
                <div class="col">
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.weight')</div>
                        </div>
                        {{ html()->text('weight')->placeholder('1 or 1.1')->class('form-control') }}
                    </div>
                </div>
                <div class="col">
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.width')</div>
                        </div>
                        {{ html()->text('width')->placeholder('1 or 1.1')->class('form-control') }}
                    </div>
                </div>
                <div class="col">
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.height')</div>
                        </div>
                        {{ html()->text('height')->placeholder('1 or 1.1')->class('form-control')}}
                    </div>
                </div>
                <div class="col">
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.length')</div>
                        </div>
                        {{ html()->text('length')->placeholder('1 or 1.1')->class('form-control')}}
                    </div>
                </div>
            </div>
        </div>

        <div class="form-group">
            {{ html()->label(__('validation.attributes.backend.'.$module.'.note'))
                ->class('form-control-label')
                ->for('note') }}

            {{ html()->textarea('note')
                    ->class('form-control')
                    ->placeholder(__('validation.attributes.backend.'.$module.'.note'))
                    }}
        </div><!--form-group-->
    </div>
    <div class="modal-footer">
        <button class="btn btn-secondary" type="button" data-dismiss="modal">{{ __('buttons.general.close') }}</button>
        {{ form_submit(__('buttons.general.crud.save_change'),'btn btn-success') }}
    </div>
{{ html()->closeModelForm() }}
