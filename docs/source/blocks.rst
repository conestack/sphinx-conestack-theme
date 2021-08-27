Code Blocks
===========

Code Blocks (``.. code-block::``) are a convenient way to display parts of your code
with formatting enabled.

Python Code Block
-----------------

Format the code block for python with ``.. code-block:: python``.

.. code-block:: python

    """This is a module docstring.
    """
    import os

    class Test:
        conf = {
            'key', 'value'
        }

        def __init__(self, a):
            """This is a docstring.

            :param a: A Parameter.
            """
            x = 1 + 1
            li = ['a', 'b', "c"]

    def a_function(*a, **kw):
        # this is a comment
        print(a, kw)
        return Test(a)


Javascript Code Block
---------------------

Format the code block for python with ``.. code-block:: js``.

.. code-block:: js

    let foo = 1;
    const bar = '2';
    var baz = "Hello";

    class AClass {

        constructor() {
            this.param = 1.234;
        }
    }

    class BClass extends AClass {

        constructor(param) {
            super();
            this.param = param;
        }
    }

    /**
     * A Comment
     *
     * @param {Object} param - An object.
     */
    function a_function(param) {
        // A comment
        let b = new BClass();
    }


Shell Script Code Block
-----------------------

Format the code block for shell with ``.. code-block:: sh``.

.. code-block:: sh

    #!/bin/bash

    function hello {
        local x=$1
        return 0
    }

    echo "Hello $(whoami)"

    hello

    exit 0