//注册组件
if (window.VueECharts) {
    Vue.component('v-chart', VueECharts)
}
Vue.component('z-datav-nav-school', {
    template: '<template>'
        + '<z-datav-nav :btns="btns"></z-datav-nav>'
        + '</template>',
    data() {
        return {
            btns: [
                { icon: './img/icon.png', name: '主页', url: './index.html' },
                { name: '院系', url: './department.html' },
                { name: '师资', url: './teachers.html' },
                { name: '荣誉', url: './culture.html' },
                { name: '招生', url: './recuitStudent.html' },
                { name: '就业', url: './getJob.html' }
            ]
        }
    }
})

//Ajax获取数据
var code = {
    ok: '10000'
}
function getData(url, callback) {
    axios.get(url).then(function (res) {
        if (200 == res.state) {
            if (code.ok == res.data.code) {
                // 处理数据
                callback(res.data.data)
            } else {
                console.log(url, ' Ajax server code:', res.data.code, res.data.msg)
            }
        } else {
            console.log(url, ' Ajax axios res.state:', res.state)
        }
    }).catch(function (err) {
        console.log(url, ' Ajax axios catch:', err)
    })

}

//测试时用于生成随机数据
function randData(value) {
    return Math.floor(value * Math.random()) + 3
}

