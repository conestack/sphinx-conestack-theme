from setuptools import setup
import os


def read_file(name):
    with open(os.path.join(os.path.dirname(__file__), name)) as f:
        return f.read()


version = '1.0a1.dev0'
shortdesc = 'Sphinx Theme for Conestack'
longdesc = '\n\n'.join([read_file(name) for name in [
    'README.rst',
    'CHANGES.rst',
    'LICENSE.rst'
]])


setup(
    name='sphinx_conestack_theme',
    version=version,
    description=shortdesc,
    long_description=longdesc,
    classifiers=[
        'License :: OSI Approved :: BSD License',
        'Intended Audience :: Developers',
        'Topic :: Software Development',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
    ],
    keywords='Sphinx theme conestack',
    author='Cone Contributors',
    author_email='dev@conestack.org',
    url='https://github.com/conestack/sphinx-conestack-theme',
    license='Simplified BSD',
    packages=['sphinx_conestack_theme'],
    zip_safe=False,
    install_requires=['Sphinx'],
    entry_points={
        'sphinx.html_themes': [
            'conestack = sphinx_conestack_theme',
        ]
    }
)
