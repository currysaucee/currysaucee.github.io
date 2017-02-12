/* 
   Lakeland Reeds Bed and Breakfast menu toggle script 
   Filename: script.js
   HTML5 and CSS3 Illustrated Unit I, Lessons
 */

/* For the Google Map in Contact.html>*/
function initMap() {
        var uluru = {lat: 1.376169, lng: 103.736114};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
      
      


/* For the Animated Scroll back to top*/
                        $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});
                        //Click event to scroll to top
$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});


/*To call the Drawer in Mobile Nav Bar*/
    $(document).ready(function() {
        $('.drawer').drawer();
    });

/*To use the Drawer in Mobile Nav Bar */
    $('.drawer').drawer({
  class: {
    nav: 'drawer-nav',
    toggle: 'drawer-toggle',
    overlay: 'drawer-overlay',
    open: 'drawer-open',
    close: 'drawer-close',
    dropdown: 'drawer-dropdown'
  },
  iscroll: {
    // Configuring the iScroll
    // https://github.com/cubiq/iscroll#configuring-the-iscroll
    mouseWheel: true,
    preventDefault: false
  },
  showOverlay: true
});
        
$('.drawer').on('drawer.opened', function(){});
$('.drawer').on('drawer.closed', function(){});
$('.drawer').drawer('open');
$('.drawer').drawer('close');
$('.drawer').drawer('toggle');
$('.drawer').drawer('destroy');
