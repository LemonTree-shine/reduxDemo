
export default {
    path:"/root",
    childRoutes: [
        {
            path: `/root/a`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/A/a").default)
                }, "home")
            }
        },
        {
            path: `/root/b`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/b").default)
                }, "home2")
            }
        },{
            path: `/root/hookdemo`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/hook/HookA").default)
                }, "home2")
            }
        },{
            path: `/root/c`,//首页
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require("../page/c").default)
                }, "c")
            }
        }
    ]
};