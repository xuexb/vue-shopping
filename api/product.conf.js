/**
 * @file 接口api - 产品列表
 * @author xieyaowu <fe.xiaowu@gmail.com>
 */

export default [{
    type: '手机',
    name: 'Apple/苹果 iPhone 6S',
    desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
    img: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
    param: {
        '外观': [
            '银色',
            '金色',
            '亮黑色'
        ],
        '容量': [
            '16GB',
            '32GB',
            '64GB',
            '128GB',
            '256GB'
        ],
        '性别': [
            '男',
            '女'
        ]
    },
    price: [
        {
            param: {
                '外观': '银色',
                '容量': ['16GB', '32GB']
            },
            value: 5288
        },

        {
            param: {
                '外观': '金色',
                '容量': ['16GB', '32GB']
            },
            value: 5288
        }
    ]
}];
