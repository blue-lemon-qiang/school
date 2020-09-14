var vm = new Vue({
    el: '#app',
    data: {
        BookOut: {
            number: [123456],
            content: '总借出{nt}本',
            style: {
                fontSize: 15
            },
        },
        todayBookOut: {
            number: [123],
            content: '借出{nt}本',
            style: {
                fontSize: 15
            },
        },
        monthBookOut: {
            number: [456],
            content: '借出{nt}本',
            style: {
                fontSize: 15
            },
        },
        BookIn: {
            number: [123456],
            content: '总还入{nt}本',
            style: {
                fontSize: 15
            },
        },
        todayBookIn: {
            number: [123],
            content: '还入{nt}本',
            style: {
                fontSize: 15
            },
        },
        monthBookIn: {
            number: [456],
            content: '还入{nt}本',
            style: {
                fontSize: 15
            },
        },
        option1: {
            title: {
                text: '招生趋势',
                style: {
                    fill: '#09e0e9'
                }
            },
            color: ['#ff5ca9', '#00db95', '#ff9019'],
            legend: {
                data: ['专科', '本科', '研究生'],
                textStyle: {
                    fill: '#09e0e9'
                },
                textUnselectedStyle: {
                    fill: '#fff'
                }
            },
            xAxis: {
                name: '年份',
                data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
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
                name: '人数',
                data: 'value',
                nameTextStyle: {
                    fill: '#09e0e9'
                },
                splitNumber: 7,
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
                    name: '专科',
                    data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                    type: 'line',
                    stack: 'a',
                    fill: {
                        show: true
                    }
                },
                {
                    name: '本科',
                    data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                    type: 'line',
                    stack: 'a',
                    smooth: true
                },
                {
                    name: '研究生',
                    data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                    type: 'line',
                    stack: 'a',
                    lineStyle: {
                        lineDash: [5, 5]
                    }
                }
            ]
        },
        option2: {
            title: {
                text: '就业趋势',
                style: {
                    fill: '#09e0e9'
                }
            },
            legend: {
                data: [
                    {
                        name: '人均薪资',
                        color: '#aeeff0'
                    },
                    {
                        name: '人数',
                        color: '#f1829f'
                    }
                ],
                textStyle: {
                    fill: '#09e0e9'
                },
            },
            xAxis: {
                data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
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
            yAxis: [
                {
                    name: '人均薪资',
                    data: 'value',
                    nameTextStyle: {
                        fill: '#09e0e9'
                    },
                    splitNumber: 7,
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
                {
                    name: '人数',
                    data: 'value',
                    position: 'right',
                    max: 2000,
                    splitLine: {
                        show: false
                    },
                    nameTextStyle: {
                        fill: '#09e0e9'
                    },
                    splitNumber: 7,
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
                }
            ],
            series: [
                {
                    name: '人数',
                    data: [1000, 1200, 900, 1500, 900, 1200, 1000],
                    type: 'line',
                    smooth: true,
                    lineArea: {
                        show: true,
                        gradient: ['rgba(251, 114, 147, 1)', 'rgba(251, 114, 147, 0)']
                    },
                    lineStyle: {
                        stroke: 'rgba(251, 114, 147, 1)',
                        lineDash: [3, 3]
                    },
                    linePoint: {
                        style: {
                            stroke: 'rgba(251, 114, 147, 1)'
                        }
                    },
                    yAxisIndex: 1
                },
                {
                    name: '人均薪资',
                    data: [1500, 1700, 3000, 4000, 5000, 6000, 8000],
                    type: 'bar',
                    gradient: {
                        color: ['rgba(103, 224, 227, .6)', 'rgba(103, 224, 227, .1)']
                    },
                    barStyle: {
                        stroke: 'rgba(103, 224, 227, 1)'
                    }
                }
            ]
        },
        optionCircle: {
            data: [
                {
                    name: '马列主义',
                    value: 55
                },
                {
                    name: '哲学',
                    value: 120
                },
                {
                    name: '社会科学',
                    value: 78
                },
                {
                    name: '自然科学',
                    value: 66
                },
                {
                    name: '综合性图书',
                    value: 80
                }
            ],
            radius: '70%',
            activeRadius: '75%',
            digitalFlopStyle: {
                fontSize: 15
            },
            color: ['#1874CD', '#00C5CD', '#76EEC6', '#B4EEB4', '#EEDC82']
        }
    },
    methods: {
        formatter: function (number) {
            const numbers = number.toString().split('').reverse()
            const segs = []

            while (numbers.length) segs.push(numbers.splice(0, 3).join(''))

            return segs.join(',').split('').reverse().join('')
        },
        //跳转 招生趋势 页面
        recruitStudent: function () {
            location.href = './recruitStudent.html'
        },
        //跳转 师资信息 页面
        teachers : function(){
            location.href='./teachers.html'
        },
        //跳转 院系信息 页面
        department: function(){
            location.href='./department.html'
        }
    }
})




