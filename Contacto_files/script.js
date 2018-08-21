( function ( $ ) {
	"use strict";

	jQuery( document ).ready( function ( ) {

		jQuery( '.vc_row.col-equal > .wpb_column' ).matchHeight( {
			byRow: true,
			property: 'height'
		} );


		jQuery.fn.matchHeight._beforeUpdate = function ( event, groups ) {

			jQuery( '.vc_row.col-equal' ).each( function ( index ) {
				jQuery( this ).find( '.leap-eq-top' ).each( function () {
					jQuery( this ).remove();
				} );
				jQuery( this ).find( '.leap-eq-bottom' ).each( function () {
					jQuery( this ).remove();
				} );
			} );


		};

		jQuery.fn.matchHeight._afterUpdate = function ( event, groups ) {

			var col_inner_height, col_inner_content_height, col_height, col_content_height, margin_top;
			jQuery( '.vc_row.col-equal' ).each( function ( row_index ) {

				jQuery( this ).find( '> .wpb_column > .wpb_wrapper' ).each( function ( column_index ) {


					col_inner_height = jQuery( this ).parent( '.wpb_column' ).height();
					col_height = jQuery( this ).parent( '.wpb_column' ).outerHeight();

					//console.log( 'col_inner_height: ' + col_inner_height + ' col_height: ' + col_height );

					col_inner_content_height = jQuery( this ).height();
					col_content_height = jQuery( this ).outerHeight( true );

					//console.log( 'col_inner_content_height: ' + col_inner_content_height + ' col_content_height: ' + col_content_height );

					margin_top = Math.round( parseInt( col_height - col_content_height ) / 2 );
					if ( ( window.innerWidth > 767 ) && ( col_inner_height !== col_content_height ) ) {

						jQuery( this ).before( '<div class="leap-eq-top"></div>' );
						jQuery( this ).after( '<div class="leap-eq-bottom"></div>' );

						// Rows
						if ( jQuery( this ).closest( '.vc_row.col-equal' ).hasClass( 'col-align-middle' ) ) {
							jQuery( this ).prev( '.leap-eq-top' ).css( "height", margin_top + "px" );
							jQuery( this ).next( '.leap-eq-bottom' ).css( "height", margin_top + "px" );
						}

						if ( jQuery( this ).closest( '.vc_row.col-equal' ).hasClass( 'col-align-bottom' ) ) {
							jQuery( this ).prev( '.leap-eq-top' ).css( "height", ( margin_top * 2 ) + "px" );
						}

						if ( jQuery( this ).closest( '.vc_row.col-equal' ).hasClass( 'col-align-top' ) ) {
							jQuery( this ).next( '.leap-eq-bottom' ).css( "height", ( margin_top * 2 ) + "px" );
						}

						// Columns
						if ( jQuery( this ).closest( '.vc_row.col-equal .wpb_column' ).hasClass( 'col-align-middle' ) ) {
							//console.log( column_index + '  ' + this.className );

							jQuery( this ).prev( '.leap-eq-top' ).css( "height", margin_top + "px" );
							jQuery( this ).next( '.leap-eq-bottom' ).css( "height", margin_top + "px" );

						}

						if ( jQuery( this ).closest( '.vc_row.col-equal .wpb_column' ).hasClass( 'col-align-bottom' ) ) {
							jQuery( this ).prev( '.leap-eq-top' ).css( "height", ( margin_top * 2 ) + "px" );
						}

						if ( jQuery( this ).closest( '.vc_row.col-equal .wpb_column' ).hasClass( 'col-align-top' ) ) {
							jQuery( this ).next( '.leap-eq-bottom' ).css( "height", ( margin_top * 2 ) + "px" );
						}

					}
				} );

			} );

		};


	} );

} )( jQuery );