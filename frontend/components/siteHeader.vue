<template lang="pug">
    header
        .container
            a.brand(href="#")
                met-title(title="Этюд")
            span.separator
            nav
                a(href="#") Новости
                a(href="#") Афиша
                a(href="#") Труппа
                a(href="#") Репертуар
                a(href="#") Контакты
                a(href="#") Обратная связь
</template>

<script>
    import MetTitle from "@component/metTitle";
    export default {
        name: "siteHeader",
        components: {MetTitle}
    }
</script>

<style lang="stylus" scoped>
    header
        width 100%
        min-height 2em
        border-bottom 2px solid #6f0000
        padding-bottom 0
    .brand
        font-size 1.5rem
    .container
        display flex
        justify-content space-between
        align-items flex-end
    .separator
        flex-grow 1
    nav
        padding-bottom .3em
        a
            padding-left 1em
            transition .3s
            color #666
            &:hover
                color #222
</style>
