
export default {
    path:"/root",
    childRoutes: [
        {
            path: `miniRedux`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/miniRedux/index").default)
                }, "miniRedux")
            }
        },
        {
            path: `test`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/test/index").default)
                }, "test")
            }
        },
        {
            path: `cscroll`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/cscroll/index").default)
                }, "cscroll")
            }
        },
    ]
};