## 参考文档 
https://www.yuque.com/ant-design/course/wybhm9

项目运行命令： cnpm run dev

##构建和部署
可以通过 cnpm run build 来构建最终产物，执行命令后生成的最终的HTML,CSS和js到dist目录下。
注意：直接使用浏览器打开HTML是无法正确展示的，因为直接打开无法识别出HTML
引入的JS和CSS的路径。需要确保HTML在一个HTTP的web容器中，并保证对应的页面的访问路径正确，比如使用serve
cnpm install serve -g
serve ./dist
注意：

## config.js中引入antd配置，请参照升级
## 注意package.json文件---cnpm i --save-dev
## 页面显示中文乱码问题---查看代码文件的编码格式是否是utf-8，若不是，请改成utf-8
## 如果不是使用箭头函数，注意函数尾是否添加了括号