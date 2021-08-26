Customize
=========


Theme colors
------------

Customize header color with ``cs_color`` and ``cs_bg_color``:

.. code-block:: python

    # theme.conf
    
    [options]

    cs_color = #FFFFFF
    cs_bg_color = var(--bs-indigo)

.. Tip:: Hex code (Format #000000) and Bootstrap variables are both supported.


Logo options
------------

Change logo attributes:

.. code-block:: python

    # theme.conf
    
    [options]

    logo_url = _static/your_logo.svg
    logo_title = Your-Title
    logo_width = 40px
    logo_height = 40px

A logo can be imported as .svg or image files (.png, .jpeg, etc).


External links
--------------

You can link to your twitter, github, pypi, gitlab or npm account 
in the header by inserting the link in the corresponding variable.

.. code-block:: python

    # theme.conf
    
    [options]

    twitter_url = https://twitter.com/your-account
    github_url = https://github.com/your-repo
    gitlab_url = https://gitlab.com/your-repo
    pypi_url = https://pypi.org/project/your-project
    npm_url = https://npmjs.com/your-package

.. Note:: If a variable is empty, the corresponding icon will not be displayed.


Custom links
------------

If you want to link to a customized site:

Don't.


Responsive Behavior
-------------------

This sphinx template is created with responsive design in mind.

.. Tip:: Try resizing this page to see the effect!

The conestack sphinx template works on the following breakpoints:
    - mobile: ``max-width: 768px``
    - tablet: ``min-width: 769px`` and ``max-width: 991px``
    - desktop: ``min-width: 992px``


Mobile View
~~~~~~~~~~~

If the window width is lesser or equal than 768px, no sidebars will be visible.

The global table of contents (``globaltoc``) and searchbar are accessible from a dropdown menu in the header.

Tablet View
~~~~~~~~~~~

If the window width is greater than 769px and smaller than 991px, 
the global table of contents (``globaltoc``) is visible and the local table of contents 
(``localtoc``) is hidden.

The search box appears in the header element.

Desktop View
~~~~~~~~~~~~

If the window width is greater than 992px, both (``globaltoc``) and (``localtoc``) are visible
as left and right sidebar, respectively.

The search box appears in the header element.