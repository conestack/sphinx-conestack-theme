#!/bin/bash

SASS_BIN="./node_modules/sass/sass.js"
SASS_DIR="./sphinx_conestack_theme/conestack/scss"
TARGET_DIR="./sphinx_conestack_theme/conestack/static"

$SASS_BIN $SASS_DIR/conestack.scss $TARGET_DIR/conestack.css
