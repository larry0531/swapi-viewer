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

    public function getPeople($id = null)
    {
        $client = new Client([
            'base_uri' => 'https://swapi.co/api/',
        ]);

        $response = $client->request('GET', 'people/'.$id);

        if ($response->getStatusCode() == 200) {
            $res =  (string) $response->getBody();
            $res = json_decode($res);

            return response()->json($res);
        } else {
            return response()->json('error');
        }

    }

}
