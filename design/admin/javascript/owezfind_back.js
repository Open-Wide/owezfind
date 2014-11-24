
function indexObject( args ) {
	
	var container = "#owezfind-box";
    var objectId = $('.content-view-full form input[name="ContentObjectID"]').val();
	
	if ( args['loader'] ) {
        $(container).find( 'a' ).hide();
		$(container).find( '.feedback' ).css( 'opacity', 1 ).html('<img class="ajax-loader" src="'+args['loader']+'" />');
	}
	
	$.ez('ezJsOwEzfind::indexObject::'+objectId, args, function(data) {
        $(container).find( '.feedback' ).html( data.content ).animate( { opacity: 0 }, 5000, function() {
            $(container).find( '.feedback' ).html( '' );
            $(container).find( 'a' ).show();
        } );
	});
	
	return false;
}

function addBox() {
    $('.content-view-full').prepend( '<div id="owezfind-box"><a class="button">Reindex object</a><div class="feedback"></div></div>' );
    $('#owezfind-box .button').click( function() {
        indexObject( {'loader': '/extension/owezfind/design/admin/images/ajax-loader.gif' } );
    });
}

$(function() {
    addBox();
});