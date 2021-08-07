/**
 * Convert [[Special:PrefixIndex]] table to list and add the "lifilter", if available
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 */
( function ( mw, $ ) {
	'use strict';

	if ( $.inArray( mw.config.get( 'wgCanonicalSpecialPageName' ), [ 'Prefixindex', 'Allpages' ] ) !== -1 ) {
		$( function () {
			var $table = $( '.mw-prefixindex-list-table, .mw-allpages-table-chunk' ),
				$list = $( '<ol id="mw-prefixindex-list" style="-moz-column-count:3; -webkit-column-count:3; column-count:3;"></ol>' );
			$table.find( 'td' ).each( function () {
				$list.append( '<li>' + $( this ).html() + '</li>' );
			} );
			$table.replaceWith( $list );
			if ( window.filterLists && typeof filterLists.load === 'function' && typeof filterLists.buildForm === 'function' ) {
				filterLists.load();
				filterLists.buildForm();
			}
		} );
	}

}( mediaWiki, jQuery ) );
