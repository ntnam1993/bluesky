{{ html()->form('POST', route('admin.membership.attribute.store',$membership))->class('form-horizontal')->open() }}
    <div class="modal-header">
        <h4 class="modal-title">@lang('labels.backend.membership.attributes.create')</h4>
        <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
    </div>
    <div class="modal-body">
        <div class="form-group">
            {{ html()->label(__('validation.attributes.backend.membership.name'))
                ->class('form-control-label')
                ->for('name') }}
            {{ html()->text('name')
                    ->class('form-control')
                    ->placeholder(__('validation.attributes.backend.membership.name'))
                    ->required() }}
        </div><!--form-group-->
    </div>
    <div class="modal-footer">
        <button class="btn btn-secondary" type="button" data-dismiss="modal">{{ __('buttons.general.close') }}</button>
        {{ form_submit(__('buttons.general.crud.save'),'btn btn-success') }}
    </div>
{{ html()->form()->close() }}