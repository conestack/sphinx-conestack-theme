Images and Figures
==================

Inserting Images
----------------

Images can be inserted with the ``.. image::`` or ``.. figure::`` command:

.. code-block:: python

    .. image:: ./_static/image.jpg
    .. figure:: https://webpage/image.jpg

Insert images either locally or from a URL.


Images
~~~~~~

Inserting via ``.. image::`` will produce a simple image element.
You can change the width and height of an image by adding ``:width:`` and/or ``:height:`` to it.

Images can also link to a website with the ``:target:`` attribute.

``:alt:`` sets the alt name of an image for screen readers.

.. code-block:: python

    .. image:: ./_static/image.jpg
       :width: 150px
       :height: 200px
       :alt: Example Image
       :target: https://webpage/image.jpg

.. Hint:: Conestack Sphinx Theme automatically sets the image ``alt`` as ``title`` to be displayed on hover.
.. Note:: Large images without size specification will be automatically resized 
          to fit the space available.


Figures
~~~~~~~

A figure is an image with a caption and/or a legend.

Use ``width``, ``height``, ``alt`` and ``target`` as you would with ``.. image::``.

.. code-block:: python

    .. figure:: ./_static/image.jpg
       :width: 150px
       :height: 200px
       :alt: Example Image
       :target: https://webpage/image.jpg

       This is the caption of a figure.

.. figure:: ./_static/spiral.png

   This is the caption of a figure.

   This is the content of a figure.

.. Hint:: Other elements can be nested in the content of a figure.


Images in tables
----------------

Images and figures can also be inserted in tables.

.. list-table:: This is a list table with figures in it.

    * - .. figure:: ./_static/rgb.png
           :width: 180px
           :alt: OpenClipart-Vectors | Pixabay
           :target: https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=154782

           This is an image of rgb color mixing.

      - .. figure:: ./_static/monitor.png
           :width: 180px
           :alt: Clker-Free-Vector-Images | Pixabay
           :target: https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=32872

           This is an image of a monitor.

.. Important:: More info on tables: :doc:`tables`


Images in hlist
---------------

Add images to a hlist.

.. hlist::
    :columns: 2

    - .. figure:: ./_static/rgb.png
         :width: 40px
         :alt: OpenClipart-Vectors | Pixabay
         :target: https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=154782

         This is a short caption for a figure.

    - .. figure:: ./_static/monitor.png
         :width: 40px
         :alt: Clker-Free-Vector-Images | Pixabay
         :target: https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=32872

         This is a short caption for a figure.
