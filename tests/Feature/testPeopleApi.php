<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class testPeopleApi extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicExample()
    {
        $response = $this->json('GET', '/api/people');

        $response
            ->assertStatus(200)
            ->assertJsonStructure([
            	'count',
            	'next',
            	'previous',
            	'results',
            ]);
    }
}
