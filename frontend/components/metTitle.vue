<template lang="pug">
    span
        span.big {{ first }}
        | {{ other }}

</template>

<script>
    export default {
        name: "metTitle",
        props:['title'],
        computed: {
            first() {return this.title[0]},
            other() {return this.title.slice(1)},
        }
    }
</script>

<style lang="stylus" scoped>
    .big
        font-size 1.5em
        color white
        background #6f0000
        padding 0 .2em
        margin-right .1em
</style>
