// This file is autogenerated. See modules.json and autogenerator.py for details

/*
	get_alldeletedrevs.js

	MediaWiki API Demos
	Demo of `alldeletedrevisions` module: List the all deleted revisions from User

	MIT License
*/

var params = {
		action: 'query',
		list: 'alldeletedrevisions',
		adruser: 'Mahesh',
		adrprop: 'ids|user|comment',
		format: 'json'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	console.log( data );
} );
