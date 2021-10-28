# 🥞 Guita UIkit

[![Version](https://img.shields.io/npm/v/@iethereum/uikit)](https://www.npmjs.com/package/@iethereum/uikit) [![Size](https://img.shields.io/bundlephobia/min/@iethereum/uikit)](https://www.npmjs.com/package/@iethereum/uikit)

Guita UIkit is a set of React components and hooks used to build pages on Guita's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @iethereum/uikit`

## Setup

### Theme

Before using Guita UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@iethereum/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@iethereum/uikit'
...
<ResetCSS />
```
