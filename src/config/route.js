// 静态路由配置
// 书写格式与动态路由格式一致，全部经由框架统一转换
// 比较动态路由在meta中多加入了role角色权限，为数组类型。一个菜单是否有权限显示，取决于它以及后代菜单是否有权限。
// routes 显示在左侧菜单中的路由(显示顺序在动态路由之前)
// 示例如下



// const routes = [
// 	{
// 		name: "demo",
// 		path: "/demo",
// 		meta: {
// 			icon: "el-icon-eleme-filled",
// 			title: "演示",
// 			role: ["SA"]
// 		},
// 		children: [{
// 			name: "demopage",
// 			path: "/demopage",
// 			component: "test/autocode/index",
// 			meta: {
// 				icon: "el-icon-menu",
// 				title: "演示页面",
// 				role: ["SA"]
// 			}
// 		}]
// 	}
// ]

const routes = [
    {
        "name": "home",
        "path": "/home",
        "meta": {
            "title": "首页",
            "icon": "el-icon-eleme-filled",
            "type": "menu"
        },
        "children": [
            {
                "name": "dashboard",
                "path": "/dashboard",
                "meta": {
                    "title": "控制台",
                    "icon": "el-icon-menu",
                    "affix": true
                },
                "component": "home/index"
            },
            {
                "name": "userCenter",
                "path": "/usercenter",
                "meta": {
                    "title": "帐号信息",
                    "icon": "el-icon-user",
                    "tag": "NEW"
                },
                "component": "userCenter/index"
            }
        ]
    },

    //*****

    {
        path: '/system',
        name: 'SystemManager',
        meta: { title: '系统管理', icon: 'el-icon-setting', svgIcon: 'setting' },
        children: [
            {
                path: '/field-manager',
                name: 'FieldManager',
                component: 'system/entity-field-table',
                props: true,
                hidden: true,
                meta: { title: '字段管理', icon: '', activeRoute: '/system/metadata/entity-list', hidden: true },
            },

            {
                path: '/form-layout',
                name: 'FormLayout',
                component: 'system/form-layout',
                hidden: true,
                props: true,
                meta: { title: '表单设计', icon: '', /*, keepAlive: false */ activeRoute: '/system/metadata/entity-list', hidden: true }
            },

            {
                path: '/list-setting',
                name: 'ListSetting',
                component: 'business/data-list-view',
                hidden: true,
                props: true,
                meta: { title: '列表设计', icon: '', /*, keepAlive: false */ activeRoute: '/system/metadata/entity-list', hidden: true }
            },

            {
                path: '/metadata',
                name: 'Metadata',
                meta: { group: true, title: '元数据设置' },
                children: [
                    {
                        path: 'entity-list',
                        name: 'EntityList',
                        component: 'system/entity-list',
                        meta: { title: '实体管理', icon: 'el-icon-coin' }
                    },

                ]
            },

            {
                path: '/user-manager',
                name: 'UserManager',
                meta: { group: true, title: '组织架构' },
                children: [
                    {
                        path: '/user-list',
                        name: 'UserList',
                        component: 'user/user-tree-table',
                        meta: { title: '用户管理', icon: 'el-icon-user' }
                    },

                    {
                        path: '/role-list',
                        name: 'RoleList',
                        component: 'user/role-list-view',
                        meta: { title: '权限角色', icon: 'el-icon-key' }
                    },
                ]
            },

            {
                path: '/data-dict',
                name: 'DataDict',
                meta: { group: true, title: '数据字典' },
                children: [
                    {
                        path: '/option-manager',
                        name: 'OptionManager',
                        component: 'system/data-dict/option-manager',
                        meta: { title: '单选项管理', icon: 'el-icon-operation' }
                    },

                    {
                        path: '/tag-manager',
                        name: 'TagManager',
                        component: 'system/data-dict/tag-manager',
                        meta: { title: '多选项管理', icon: 'el-icon-files' }
                    },
                ]
            },
            // 审批流程
            {
                path: '/approval-process',
                name: 'ApprovalProcess',
                meta: { group: true, title: '审批流程' },
                children: [
                    {
                        path: '/process-list',
                        name: 'ProcessList',
                        component: 'system/approval-process/process-list',
                        meta: { title: '流程列表', icon: 'el-icon-operation' }
                    },
                    {
                        path: `/process-detail`,
                        name: 'ProcessDetail',
                        component: 'system/approval-process/process-detail',
                        hidden: true,
                        meta: { title: '流程设计',hidden: true}
                    },
                ]
            },
        ]
    },

]

export default routes;
