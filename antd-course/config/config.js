export default {
    //在umi中，约定存放页面代码的文件夹是pages，是复数，
    //如果喜欢单数，可以添加singular为true来让page变为约定的文件夹
    singular: true,
    plugins: [
        ['umi-plugin-react',{

        }]
    ],
    routes:[{
        page: '/',
        //相对于page目录的相对路径
        component: './HelloWorld',
    }],
};