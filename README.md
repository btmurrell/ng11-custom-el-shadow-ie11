# FuBar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

The main purpose is to demonstrate building a [CustomElement](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) using Angular as a dev tool.

## Build component

Run `npm run build:comp` to build a new version of the customElement `fu-bar`.  This will generate files and call a concatenate script to create two files used for differential loading. These files go into the `output/scripts` directory.

## Serve plain static page containing `fu-form` customElement

Run `npm run serve:comp` to serve a simple static page from `output/index.html` which loads the custom element. 

## Problem: Cannot get this simple custom element to render in IE11

We are developing a library of W3C Custom Elements (aka Web Components) using Angular 11 as a development tool, with [createCustomElement](https://angular.io/api/elements/createCustomElement). We need to support IE11, so we are trying to use [webcomponents/polyfills](https://www.webcomponents.org/polyfills). We need to support `<slot>`s so our components use `encapsulation: ViewEncapsulation.ShadowDom`. I have made a very simplified component in this manner (derived from [this](https://www.techiediaries.com/angular/angular-9-web-components-custom-elements-shadow-dom/)), and have a simple framework-less page to render this web component. When using the webcomponents-loader, the page in IE, the page errors with "IE11 SCRIPT28 Out of stack space" -- this error has some deep analysis by [morewry](https://github.com/morewry) in [this issue](https://github.com/webcomponents/webcomponentsjs/issues/972), however, there is no resolution. There were some fixes (linked in that thread) to `Object.getOwnPropertySymbols`, but those were 2.5 years ago; I am using the latest `@webcomponents/webcomponentsjs@2.5.0`, yet the Out of Stack Space error persists.  I have tried load the polyfills by different means, including `webcomponents-loader.js`, `webcomponents-bundle.js`, and the variations of `webcomponents-sd-ce-pf.js`, but each has different issues. 

Ultimately, the pressing issue is when loading `webcomponents-loader.js`, I get:

```
SCRIPT28: Out of stack space
webcomponents-sd-ce-pf.js (65,290)
SCRIPT2343: Stack overflow at line: 65
```

Very occasionally, I have gotten the error:

```
Object doesn't support property or method 'attachShadow'
```

... but I am not loading scripts asynchronously, and I clear my IE browser cache every time, so I don't understand why that variation would occur.  In an attempt to address that error, I loaded shadydom before webcomponentsjs (which should not be necessary), and I am back to the Out of Stack Space error.

From the Angular 11 build perspective, my `tsconfig.json` has `"compilerOptions.target": "es2015"` which gives me differential loading scripts.

`polyfills.ts` has

```
(window as any).__Zone_enable_cross_context_check = true;
import 'document-register-element';
```

I have a small, complete demonstrative project [here](https://github.com/btmurrell/ng11-custom-el-shadow-ie11).  This web component renders error free in Chrome, needless to say.

There are many posted questions on Stack Overflow and Angular and Webcomponents gh issues; Many are very old, and resolutions are not clear. I am on the latest version of everything (angular, webcomponents, and IE11) using a very simple example, and cannot get this to work.

Thanks in advance!
