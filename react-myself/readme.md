2018/1/29
    1、webpack配置react的环境
        安装：
        npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
        npm install --save react react-dom

2018/1/30
react
    1、路由的使用
        npm install --save react-router react-router-dom 其中一个 react-router-dom的包对于第一个的 瘦身
        I、对于 两者的区别：
        不同之处就是后者比前者多出了 <Link> <BrowserRouter> 这样的 DOM 类组件。  
        (In v4, react-router exports the core components and functions. react-router-dom exports DOM-aware components, like <Link> (which renders an <a>) and <BrowserRouter> (which interacts with the browser's window.history ))
        ******用的是 react-router-dom
        I、路由也是一组件的方式存在，主要包括：
            BrowserRouter Route NavLink Switch Prompt  Redirect
        1)在react中提供了 多种路由模式:
            BrowserRouter：浏览器的路由方式，也是我们一直在学习的路由方式，在开发中最常使用。

            HashRouter：在路径前加入#号成为一个哈希值。Hash模式的好处是，再也不会因为我们刷新而找不到我们的对应路径了。

            MemoryRouter：不存储history，所有路由过程保存在内存里，不能进行前进后退，因为地址栏没有发生任何变化。

            NativeRouter：经常配合ReactNative使用，多用于移动端，以后ReactNative课程中会详细讲解。

            StaticRouter：设置静态路由，需要和后台服务器配合设置，比如设置服务端渲染时使用。
        2)这些路由模式下有两个比较重要的 属性参数
            forceRefresh:值为 boolean值，表示是否关闭React路由系统，而真实的去服务器端请求信息
            true:为关闭，请求服务器
            basename:在路由上添加一个公共的 访问层级
        3)对于 Prompt 组件，用于提示误操作的（对于切换路由的提醒）
            需要注意的是，如果你用MemoryRouter路由模式，<Prompt>不起作用。
js本身
    1、分清楚 es6的模块 和 common.js 的模块导入的区别
        es6 用的  import 和 export
        common.js module.exports(exports) 和 require
