{{ html()->form('POST', route('admin.customer.store'))->open() }}
    <div class="form-group">
        {{ html()->label(__('validation.attributes.backend.customer.name').'(<span class="text-danger">*</span>)')
            ->class('form-control-label')
            ->for('name') }}

        {{ html()->text('name')
                ->class('form-control')
                ->placeholder(__('validation.attributes.backend.customer.name'))
                ->required() }}
    </div><!--form-group-->

    <div class="form-group">
        {{ html()->label(__('validation.attributes.backend.customer.company_name'))
            ->class('form-control-label')
            ->for('company_name') }}

        {{ html()->text('company_name')
                ->class('form-control')
                ->placeholder(__('validation.attributes.backend.customer.company_name'))
                }}
    </div><!--form-group-->

    <div class="row">
        <div class="col">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.backend.customer.first_name'))
                    ->class('form-control-label')
                    ->for('first_name') }}

                {{ html()->text('first_name')
                        ->class('form-control')
                        ->placeholder(__('validation.attributes.backend.customer.first_name'))
                        }}
            </div><!--form-group-->
        </div>
        <div class="col">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.backend.customer.last_name'))
                    ->class('form-control-label')
                    ->for('last_name') }}

                {{ html()->text('last_name')
                        ->class('form-control')
                        ->placeholder(__('validation.attributes.backend.customer.last_name'))
                        }}
            </div><!--form-group-->
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.backend.customer.country').'(<span class="text-danger">*</span>)')
                    ->class('form-control-label')
                    ->for('country_id') }}

                {{ html()->select('country_id',$countries)
                        ->class('form-control')
                        ->placeholder(__('validation.attributes.backend.customer.country'))
                        ->required() }}
            </div><!--form-group-->
        </div>
        <div class="col">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.backend.customer.state'))
                    ->class('form-control-label')
                    ->for('state_id') }}

                {{ html()->text('state_id')
                        ->class('form-control')
                        ->placeholder(__('validation.attributes.backend.customer.state'))
                        }}
            </div><!--form-group-->
        </div>
    </div>

    <div class="form-group">
        {{ html()->label(__('validation.attributes.backend.customer.address_1').'(<span class="text-danger">*</span>)')
            ->class('form-control-label')
            ->for('address_1') }}

        {{ html()->text('address_1')
                ->class('form-control')
                ->placeholder(__('validation.attributes.backend.customer.address_1'))
                ->required() }}
    </div><!--form-group-->

    <div class="form-group">
        {{ html()->label(__('validation.attributes.backend.customer.address_2'))
            ->class('form-control-label')
            ->for('address_2') }}

        {{ html()->text('address_2')
                ->class('form-control')
                ->placeholder(__('validation.attributes.backend.customer.address_2'))
                }}
    </div><!--form-group-->

    <div class="row">
        <div class="col">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.backend.customer.city'))
                    ->class('form-control-label')
                    ->for('city') }}

                {{ html()->text('city')
                        ->class('form-control')
                        ->placeholder(__('validation.attributes.backend.customer.city'))
                        }}
            </div><!--form-group-->
        </div>
        <div class="col">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.backend.customer.zip_code').'(<span class="text-danger">*</span>)')
                    ->class('form-control-label')
                    ->for('zip_code') }}

                {{ html()->text('zip_code')
                        ->class('form-control')
                        ->placeholder(__('validation.attributes.backend.customer.zip_code'))
                        ->required()
                        }}
            </div><!--form-group-->
        </div>
    </div>

    <div class="form-group">
        {{ html()->label(__('validation.attributes.backend.customer.phone').'(<span class="text-danger">*</span>)')
            ->class('form-control-label')
            ->for('phone') }}

        {{ html()->text('phone')
                ->class('form-control')
                ->placeholder(__('validation.attributes.backend.customer.phone'))
                ->required()
                }}
    </div><!--form-group-->

    <div class="form-group">
        {{ html()->label(__('validation.attributes.backend.customer.tax'))
            ->class('form-control-label')
            ->for('tax') }}

        {{ html()->text('tax')
                ->class('form-control')
                ->placeholder(__('validation.attributes.backend.customer.tax'))
                }}
    </div><!--form-group-->
    @if(isset($back_link) && $back_link != '')
        {{ html()->hidden('back_link')->value($back_link) }}
    @endif
    {{ form_submit(__('buttons.general.crud.create')) }}
    {{ form_cancel(route('admin.'.$module.'.index'), __('buttons.general.cancel')) }}
{{ html()->closeModelForm() }}