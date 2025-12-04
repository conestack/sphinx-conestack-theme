Tables
======

Grid Tables
-----------

An example for a grid table markup:

.. container:: d-flex flex-column flex-sm-row

   .. code-block:: text

      # example markup for a simple
      # grid table

      +------+------+------+
      |   1  |   2  |  3   |
      +======+======+======+
      | row1 | col2 | col3 |
      +------+------+------+
      | row1 | col2 | col3 |
      +------+------+------+
      | row1 | col2 | col3 |
      +------+------+------+
      | row1 | col2 | col3 |
      +------+------+------+

   .. container::  p-0 m-0

      +------+------+------+
      |   1  |   2  |  3   |
      +======+======+======+
      | row1 | col2 | col3 |
      +------+------+------+
      | row1 | col2 | col3 |
      +------+------+------+
      | row1 | col2 | col3 |
      +------+------+------+
      | row1 | col2 | col3 |
      +------+------+------+


Complex grid tables
~~~~~~~~~~~~~~~~~~~

::

  # example markup for a more complex table

  +------------------------+------------+----------+----------+
  | Header row, column 1   | Header 2   | Header 3 | Header 4 |
  | (header rows optional) |            |          |          |
  +========================+============+==========+==========+
  | body row 1, column 1   | column 2   | column 3 | column 4 |
  +------------------------+------------+----------+----------+
  | body row 2             | Cells may span columns.          |
  +------------------------+------------+---------------------+
  | body row 3             | Cells may  | - Table cells       |
  +------------------------+ span rows. | - contain           |
  | body row 4             |            | - body elements.    |
  +------------------------+------------+----------+----------+
  | body row 5             | Cells may also be     |          |
  |                        | empty: ``-->``        |          |
  +------------------------+-----------------------+----------+

+------------------------+------------+----------+----------+
| Header row, column 1   | Header 2   | Header 3 | Header 4 |
| (header rows optional) |            |          |          |
+========================+============+==========+==========+
| body row 1, column 1   | column 2   | column 3 | column 4 |
+------------------------+------------+----------+----------+
| body row 2             | Cells may span columns.          |
+------------------------+------------+---------------------+
| body row 3             | Cells may  | - Table cells       |
+------------------------+ span rows. | - contain           |
| body row 4             |            | - body elements.    |
+------------------------+------------+----------+----------+
| body row 5             | Cells may also be     |          |
|                        | empty: ``-->``        |          |
+------------------------+-----------------------+----------+

Simple Tables
~~~~~~~~~~~~~

.. container:: d-flex flex-column flex-sm-row

   .. code-block:: text

      # markup for a simple table

      =====  =====  ======
      Inputs        Output
      ------------  ------
        A      B    A or B
      =====  =====  ======
      False  False  False
      True   False  True
      False  True   True
      True   True   True
      =====  =====  ======

   .. container::  p-0 m-0

      =====  =====  ======
      Inputs        Output
      ------------  ------
        A      B    A or B
      =====  =====  ======
      False  False  False
      True   False  True
      False  True   True
      True   True   True
      =====  =====  ======

Big Tables
~~~~~~~~~~

+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+
| Header 1   | Header 2   | Header 3  | Header 1   | Header 2   | Header 3  | Header 1   | Header 2   | Header 3  | Header 1   | Header 2   | Header 3  |
+============+============+===========+============+============+===========+============+============+===========+============+============+===========+
| body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  |
+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+
| body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  |
+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+
| body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  |
+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+
| body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  |
+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+

.. Note:: Tables have an ``overflow: auto`` property enabled by default.

List Tables
-----------

::

  # example markup for a list table

  .. list-table:: List tables can have captions.
    :widths: 10 5 10 50
    :header-rows: 1
    :stub-columns: 1

    * - List table
      - Header 1
      - Header 2
      - Header 3 long. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    * - Stub Row 1
      - Row 1
      - Column 2
      - Column 3 long. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    * - Stub Row 2
      - Row 2
      - Column 2
      - Column 3 long. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    * - Stub Row 3
      - Row 3
      - Column 2
      - Column 3 long. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

.. list-table:: List tables can have captions.
  :widths: 10 5 10 50
  :header-rows: 1
  :stub-columns: 1

  * - List table
    - Header 1
    - Header 2
    - Header 3 long. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  * - Stub Row 1
    - Row 1
    - Column 2
    - Column 3 long. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  * - Stub Row 2
    - Row 2
    - Column 2
    - Column 3 long. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  * - Stub Row 3
    - Row 3
    - Column 2
    - Column 3 long. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

.. Tip:: You can also add images in list tables.

.. list-table:: This is a list table with images in it.

    * - .. figure:: ./_static/images/fibonacci.png
           :alt: Nicolás Damián Visceglio | pixabay
           :target: https://pixabay.com/users/ndv-2997446/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1601158

           This is a caption for this image of a fibonacci spiral.

      - .. figure:: ./_static/images/rgb.png
           :alt: OpenClipart-Vectors | Pixabay
           :target: https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=154782

           This is a caption for this image of RGB color mixing.

.. Note:: Big images in tables, unless their dimensions are specified,
          will be automatically resized to fit the space available.

          See: :doc:`images`