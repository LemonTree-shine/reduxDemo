
export default {
    path:"/root",
    childRoutes: [
        {
            path: `/root/home`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/a").default)
                }, "home")
            }
        },
        {
            path: `/root/home2`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/b").default)
                }, "home2")
            }
        },
        {
            path: `/*`,//404页面，切记要放在路由的最后
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/c").default)
                }, "404")
            }
        },
    ]
};