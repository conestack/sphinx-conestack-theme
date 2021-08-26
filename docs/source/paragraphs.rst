Paragraph Level Markup
======================

Inline Markup
-------------

Paragraphs contain text and may also contain inline markup, such as:

*emphasis*, **strong emphasis**, ``inline literals``,
standalone hyperlinks (http://www.python.org), internal cross-references (example_),
external hyperlinks with embedded URIs (`Python web site <http://www.python.org>`__), footnote references
(manually numbered [1]_, anonymous auto-numbered [#]_, labeled auto-numbered [#label]_, or symbolic [*]_),
citation references ([12]_), substitution references (|example|), and _`inline hyperlink targets`.

.. Note:: Invalid hyperlinks will display red_.

GUI labels are a useful way to indicate that :guilabel:`Some action` is to be taken by the user.
The GUI label should not run over ``line-height`` so as not to :guilabel:`interfere` with text from adjacent lines.

Key-bindings indicate that the read is to press a button on the keyboard or mouse,
for example :kbd:`MMB` and :kbd:`Shift-MMB`. Another useful markup to indicate a user action
is to use ``menuselection``:

:menuselection:`My --> Software --> Some menu --> Some sub menu 1 --> sub menu 2`.


Math
----

This is a test. Here is an equation:
:math:`X_{0:5} = (X_0, X_1, X_2, X_3, X_4)`.

Here is another:

.. math::
    :label: This is a label

    \nabla^2 f =
    \frac{1}{r^2} \frac{\partial}{\partial r}
    \left( r^2 \frac{\partial f}{\partial r} \right) +
    \frac{1}{r^2 \sin \theta} \frac{\partial f}{\partial \theta}
    \left( \sin \theta \, \frac{\partial f}{\partial \theta} \right) +
    \frac{1}{r^2 \sin^2\theta} \frac{\partial^2 f}{\partial \phi^2}

You can add a link to equations like the one above :eq:`This is a label` by using ``:eq:``.

Blocks
------

Literal Blocks
~~~~~~~~~~~~~~

Literal blocks are indicated with a double-colon ("::") at the end of
the preceding paragraph.  They can be indented::

    this is a literal block
        with indentation

Or they can be quoted without indentation::

>> This is a literal block
> without indentation


Line Blocks
-----------

| This is a line block.  It ends with a blank line.
| Each new line begins with a vertical bar ("|").
| Line breaks are preserved.

The following example demonstrates a linke block with indentation.

    | Lorem ipsum dolor sit amet,
    | consetetur sadipscing elitr,
    | sed diam nonumy eirmod tempor invidunt
    | ut labore et dolore magna aliquyam


Block Quotes
------------

Block quotes consist of indented body elements.

    Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt
    ut labore et dolore magna aliquyam


References
----------

Footnotes
~~~~~~~~~

.. [1] A footnote contains body elements, consistently indented by at
   least 3 spaces.

   This is the footnote's second paragraph.

.. [#label] Footnotes may be numbered, either manually (as in [1]_) or
   automatically using a "#"-prefixed label.  This footnote has a
   label so it can be referred to from multiple places, both as a
   footnote reference ([#label]_) and as a hyperlink reference
   (label_).

.. [#] This footnote is numbered automatically and anonymously using a
   label of "#" only.


Glossary
~~~~~~~~

This is a glossary with definition terms for thing like :term:`Writing`:

.. glossary::

  Documentation
     Provides users with the knowledge they need to use something.

  Reading
     The process of taking information into ones mind through the use of eyes.

  Writing
     The process of putting thoughts into a medium for other people to :term:`read <Reading>`.


Images & Figures
----------------

Images
~~~~~~

An image directive:

.. image:: https://cdn.pixabay.com/photo/2016/02/19/11/33/background-1209772_960_720.jpg

.. Hint:: If an image is bigger that its container allows, it will be automatically resized.
         Read more: :doc:`images`

Figures
~~~~~~~

.. figure:: https://cdn.pixabay.com/photo/2017/06/14/01/43/background-2400765_960_720.jpg
   :alt: reStructuredText, the markup syntax

   A figure is an image with a caption and/or a legend:

   +------------+-----------------------------------------------+
   | this       | is an example text.                           |
   +------------+-----------------------------------------------+
   | it         | is structured as a table.                     |
   +------------+-----------------------------------------------+


Admonitions
-----------

.. DANGER:: This is an example admonition.

.. Attention:: This is an example admonition.

.. Error:: This is an example admonition.

.. Caution:: This is an example admonition.

.. WARNING:: This is an example admonition

.. Hint:: This is an example admonition.

.. Tip:: This is an example admonition with a table.

    +---------+
    | Example |
    +=========+
    | Example1|
    +---------+
    | Example2|
    +---------+
    | Example3|
    +---------+

.. Important::
   - This is an example admonition.

     - It can include a list.
     - And other elements.

.. Note:: This is a note.
   Equations within a note:
   :math:`G_{\mu\nu} = 8 \pi G (T_{\mu\nu}  + \rho_\Lambda g_{\mu\nu})`.

.. admonition:: This is a custom admonition.
    Its default color is gray.


Download Links
--------------

:download:`This is an example download link <https://cdn.pixabay.com/photo/2017/06/14/01/43/background-2400765_960_720.jpg>`
