Verify groestlcoin address signature online
=======================================

This implementation can accept get parameters, so it is linkable externally, and users could easily copy-paste one link to their counterparties to verify.
This should be useful for people who do OTC and regularly do proof-of-funds before the transaction.

Try it
------

* hosted on https://verify.groestlcoin.org/VerifySignature

Built with
----------

* Next.js
* Groestlcoinjs
* Typescript
* Esplora API (address balance)
* ..compiles into static html files so it can run completely offline


Build it yourself
-----------------

```js
npm i
npm run export
```

And it is ready to be hosted on the website (should be served from `/VerifySignature/` path, i.e. `http://localhost:3000/VerifySignature`).
Use `npm run dev` for development.

License
-------

MIT
