
$( function() {
    append_mobile();
});

$(window).on('resize', append_mobile);

function append_mobile() {
    if(window.matchMedia('(max-width:768px)').matches) {
        console.log('mobile');
        $('#cone-docs-nav').detach().appendTo('#cone-navbar');
        $('#searchbox').detach().prependTo('#cone-navbar');
    } else {
        console.log('desktop');
        $('#cone-docs-nav').detach().appendTo('#cone-sidebar');
        $('#searchbox').detach().appendTo('#nav_search');
    }
}