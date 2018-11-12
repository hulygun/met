<template lang="pug">
    .control(:class="{in_action: in_action}")
        label(:class="") {{ label }}
        slot
        .fake_border

</template>

<script>
    export default {
        name: "formElement",
        props: ['in_action', 'label']
    }
</script>

<style lang="stylus" scoped>
    .control
        margin-top 1em
        position relative
        width 100%
        &.in_action
            label
                font-size .7em
                top -1em
                color #6f0000
            .fake_border
                transform scale(1)
        label
            position absolute
            left 0
            top 0
            transition .5s
        .fake_border
            background #6f0000
            width 100%
            height 3px
            transition .5s
            transform scale(0)
            position absolute
            bottom 3px

</style>
