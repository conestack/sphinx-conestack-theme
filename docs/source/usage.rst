Usage
=====

Install **Conestack Sphinx Theme** with
`pip <https://docs.python.org/3/installing/index.html>`_:

.. code-block:: sh

    pip install sphinx-conestack-theme

Create your sphinx project:

.. code-block:: sh

    sphinx-quickstart

Sphinx theme confguration is done in the ``conf.py`` file of your docs source
folder.

To activate the theme, ``html_theme`` must be set:

.. code-block:: python

    html_theme = 'conestack'

See `here <https://www.sphinx-doc.org/en/master/usage/quickstart.html>`_ for
more information about boilerplating sphinx documentation projects and
`here <https://www.sphinx-doc.org/en/master/usage/theming.html>`_ for
a detailed documentation about customizing Sphinx themes.


Theming options
---------------

Theme colors
~~~~~~~~~~~~

The Header background and text colors can be customized by defining ``cs_color``
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


External links
~~~~~~~~~~~~~~

You can link to your twitter, github, gitlab, pypi or npm account in the header
by inserting the URL in the corresponding variable.

.. code-block:: python

    html_theme_options = {
        'twitter_url': 'https://twitter.com/your-account',
        'github_url': 'https://github.com/your-repo',
        'gitlab_url': 'https://gitlab.com/your-repo',
        'pypi_url': 'https://pypi.org/project/your-package',
        'npm_url': 'https://npmjs.com/your-package'
    }

.. Note::

    If a variable is empty, the corresponding icon will not be displayed.
