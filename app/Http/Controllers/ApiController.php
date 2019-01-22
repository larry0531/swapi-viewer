<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use GuzzleHttp\Client;

class ApiController extends Controller
{
	public function __construct()
    {
        //
    }

    public function getAllPeople()
    {
        $client = new Client([
            'base_uri' => 'https://swapi.co/api/',
        ]);

        $response = $client->request('GET', 'people');

        if ($response->getStatusCode() == 200) {
            $res =  (string) $response->getBody();
            
            return response()->json($res);
        } else {
        	return response()->json('error');
        }

    }
}
