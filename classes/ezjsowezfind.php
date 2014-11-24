<?php


class ezJsOwEzfind
{
	
	public static function indexObject( $args )
    {
        if ( is_numeric( $args[0] ) ) {
            $object = eZContentObject::fetch( $args[0] );
            if ( $object instanceof eZContentObject ) {
                $searchEngine = new eZSolr();
                $result = $searchEngine->addObject( $object, false );
                $searchEngine->commit();
                return 'Successfully indexed.';
            }
        }
    	return 'An error occured.';
    }
}
?>
