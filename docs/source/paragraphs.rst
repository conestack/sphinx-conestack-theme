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

.. Warning:: Invalid hyperlinks will display red_.

GUI labels
~~~~~~~~~~

GUI labels (``:guilabel:``) are a useful way to indicate that :guilabel:`Some action` is to be taken by the user.
The GUI label should not run over ``line-height`` so as not to :guilabel:`interfere` with text from adjacent lines.

Key bindings
~~~~~~~~~~~~

Key-bindings (``:kbd:``) indicate that the read is to press a button on the keyboard or mouse,
for example :kbd:`MMB` and :kbd:`Shift-MMB`. 

Menu Selection
~~~~~~~~~~~~~~

Another useful markup to indicate a user action
is to use ``:menuselection:``:

:menuselection:`My --> Software --> Some menu --> Some sub menu 1 --> sub menu 2`.


Math
----

- Here is an equation formatted with ``:math:``
   :math:`X_{0:5} = (X_0, X_1, X_2, X_3, X_4)`.

- A more complex example
   .. math::

      \nabla^2 f =
      \frac{1}{r^2} \frac{\partial}{\partial r}
      \left( r^2 \frac{\partial f}{\partial r} \right) +
      \frac{1}{r^2 \sin \theta} \frac{\partial f}{\partial \theta}
      \left( \sin \theta \, \frac{\partial f}{\partial \theta} \right) +
      \frac{1}{r^2 \sin^2\theta} \frac{\partial^2 f}{\partial \phi^2}

.. Note:: Math elements have ``overflow:auto`` enabled by default.

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

Line blocks end with a blank line, preserving line breaks.

Each new line begins with a vertical bar ("|"). ::

    | Lorem ipsum dolor sit amet,
    | consetetur sadipscing elitr,
    | sed diam nonumy eirmod tempor invidunt
    | ut labore et dolore magna aliquyam


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

::

   .. [1] A simple footnote

      This is the footnote's second paragraph.

   .. [#label] A numbered footnote with a label.

   .. [#] This footnote is numbered automatically and anonymously.


Glossary
~~~~~~~~

This is a glossary with definition terms like :term:`Writing`:

.. glossary::

  Documentation
     Provides users with the knowledge they need to use something.

  Reading
     The process of taking information into ones mind through the use of eyes.

  Writing
     The process of putting thoughts into a medium for other people to :term:`read <Reading>`.

Link to a term with ``:term:``. ::

   :term:`description <Termname>`

.. Tip:: Try clicking on the terms above!


Admonitions
-----------

Use admonitions for important information.

.. DANGER:: This is an example danger admonition.

   ``.. DANGER::``

.. Attention:: This is an example attention admonition.

   ``.. Attention::``

.. Error:: This is an example error admonition.

   ``.. Error::``

.. Caution:: This is an example caution admonition.

   ``.. Caution::``

.. WARNING:: This is an example warning admonition

   ``.. WARNING::``

.. Hint:: This is an example hint admonition.

   ``.. Hint::``

.. Tip:: This is an example tip admonition.

    ``.. Tip::``

.. Important:: This is an example important admonition.

   ``.. Important::``

.. Note:: This is a note.

   ``.. Note::``

.. admonition:: This is a custom admonition.
    Its default color is gray.

    ``.. some-name::``

Admonition nesting
~~~~~~~~~~~~~~~~~~

Most elements can be nested in an admonition, for example:

.. Warning::

   Math elements: :math:`X_{0:5} = (X_0, X_1, X_2, X_3, X_4)`.

.. Important::

   Tables:

   +----------+----------+----------+----------+----------+
   | Header1  | Header2  | Header3  | Header4  | Header5  |
   +----------+----------+----------+----------+----------+
   | Content  | Content  | Content  | Content  | Content  |
   +----------+----------+----------+----------+----------+
   | Content  | Content  | Content  | Content  | Content  |
   +----------+----------+----------+----------+----------+
   | Content  | Content  | Content  | Content  | Content  |
   +----------+----------+----------+----------+----------+

.. Tip::

   Images and Figures:

   .. figure:: ./_static/fibonacci.png
      :width: 300px
      :alt: Nicolás Damián Visceglio | pixabay
      :target: https://pixabay.com/users/ndv-2997446/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1601158

      This is a caption for this image of a fibonacci spiral.

.. Note::

   Links:

   :download:`This is an example download link <https://cdn.pixabay.com/photo/2017/06/14/01/43/background-2400765_960_720.jpg>`


Download Links
--------------

:download:`This is an example download link <https://cdn.pixabay.com/photo/2017/06/14/01/43/background-2400765_960_720.jpg>`

Use download links by prepending ``:download:`` like so: ::

   :download:`Title <https://download-link.com>`
