Vue.component('z-date-time', {
    template: '<template>'
        + '<div class="date-time-box" :style="style">'
        + '    <div class= "time" >{{ time }}</div >'
        + '    <div class="date">'
        + '        <div>{{ date }}</div>'
        + '        <div>{{ day }}</div>'
        + '    </div>'
        + '</div>'
        + '</template>',
    props: {
        style: {
            required: false,
            type: Object
        }
    },
    data() {
        return {
            time: '17:30:00',
            date: '2020-07-09',
            day: '星期四'
        }
    },
    methods: {
        updateTime() {
            var momentNow = moment()
            this.date = momentNow.format('YYYY-MM-DD')
            this.time = momentNow.format('HH:mm:ss')
            this.day = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][momentNow.format('e')]
        }
    },
    created() {
        this.updateTime()
        var that = this
        setInterval(() => {
            that.updateTime()
        }, 1000);
    }
})
