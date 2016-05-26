React / Redux Boilerplate
======================================
[![Build Status](https://travis-ci.org/gustavovnicius/react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/gustavovnicius/react-redux-boilerplate)

Boilerplate for front-end apps with React and Redux. The goal is to provide a simple and functional boilerplate that you could bootstrap your project with. Enjoy it! :sunglasses: (Any feedback will be welcome!)

Main tools
-----------------------------------

- react: Lib for build UIs. Has its main concept based upon components

- react-hmr: Hot reload for react components.

- redux: State container. Compatible with React, allow to easily share state between components.

- redux-thunk: Middleware to dispatch async actions

Another tools / patterns
----------------------------------

- webpack: Bundle and minify your app into a single .js (its a poor explanation, I'll improve it ;) ), integrates with babel (and has another loaders too, so you can write good ol' modular JS with it.

- karma: Test runner framework. Allow you to test your js code directly on browsers.

- jasmine: BDD for JS

- redux-logger: Logger middleware for easily debugging your app.

- babel: JS transpiler. With it you can rely upon ES6, ES7, Stage-0, JSX and a lot of other features. You can use the next generation JS today.

Getting started
---------------------

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
- In a browser of your choice (as long as it is Chromium :D ) hit [localhost:8080](localhost:8080)

- You are good to go :)

Testing

This repo has a small example test, just take a look at [it](https://github.com/gustavovnicius/react-redux-boilerplate/blob/master/specs/components/single.spec.js)

To run your test suite:
```sh
  npm test
```

Of course you can customize the [karma.conf.js](https://github.com/gustavovnicius/react-redux-boilerplate/blob/master/karma.conf.js) file to best fit your needs (currently it runs your tests just on PhantomJS).

Bundling for production

```sh
npm run deploy
```

It will generate a bundled js file inside dist dir.

Contributing
------------------

Feel free to open an issue, PR or reaching me if you have any questions.
