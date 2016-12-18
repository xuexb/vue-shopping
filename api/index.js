/**
 * @file 接口api
 * @author xieyaowu <fe.xiaowu@gmail.com>
 */

import Conf from './config';

/**
 * 随机数
 *
 * @param  {number} start 开始数
 * @param  {number} end   结束数
 *
 * @return {number}
 */
let random = (start = 0, end = 10) => Math.round(Math.random() * (end - start) + start);


let error = (reject, data = {}) => {
    setTimeout(() => reject(data), random());
};

let success = (resolve, data = {}) => {
    setTimeout(() => resolve(data), random());
};

let ajax = (url, data = {}, type = 'GET') => {
    return new Promise((resolve, reject) => {
        if (!Conf[type]) {
            return error(reject, {
                code: 1,
                msg: '未找到对应action'
            });
        }

        if (!Conf[type][url] || typeof Conf[type][url] !== 'function') {
            return error(reject, {
                code: 1,
                msg: '方法不存在'
            });
        }


        // 20%的机率出错
        if (random(0, 10) > 9) {
            error(reject, {
                code: 1,
                msg: '网络错误'
            });
        }
        else {
            success(resolve, Conf[type][url](data));
        }
    });
};

let get = (url, data) => ajax(url, data, 'GET');

let post = (url, data) => ajax(url, data, 'POST');

export {
    ajax,
    get,
    post,
    ajax as default
};
