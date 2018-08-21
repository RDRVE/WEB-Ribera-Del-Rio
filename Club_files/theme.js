( function ( $ ) {
	"use strict";


	/*
	 * Button classes
	 */

	jQuery( 'input#comment-submit,.yith-woocompare-widget a.compare.button, .widget_price_filter button.button, .woocommerce input.button, .woocommerce button.button, p.product .add_to_cart_button, .wishlist_table a.add_to_cart, input#submit, .checkout-button' ).addClass( 'btn btn-default btn-leap' );
	jQuery( '.woocommerce header.title .edit' ).addClass( 'btn btn-default btn-leap btn-mini' );



	var orig_menu_height, total_height, wp_admin_bar = 0;
	jQuery( document ).ready( function ( ) {


		// This initializes the Superfish menu.
		jQuery( 'ul.sf-menu' ).superfish( {
			hoverClass: 'sfHover',
			delay: 50,
			animation: { opacity: 'show' },
			animationOut: { opacity: 'hide' },
			speed: 'normal',
			speedOut: 'fast',
			cssArrows: true
		} );


		jQuery( '#main-menu-mobile' ).slicknav( {
			'label': '',
			'prependTo': '#mobile-menu',
			'closedSymbol': '<i class="fa fa-angle-right fa-2x"></i>',
			'openedSymbol': '<i class="fa fa-angle-down fa-2x"></i>',
			'removeIds': true,
			'removeClasses': true
		} );




		if ( jQuery( '.header .navbar-inner' ).length ) {
			if ( jQuery( 'body' ).hasClass( 'admin-bar' ) ) {
				wp_admin_bar = jQuery( '#wpadminbar' ).outerHeight();
			}

			orig_menu_height = jQuery( '.header .navbar-inner' ).outerHeight();
			total_height = jQuery( '.header .navbar-inner' ).offset().top + orig_menu_height - wp_admin_bar;
		}

		jQuery( document ).scroll( function () {

			if ( jQuery( window ).width() >= theme_vars.mobile_menu_width && jQuery( ".header .navbar-inner" ).hasClass( "navbar-fixed-top" ) ) {
				if ( jQuery( document ).scrollTop( ) >= total_height ) {
					if ( !jQuery( '.header .navbar-fixed-top' ).hasClass( "fixed-header" ) ) {
						jQuery( ".header .navbar-fixed-top" ).addClass( "fixed-header" );
						jQuery( '.header-placholder' ).css( "height", orig_menu_height );
						jQuery( '.header .navbar-inner' ).hide();
						jQuery( '.header .navbar-inner' ).slideDown( "slow" );

						jQuery( '[id*="header"]' ).css( "position", "relative" );
						jQuery( ".page_with_slider #header7, .page_with_slider #header8" ).css( {
							"position": "",
							"z-index": ""
						} );
					}
				} else {
					if ( jQuery( '.header .navbar-fixed-top' ).hasClass( "fixed-header" ) ) {
						jQuery( ".header .navbar-fixed-top" ).removeClass( "fixed-header" );
					}
					jQuery( '.header-placholder' ).css( "height", '0px' );

					jQuery( '[id*="header"]' ).css( "position", "" );
					jQuery( ".page_with_slider #header7, .page_with_slider #header8" ).css( {
						"position": "absolute",
						"z-index": "100"
					} );
				}
			}

		} );


		/**
		 * Remove link tag when href = # and display text only
		 */
		jQuery( "#main-menu .mega-section-head" ).each( function ( ) {
			if ( jQuery( this ).find( 'a' ).attr( 'href' ) === undefined ) {
				jQuery( this ).html( jQuery( this ).find( 'a' ).html( ) );
			}
		} );
		jQuery( "#main-menu li.menu-item-has-megamenu-notfullwidth" )
			.mouseover( function ( ) {
				jQuery( '#main-menu' ).css( "position", "relative" );
			} )
			.mouseout( function ( ) {
				jQuery( '#main-menu' ).css( "position", "" );
			} );
	} );

	/*
	 * search icon show/hide
	 */
	jQuery( document ).click( function ( ) {
		jQuery( '.searchform' ).hide( "drop", { percent: 0 }, 500 );
	} );
	jQuery( '.searchform' ).click( function ( e ) {
		e.stopPropagation( );
	} );
	jQuery( '#searchbutton' ).click( function ( e ) {
		e.stopPropagation( );
		if ( jQuery( '.searchform' ).css( 'display' ) == 'block' ) {
			jQuery( '.searchform' ).hide( "drop", { percent: 0 }, 500 );
			jQuery( '.searchform .navbar-search input.search-query' ).blur( );
		} else {
			jQuery( '.searchform' ).show( "drop", { percent: 0 }, 500 );
			jQuery( '.searchform .navbar-search input.search-query' ).focus( );
		}
	} );
	jQuery( document ).ready( function ( ) {

		jQuery( '#main-menu > li a' ).click( function ( ) {
			if ( location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) && location.hostname == this.hostname ) {

				var stickyH = 63;
				if ( jQuery( ".header .navbar-inner" ).hasClass( "fixed-header" ) ) {
					stickyH = jQuery( '.navbar-inner.navbar-fixed-top.fixed-header' ).innerHeight( );
				}

				var target = jQuery( this.hash );
				target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );
				if ( target.length ) {
					jQuery( 'html,body' ).animate( {
						scrollTop: target.offset( ).top - stickyH
					}, 1500, 'easeInOutExpo' );
					return false;
				}
			}
		} );
		/*
		 * Parallax Scrolling
		 */
		jQuery( '.leap-parallax' ).each( function ( ) {
			jQuery( this ).parallax( "50%", 0.4 );
		} );
		/*
		 * PrettyPhoto
		 */
		jQuery( "a[data-rel^='prettyPhoto']" ).prettyPhoto( {
			hook: 'data-rel',
			animation_speed: 'fast', /* fast/slow/normal */
			slideshow: 5000, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: false, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			default_width: 500,
			default_height: 344,
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			horizontal_padding: 20, /* The padding on each side of the picture */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: true, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
			overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
			social_tools: false /* html or false to disable */
		} );
		/*
		 * Woocommerce
		 */
		jQuery( 'a.add_to_cart_button.product_type_simple' ).click( function ( ) {
			var link = this;
			jQuery( link ).closest( '.product' ).find( '.cart-loading' ).find( 'i' ).removeClass( 'fa-check-square-o' ).addClass( 'fa-spinner fa-spin' );
			jQuery( this ).closest( '.product' ).find( '.cart-loading' ).fadeIn( );
			setTimeout( function ( ) {
				jQuery( link ).closest( '.product' ).find( '.product-img img' ).animate( { opacity: 0.75 } );
				jQuery( link ).closest( '.product' ).find( '.cart-loading' ).find( 'i' ).hide( ).removeClass( 'fa-spinner fa-spin' ).addClass( 'fa-check-square-o' ).fadeIn( );
				setTimeout( function ( ) {
					jQuery( link ).closest( '.product' ).find( '.cart-loading' ).fadeOut( ).closest( '.product' ).find( '.product-img img' ).animate( { opacity: 1 } );
					;
				}, 2000 );
			}, 2000 );
		} );
		jQuery( 'li.product' ).mouseenter( function ( ) {
			if ( jQuery( this ).find( '.cart-loading' ).find( 'i' ).hasClass( 'fa-check-square-o' ) ) {
				jQuery( this ).find( '.cart-loading' ).fadeIn( );
			}
		} ).mouseleave( function ( ) {
			if ( jQuery( this ).find( '.cart-loading' ).find( 'i' ).hasClass( 'fa-check-square-o' ) ) {
				jQuery( this ).find( '.cart-loading' ).fadeOut( );
			}
		} );
		// SOCIAL Share POPOUP WINDOW
		jQuery( '.leap-share-buttons a' ).click( function ( event ) {
			var width = 575,
				height = 400,
				left = ( jQuery( window ).width( ) - width ) / 2,
				top = ( jQuery( window ).height( ) - height ) / 2,
				url = this.href,
				opts = 'status=1' + ',width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
			window.open( url, 'share', opts );
			return false;
		} );
	} );
	jQuery( window ).load( function ( $ ) {
		var page_dir = jQuery( 'html' ).attr( 'dir' );
		var dir_transformsEnabled;
		if ( page_dir == 'rtl' ) {
			dir_transformsEnabled = false;
		} else {
			dir_transformsEnabled = true;
		}


// cache container
		var $containerGrid = jQuery( '.portfolio-wrapper .portfolio-grid, .blog-grid, .archive-grid, .search-grid' );
		// initialize isotope
		$containerGrid.isotope( {
			layoutMode: 'masonry',
			isOriginLeft: dir_transformsEnabled
				// options...
		} );
		/*
		 $containerGrid.infinitescroll({
		 navSelector  : '.pagination',    // selector for the paged navigation 
		 nextSelector : '.pagination ul li.next a',  // selector for the NEXT link (to page 2)
		 itemSelector : '.portfolio-wrapper .portfolio-item',     // selector for all items you'll retrieve
		 loading: {
		 finishedMsg: 'No more pages to load.',
		 }
		 },
		 // call Isotope as a callback
		 function( newElements ) {
		 $containerGrid.isotope( 'appended', jQuery( newElements ) ); 
		 }
		 );
		 */


		// filter items when filter link is clicked
		jQuery( '.portfolio-tabs a' ).click( function ( ) {
			var selector = jQuery( this ).attr( 'data-filter' );
			$containerGrid.isotope( { filter: selector } );
			jQuery( this ).parents( 'ul' ).find( 'li' ).removeClass( 'active' );
			jQuery( this ).parent( ).addClass( 'active' );
			return false;
		} );
		// cache container
		var $containerOneCol = jQuery( '.portfolio-wrapper .portfolio-1col, .portfolio-wrapper .portfolio-one-column' );
		// initialize isotope
		$containerOneCol.isotope( {
			layoutMode: 'vertical',
			isOriginLeft: dir_transformsEnabled,
		} );
		// filter items when filter link is clicked
		jQuery( '.portfolio-tabs a' ).click( function ( ) {
			var selector = jQuery( this ).attr( 'data-filter' );
			$containerOneCol.isotope( { filter: selector } );
			jQuery( this ).parents( 'ul' ).find( 'li' ).removeClass( 'active' );
			jQuery( this ).parent( ).addClass( 'active' );
			return false;
		} );
		// cache container
		var $containerTwoCol = jQuery( '.portfolio-wrapper .portfolio-2col, .portfolio-wrapper .portfolio-two-column, .blog-medium, .archive-medium, .search-medium' );
		// initialize isotope

		$containerTwoCol.isotope( {
			layoutMode: 'fitRows',
			isOriginLeft: dir_transformsEnabled,
		} );
		// filter items when filter link is clicked
		jQuery( '.portfolio-tabs a' ).click( function ( ) {
			var selector = jQuery( this ).attr( 'data-filter' );
			$containerTwoCol.isotope( { filter: selector } );
			jQuery( this ).parents( 'ul' ).find( 'li' ).removeClass( 'active' );
			jQuery( this ).parent( ).addClass( 'active' );
			return false;
		} );
		// cache container
		var $containerThreeCol = jQuery( '.portfolio-wrapper .portfolio-3col, .portfolio-wrapper .portfolio-three-column' );
		// initialize isotope
		$containerThreeCol.isotope( {
			layoutMode: 'fitRows',
			isOriginLeft: dir_transformsEnabled,
		} );
		// filter items when filter link is clicked
		jQuery( '.portfolio-tabs a' ).click( function ( ) {
			var selector = jQuery( this ).attr( 'data-filter' );
			$containerThreeCol.isotope( { filter: selector } );
			jQuery( this ).parents( 'ul' ).find( 'li' ).removeClass( 'active' );
			jQuery( this ).parent( ).addClass( 'active' );
			return false;
		} );
		// cache container
		var $containerFourCol = jQuery( '.portfolio-wrapper .portfolio-4col, .portfolio-wrapper .portfolio-four-column' );
		// initialize isotope
		$containerFourCol.isotope( {
			layoutMode: 'fitRows',
			isOriginLeft: dir_transformsEnabled,
		} );
		// filter items when filter link is clicked
		jQuery( '.portfolio-tabs a' ).click( function ( ) {
			var selector = jQuery( this ).attr( 'data-filter' );
			$containerFourCol.isotope( { filter: selector } );
			jQuery( this ).parents( 'ul' ).find( 'li' ).removeClass( 'active' );
			jQuery( this ).parent( ).addClass( 'active' );
			return false;
		} );
	} );




// Shortcodes
// Toogla and Accordion
	jQuery( function () {
		jQuery( ".toggle" ).accordion( {
			collapsible: true,
			heightStyle: "content",
			active: false
		} );
		jQuery( ".toggle-open" ).accordion( {
			collapsible: true,
			heightStyle: "content"
		} );
		jQuery( ".accordion" ).accordion( {
			collapsible: true,
			heightStyle: "content"
		} );
	} );

// Tabs
	jQuery( function () {
		jQuery( ".leap-sc-tabs ul.leap-tabs-titles > li a" ).each( function ( index ) {
			jQuery( this ).attr( "href", "#leap-sc-tab-" + index.toString() );
		} );
		jQuery( ".leap-sc-tabs > div" ).each( function ( index ) {
			jQuery( this ).attr( "id", "leap-sc-tab-" + index.toString() );
		} );
		jQuery( ".leap-sc-tabs.horizontal" ).tabs();
		jQuery( ".leap-sc-tabs.vertical" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
		jQuery( ".leap-sc-tabs.vertical ul.leap-tabs-titles li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
	} );

// Tooltip
	jQuery( function () {
		jQuery( document ).tooltip( {
			selector: "a[data-toggle=tooltip]",
		} )
		jQuery( '.topbar-block .social-networks a' ).attr( 'data-placement', 'bottom' );
	} );

// Cycle Testimonials
	jQuery( document ).ready( function () {
		function onAfter( curr, next, opts, fwd ) {
			var $ht = jQuery( this ).height();
			//set the container's height to that of the current slide
			jQuery( this ).parent().css( 'height', $ht );
		}

		//if(jQuery().cycle) {
		jQuery( '.leap-testimonials' ).each( function () {
			jQuery( this ).find( '.testimonials' ).cycle( {
				fx: 'fade',
				after: onAfter,
				pause: true,
				timeout: 4000,
				//prev: '.prev', 
				//next: '.next'
				prev: jQuery( this ).find( '.prev' ),
				next: jQuery( this ).find( '.next' )
			} );
		} );
		//}
	} );


//jQuery(document).ready(function() {
	jQuery( window ).load( function () {
		//Clients/Portfolio Slider 
		jQuery( '.list_carousel' ).each( function () {
			var carousel = jQuery( this ).find( 'ul' );
			carousel.carouFredSel( {
				prev: jQuery( this ).find( '.cfs-prev' ),
				next: jQuery( this ).find( '.cfs-next' ),
				auto: false,
				width: '100%'
			} );
		} );
	} );

	jQuery( document ).ready( function ( $ ) {
		//Pricing table
		jQuery( '.sep-boxed-pricing,.full-boxed-pricing' ).each( function () {
			jQuery( this ).addClass( 'columns-' + jQuery( this ).find( '.column' ).length );
		} );
	} );


// Make Menu visible over Youtube Video and all iframes
	jQuery( document ).ready( function () {
		jQuery( 'iframe' ).each( function () {
			var url = jQuery( this ).attr( "src" );
			var char = "?";
			if ( url.indexOf( "?" ) != -1 )
				var char = "&";
			jQuery( this ).attr( "src", url + char + "wmode=transparent" );
		} );
	} );


} )( jQuery );