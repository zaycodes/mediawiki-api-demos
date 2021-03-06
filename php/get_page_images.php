<?php

//This file is autogenerated. See modules.json and autogenerator.py for details

/*
    get_page_images.php

    MediaWiki API Demos
    Demo of `Images` module: Send a GET request to obtain a JSON
	object listing all of the image files embedded on a single page

    MIT License
*/

$endPoint = "https://en.wikipedia.org/w/api.php";
$params = [
    "action" => "query",
    "prop" => "images",
    "titles" => "Albert Einstein",
    "format" => "json"
];

$url = $endPoint . "?" . http_build_query( $params );

$ch = curl_init( $url );
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
$output = curl_exec( $ch );
curl_close( $ch );

$result = json_decode( $output, true );

foreach( $result["query"]["pages"] as $k => $v ) {
    foreach( $v["images"] as $k => $v ) {
        echo( $v["title"] . "\n" );
    }
}
