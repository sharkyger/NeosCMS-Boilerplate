var iOS = false, p = navigator.platform;
if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ){
    iOS = true;
}

function doAll() {
    winwidth = $(window).width();
    var $win = $(window).scroll(function() {
        if (winwidth>992) {
            if ($win.scrollTop() > 140) {

            } else {
                
            }
        }
    });
}

$(document).ready(function(){
    doAll();
});

if (iOS == true) {
} else {
    $(window).resize(function() {
        doAll();
    });
}
