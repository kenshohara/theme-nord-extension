# theme-nord-extension

This is a theme extension for juypterlab based on the [Nord color palette](https://www.nordtheme.com). I recommend Source Han Mono/Souce Code Pro fonts for this theme.

![sample image](sample.png)


## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install @kenshohara/theme-nord-extension
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

