/**
 * Convert [[Special:PrefixIndex]] table to list and add the "lifilter", if available
 * @traking: [[Special:GlobalUsage/User:Helder.wiki/Tools/ConvertPrefixIndexToList.js]] ([[File:User:Helder.wiki/Tools/ConvertPrefixIndexToList.js]])
 */
if (mw.config.get('wgCanonicalSpecialPageName') === 'Prefixindex' ) {
    $(function(){
		var $table = $('#mw-prefixindex-list-table'),
			$list = $('<ol id="mw-prefixindex-list" style="-moz-column-count:3; -webkit-column-count:3; column-count:3;"></ol>');
		$table.find('td').each(function() {
			$list.append('<li>' + $(this).html() + '</li>');
		});
		$table.replaceWith($list);
		if (typeof filterLists !== 'undefined' ) {
			filterLists.load();
			filterLists.buildForm();
		}
	});
}