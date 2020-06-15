
export default {
    path:"/root",
    childRoutes: [
        {
            path: `/root/b`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/b").default)
                }, "home2")
            }
        },
        {
            path: `/root/miniRedux`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/miniRedux/index").default)
                }, "home2")
            }
        },
        {
            path: `/root/webComponent`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/webComponent/index").default)
                }, "home2")
            }
        }
    ]
};