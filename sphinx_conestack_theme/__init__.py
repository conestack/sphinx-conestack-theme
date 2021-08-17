import os


def setup(app):
    app.add_html_theme(
        'conestack',
        os.path.abspath(os.path.join(os.path.dirname(__file__), 'conestack'))
    )
