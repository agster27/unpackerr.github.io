#!/bin/bash
# The beginning: https://github.com/Unpackerr/unpackerr/pull/459
# The generator: https://github.com/Unpackerr/unpackerr/tree/main/init/config

set -e
go env -w GOPRIVATE=github.com/Unpackerr/unpackerr/*

pushd "$(dirname -- "${BASH_SOURCE[0]}")/docs/install"
go run github.com/Unpackerr/unpackerr/init/config@main docs
popd