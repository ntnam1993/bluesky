<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMailOutsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mail_outs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('package_id');
            $table->string('tracking_no')->nullable();
            $table->string('type')->nullable()->comment('Phân loại gói (package,pallet,gift)');
            $table->text('description')->nullable()->comment('Mô tả mô tả gói hàng');
            $table->text('note')->nullable()->comment('Ghi chú gói hàng');
            $table->tinyInteger('status')->nullable()->default(0)->comment('Trạng thái gói hàng');
            $table->integer('quantity')->nullable()->default(0)->comment('Số lượng');
            $table->double('weight')->nullable()->default(0);
            $table->double('width')->nullable()->default(0);
            $table->double('height')->nullable()->default(0);
            $table->double('length')->nullable()->default(0);
            $table->double('d_weight')->nullable()->default(0);
            $table->string('unit_type')->nullable()->comment('Đơn vị tính gam,kg,inch,bound');
            $table->bigInteger('customer_id');
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
        Schema::dropIfExists('mail_outs');
    }
}
