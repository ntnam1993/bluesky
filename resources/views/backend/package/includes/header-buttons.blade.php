<div class="btn-toolbar float-right" role="toolbar" aria-label="@lang('labels.general.toolbar_btn_groups')">
    <button data-href="{{ route('admin.package.consolidate.create') }}"
       onclick="Consolidate(this)"
       class="btn btn-info ml-1"
       data-toggle="tooltip"
       title="@lang('labels.backend.package.consolidate')"
       data-consolidation-id="{{ Request::get('consolidation_id') }}"
       data-trans-button-cancel="@lang('buttons.general.cancel')"
       data-trans-button-confirm="@lang('buttons.general.confirm')"
       data-trans-title="@lang('strings.backend.package.consolidate.are_you_sure')"
       data-trans-empty="@lang('strings.backend.package.consolidate.empty')">
        <i class="fa fa-archive mr-1" aria-hidden="true"></i>@lang('labels.backend.package.consolidate')
    </button>
    <a href="{{ route('admin.'.$module.'.create') }}" class="btn btn-success ml-1" data-toggle="tooltip" title="@lang('labels.general.create_new')">
        <i class="fas fa-plus-circle mr-1"></i> @lang('labels.general.create_new')
    </a>
</div>
