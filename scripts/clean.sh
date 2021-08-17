#!/bin/bash

set -e

to_remove=(
    bin dist docs/html include lib64 lib pyvenv.cfg share
)

for item in "${to_remove[@]}"; do
    if [ -e "$item" ]; then
        rm -r "$item"
    fi
done
