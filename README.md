# Gilder

## Set up instructions

Solana

1. Install Solana CLI tools - `sh -c "$(curl -sSfL https://release.solana.com/v1.7.14/install)"`
   -check its installed correctly with `solana --version`

Rust + Anchor

1. `rustup component add rustfmt`
2. `source $HOME/.cargo/env`
3. `rustup component add rustfmt`
4. `npm install -g mocha`
5. `cargo install --git https://github.com/project-serum/anchor --tag v0.16.2 anchor-cli --locked`
6. `npm install -g @project-serum/anchor`
   -check its installed correclty with `anchor --version`

## To Run

`yarn install`

`yarn start`

### Inspired by

https://dev.to/dabit3/the-complete-guide-to-full-stack-solana-development-with-react-anchor-rust-and-phantom-3291
