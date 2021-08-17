#!/bin/bash

./scripts/clean.sh

python3 -m venv .
./bin/pip install -e .
