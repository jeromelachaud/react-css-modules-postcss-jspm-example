import { CSSLoader, Plugins } from 'jspm-loader-css';
import spiffing from 'postcss-spiffing';
import mixins from 'postcss-mixins';

const {fetch, bundle} = new CSSLoader([
  mixins,
  spiffing,
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope,
  Plugins.autoprefixer()
], __moduleName);

export {fetch, bundle};
