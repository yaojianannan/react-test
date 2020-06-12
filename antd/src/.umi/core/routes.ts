// @ts-nocheck
import { ApplyPluginsType } from 'C:/react/antd/node_modules/_@umijs_runtime@3.2.3@@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('C:/react/antd/src/layout').default,
    "routes": [
      {
        "path": "/helloworld",
        "component": require('C:/react/antd/src/page/HelloWorld').default,
        "exact": true
      },
      {
        "path": "/dashboard",
        "routes": [
          {
            "path": "/dashboard/analysis",
            "component": require('C:/react/antd/src/page/Dashboard/Analysis').default,
            "exact": true
          },
          {
            "path": "/dashboard/monitor",
            "component": require('C:/react/antd/src/page/Dashboard/Monitor').default,
            "exact": true
          },
          {
            "path": "/dashboard/workplace",
            "component": require('C:/react/antd/src/page/Dashboard/Workplace').default,
            "exact": true
          }
        ]
      },
      {
        "path": "/puzzlecard",
        "component": require('C:/react/antd/src/page/PuzzleCards').default,
        "exact": true
      }
    ]
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
