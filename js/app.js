let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});

/* ----- Effects occur when in view  ------- */
$(window).load(function () {
    var in_view = new Waypoint.Inview({
        element: $('left-wrap')[0],
        enter: function() {
            $('left-wrap').addClass('start');
        },
        exit: function() {  // optionally
            $('left-wrap').removeClass('start');
        }
    });
});