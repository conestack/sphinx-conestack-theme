#!/bin/bash

set -e

if [ -d "docs/html" ]; then
    rm -r docs/html
fi

./scripts/styles.sh

./bin/sphinx-build docs/source/ docs/html
