<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable()->comment('Tên gói ghi trên gói hàng');
            $table->string('tracking_no')->nullable();
            $table->string('type')->nullable()->comment('Phân loại gói (package,pallet,gift)');
            $table->string('consolidation_type');
            $table->tinyInteger('consolidation_status')->default(0);
            $table->integer('origin_id')->default(0)->comment('Nguồn gốc gói hàng,xuất xứ đơn hàng');
            $table->text('description')->nullable()->comment('Mô tả mô tả gói hàng');
            $table->text('note')->nullable()->comment('Ghi chú gói hàng');
            $table->integer('warehouse_id')->nullable()->default(0)->comment('ID kho');
            $table->integer('user_id')->nullable()->default(0)->comment('Gói hàng này thuộc user nào');
            $table->integer('parent_id')->nullable()->default(0)->comment('Sản phẩm cha');
            $table->tinyInteger('status')->nullable()->default(0)->comment('Trạng thái gói hàng');
            $table->integer('quantity')->nullable()->default(0)->comment('Số lượng');
            $table->integer('price')->default(0)->comment('Đơn giá sản phẩm');
            $table->integer('total_price')->nullable()->default(0)->comment('Tổng giá sản phẩm');
            $table->integer('total_fee')->nullable()->default(0)->comment('Tổng phí hoàn thành gói hàng bao gồm (ship, đóng gói, vv..)');
            $table->string('currency')->nullable()->comment('Đơn vị tiền tệ');
            $table->double('weight')->nullable()->default(0);
            $table->double('width')->nullable()->default(0);
            $table->double('height')->nullable()->default(0);
            $table->double('length')->nullable()->default(0);
            $table->double('d_weight')->nullable()->default(0);
            $table->string('unit_type')->nullable()->comment('Đơn vị tính gam,kg,inch,bound');
            $table->timestamp('received_at')->nullable()->comment('Ngày nhận gói hàng về kho');
            $table->text('sender_address')->nullable()->comment('Địa chỉ người gửi');
            $table->tinyInteger('battery')->default(0)->comment('Có bao gồm thiết bị PIN hay không');
            $table->tinyInteger('priority')->default(0)->comment('Đánh dấu sự ưu tiên');
            $table->string('lang')->comment('Ngôn ngữ');
            $table->timestamp('sent_at')->nullable()->comment('Ngày gửi vận chuyển hay gọi là ngày hàng rời kho');
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
        Schema::dropIfExists('packages');
    }
}
