React + Typescript + Webpack
----------------------------

Boilerplate project using the necessaries tools for React, Typescript and Jest


# Major packages used:

- Typescript
- Webpack
- Enzyme
- Jest
- TSLint
- SASS / CSS Loader
- DotEnv

# Usage

### Dot env

Simply copy/paste the .env_sample to .env

### Webpack
Run `npm start` to start webpack-dev-server and start working with. It has hot reloading enabled.

### Test

Run `npm run test` to start jest test.
You can add test in the tests folder.

### SCSS

Bootstrap is available by default as an example of how to add scss file.
You can your new scss file directly inside the component.
(Look at the Foo component)
If you want to add global scss, look inside the scss/main.scss file.

# Inspired

This package is inspired from several John Tucker posts on medium that allows to bootstrap the project with Typescript, webpack and Jest
[@see](https://medium.com/front-end-hacking/webpack-by-example-part-1-1d07bc42006a)

And this one to add webpack-dev-server
[@see](https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75)

Also I used the official documentations and others online posts :).

This repository might evolved depending of my own experience

## TODO

Improve the SCSS closure / component.
Add a better `modules` management for css / scss file to have auto-complete available as a javascript object.
