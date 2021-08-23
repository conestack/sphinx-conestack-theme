let cs = {
    main_nav_link_sel: 'li.toctree-l1 > a',
    main_nav_toggle_sel: 'li.toctree-l1 > span.toggle',
    curr_nav_link_sel: 'li.toctree-l1.current a',

    init: function() {
        this.navigation = $('.cs-nav-toc');
        this.searchbox = $('#searchbox');
        this.init_navigation();
        this.bind_navigation();
        this.handle_searchbox();
        $(window).on('resize', cs.handle_searchbox.bind(this));
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
    },

    handle_searchbox: function() {
        if(window.matchMedia('(max-width:768px)').matches) {
            this.searchbox.detach().prependTo('#cs-mobile-menu');
        } else {
            this.searchbox.detach().appendTo('#nav-search');
        }
    },

    highlight_search_words: function() {
        var params = $.getQueryParameters();
        var terms = (params.highlight) ? params.highlight[0].split(/\s+/) : [];
        if (terms.length) {
            var body = $('div.body');
            if (!body.length) {
                body = $('body');
            }
            window.setTimeout(function() {
                $.each(terms, function() {
                    body.highlightText(this.toLowerCase(), 'highlighted');
                });
            }, 10);
            let btn = `
              <button class="btn-default highlight-link"
                      onclick="Documentation.hideSearchWords()">
              </button>
            `
            $(btn).insertBefore($('#searchbox input'));
        }
    },

    hide_search_words: function() {
        $('#searchbox .highlight-link').fadeOut(300).remove();
        $('span.highlighted').removeClass('highlighted');
    }
}

// Patch search highlighting related functions
Documentation.highlightSearchWords = cs.highlight_search_words;
Documentation.hideSearchWords = cs.hide_search_words;

$(function() {
    cs.init();
});
