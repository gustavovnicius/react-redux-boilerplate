React / Redux Boilerplate
=========================
[![Build Status](https://travis-ci.org/gustavovnicius/react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/gustavovnicius/react-redux-boilerplate)

<a href='https://facebook.github.io/react/'><img src='https://scontent.fpoa8-2.fna.fbcdn.net/v/t39.2365-6/11057038_1603675009889853_2020621244_n.png?oh=9ec2250985111d5a9ef21d32a8e45d24&oe=5A51590B' height='60'></a> <a href='http://redux.js.org'><img src='https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png' height='60'></a>

Boilerplate for front-end apps with React and Redux. The goal is to provide a simple and functional boilerplate that you could bootstrap your project with. Enjoy it! :sunglasses: (Any feedback will be welcome!)

Main tools
----------

- react: Lib for build UIs. Has its main concept based upon components

- react-hmr: Hot reload for react components.

- redux: State container. react-redux bindings already included, allow to easily share state between components.

- redux-thunk: Middleware to dispatch async actions

Another tools / patterns
------------------------

- webpack: Bundle and minify your app into a single .js (its a poor explanation, I'll improve it ;) ), integrates with babel (and has another loaders too, so you can write good ol' modular JS with it.

- jest: Painless JavaScript test framework.

- redux-logger: Logger middleware for easily debug your app.

- babel: JS transpiler. With it you can rely upon ES6, ES7, Stage-0, JSX and a lot of other features. You can use the next generation JS today.

Getting started
---------------

- Git clone this repo

```sh
git clone git@github.com:gustavovnicius/react-redux-boilerplate.git
```

- [Install NVM](https://github.com/creationix/nvm#install-script) and a [pick](https://github.com/creationix/nvm#usage) a node version.

- In this repo root dir, run `npm install` (`npm i` for friends)

Running

```sh
npm start
```
- In a browser of your choice hit [localhost:8080](localhost:8080)

- You are good to go :)

Testing

This repo has a small example test, just take a look at [it](https://github.com/gustavovnicius/react-redux-boilerplate/blob/master/spec/components/single.spec.js)

To run your test suite:
```sh
npm test
# or
npm run test:watch
```

Bundling for production

```sh
npm run deploy
```

It will generate an `index.html` file pointing to the bundled `.js` files inside `dist` dir. It will generate two `.js` files: One, `app.[hash].js` will be your application, the other one `vendor.[hash].js` will include all your vendors, for caching.
The bundled files will include a hash in their names for the purpose of cache busting.

Contributing
------------

Feel free to open an issue, PR or reaching me if you have any questions.

TODO
----

- Redux Saga
