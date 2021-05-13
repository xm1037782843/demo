//----------------------
import Order from "../views/OrderManage"
const OrderList = () =>
    import('../views/OrderManage/order-list')
const ProductManage = () =>
    import('../views/OrderManage/product-manage')
const ProductionList = () =>
    import('../views/OrderManage/product-manage/production-list')
const ReviewManage = () =>
    import('../views/OrderManage/product-manage/review-manage')
const ReturnGoods = () =>
    import('../views/OrderManage/return-goods')

/* 产品管理 */
import Goods from "../views/GoodsManage"
const GoodsList = () =>
    import('../views/GoodsManage/goods-list')
const GoodsClassify = () =>
    import('../views/GoodsManage/goods-classify')


//路由文件
export const DynamicRoutes = [{
        path: '/goods',
        name: 'Goods',
        component: Goods,
        meta: {
            name: '产品管理',
            icon: 'icon-order-manage'
        },
        children: [{
                path: 'list',
                name: 'goods-list',
                component: GoodsList,
                meta: {
                    name: '产品列表',
                    icon: 'icon-home'
                }
            },
            {
                path: 'classify',
                name: 'goods-classify',
                component: GoodsClassify,
                meta: {
                    name: '产品分类',
                    icon: 'icon-product-manage'
                }
            }
        ]
    },
    {
        path: '/order',
        name: 'Order',
        component: Order,
        meta: {
            name: '订单管理',
            icon: 'icon-email'
        },
        children: [{
                path: 'list',
                name: 'order-list',
                component: OrderList,
                meta: {
                    name: '订单列表',
                    icon: 'icon-quit'
                }
            },
            {
                path: 'product',
                name: 'product-manage',
                component: ProductManage,
                meta: {
                    name: '生产管理',
                    icon: 'icon-service'
                },
                children: [{
                        path: 'list',
                        name: 'product-list',
                        component: ProductionList,
                        meta: {
                            name: '生产列表',
                            icon: 'icon-nav'
                        }
                    },
                    {
                        path: 'review',
                        name: 'review-manage',
                        component: ReviewManage,
                        meta: {
                            name: '审核管理',
                            icon: 'icon-finance-manage'
                        }
                    }
                ]
            },
            {
                path: 'returnGoods',
                name: 'return-goods',
                component: ReturnGoods,
                meta: {
                    name: '退货管理',
                    icon: 'icon-product-manage'
                }
            }
        ]
    }
]