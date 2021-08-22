let cs = {
    nav_link_sel: '#cs-docs-nav li.toctree-l1.current a',

    init: function() {
        $(window).on('resize', cs.toggle_mobile);
        this.toggle_mobile();
        this.init_navigation();
        this.bind_navigation();
    },

    toggle_mobile: function() {
        if(window.matchMedia('(max-width:768px)').matches) {
            $('#cs-docs-nav').detach().appendTo('#cs-navbar');
            $('#searchbox').detach().prependTo('#cs-navbar');
        } else {
            $('#cs-docs-nav').detach().appendTo('#cs-sidebar');
            $('#searchbox').detach().appendTo('#nav-search');
        }
    },

    init_navigation: function() {
        let anchor = window.location.hash;
        let curr = $(`${this.nav_link_sel}[href='${anchor}']`);
        curr.addClass('active');
    },

    bind_navigation: function() {
        let nav_links = $(this.nav_link_sel);
        nav_links.on('click', function(e) {
            $(nav_links).removeClass('active');
            $(this).addClass('active');
        });
    }
}

$(function() {
    cs.init();
});
