# Rampage

An off-ramping platform to covert stable crypto-currencies to fiat.

## MVP Goals

- To cover the Nigerian market
- Integrate CUSD stable coin


## Project architecture

This project uses a turborepo for both the frontend and the backend as they are both written in 
javascript.

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## Short Description
Generate nice looking gift cards which your family and friends can claim as airtime.
## How it was made

This project was built using Next.js on the frontend and Hono.js on the backend. When a user creates a gift card of a certain amount for a friend, this friend will be notified and can claim the amount specified on the gift card as airtime. The backend service call mobile vtu platform which then credits the specified phone number provided by the user.

## Tools

Remix, Ethers.js, Wagmi, Viem

## Programming Language
Javascript, Typescript and Solidity

## Github repo
- https://github.com/Philix27/rampage