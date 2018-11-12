<template lang="pug">
    div.carousel_wrapper
        a.control.prev(:class="stopPrev", @click="move()") <
        a.control.next(:class="stopNext", @click="move(true)") >
        .carousel(:style="'height: '+height+'px'")
            .slide_area(ref='area', :style="'left: '+position+'px'")
                slot
</template>

<script>
    export default {
        name: "carousel",
        props: ['height', 'padding'],
        data() {
            return {
                step: 0,
                position: 0,
                rightBorder: 0
            }
        },
        computed: {
            stopPrev() {
                return !this.position ? 'empty' : ''
            },
            stopNext() {
                return (this.position <= this.rightBorder) ? 'empty' : ''
            }
        },
        mounted() {
            this.step = this.$refs.area.firstChild.offsetWidth;
            this.rightBorder = this.$el.offsetWidth - this.$refs.area.offsetWidth;
        },
        methods: {
            move(next=false) {
                if (next) {
                    this.position -= (this.position >= this.rightBorder + this.step) ? this.step + parseInt(this.padding) : 0
                } else {
                    this.position += (this.position) ? this.step + parseInt(this.padding) : 0
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .carousel_wrapper
        position relative
    .carousel
        overflow hidden
        position relative
    .slide_area
        position absolute
        display flex
        justify-content space-between
        transition .5s
    .control
        position absolute
        cursor pointer
        height 2em
        width @height
        line-height @height
        border-radius 50%
        text-align center
        font-size 2em
        background #6f0000
        color white
        top 50%
        margin-top -1em
        transition .5s
        &.prev
            left -2em
        &.next
            right -2em
        &.empty
            pointer-events none
            opacity .2
            cursor default
</style>
