
function indexObject( args ) {
	
	var container = "#owezfind-box .feedback";
    var objectId = $('.content-view-full form input[name="ContentObjectID"]').val();
	
	if ( args['loader'] ) {
		$(container).css( 'opacity', 1 ).html('<img class="ajax-loader" src="'+args['loader']+'" />');
	}
	
	$.ez('ezJsOwEzfind::indexObject::'+objectId, args, function(data) {
		if ( data.content!="false" )
        {
			$(container).html(data.content).animate( { opacity: 0 }, 5000 );
        }
	});
	
	return false;
}

function addBox() {
    $('.content-view-full').prepend( '<div id="owezfind-box"><input type="submit" class="button" value="Reindex object" /><div class="feedback"></div></div>' );
    $('#owezfind-box .button').click( function() {
        indexObject( {'loader': '/extension/owezfind/design/admin/images/ajax-loader.gif' } );
    });
}

$(function() {
    addBox();
});