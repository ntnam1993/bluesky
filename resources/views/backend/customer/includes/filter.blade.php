{{ html()->form('GET')->open() }}
<div class="row">
    <div class="col-md-3">
        <div class="form-group reset-input">
            {{ html()->label(__('validation.attributes.backend.customer.name'))
                ->class('form-control-label')
                ->for('name') }}

            {{ html()->text('name')
                    ->class('form-control')
                    ->value(Request::get('name'))
                    ->placeholder(__('validation.attributes.backend.customer.name'))
                    }}
            <span class="fa fa-fw fa-times reset" aria-hidden="true" onclick="resetInput(this)"></span>
        </div><!--form-group-->
    </div>
    <div class="col-md-3">
        <div class="form-group reset-input">
            {{ html()->label(__('validation.attributes.backend.customer.phone'))
                ->class('form-control-label')
                ->for('phone') }}

            {{ html()->text('phone')
                    ->class('form-control')
                    ->value(Request::get('phone'))
                    ->placeholder(__('validation.attributes.backend.customer.phone'))
                    }}
            <span class="fa fa-fw fa-times reset" aria-hidden="true" onclick="resetInput(this)"></span>
        </div><!--form-group-->
    </div>
    <div class="col-md-2">
        <div class="form-group reset-input">
            {{ html()->label(__('validation.attributes.backend.customer.city'))
                ->class('form-control-label')
                ->for('city') }}

            {{ html()->text('city')
                    ->class('form-control')
                    ->value(Request::get('city'))
                    ->placeholder(__('validation.attributes.backend.customer.city'))
                    }}
            <span class="fa fa-fw fa-times reset" aria-hidden="true" onclick="resetInput(this)"></span>
        </div><!--form-group-->
    </div>
    <div class="col-md-2">
        <div class="form-group reset-input">
            {{ html()->label(__('validation.attributes.backend.customer.country'))
                ->class('form-control-label')
                ->for('country_id') }}

            {{ html()->select('country_id',$countries)
                    ->class('form-control')
                    ->value(Request::get('country_id'))
                    ->placeholder(__('validation.attributes.backend.customer.country'))
                    }}
            <span class="fa fa-fw fa-times reset" aria-hidden="true" onclick="resetInput(this)"></span>
        </div><!--form-group-->
    </div>
    <div class="col-md-2">
        <div class="form-group">
            <label style="visibility: hidden">Search</label>
            <button type="submit" class="btn btn-md btn-primary form-control"><i class="fas fa-search"></i> Search</button>
        </div>
    </div>
</div>
{{ html()->closeModelForm() }}