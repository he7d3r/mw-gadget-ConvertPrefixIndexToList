/**
 * Convert [[Special:PrefixIndex]] table to list and add the "lifilter", if available
 */
if (mw.config.get('wgCanonicalSpecialPageName') === 'Prefixindex' ) {
    $(function(){
		var $table = $('#mw-prefixindex-list-table'),
			$list = $('<ol id="mw-prefixindex-list" style="-moz-column-count:3; -webkit-column-count:3; column-count:3;"></ol>');
		$table.find('td').each(function() {
			$list.append('<li>' + $(this).html() + '</li>');
		});
		$table.replaceWith($list);
		if (filterLists) {
			filterLists.load();
			filterLists.buildForm();
		}
	});
}