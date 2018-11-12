<template lang="pug">
    #main_slider
        svg(width="100%" height="550")
            defs
                mask(v-for= "(slide, index) in value" x="0" y="0", width="100%" height="550" :id="'mask_'+index")
                    rect(x="0" y="400" width="100%" height="100" fill="#ddd")
                    rect(x="0" y="510" width="100%" height="15" fill="#ddd")
                    text.mask_text(:x="leftSpace" y="480" dy="1") {{ slide.text }}

            image#slide(:xlink:href="currentImg")
            text#date(:x="leftSpace" y="399" dy="1" fill="white") {{ currentDate }}
            rect(x="0" y="400" width="100%" height="125", :mask="currentMask" fill="white")
            rect#change(:x="changeX", y="0" :width="changeWidth+'%'", height="550" fill="white")
        .slider_controls
            a.slide_control(v-for= "(slide, index) in value" @click="rotateSlider(index)" :class="{active: index === slideIndex}")

</template>

<script>
    export default {
        name: "mainSlider",
        props: ['value'],
        data() {
            return {
                slideIndex: 0,
                changeX: 0,
                changeWidth: 100,
            }
        },
        computed: {
            leftSpace() {
                return (document.documentElement.clientWidth - 1130) / 2
            },
            currentImg() {return this.value[this.slideIndex].img},
            currentDate() {return this.value[this.slideIndex].date},
            currentMask() {return 'url(#mask_'+ this.slideIndex +')'},
        },
        methods: {
            rotateSlider(index=null) {
                const self = this;
                this.runSlide()
                let currentIndex;
                if (index) {
                    currentIndex = index
                } else {
                    currentIndex = (self.slideIndex < self.value.length -1) ? self.slideIndex + 1 : 0
                }
                setTimeout(() =>  self.slideIndex = currentIndex, 1400)
            },
            runSlide() {
                const self = this;
                this.changeX = document.documentElement.clientWidth;
                setTimeout(() => self.changeWidth = 100, 500);
                setTimeout(() => self.changeX = 0, 1000);
                setTimeout(() => self.changeWidth = 0, 1500);
            }
        },
        mounted() {
            const self = this;
            this.changeX = document.documentElement.clientWidth
            setTimeout(function run() {
                self.rotateSlider();
                setTimeout(run, 7000)
            }, 7000)
        }
    }
</script>

<style lang="stylus" scoped>
    #main_slider
        width 100vw
        .container
            overflow hidden
        .mask_text
            font-size 48px
        #date
            font-size 72px
            opacity .85
            text-transform uppercase
        #change
            transition .5s
        .slider_controls
            margin-top 1em
            display flex
            justify-content center
            .slide_control
                width 1em
                height 1em
                border-radius 50%
                background #ccc
                cursor pointer
                display block
                margin 0 .5em
                transition .5s
                &.active
                    background #6f0000



</style>
