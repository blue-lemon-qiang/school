var app = new Vue({
    el: '#app',
    data: {
        border_corlor: ['#7ce7fd', '#2e6099'],
        cityList: [
            {
                value: 'New York',
                label: 'New York'
            },
            {
                value: 'London',
                label: 'London'
            },
            {
                value: 'Sydney',
                label: 'Sydney'
            },
            {
                value: 'Ottawa',
                label: 'Ottawa'
            },
            {
                value: 'Paris',
                label: 'Paris'
            },
            {
                value: 'Canberra',
                label: 'Canberra'
            }
        ],
        model11: '',
    },
    methods: {
        goBack() {
            location.href = './index.html'
        },
        updateData() {
            //console.log('更新了一次数据', new Date())
            // TODO 获取数据
            /*getData('https://www.baidu.com', function (data) {
                console.log('this', this)
                console.log('data', data)
            })*/
            // 模拟数据 对接数据接口后应删除

        }
    },
    created() {
        this.updateData()
        var that = this
        setInterval(() => {
            that.updateData()
        }, 3000);
    }
});
