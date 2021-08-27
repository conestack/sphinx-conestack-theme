Usage
=====

To activate **Conestack Sphinx Theme**, set ``html_theme`` in the ``conf.py``
file of your docs source.

.. code-block:: python

    html_theme = 'conestack'

See `here <https://www.sphinx-doc.org/en/master/usage/theming.html>`_ for
a detailed documentation about Sphinx theming.


Theme related options
---------------------

Theme colors
~~~~~~~~~~~~

The Header background and text colos can be customized by defining ``cs_color``
and ``cs_bg_color`` HTML theme options in ``conf.py``:

.. code-block:: python

    html_theme_options = {
        'cs_color': '#FFFFFF',
        'cs_bg_color': 'var(--bs-indigo)'
    }

.. Tip::

    Hex code (Format #000000) and Bootstrap variables are both supported.


Logo options
~~~~~~~~~~~~

The Logo is customized by setting the following HTML theme options.

.. code-block:: python

    html_theme_options = {
        'logo_url': '_static/your_logo.svg',
        'logo_title': 'Your-Title',
        'logo_width': '40px',
        'logo_height': '40px'
    }

A logo can be any .svg or image files (.png, .jpeg, etc).


External links
~~~~~~~~~~~~~~

You can link to your twitter, github, pypi, gitlab or npm account 
in the header by inserting the link in the corresponding variable.

.. code-block:: python

    html_theme_options = {
        'twitter_url': 'https://twitter.com/your-account',
        'github_url': 'https://github.com/your-repo',
        'gitlab_url': 'https://gitlab.com/your-repo',
        'pypi_url': 'https://pypi.org/project/your-project',
        'npm_url': 'https://npmjs.com/your-package'
    }

.. Note::

    If a variable is empty, the corresponding icon will not be displayed.
