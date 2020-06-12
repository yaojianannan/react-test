// @ts-nocheck
import { Plugin } from 'C:/react/antd/node_modules/_@umijs_runtime@3.2.3@@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','request',],
});
plugin.register({
  apply: require('C:/react/antd/src/.umi/plugin-dva/runtime.tsx'),
  path: 'C:/react/antd/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
