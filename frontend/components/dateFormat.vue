<template lang="pug">
    .cal
        .line
        span.date {{ dt[0] }}
        span.month {{ dt[1] }}

</template>

<script>
    export default {
        name: "dateFormat",
        props: ['date'],
        data() {
            return {
                dt: new this.$moment(this.date).format('DD MMMM').split(' ')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .cal
        display flex
        flex-direction column
        align-items stretch
        font-weight bold
        width 7em
        height @width
        text-align center
        border 1px solid #6f0000
        position relative
        &:before, &:after
            content ''
            position absolute
            top -.5em
            width 1em
            height 1em
            border-radius 50%
            border 1px solid #6f0000
            background white
            z-index 1
        &:before
            left 1em
        &:after
            right 1em
    .date
        flex-grow 1
        color #6f0000
        font-size 2em
        line-height 2.5em
    .month
        background #6f0000
        color white
        padding .5em 1em
    .line
        position absolute
        background white
        width 100%
        height .6em
        top -.7em
        z-index 2
</style>
