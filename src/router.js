
export default {
    path:"/root",
    childRoutes: [
        {
            path: `/root/home`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/b").default)
                }, "home")
            }
        },
        {
            path: `/root/home2`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/a").default)
                }, "home2")
            }
        },
        {
            path: `/root/*`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/c").default)
                }, "404")
            }
        },
    ]
};