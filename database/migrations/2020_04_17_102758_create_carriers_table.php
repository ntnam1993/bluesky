<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarriersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carriers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable()->comment('Tên hãng vận chuyển');
            $table->string('service')->nullable()->comment('Tên dịch vụ sử dụng');
            $table->integer('item_id')->nullable()->default(0);
            $table->string('item_type')->nullable();
            $table->integer('price')->default(0);
            $table->string('currency')->nullable();
            $table->tinyInteger('status')->nullable()->default(0);
            $table->text('res_data')->nullable()->comment('Data bên API trả về');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carriers');
    }
}
