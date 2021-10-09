<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeclarationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('declarations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('item_id')->default(0);
            $table->string('item_type')->default('');
            $table->integer('quantity')->nullable()->default(0)->comment('Số lượng');
            $table->integer('price')->default(0)->comment('Đơn giá sản phẩm');
            $table->integer('total_price')->nullable()->default(0)->comment('Tổng giá sản phẩm');
            $table->string('currency')->nullable()->comment('Đơn vị tiền tệ');
            $table->double('weight')->nullable()->default(0);
            $table->double('width')->nullable()->default(0);
            $table->double('height')->nullable()->default(0);
            $table->double('length')->nullable()->default(0);
            $table->double('d_weight')->nullable()->default(0);
            $table->string('unit_type')->nullable()->comment('Đơn vị tính gam,kg,inch,bound');
            $table->tinyInteger('battery')->default(0)->comment('Có bao gồm thiết bị PIN hay không');
            $table->integer('origin_id')->default(0)->comment('Nguồn gốc gói hàng,xuất xứ đơn hàng');
            $table->text('description')->nullable()->comment('Mô tả mô tả gói hàng');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('declarations');
    }
}
