<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaction_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('transaction_id')->default(0);
            $table->tinyInteger('status')->default(0);
            $table->integer('quantity')->default(0);
            $table->tinyInteger('amount')->default(0);
            $table->string('currency')->nullable();
            $table->bigInteger('item_id')->default(0);
            $table->string('item_type')->nullable();
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
        Schema::dropIfExists('transaction_items');
    }
}
