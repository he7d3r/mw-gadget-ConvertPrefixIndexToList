/**
 * Convert [[Special:PrefixIndex]] table to list and add the "lifilter", if available
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/ConvertPrefixIndexToList.js]] ([[File:User:Helder.wiki/Tools/ConvertPrefixIndexToList.js]])
 */
/*jslint browser: true */
/*global jQuery, mediaWiki, filterLists */
( function ( mw, $ ) {
'use strict';

if ( $.inArray( mw.config.get( 'wgCanonicalSpecialPageName' ), [ 'Prefixindex', 'Allpages' ] ) !== -1 ) {
	$( function(){
		var $table = $( '.mw-prefixindex-list-table, .mw-allpages-table-chunk' ),
			$list = $( '<ol id="mw-prefixindex-list" style="-moz-column-count:3; -webkit-column-count:3; column-count:3;"></ol>' );
		$table.find( 'td' ).each( function() {
			$list.append( '<li>' + $( this ).html() + '</li>' );
		} );
		$table.replaceWith( $list );
		if ( $.isFunction( window.filterLists && filterLists.load ) && $.isFunction( filterLists.buildForm ) ) {
			filterLists.load();
			filterLists.buildForm();
		}
	} );
}

}( mediaWiki, jQuery ) );