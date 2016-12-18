/**
 * @file 路由
 * @author xieyaowu <fe.xiaowu@gmail.com>
 */

import Index from './views/index';
import List from './views/list';
import Cart from './views/cart';
import Item from './views/item';
import Error404 from './views/404';

export default [
    {
        name: 'Index',
        path: '/',
        component: Index
    },
    {
        name: 'List',
        path: '/list',
        component: List
    },
    {
        name: 'Cart',
        path: '/cart',
        component: Cart
    },
    {
        name: 'Item',
        path: '/item/:id',
        component: Item
    },
    {
        name: '404',
        path: '*',
        component: Error404
    }
];
