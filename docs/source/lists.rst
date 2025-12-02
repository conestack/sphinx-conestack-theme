Lists
=====

Enumerated Lists
----------------

Auto-enumerate lists by prepending ``#.``. ::

  #. List item 1

     #. List item 1.1

  #. List item 2

     #. List item 2.1

#. List item 1

   #. List item 1.1

#. List item 2

   #. List item 2.1

.. Caution:: There must be a blank line between each list item.

Manually enumerate by prepending a number. ::

  2. List item 2

     3. Three

     4. Four

     5. Five

2. List item 2

   3. Three

   4. Four

   5. Five


Definition Lists
----------------

Use definition lists for terms and definitions. ::

  Term
    Definition
  Term : classifier
      Definition paragraph 1.

      Definition paragraph 2.
  Term
      Definition

Term
    Definition
Term : classifier
    Definition paragraph 1.

    Definition paragraph 2.
Term
    Definition

.. Hint:: See the documentation for :doc:`paragraphs` for more information on Glossaries.


Option Lists
------------

For listing command-line options: ::

  -a            command-line option "a".
  -b file       options can have arguments.
  --long        options can also be long.
  --input=file  long options can also have
                arguments.
  -x, -y, -z    Multiple options are an "option group".

-a            command-line option "a".
-b file       options can have arguments.
--long        options can also be long.
--input=file  long options can also have
              arguments.
-x, -y, -z    Multiple options are an "option group".

.. Caution:: There must be at least two spaces between the option and the description.


Field list
----------

Use ``.. bibliographic fields:`` for a simple field list. ::

  .. bibliographic fields:

  :Author: David Goodger
  :Address: 123 Example Street
            Example, EX  Canada
            A1B 2C3
  :Contact: docutils-develop@lists.sourceforge.net
  :date: $Date: 2012-01-03 19:23:53 +0000 (Tue, 03 Jan 2012) $

  :Dedication:

      For Docutils users & co-developers.

  :abstract:

      This document is a demonstration of the reStructuredText markup
      language, containing examples of all basic reStructuredText
      constructs and many advanced constructs.

.. bibliographic fields:

:Author: David Goodger
:Address: 123 Example Street
          Example, EX  Canada
          A1B 2C3
:Contact: docutils-develop@lists.sourceforge.net
:date: $Date: 2012-01-03 19:23:53 +0000 (Tue, 03 Jan 2012) $

:Dedication:

    For Docutils users & co-developers.

:abstract:

    This document is a demonstration of the reStructuredText markup
    language, containing examples of all basic reStructuredText
    constructs and many advanced constructs.


Bullet Lists
------------

Simple
^^^^^^

Create a simple list by using hyphens. ::

  - A simple list.
  - Simple lists do not contain multiple paragraphs.
  - In the case of a nested list

    - There are no margins between elements

- A simple list.
- Simple lists do not contain multiple paragraphs.
- In the case of a nested list

  - There are no margins between elements


Complex
^^^^^^^

Complex Lists can create multiple paragraphs. ::

  - A bullet list

    + Nested bullet list.
    + Nested item 2.

  - Item 2.

    Paragraph 2 of item 2.

    * Nested bullet list.
    * Nested item 2.

      - Third level.
      - Item 2.

  - This item has multiple paragraphs.

    This item has multiple paragraphs.

- A bullet list

  + Nested bullet list.
  + Nested item 2.

- Item 2.

  Paragraph 2 of item 2.

  * Nested bullet list.
  * Nested item 2.

    - Third level.
    - Item 2.

- This item has multiple paragraphs.

  This item has multiple paragraphs.


Nesting elements
^^^^^^^^^^^^^^^^

Most elements can be nested in a list.

- Examples:

  - `This is a nested link on second level <http://www.google.com>`_

  - code may be embedded in a list.

    .. literalinclude:: api.rst
        :language: rst
        :linenos:

  - admonitions can also be nested.

    .. note::
        This is a note nested in a list.
  - ``this is an inline literall``


Hlists
------

Create a horizontal list by prepending ``.. hlist::``. ::

  .. hlist::
    :columns: 2

    - First item
    - Second item
    - Third item
    - Forth item
    - Fifth item
    - Sixth item

.. hlist::
    :columns: 2

    - First item
    - Second item
    - Third item
    - Forth item
    - Fifth item
    - Sixth item


Hlist with images
-----------------

Images and figures can also be added to a horizontal list. ::

  .. hlist::
    :columns: 3

    - .. figure:: ./_static/images/spiral.png
         :width: 200px
         :alt: David Zydd | Pixabay
         :target: https://pixabay.com/users/davidzydd-985081/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2481559">David Zydd</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2481559

         This is a short caption for a figure.

    - .. figure:: ./_static/images/drops.jpg
         :width: 200px
         :alt: Leohoho | pixabay
         :target: https://pixabay.com/users/leohoho-16235524/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5470471

         This is another caption.

    - .. figure:: ./_static/images/rgb.png
           :width: 180px
           :alt: OpenClipart-Vectors | Pixabay
           :target: https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=154782

           This is yet another caption.

.. hlist::
    :columns: 3

    - .. figure:: ./_static/images/spiral.png
         :width: 200px
         :alt: David Zydd | Pixabay
         :target: https://pixabay.com/users/davidzydd-985081/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2481559">David Zydd</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2481559

         This is a short caption for a figure.

    - .. figure:: ./_static/images/drops.jpg
         :width: 200px
         :alt: Leohoho | pixabay
         :target: https://pixabay.com/users/leohoho-16235524/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5470471

         This is another caption.

    - .. figure:: ./_static/images/rgb.png
           :width: 180px
           :alt: OpenClipart-Vectors | Pixabay
           :target: https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=154782

           This is yet another caption.
