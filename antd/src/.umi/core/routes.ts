// @ts-nocheck
import { ApplyPluginsType } from 'E:/react/react-test/antd/node_modules/_@umijs_runtime@3.2.3@@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('E:/react/react-test/antd/src/layout').default,
    "routes": [
      {
        "path": "/helloworld",
        "component": require('E:/react/react-test/antd/src/page/HelloWorld').default,
        "exact": true
      },
      {
        "path": "/dashboard",
        "routes": [
          {
            "path": "/dashboard/analysis",
            "component": require('E:/react/react-test/antd/src/page/Dashboard/Analysis').default,
            "exact": true
          },
          {
            "path": "/dashboard/monitor",
            "component": require('E:/react/react-test/antd/src/page/Dashboard/Monitor').default,
            "exact": true
          },
          {
            "path": "/dashboard/workplace",
            "component": require('E:/react/react-test/antd/src/page/Dashboard/Workplace').default,
            "exact": true
          }
        ]
      },
      {
        "path": "/puzzlecard",
        "component": require('E:/react/react-test/antd/src/page/PuzzleCards').default,
        "exact": true
      },
      {
        "path": "/list",
        "component": require('E:/react/react-test/antd/src/page/list').default,
        "exact": true
      }
    ],
    "proxy": {
      "/api": {
        "target": "http://localhost:3005",
        "changeOrigin": true,
        "pathRewrite": {
          "^/dpi": ""
        }
      }
    }
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
