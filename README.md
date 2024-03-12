# rgb-color-fade &middot; [![Test workflow status](https://github.com/ChrisCodesThings/rgb-color-fade/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/rgb-color-fade)](https://www.npmjs.com/package/@chriscodesthings/rgb-color-fade) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Lightens or darkens an RGB or RGBA color towards white or black**

## Install

```sh
npm install --save @chriscodesthings/rgb-color-fade
```

## Use

```js
import rgbColorFade from '@chriscodesthings/rgb-color-fade';

console.log(rgbColorFade([100, 149, 237], -20)); // cornflowerblue, 20% darker
// => true
```

## Syntax

```js
rgbColorFade(col, fade);
```

### Parameters

- *col*: an array containing red, green, blue and (optional) alpha values
- *fade*: a percentage from -100 to 100. Negative values fade towards black, positive towards white.

### Return Value

Returns an array containing the new red, green, blue and (if originally present) alpha values.
> Note, the alpha channel is not modified

## Description

Does what it says on the tin.
