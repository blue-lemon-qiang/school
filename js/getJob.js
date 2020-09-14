var vm = new Vue({
    el: '#app',
    data: {
        object : {
            title: {
                text: '职业专业相符占比饼状图',
                style:{
                    fill: '#fff'
                }
            },
            series: [
                {
                    type: 'pie',
                    data: [
                        { name: '相符', value: 93 },
                        { name: '不符', value: 32 }
                    ],
                    insideLabel: {
                        show: true
                    }
                }
            ]
        },
        hotObject : {
            title: {
                text: '热门职业分析',
                style:{
                    fill: '#fff'
                }
            },
            series: [
                {
                    type: 'pie',
                    data: [
                        { name: '互联网技术', value: 93 },
                        { name: '人力行政', value: 32 },
                        { name: '销售', value: 83 },
                        { name: '旅游/酒店', value: 32 },
                        { name: '生物医疗', value: 73 },
                        { name: '财务金融', value: 42 },
                        { name: '其他', value: 53 },
                    ],
                    insideLabel: {
                        show: true
                    }
                }
            ]
        },
        information: {
            title: {
                text: 'Top10省就业方向',
                style: {
                    fill: '#fff'
                }
            },
            xAxis: {
                name: '人数',
                data: 'value',
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
                    },
                    formatter: '{value}'
                }
            },
            yAxis: {
                name: '省份',
                data: ['黑龙江', '吉林', '辽宁', '山东', '北京', '天津', '河南', '广东', '上海', '湖南'],
                nameTextStyle: {
                    fill: '#09e0e9'
                },
                splitNumber: 10,
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
                    data: [1200, 2230, 1900, 2100, 3500, 4200, 3985, 3500, 4200, 3985],
                    type: 'bar',
                    animationCurve: 'easeOutBack'
                }
            ]
        }
    }
})
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
var geoCoordMap = {
    '东方学院': [130.9688, 46.768],
    '黑龙江': [127.9688, 45.368],
    '内蒙古': [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    '北京市': [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "宁夏": [106.3586, 38.1775],
    "青海": [101.4038, 36.8207],
    "新疆": [87.9236, 43.5883],
    "西藏": [91.11, 29.97],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "山东": [117.1582, 36.8701],
    "河南": [113.4668, 34.6234],
    "江苏": [118.8062, 31.9208],
    "安徽": [117.29, 32.0581],
    "湖北": [114.3896, 30.6628],
    "浙江": [119.5313, 29.8773],
    "福建": [119.4543, 25.9222],
    "江西": [116.0046, 28.6633],
    "湖南": [113.0823, 28.2568],
    "贵州": [106.6992, 26.7682],
    "云南": [102.9199, 25.4663],
    "广东": [113.12244, 23.009505],
    "广西": [108.479, 23.1152],
    "海南": [110.3893, 19.8516],
    '上海': [121.4648, 31.2891]
};

var GZData = [
    [{
        name: '东方学院'
    }, {
        name: '内蒙古',
        value: 95
    }],
    [{
        name: '东方学院'
    }, {
        name: '北京市',
        value: 90
    }],
    [{
        name: '东方学院'
    }, {
        name: '上海',
        value: 80
    }],
    [{
        name: '东方学院'
    }, {
        name: '重庆',
        value: 70
    }],
    [{
        name: '东方学院'
    }, {
        name: '山东',
        value: 60
    }],
    [{
        name: '东方学院'
    }, {
        name: '广东',
        value: 50
    }],
    [{
        name: '东方学院'
    }, {
        name: '广西',
        value: 40
    }],
    [{
        name: '东方学院'
    }, {
        name: '海南',
        value: 30
    }],
    [{
        name: '东方学院'
    }, {
        name: '湖北',
        value: 20
    }],
    [{
        name: '东方学院'
    }, {
        name: '浙江',
        value: 10
    }]
];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    console.log(data);
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[1].value
            });
        }
    }
    return res;
};

var color = ['#a6c84c'];
var series = [];
[
    ['东方学院', GZData]
].forEach(function (item, i) {
    //console.log(item,i);
    series.push({
        name: item[0] + ' Top10',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 4, //箭头指向速度，值越小速度越快
            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', //箭头图标
            symbolSize: 5, //图标大小
        },
        lineStyle: {
            normal: {
                width: 1, //尾迹线条宽度
                opacity: 1, //尾迹线条透明度
                curveness: .3 //尾迹线条曲直度
            }
        },
        data: convertData(item[1])
    },
        {
            name: item[0] + ' Top10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return 5 + val[2] / 10; //圆环大小
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        },
        //中心点
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    //offset:[5, 0],
                    color: '#0f0',
                    formatter: '{b}',
                    textStyle: {
                        color: "#0f0"
                    }
                },
                emphasis: {
                    show: true,
                    color: "#f60"
                }
            },
            symbol: 'pin',
            symbolSize: 50,
            data: [{
                name: item[0],
                value: geoCoordMap[item[0]].concat([10])
            }],
        }
    );
});
console.log(series)

option = {
    backgroundColor: '#404a59',
    tooltip: {
        trigger: 'item',
        formatter: function (params, ticket, callback) {
            console.log(params);
            if (params.seriesType == "effectScatter") {
                return "人数：" + '<br>' + params.data.name + "" + params.data.value[2];
            } else if (params.seriesType == "lines") {
                return params.data.toName;
            } else {
                return params.name;
            }
        }
    },
    backgroundColor: "#013954",
    visualMap: { //图例值控制
        min: 0,
        max: 100,
        calculable: true,
        show: true,
        color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: true,
                color: '#fff'
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                color: 'rgba(51, 69, 89, .5)', //地图背景色
                borderColor: '#516a89', //省市边界线00fcff 516a89
                borderWidth: 1
            },
            emphasis: {
                color: 'rgba(37, 43, 61, .5)' //悬浮背景
            }
        }
    },
    series: series
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);