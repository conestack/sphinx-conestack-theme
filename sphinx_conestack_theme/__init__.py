from pygments.style import Style
from pygments.token import (
    Comment,
    Error,
    Generic,
    Keyword,
    Name,
    Number,
    Operator,
    String,
    Whitespace
)
from sphinx.environment.adapters.toctree import TocTree
import os


class ConestackStyle(Style):
    background_color = '#f8f9fa'
    default_style = ''
    line_number_color = '#666666'

    styles = {
        Whitespace: '#bbbbbb',

        Comment: 'italic #727272',
        Comment.Preproc: 'noitalic #069',
        Comment.Special: 'noitalic bg:#fff0f0',

        Keyword: '#069',
        Keyword.Pseudo: 'nobold',
        Keyword.Type: 'nobold #902000',

        Operator: '#555',
        Operator.Word: '#6f42c1',

        Name.Attribute: '#c30',
        Name.Builtin: '#6b62de',
        Name.Class: '#0e84b5',
        Name.Constant: '#60add5',
        Name.Decorator: '#555555',
        Name.Entity: 'bold #d55537',
        Name.Exception: '#069',
        Name.Function: '#069',
        Name.Label: 'bold #002070',
        Name.Namespace: 'bold #0e84b5',
        Name.Tag: 'bold #062873',
        Name.Variable: '#bb60d5',

        Number: "bold #fd7e14",
        Number.Integer: "bold #fd7e14",
        Number.Float: "bold #fd7e14",
        Number.Hex: "bold #fd7e14",
        Number.Oct: "bold #fd7e14",

        String: '#c30',
        String.Doc: 'italic',
        String.Escape: 'bold #c30',
        String.Interpol: 'italic #70a0d0',
        String.Other: '#c65d09',
        String.Regex: '#235388',
        String.Symbol: '#517918',

        Generic.Deleted: '#A00000',
        Generic.Emph: 'italic',
        Generic.Error: '#FF0000',
        Generic.Heading: 'bold #000080',
        Generic.Inserted: '#00A000',
        Generic.Output: '#888',
        Generic.Prompt: 'bold #c65d09',
        Generic.Strong: 'bold',
        Generic.Subheading: 'bold #800080',
        Generic.Traceback: '#04D',

        Error: 'border:#FF0000'
    }


def render_localtoc(app, pagename):
    builder = app.builder
    toctree = TocTree(app.env).get_toc_for(pagename, builder)
    children = toctree[0].children[1:]
    return '\n'.join([
        builder.render_partial(child)['fragment'] for child in children
    ])


def setup_localtoc(app, pagename, templatename, context, doctree):
    def _render():
        return render_localtoc(app, pagename)
    context['cs_localtoc'] = _render


def setup(app):
    base_path = os.path.dirname(__file__)
    theme_path = os.path.abspath(os.path.join(base_path, 'conestack'))
    app.add_html_theme('conestack', theme_path)
    hpi = app.config.values['html_permalinks_icon']
    app.config.values['html_permalinks_icon'] = ('#', hpi[1], hpi[2])
    app.connect('html-page-context', setup_localtoc)
