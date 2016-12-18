/**
 * @file 接口api - 接口列表配置
 * @author xieyaowu <fe.xiaowu@gmail.com>
 */

import product from './product.conf';

export default {
    GET: {
        '/api/product'({id}) {
            if (id || id === 0) {
                return (product || [])[id];
            }
            return product || [];
        },

        '/api/cart'() {

        }
    },

    POST: {

    }
};
