#!/bin/bash

set -e

./scripts/clean.sh

python3 -m venv .
./bin/pip install -e .

npm --no-save install sass
