<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('content')->nullable()->comment('Nội dung');
            $table->string('type')->nullable();
            $table->string('icon')->nullable();
            $table->string('class')->nullable();
            $table->integer('item_id')->nullable()->default(0);
            $table->string('item_type')->nullable();
            $table->integer('creator_id')->nullable()->default(0);
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
        Schema::dropIfExists('notes');
    }
}
