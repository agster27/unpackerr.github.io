#!/bin/bash -x
# The beginning: https://github.com/Unpackerr/unpackerr/pull/459
# The generator: https://github.com/Unpackerr/unpackerr/tree/main/init/config

# Bail on an errors.
set -e

# We do this because go cache will download an older version.
go env -w 'GOPRIVATE=github.com/Unpackerr/*'

# Move into the directory <this script>/docs/install.
pushd "$(dirname -- "${BASH_SOURCE[0]}")/docs/install"

# Run the config generator directly from github.
go run github.com/Unpackerr/unpackerr/init/config@main -type documentation 2>&1

# Go back to wherever we were when we started.
popd