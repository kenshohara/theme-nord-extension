// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for the Jupyter Nord Theme.
 */
const plugin: JupyterLabPlugin<void> = {
  id: '@jupyterlab/theme-nord-extension:plugin',
  requires: [IThemeManager],
  activate: (app: JupyterLab, manager: IThemeManager) => {
    const style = '@jupyterlab/theme-nord-extension/index.css';

    manager.register({
      name: 'JupyterLab Nord',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
