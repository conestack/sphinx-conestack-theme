Contributing
============

Source Code
-----------

The sources are in a GIT DVCS with its main branches at
`github <http://github.com/conestack/sphinx-conestack-theme>`_.

If you encounter any bugs, missing features or something to improve, please file
an issue or fork this repo and create a pull request.


Theme development
-----------------

A general guide about sphinx theme development can be found
`here <https://www.sphinx-doc.org/en/master/development/theming.html>`_.

Styles are created using `sass <https://sass-lang.com>`_.

If you plan to contribute code to this project, please create a fork from
the repository.

Install system dependencies:

.. code-block:: sh

    $ sudo apt install git npm python3-venv

Clone the project from your fork:

.. code-block:: sh

    $ git clone git@github.com:<your-account>/sphinx-conestack-theme.git

Enter respository and create a new feature or bugfix branch:

.. code-block:: sh

    $ cd sphinx-conestack-theme
    $ git checkout -b feature_or_bugfix_branch_name

The repository contains a set of helper bash scripts for development.

For installation of the development environment, use:

.. code-block:: sh

    $ make install

The scss files are located in ``shpinx_conestack_theme/conestack/scss``.

To rebuild the styles, run:

.. code-block:: sh

    $ make scss

Building the docs (will also rebuild styles) is done with:

.. code-block:: sh

    $ make docs

To cleanup the development environment, call:

.. code-block:: sh

    $ make clean

When done with your work, push your newly created branch and create a pull
request.

**Happy hacking!**
