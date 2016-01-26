# react-css-modules-postcss-jspm-example
React + CSS Modules written in PostCSS and compiled using JSPM.

## Install
- `npm install`
  - This is because you want a local version of JSPM.

- `jspm install`
  - Install JSPM dependencies including React, PostCSS + Plugins & JSPM Loader CSS.

## Run
- `npm run server` 
  - this will start a jspm-server instance with live reloading enabled on all files loaded with SystemJS

## Notes
Don't use PostCSS Mixin. CSS Modules handling composition much better. See screenshots.

- **Without a mixin**

  ![alt tag](https://raw.githubusercontent.com/adjohnston/react-css-modules-postcss-jspm-example/master/img/without-mixin.gif)

- **Using a mixin**

  ![alt tag](https://raw.githubusercontent.com/adjohnston/react-css-modules-postcss-jspm-example/master/img/with-mixin.gif)
