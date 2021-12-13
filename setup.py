from setuptools import setup
import os


def read_file(name):
    with open(os.path.join(os.path.dirname(__file__), name)) as f:
        return f.read()


version = '1.0b3'
shortdesc = 'Mobile friendly Bootstrap 5 based Sphinx theme'
longdesc = '\n\n'.join([read_file(name) for name in [
    'README.rst',
    'CHANGES.rst',
    'LICENSE.rst'
]])


setup(
    name='sphinx-conestack-theme',
    version=version,
    description=shortdesc,
    long_description=longdesc,
    classifiers=[
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Intended Audience :: System Administrators',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Topic :: Software Development :: Documentation',
        'Topic :: Software Development'
    ],
    keywords='Sphinx theme conestack',
    author='Cone Contributors',
    author_email='dev@conestack.org',
    url='https://github.com/conestack/sphinx-conestack-theme',
    license='Simplified BSD',
    packages=['sphinx_conestack_theme'],
    include_package_data=True,
    zip_safe=False,
    install_requires=['Sphinx'],
    entry_points={
        'sphinx.html_themes': [
            'conestack = sphinx_conestack_theme',
        ]
    }
)
