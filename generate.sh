# The beginning: https://github.com/Unpackerr/unpackerr/pull/459
# The generator: https://github.com/Unpackerr/unpackerr/tree/main/init/config

# We do this because go cache will download an older version.
go env -w 'GOPRIVATE=github.com/Unpackerr/*'

# Run the config generator directly from github.
go run github.com/Unpackerr/unpackerr/init/config@main --type docusaurus --output docs/install/generated
