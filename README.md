# unpackerr.zip

[This repository](https://github.com/Unpackerr/unpackerr.github.io)
contains the source and files that create [https://unpackerr.zip](https://unpackerr.zip).

## Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

Clone the repo, then cd into the new folder and run this first.

```console
yarn install
```

## Local Development

**Use this when developing locally!**

This command starts a local development server and open up a browser window.
Most changes are reflected live without having to restart the server.

```console
yarn start
```

## Build

This command generates static content into the `build` directory and can be served using apache or nginx, etc.

```console
yarn build
```

## Deployment

Github Actions automatically builds the `main` branch and pushes it to the `gh-pages` branch.

## Contributing

1. Fork the repo.
1. Make your changes; test them with `yarn`.
1. Test `docs/` with `mdl docs` and `codespell docs`.
1. Make a pull request.
1. Bug me on [Discord](https://golift.io/discord) if I don't respond in a timely manner.

## MDL Linter

To run the linter locally, I had to do this on my Mac, but `bundler` may work too.
GH actions runs a newer version than 0.11.0, but this worked for me for _something_.

```shell
brew install rbenv ruby-build
rbenv install 3.2.2
eval "$(rbenv init -)"
rbenv shell 3.2.2
gem install --no-document mdl
mdl docs
```

## Codespell

```shell
brew install codespell
```