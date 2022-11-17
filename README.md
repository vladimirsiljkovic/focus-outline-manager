# focus-outline-manager

> Watch users keyboard input and manage the focus outline visibility

[![NPM version](https://badge.fury.io/js/focus-outline-manager.svg)](https://www.npmjs.com/package/focus-outline-manager)

> NOTICE: THIS LIBRARY IS NO LONGER NEEDED FOR MODERN BROWSERS, AS THEY INCLUDE THIS BEHAVIOR BY DEFAULT FOR BUTTONS, WHILE
> IT CAN BE REPLICATED WITH A SINGLE MODERN CSS RULE FOR INPUTS: `:focus:not(:focus-visible) { outline: none; }`

By default, browsers add an outline around buttons and other controls when they are clicked:

![](outline.gif)

Removing the outline by setting `*:focus {outline: none;}` will make the site [less accessible for keyboard users](http://outlinenone.com/).

`focus-outline-manager` enables you to remove the outline for mouse users, retaining it for keyboard users.

## Demo

- [View JSBin demo](https://jsbin.com/yonofu/edit?html,css,output)

## Install

    npm install --save focus-outline-manager

## Usage

Using CommonJS module loading:
```javascript
require('focus-outline-manager');
```

CSS:
```css
.focus-outline-hidden :focus {
    outline: none;
}
```

## Credits

- `focus-outline-manager` is based on a Chromium UI utility [focus-outline-manager.js](https://chromium.googlesource.com/chromium/src/+/master/ui/webui/resources/js/cr/ui/focus_outline_manager.js) (Copyright © 2012, The Chromium Authors).

## Other Implementations

- https://github.com/csmr/classy-focus.js
- https://github.com/kimmobrunfeldt/fix-outline
- https://github.com/ambassify/smart-outline
- https://github.com/ry5n/keyring
- https://github.com/lindsayevans/outline.js
