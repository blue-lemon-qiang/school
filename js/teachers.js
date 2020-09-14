var app = new Vue({
    el: '#app',
    data: {
        border_corlor: ['#7ce7fd', '#2e6099'],
        carousel_index: 0,
        current_modal: false,
        option_l1: {
            title: {
                text: '教师荣誉称号分布',
                style: {
                    fill: '#09e0e9'
                }
            },
            series: [
                {
                    type: 'pie',
                    data: [],
                    insideLabel: {
                        show: true
                    }
                }
            ]
        },
        data_l2: [],
        config_l3: {
            showValue: true,
            unit: '人',
            data: []
        },
        option_r1: {
            title: {
                text: '职称人数分布',
                style: {
                    fill: '#09e0e9'
                }
            },
            xAxis: {
                name: '职称',
                data: [],
                nameTextStyle: {
                    fill: '#09e0e9'
                },
                axisLine: {
                    style: {
                        stroke: '#fff'
                    }
                },
                axisTick: {
                    style: {
                        stroke: '#fff'
                    }
                },
                axisLabel: {
                    style: {
                        fill: '#09e0e9'
                    }
                }
            },
            yAxis: {
                name: '人数',
                data: 'value',
                min: 0,
                minInterval: 1,
                nameTextStyle: {
                    fill: '#09e0e9'
                },
                axisLine: {
                    style: {
                        stroke: '#fff'
                    }
                },
                axisTick: {
                    style: {
                        stroke: '#fff'
                    }
                },
                axisLabel: {
                    style: {
                        fill: '#09e0e9'
                    }
                }
            },
            series: [
                {
                    data: [],
                    type: 'bar',
                    gradient: {
                        color: ['#37a2da', '#67e0e3']
                    },
                    label: {
                        show: true,
                        position: 'center',
                        offset: [0, 0],
                        style: {
                            fill: '#fff'
                        }
                    }
                }
            ]
        },
        option_r2: {
            title: {
                text: '教师年龄占比',
                style: {
                    fill: '#09e0e9'
                }
            },
            series: [
                {
                    type: 'pie',
                    data: [],
                    radius: ['25%', '50%'],
                    insideLabel: {
                        show: true
                    }
                }
            ]
        },
        option_r3: {
            title: {
                text: '最高学历分布',
                textStyle: {
                    color: '#09e0e9'
                },
                left: 'left',
                top: 'top',
                subtext: '纯属虚构',
                subtextStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b} : {c} ({d}%)'
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                left: 'left',
                top: 'bottom',
                textStyle: {
                    color: '#09e0e9'
                },
                data: []
            },
            series: [
                {
                    type: 'funnel',
                    width: '50%',
                    height: '75%',
                    left: 'center',
                    top: 'bottom',
                    sort: 'ascending',
                    label: {
                        position: 'right'
                    },
                    data: []
                }
            ]
        },
        option_bl: {
            tooltip: {
                trigger: 'item',
                formatter: '{b} : {c} ({d}%)'
            },
            series: [
                {
                    type: 'pie',
                    data: []
                }
            ]
        },
        data_c: []
    },
    computed: {
        carousel_autoplay() {
            return !this.current_modal
        }
    },
    methods: {
        click_carousel(index) {
            this.carousel_index = index
            this.current_modal = true
        },
        current_modal_cancel() {
            this.$Message.info('关闭了')
        },
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
            // l1
            var _data_l1 = {
                a: [
                    { name: '特级教师', value: randData(93) },
                    { name: '骨干教师', value: randData(32) },
                    { name: '优秀教师', value: randData(65) },
                    { name: '模范教师', value: randData(44) },
                    { name: '教学名师', value: randData(52) }
                ]
            }
            this.option_l1.series[0].data = _data_l1.a
            this.option_l1 = { ... this.option_l1 }
            // l2
            var _data_l2 = { a: [115, 98, 17, 10, 3, 0] }
            for (var i in _data_l2.a) {
                this.data_l2[i] =
                {
                    number: [randData(_data_l2.a[i]).toString()],
                    content: '{nt}人'
                }
            }
            // l3
            var _data_l3 = {
                a: [
                    { name: '专职教师', value: randData(167) },
                    { name: '特级教师', value: randData(67) },
                    { name: '副教授', value: randData(123) },
                    { name: '教师', value: randData(55) },
                    { name: '高级教师', value: randData(98) },
                    { name: '流动编制', value: randData(24) },
                    { name: '其他', value: randData(5) }
                ]
            }
            this.config_l3.data = _data_l3.a
            this.config_l3 = { ... this.config_l3 }
            // r1
            var _data_r1 = {
                a: [
                    { name: '正高级教师', value: 32 },
                    { name: '高级教师', value: 54 },
                    { name: '一级教师', value: 49 },
                    { name: '二级教师', value: 24 },
                    { name: '三级教师', value: 3 }
                ]
            }
            for (var i in _data_r1.a) {
                this.option_r1.xAxis.data[i] = _data_r1.a[i].name
                this.option_r1.series[0].data[i] = randData(_data_r1.a[i].value)
            }
            this.option_r1 = { ... this.option_r1 }
            // r2
            var _data_r2 = {
                a: [
                    { name: '35岁以下', value: randData(93) },
                    { name: '36-45岁', value: randData(32) },
                    { name: '46-55岁', value: randData(65) },
                    { name: '56岁以上', value: randData(44) }]
            }
            this.option_r2.series[0].data = _data_r2.a
            this.option_r2 = { ... this.option_r2 }
            // r3
            var _data_r3 = {
                a: [
                    { value: 20, name: '博士' },
                    { value: 40, name: '硕士' },
                    { value: 60, name: '学士' },
                    { value: 180, name: '无学士' }
                ]
            }
            for (var i in _data_r3.a) {
                this.option_r3.legend.data[i] = _data_r3.a[i].name
                this.option_r3.series[0].data[i] = _data_r3.a[i]
                this.option_r3.series[0].data[i].value = randData(_data_r3.a[i].value)
            }
            this.option_r3 = { ... this.option_r3 }
            // bl
            var _data_bl = { a: { male: 335, female: 310 } }
            this.option_bl.series[0].data[0] = { value: randData(_data_bl.a.male), name: '男' }
            this.option_bl.series[0].data[1] = { value: randData(_data_bl.a.female), name: '女' }
            this.option_bl = { ... this.option_bl }
            // c
            var _data_c = {
                a: [
                    { radarData: [randData(111), randData(256), randData(178), randData(152), randData(266), randData(132)], name: '张三', position: '教授', info: '我是一个好老师', img: './img/sd.ai-logo.jpg', prizes: ['AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'B', 'C', 'D', 'E', 'F'] },
                    { radarData: [randData(111), randData(256), randData(178), randData(152), randData(266), randData(132)], name: '李四', position: '教授', info: '我是一个好老师', img: './img/default_photo.jpg', prizes: ['A', 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB', 'C', 'D', 'E', 'F'] },
                    { radarData: [randData(111), randData(256), randData(178), randData(152), randData(266), randData(132)], name: '王五', position: '教授', info: '我是一个好老师', img: './img/default_photo.jpg', prizes: ['A', 'B', 'C', 'D', 'E', 'F'] },
                    { radarData: [randData(111), randData(256), randData(178), randData(152), randData(266), randData(132)], name: '赵六', position: '教授', info: '我是一个好老师', img: './img/default_photo.jpg', prizes: ['A', 'B', 'C', 'D', 'E', 'F'] },
                    { radarData: [randData(111), randData(256), randData(178), randData(152), randData(266), randData(132)], name: '刘英', position: '教授', info: '我是一个好老师', img: './img/default_photo.jpg', prizes: ['A', 'B', 'C', 'D', 'E', 'F'] },
                    { radarData: [randData(111), randData(256), randData(178), randData(152), randData(266), randData(132)], name: '长贵', position: '教授', info: '我是一个好老师', img: './img/default_photo.jpg', prizes: ['A', 'B', 'C', 'D', 'E', 'F'] },
                    { radarData: [randData(111), randData(256), randData(178), randData(152), randData(266), randData(132)], name: '玉田', position: '教授', info: '我是一个好老师', img: './img/default_photo.jpg', prizes: ['A', 'B', 'C', 'D', 'E', 'F'] }
                ]
            }
            var radar_option = {
                radar: {
                    polygon: true,
                    indicator: [
                        { name: 'A', max: 300 },
                        { name: 'B', max: 300 },
                        { name: 'C', max: 300 },
                        { name: 'D', max: 300 },
                        { name: 'E', max: 300 },
                        { name: 'F', max: 300 }
                    ],
                    radarStyle: {
                        fill: '#09e0e9'
                    },
                    axisLabel: {
                        style: {
                            fill: '#09e0e9'
                        }
                    }
                },
                series: [
                    {
                        type: 'radar',
                        data: [],
                        animationCurve: 'easeOutBack'
                    }
                ]
            }
            for (var i in _data_c.a) {
                _data_c.a[i].radar_option = radar_option
                _data_c.a[i].radar_option.series[0].data = _data_c.a[i].radarData
            }
            this.data_c = _data_c.a
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
