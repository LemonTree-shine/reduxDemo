
export default {
    path:"/root",
    childRoutes: [
        {
            path: `/root/miniRedux`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/miniRedux/index").default)
                }, "miniRedux")
            }
        }
    ]
};