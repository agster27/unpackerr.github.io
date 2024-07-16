#!/bin/bash

set -e

pushd "$(dirname -- "${BASH_SOURCE[0]}" )/docs/install"
go run github.com/Unpackerr/unpackerr/init/config@dn2_conf_builder docs
popd