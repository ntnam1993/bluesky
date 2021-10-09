<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code')->nullable();
            $table->string('type')->nullable();
            $table->integer('user_id')->default(0);
            $table->tinyInteger('status')->default(0);
            $table->tinyInteger('amount')->default(0);
            $table->string('currency')->nullable();
            $table->bigInteger('payment_method_id')->default(0);
            $table->text('security')->nullable();
            $table->text('note')->nullable();
            $table->text('description')->nullable();
            $table->text('res_transaction_id')->nullable();
            $table->text('res_data')->nullable();
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
        Schema::dropIfExists('transactions');
    }
}
