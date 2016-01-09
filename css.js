import { CSSLoader, Plugins } from 'jspm-loader-css';
import spiffing from 'postcss-spiffing';

const {fetch, bundle} = new CSSLoader([
  spiffing,
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope,
  Plugins.autoprefixer()
], __moduleName);

export {fetch, bundle};
