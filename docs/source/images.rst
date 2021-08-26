Images
=========


Insert images
-------------

Images can be inserted with the ``.. image::`` or ``.. figure::`` command:

.. code-block:: python

    .. figure:: https://webpage/image.jpg

You can change the width and height from an external image by adding ``:width:`` and/or ``:height:`` to it:

.. code-block:: python

    .. figure:: https://webpage/image.jpg
       :width: 150px
       :height: 200px

.. Note:: External images without size specification will be automatically resized 
          to fit the space available.


Images in tables
----------------

Images can also be inserted in tables.

A caption can be added.

.. list-table:: This is a list table with images in it.

    * - .. figure:: https://cdn.pixabay.com/photo/2015/05/19/07/44/browser-773215_960_720.png
           :width: 200px

      - .. figure:: https://cdn.pixabay.com/photo/2012/04/13/17/00/lcd-32872_960_720.png
           :width: 200px

           This is a caption for a figure.

.. Hint:: More info on tables: :doc:`tables`


Images in hlist
---------------

Add images to a hlist.

.. hlist::
    :columns: 2

    - .. figure:: https://cdn.pixabay.com/photo/2015/05/19/07/44/browser-773215_960_720.png
         :width: 40px

         This is a short caption for a figure.

    - .. figure:: https://cdn.pixabay.com/photo/2012/04/13/17/00/lcd-32872_960_720.png
         :width: 40px

         This is a short caption for a figure.
