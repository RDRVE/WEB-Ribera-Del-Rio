!function(e){"use strict";function t(e,t,i){if("img"===i){var r=parseInt(t.outerHeight()),s=r/2;e.css("padding-top",s+"px"),e.parent().css("margin-top",s+20+"px"),t.css("top",-r+"px")}else{var r=parseInt(t.outerHeight()),s=r/2;e.css("padding-top",s+"px"),e.parent().css("margin-top",s+20+"px"),t.css("top",-r+"px")}}function i(t){t.find(".timeline-icon-block").length>0&&e(".timeline-block").each(function(t,i){var r=e(this).find(".timeline-header-block"),s=e(this).find(".timeline-icon-block");s.css({position:"absolute"});var a=s.outerHeight(),o=s.outerWidth(),n=-(o/2),u=parseInt(r.find(".timeline-header").css("padding-left").replace(/[^\d.]/g,""));e(this).hasClass("timeline-post-left")?(s.css({left:n,right:"auto"}),r.css({"padding-left":o/2+u+"px"})):e(this).hasClass("timeline-post-right")&&(s.css({left:"auto",right:n}),r.css({"padding-right":o/2+u+"px"}));var l=r.height(),c=l/2,h=a/2,d=c-h;s.css({top:d});var f=s.offset().left,y=e(window).width();(0>f||f+o>y)&&(s.css({position:"relative",top:"auto",left:"auto",right:"auto","text-align":"center"}),s.children().children().css({margin:"10px auto"}),r.css({padding:"0"}))})}function r(){jQuery(".ult-animation").each(function(){if(jQuery(this).attr("data-animate")){var e=jQuery(this).children("*"),t=jQuery(this).attr("data-animate"),i=jQuery(this).attr("data-animation-duration")+"s",r=jQuery(this).attr("data-animation-iteration"),a=jQuery(this).attr("data-animation-delay"),o=(jQuery(this).attr("data-opacity_start_effect"),"opacity:1;-webkit-animation-delay:"+a+"s;-webkit-animation-duration:"+i+";-webkit-animation-iteration-count:"+r+"; -moz-animation-delay:"+a+"s;-moz-animation-duration:"+i+";-moz-animation-iteration-count:"+r+"; animation-delay:"+a+"s;animation-duration:"+i+";animation-iteration-count:"+r+";"),n="opacity:1;-webkit-transition-delay: "+a+"s; -moz-transition-delay: "+a+"s; transition-delay: "+a+"s;";if(s(jQuery(this))){var u=jQuery(this).attr("style");"undefined"==typeof u&&(u="test"),u=u.replace(/ /g,""),"opacity:0;"==u&&0!==u.indexOf(n)&&jQuery(this).attr("style",n),jQuery.each(e,function(e,i){var r=jQuery(i),a=r.attr("style");"undefined"==typeof a&&(a="test");var n="";n=0==a.indexOf(o)?a:o+a,r.attr("style",n),s(r)&&r.addClass("animated").addClass(t)})}}})}function s(e){var t=jQuery(window).scrollTop(),i=jQuery(window).height();if(jQuery(e).hasClass("ult-animate-viewport"))var r=jQuery(e).data("opacity_start_effect");if("undefined"==typeof r||""==r)var s=2;else var s=100-r;var a=(jQuery(e).outerHeight(),jQuery(e).offset().top),o=a-t,n=i-i*(s/100);return n>=o?!0:!1}function a(){var e=jQuery(".ult-new-ib");e.each(function(e,t){var i=jQuery(this);if(i.hasClass("ult-ib-resp")){var r=jQuery(document).width(),s=i.data("min-width"),a=i.data("max-width");a>=r&&r>=s?i.find(".ult-new-ib-content").hide():i.find(".ult-new-ib-content").show()}})}function o(){var t="";e(".ult-spacer").each(function(i,r){var s=e(r).data("id"),a=(e("body").width(),e(r).data("height-mobile")),o=e(r).data("height-mobile-landscape"),n=e(r).data("height-tab"),u=e(r).data("height-tab-portrait"),l=e(r).data("height");""!=l&&(t+=" .spacer-"+s+" { height:"+l+"px } "),(""!=n||"0"==n||0==n)&&(t+=" @media (max-width: 1199px) { .spacer-"+s+" { height:"+n+"px } } "),"undefined"==typeof u||""==u&&"0"!=u&&0!=u||(t+=" @media (max-width: 991px) { .spacer-"+s+" { height:"+u+"px } } "),"undefined"==typeof o||""==o&&"0"!=o&&0!=o||(t+=" @media (max-width: 767px) { .spacer-"+s+" { height:"+o+"px } } "),(""!=a||"0"==a||0==a)&&(t+=" @media (max-width: 479px) { .spacer-"+s+" { height:"+a+"px } } ")}),""!=t&&(t="<style>"+t+"</style>",e("head").append(t))}e.fn.vc_translate_row=function(){var e=jQuery(window).scrollTop(),t=jQuery(window).height();jQuery(this).each(function(i,r){var s=jQuery(r).attr("data-row-effect-mobile-disable");if(s="undefined"==typeof s?"false":s.toString(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))var a="true";else var a="false";if("true"==a&&"true"==s)var o="true";else var o="false";if("false"==o){var n=0,u=jQuery(r).outerHeight(),l=jQuery(r).offset().top,c=l-e,h=c+u,d=jQuery(r).attr("data-parallax-content-sense"),f=d/100,y=0,p=t-t*(n/100);if(p>=h&&0>=c){if(u>t)var y=(t-h)*f;else var y=-(c*f);0>y&&(y=0)}else y=0;var j=".upb_row_bg,.upb_video-wrapper,.ult-vc-seperator";jQuery(r).find(".vc-row-translate-wrapper").children().each(function(e,t){jQuery(t).is(j)||jQuery(t).css({"-webkit-transform":"translateY("+y+"px)",transform:"translateY("+y+"px)","-ms-transform":"translateY("+y+"px)"})})}})},e.fn.vc_fade_row=function(){var e=jQuery(window).scrollTop(),t=jQuery(window).height();jQuery(this).each(function(i,r){var s=jQuery(r).attr("data-row-effect-mobile-disable");if(s="undefined"==typeof s?"false":s.toString(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))var a="true";else var a="false";if("true"==a&&"true"==s)var o="true";else var o="false";if("false"==o){var n=0,u=jQuery(r).data("fadeout-percentage");u=100-u;var l=jQuery(r).outerHeight(),c=jQuery(r).offset().top,h=c-e,d=h+l,f=1,y=t-t*(u/100),p=(y-d)/y*(1-n);p>0&&(f=1-p),y>=d?(n>f?f=n:f>1&&(f=1),jQuery(r).children().each(function(e,t){var i=".upb_row_bg,.upb_video-wrapper,.ult-vc-seperator";jQuery(t).is(i)||jQuery(t).css({opacity:f})})):jQuery(r).children().each(function(e,t){jQuery(t).css({opacity:f})})}})},jQuery(document).ready(function(){o()}),jQuery(window).scroll(function(){var t=jQuery(".ult-no-mobile").length;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&t>=1?jQuery(".ult-animation").css("opacity",1):r(),e(".vc-row-fade").vc_fade_row(),e(".vc-row-translate").vc_translate_row()}),jQuery(window).load(function(){jQuery(".ult-banner-block-custom-height").each(function(e,t){{var i=jQuery(this).find("img"),r=jQuery(this).width(),s=jQuery(this).height();i.width()}r>s&&i.css({width:"100%",height:"auto"})});var t=0,r=0,s=function(){jQuery(".ifb-jq-height").each(function(){jQuery(this).find(".ifb-back").css("height","auto"),jQuery(this).find(".ifb-front").css("height","auto");var e=parseInt(jQuery(this).find(".ifb-front").outerHeight(!0)),t=parseInt(jQuery(this).find(".ifb-back").outerHeight(!0)),i=e>t?e:t;jQuery(this).find(".ifb-front").css("height",i+"px"),jQuery(this).find(".ifb-back").css("height",i+"px"),jQuery(this).hasClass("vertical_door_flip")?jQuery(this).find(".ifb-flip-box").css("height",i+"px"):jQuery(this).hasClass("horizontal_door_flip")?jQuery(this).find(".ifb-flip-box").css("height",i+"px"):jQuery(this).hasClass("style_9")&&jQuery(this).find(".ifb-flip-box").css("height",i+"px")}),jQuery(".ifb-auto-height").each(function(){if(jQuery(this).hasClass("horizontal_door_flip")||jQuery(this).hasClass("vertical_door_flip")){var e=parseInt(jQuery(this).find(".ifb-front").outerHeight()),t=parseInt(jQuery(this).find(".ifb-back").outerHeight()),i=e>t?e:t;jQuery(this).find(".ifb-flip-box").css("height",i+"px")}})};-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")?setTimeout(function(){s()},500):s(),jQuery(window).resize(function(){t++,setTimeout(function(){r++,t==r&&s()},500)});var o=0;jQuery(window).resize(function(){a(),jQuery(".csstime.smile-icon-timeline-wrap").each(function(){i(jQuery(this))}),e(".jstime .timeline-wrapper").each(function(){i(jQuery(this))}),"none"==jQuery(".smile-icon-timeline-wrap.jstime .timeline-line").css("display")?0===o&&(e(".jstime .timeline-wrapper").masonry("destroy"),o=1):1==o&&(jQuery(".jstime .timeline-wrapper").masonry({itemSelector:".timeline-block"}),setTimeout(function(){jQuery(".jstime .timeline-wrapper").masonry({itemSelector:".timeline-block"}),jQuery(this).find(".timeline-block").each(function(){jQuery(this).addClass("0px"==jQuery(this).css("left")?"timeline-post-left":"timeline-post-right")}),o=0},300))}),e(".smile-icon-timeline-wrap").each(function(){var t=jQuery(this).data("timeline-cutom-width");t&&jQuery(this).css("width",2*t+40+"px");var r=parseInt(jQuery(this).width()),s=parseInt(jQuery(this).find(".timeline-block").width()),a=r-2*s-40;a=a/r*100,e(".jstime .timeline-wrapper").each(function(){jQuery(this).masonry({itemSelector:".timeline-block"})}),setTimeout(function(){e(".jstime .timeline-wrapper").each(function(){jQuery(this).find(".timeline-block").each(function(){jQuery(this).addClass("0px"==jQuery(this).css("left")?"timeline-post-left":"timeline-post-right"),i(jQuery(this))}),jQuery(".timeline-block").each(function(){var e=parseInt(jQuery(this).css("top"))-parseInt(jQuery(this).next().css("top"));14>e&&e>0||0==e?jQuery(this).next().addClass("time-clash-right"):e>-14&&jQuery(this).next().addClass("time-clash-left")}),jQuery(".smile-icon-timeline-wrap").each(function(){var e=jQuery(this).data("time_block_bg_color");jQuery(this).find(".timeline-block").css("background-color",e),jQuery(this).find(".timeline-post-left.timeline-block l").css("border-left-color",e),jQuery(this).find(".timeline-post-right.timeline-block l").css("border-right-color",e),jQuery(this).find(".feat-item").css("background-color",e),jQuery(this).find(".feat-item").find(".feat-top").length>0?jQuery(this).find(".feat-item l").css("border-top-color",e):jQuery(this).find(".feat-item l").css("border-bottom-color",e)}),jQuery(".jstime.timeline_preloader").remove(),jQuery(".smile-icon-timeline-wrap.jstime").css("opacity","1")}),jQuery(".timeline-post-right").each(function(){var e=jQuery(this).find(".timeline-icon-block").clone();jQuery(this).find(".timeline-icon-block").remove(),jQuery(this).find(".timeline-header-block").after(e)})},1e3),jQuery(this).find(".timeline-wrapper").each(function(){""===jQuery(this).text().trim()&&jQuery(this).remove()}),jQuery(this).find(".timeline-line ").next().hasClass("timeline-separator-text")||jQuery(this).find(".timeline-line").prepend("<o></o>");var o=jQuery(this).data("time_sep_color"),n=jQuery(this).data("time_sep_bg_color"),u=jQuery(".smile-icon-timeline-wrap .timeline-line").css("border-right-color");jQuery(this).find(".timeline-dot").css("background-color",n),jQuery(this).find(".timeline-line z").css("background-color",n),jQuery(this).find(".timeline-line o").css("background-color",n),jQuery(this).find(".timeline-separator-text").css("color",o),jQuery(this).find(".timeline-separator-text .sep-text").css("background-color",n),jQuery(this).find(".ult-timeline-arrow s").css("border-color","rgba(255, 255, 255, 0) "+u),jQuery(this).find(".feat-item .ult-timeline-arrow s").css("border-color",u+" rgba(255, 255, 255, 0)"),jQuery(this).find(".timeline-block").css("border-color",u),jQuery(this).find(".feat-item").css("border-color",u)}),jQuery(".timeline-block").each(function(){var t=e(this).find(".link-box").attr("href"),i=e(this).find(".link-title").attr("href");t&&jQuery(this).wrap("<a href="+t+"></a>"),i&&jQuery(this).find(".ult-timeline-title").wrap("<a href="+i+"></a>")}),jQuery(".feat-item").each(function(){var t=e(this).find(".link-box").attr("href");t&&jQuery(this).wrap("<a href="+t+"></a>")})}),jQuery(document).ready(function(e){var s=jQuery(".ult-no-mobile").length;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&s>=1?jQuery(".ult-animation").css("opacity",1):r(),a(),jQuery(".ubtn").hover(function(){var e=jQuery(this);e.find(".ubtn-text").css("color",e.data("hover")),e.find(".ubtn-hover").css("background",e.data("hover-bg"));var t=e.attr("style");if(""!=e.data("shadow-hover")){{e.css("box-shadow")}t+="box-shadow:"+e.data("shadow-hover")}if(e.attr("style",t),""!=e.data("border-hover")&&e.css("border-color",e.data("border-hover")),"none"!=e.data("shadow-click")){var i=e.data("shd-shadow")-3;""!=e.is(".shd-left")?e.css({right:i}):""!=e.is(".shd-right")?e.css({left:i}):""!=e.is(".shd-top")?e.css({bottom:i}):""!=e.is(".shd-bottom")&&e.css({top:i})}},function(){var e=jQuery(this);e.find(".ubtn-text").removeAttr("style"),e.find(".ubtn-hover").removeAttr("style");var t=e.data("border-color"),i=e.attr("style");""!=e.data("shadow-hover")&&(i+="box-shadow:"+e.data("shadow")),e.attr("style",i),""!=e.data("border-hover")&&e.css("border-color",t),"none"!=e.data("shadow-click")&&(e.removeClass("no-ubtn-shadow"),""!=e.is(".shd-left")?e.css({right:"auto"}):""!=e.is(".shd-right")?e.css({left:"auto"}):""!=e.is(".shd-top")?e.css({bottom:"auto"}):""!=e.is(".shd-bottom")&&e.css({top:"auto"}))}),jQuery(".ubtn").on("focus blur mousedown mouseup",function(e){var t=jQuery(this);"none"!=t.data("shadow-click")&&setTimeout(function(){t.is(":focus")?(t.addClass("no-ubtn-shadow"),""!=t.is(".shd-left")?t.css({right:t.data("shd-shadow")+"px"}):""!=t.is(".shd-right")?t.css({left:t.data("shd-shadow")+"px"}):""!=t.is(".shd-top")?t.css({bottom:t.data("shd-shadow")+"px"}):""!=t.is(".shd-bottom")&&t.css({top:t.data("shd-shadow")+"px"})):(t.removeClass("no-ubtn-shadow"),""!=t.is(".shd-left")?t.css({right:"auto"}):""!=t.is(".shd-right")?t.css({left:"auto"}):""!=t.is(".shd-top")?t.css({bottom:"auto"}):""!=t.is(".shd-bottom")&&t.css({top:"auto"}))},0)}),jQuery(".ubtn").focusout(function(){var e=jQuery(this);e.removeClass("no-ubtn-shadow"),""!=e.is(".shd-left")?e.css({right:"auto"}):""!=e.is(".shd-right")?e.css({left:"auto"}):""!=e.is(".shd-top")?e.css({bottom:"auto"}):""!=e.is(".shd-bottom")&&e.css({top:"auto"})}),jQuery(".smile-icon-timeline-wrap.jstime").css("opacity","0"),jQuery(".jstime.timeline_preloader").css("opacity","1"),jQuery(".smile-icon-timeline-wrap.csstime .timeline-wrapper").each(function(){jQuery(".csstime .timeline-block:even").addClass("timeline-post-left"),jQuery(".csstime .timeline-block:odd").addClass("timeline-post-right")}),jQuery(".csstime .timeline-post-right").each(function(){jQuery(this).css("float","right"),jQuery("<div style='clear:both'></div>").insertAfter(jQuery(this))}),jQuery(".csstime.smile-icon-timeline-wrap").each(function(){var e=jQuery(this).data("time_block_bg_color");jQuery(this).find(".timeline-block").css("background-color",e),jQuery(this).find(".timeline-post-left.timeline-block l").css("border-left-color",e),jQuery(this).find(".timeline-post-right.timeline-block l").css("border-right-color",e),jQuery(this).find(".feat-item").css("background-color",e),jQuery(this).find(".feat-item").find(".feat-top").length>0?jQuery(this).find(".feat-item l").css("border-top-color",e):jQuery(this).find(".feat-item l").css("border-bottom-color",e),i(jQuery(this))}),jQuery(".aio-icon, .aio-icon-img, .flip-box, .ultb3-info, .icon_list_icon, .ult-banner-block, .uavc-list-icon, .ult_tabs, .icon_list_connector").each(function(){if(jQuery(this).attr("data-animation")){var t=jQuery(this).attr("data-animation"),i="delay-"+jQuery(this).attr("data-animation-delay");if("undefined"==typeof t||""===t)return!1;e(this).bsf_appear(function(){var e=jQuery(this);e.addClass("animated").addClass(t),e.addClass("animated").addClass(i)})}}),jQuery(".stats-block").each(function(){e(this).bsf_appear(function(){var e=parseFloat(jQuery(this).find(".stats-number").data("counter-value")),t=jQuery(this).find(".stats-number").data("counter-value")+" ",i=parseInt(jQuery(this).find(".stats-number").data("speed")),r=jQuery(this).find(".stats-number").data("id"),s=jQuery(this).find(".stats-number").data("separator"),a=jQuery(this).find(".stats-number").data("decimal"),o=t.split(".");o=o[1]?o[1].length-1:0;var n=!0;"none"==a&&(a=""),n="none"==s?!1:!0;var u={useEasing:!0,useGrouping:n,separator:s,decimal:a},l=new countUp(r,0,e,o,i,u);setTimeout(function(){l.start()},500)})}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))var o=!0;else var o=!1;jQuery("#page").click(function(){jQuery(".ifb-hover").removeClass("ifb-hover")}),o||jQuery(".ifb-flip-box").hover(function(e){e.stopPropagation(),jQuery(this).addClass("ifb-hover")},function(e){e.stopPropagation(),jQuery(this).removeClass("ifb-hover")}),jQuery(".ifb-flip-box").each(function(e,t){jQuery(this).parent().hasClass("style_9")&&(jQuery(this).hover(function(){jQuery(this).addClass("ifb-door-hover")},function(){jQuery(this).removeClass("ifb-door-hover")}),jQuery(this).on("click",function(){jQuery(this).toggleClass("ifb-door-right-open"),jQuery(this).removeClass("ifb-door-hover")}))}),jQuery(".ifb-flip-box").click(function(e){e.stopPropagation(),jQuery(this).hasClass("ifb-hover")?jQuery(this).removeClass("ifb-hover"):(jQuery(".ifb-hover").removeClass("ifb-hover"),jQuery(this).addClass("ifb-hover"))}),jQuery(".vertical_door_flip .ifb-front").each(function(){jQuery(this).wrap('<div class="v_door ifb-multiple-front ifb-front-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())}),jQuery(".reverse_vertical_door_flip .ifb-back").each(function(){jQuery(this).wrap('<div class="rv_door ifb-multiple-back ifb-back-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())}),jQuery(".horizontal_door_flip .ifb-front").each(function(){jQuery(this).wrap('<div class="h_door ifb-multiple-front ifb-front-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())}),jQuery(".reverse_horizontal_door_flip .ifb-back").each(function(){jQuery(this).wrap('<div class="rh_door ifb-multiple-back ifb-back-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())}),jQuery(".style_9 .ifb-front").each(function(){jQuery(this).wrap('<div class="new_style_9 ifb-multiple-front ifb-front-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())}),jQuery(".style_9 .ifb-back").each(function(){jQuery(this).wrap('<div class="new_style_9 ifb-multiple-back ifb-back-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())});var n=/^((?!chrome).)*safari/i.test(navigator.userAgent);n&&(jQuery(".vertical_door_flip").each(function(e,t){var i=jQuery(this).find(".flip_link").outerHeight();jQuery(this).find(".flip_link").css("top",-i/2+"px"),jQuery(this).find(".ifb-multiple-front").css("width","50.2%")}),jQuery(".horizontal_door_flip").each(function(e,t){var i=jQuery(this).find(".flip_link").outerHeight();jQuery(this).find(".flip_link").css("top",-i/2+"px"),jQuery(this).find(".ifb-multiple-front").css("height","50.2%")}),jQuery(".reverse_vertical_door_flip").each(function(e,t){var i=jQuery(this).find(".flip_link").outerHeight();jQuery(this).find(".flip_link").css("top",-i/2+"px")}),jQuery(".reverse_horizontal_door_flip").each(function(e,t){var i=jQuery(this).find(".flip_link").outerHeight();jQuery(this).find(".flip_link").css("top",-i/2+"px"),jQuery(this).find(".ifb-back").css("position","inherit")})),jQuery(".square_box-icon").each(function(e,i){var r=jQuery(this);if(jQuery(this).find(".aio-icon-img").length>0){var s=jQuery(this).find(".aio-icon-img");t(r,s,"img"),s.find(".img-icon").load(function(){t(r,s,"icon")})}else{var s=jQuery(this).find(".aio-icon");t(r,s,"icon"),jQuery(window).load(function(){t(r,s,"icon")})}})})}(jQuery),jQuery(document).ready(function(){function e(){jQuery(".ult-new-ib").each(function(e,t){{var i=jQuery(this).data("min-height")||"";jQuery(this).find(".ult-new-ib-img").data("min-height")||"",jQuery(this).find(".ult-new-ib-img").data("max-width")||""}if(""!=i){jQuery(this).addClass("ult-ib2-min-height"),jQuery(this).css("height",i),jQuery(this).find(".ult-new-ib-img").removeClass("ult-ib2-toggle-size");var r=(jQuery(this).find(".ult-new-ib-img").width(),jQuery(this).find(".ult-new-ib-img").height()),s=jQuery(this).width();(i>=s||i>r)&&jQuery(this).find(".ult-new-ib-img").addClass("ult-ib2-toggle-size")}jQuery(this).hover(function(){jQuery(this).find(".ult-new-ib-img").css("opacity",jQuery(this).data("hover-opacity"))},function(){jQuery(this).find(".ult-new-ib-img").css("opacity",jQuery(this).data("opacity"))})})}e(),jQuery(window).load(function(){e()}),jQuery(window).resize(function(){e()})}),jQuery(document).ready(function(){function e(){jQuery(".ultimate-map-wrapper").each(function(e,t){var i=jQuery(t).attr("id"),r=jQuery(t).find(".ultimate_google_map").attr("id"),s=jQuery("#"+r).attr("data-map_override"),a="true";jQuery("#"+r).css({"margin-left":0});var o=jQuery("#"+i).parent();if("full"==s&&(o=jQuery("body"),a="false"),"ex-full"==s&&(o=jQuery("html"),a="false"),!isNaN(s))for(var e=0;s>e&&"HTML"!=o.prop("tagName");e++)o=o.parent();if(0==s||"0"==s)var n=o.width();else var n=o.outerWidth();var u=o.offset().left,l=jQuery("#"+r).offset().left,c=u-l;jQuery("#"+r).css({width:n}),(0!=s||"0"!=s)&&jQuery("#"+r).css({"margin-left":c})})}e(),jQuery(window).load(function(){e()}),jQuery(window).resize(function(){e()}),jQuery(".ui-tabs").bind("tabsactivate",function(t,i){jQuery(this).find(".ultimate-map-wrapper").length>0&&e()}),jQuery(".ui-accordion").bind("accordionactivate",function(t,i){jQuery(this).find(".ultimate-map-wrapper").length>0&&e()}),jQuery(document).on("onUVCModalPopupOpen",function(){e()}),jQuery(document).on("UVCMapResize",function(){e()})});