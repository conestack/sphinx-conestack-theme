function toggle_mobile() {
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

$(function() {
    $(window).on('resize', toggle_mobile);
    toggle_mobile();
});
