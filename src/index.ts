import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the theme-nord-extension extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'theme-nord-extension',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension theme-nord-extension is activated!');
  }
};

export default extension;
