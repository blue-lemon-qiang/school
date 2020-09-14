Vue.component('z-datav-nav', {
    template: '<template>'
        + '<div class="z-datav-nav-box">'
        + '     <dv-border-box-7 :color="border_corlor">'
        + '         <template v-for="btn in btns">'
        + '             <dv-border-box-2 @click.native="goto(btn.url)" class="z-datav-nav-btn z-datav-nav-clickable" :style="computedWidth">'
        + '                 <avatar :src="btn.icon" v-if="btn.icon"></avatar>'
        + '                 {{ btn.name }}'
        + '             </dv-border-box-2>'
        + '         </template>'
        + '     </dv-border-box-7>'
        + '</div>'
        + '</template>',
    props: {
        btns: {
            required: true,
            type: Array
        }
    },
    data() {
        return {
            border_corlor: ['#7ce7fd', '#2e6099']
        }
    },
    computed: {
        computedWidth() {
            return {
                width: (100 - 2 - this.btns.length * 2) / this.btns.length + '%'
            }
        },
        computedFontStyle() {
            return {
                'font-size': 'px',
                'line-height': 'px'
            }
        }
    },
    methods: {
        goto(url) {
            location.href = url
        }
    }
})
