// This file is autogenerated. See modules.json and autogenerator.py for details

/*
	get_exturlusage.js

	MediaWiki API Demos
	Demo of `Exturlusage` module: Enumerate pages that contain a given URL.

	MIT License
*/

var params = {
		action: 'query',
		format: 'json',
		list: 'exturlusage',
		euquery: 'slashdot.org'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	var exturls = data.query.exturlusage,
		exturl;
	for ( exturl in exturls ) {
		console.log( 'Page ' + exturls[ exturl ].title + ' has ' + exturls[ exturl ].url + ' url.' );
	}
} );
