export default {
 singular: true,
 dva: {},
 antd: {},
 routes: [{
  path: '/',
  //component: 是一个字符串，它是相对于 page 目录的相对路径。
  //path: 表示访问路径。
  component: '../layout',
  routes: [
   {
    path: '/helloworld',
    component: './HelloWorld'
   },
   {
    path:'/dashboard',
    routes:[
     { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
     { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
     { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }

    ]
   },
   {
    path: '/puzzlecard',
    component: './PuzzleCards',
   },
   {
    path: '/list',
    component: './list',  
   }
  ],

  proxy: {
    "/api": {
      target: "http://localhost:3005",
      changeOrigin: true,
      pathRewrite: { "^/dpi": "" } // 把 api 重写掉
    }
  },
 }],
};