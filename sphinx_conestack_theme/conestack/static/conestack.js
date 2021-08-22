let cs = {
    main_nav_link_sel: 'li.toctree-l1 > a',
    main_nav_toggle_sel: 'li.toctree-l1 > span.toggle',
    curr_nav_link_sel: 'li.toctree-l1.current a',

    init: function() {
        this.navigation = $('#cs-docs-nav');
        this.searchbox = $('#searchbox');
        this.init_navigation();
        this.toggle_mobile();
        this.bind_navigation();
        $(window).on('resize', cs.toggle_mobile.bind(this));
    },

    toggle_mobile: function() {
        if(window.matchMedia('(max-width:768px)').matches) {
            this.navigation.detach().appendTo('#cs-navbar');
            this.searchbox.detach().prependTo('#cs-navbar');
        } else {
            this.navigation.detach().appendTo('#cs-sidebar');
            this.searchbox.detach().appendTo('#nav-search');
        }
    },

    init_navigation: function() {
        let anchor = window.location.hash;
        let sel = `${this.curr_nav_link_sel}[href='${anchor}']`;
        $(sel, this.navigation).addClass('active');
    },

    bind_navigation: function() {
        let curr_nav_links = $(this.curr_nav_link_sel, this.navigation);
        curr_nav_links.on('click', function(e) {
            $(curr_nav_links).removeClass('active');
            $(this).addClass('active');
        });
        let main_nav_links = $(this.main_nav_link_sel, this.navigation);
        main_nav_links.before('<span class="toggle" />');
        let toggle_nav_links = $(this.main_nav_toggle_sel, this.navigation);
        toggle_nav_links.on('click', function(e) {
            let elem = $(e.currentTarget).next();
            let expanded = elem.hasClass('expanded') || (
                elem.hasClass('current') && !elem.hasClass('collapsed')
            );
            let ul = $('> ul', elem.parent())
            if (expanded) {
                elem.addClass('collapsed').removeClass('expanded');
                ul.slideUp(300);
            } else {
                elem.removeClass('collapsed').addClass('expanded');
                ul.slideDown(300);
            }
        }.bind(this));
    }
}

$(function() {
    cs.init();
});
