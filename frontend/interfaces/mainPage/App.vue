<template lang="pug">
    section
        site-header
        main-slider(v-model="slides")
        section.quote
            .container
                blockquote
                    p {{ quote.text }}
                    span {{ quote.author }}
        section#news
            .container
                h2.section_title
                    met-title(title="Новости")
                .news
                    article(v-for='article in news')
                        date-format(:date="article.date")
                        a.news_title(:href='article.link'): h3 {{ article.title }}

        section.sep(data-change="blue")
        section#repertoire
            .container
                h2.section_title
                    met-title(title="Репертуар")
                carousel(height='484', padding='20').stages
                    article.stage(v-for='stage in repertoire')
                        a(href="#")
                            img(:src="stage.img")
                            h3 {{ stage.title }}
        section#members
            .container
                h2.section_title
                    met-title(title="Коллектив")
                carousel(height='220', padding='65').members
                    article.member(v-for='stage in [1,2,3,4,5,6,7,8,9,0]')
                        a(href="#")
                            img(src="frontend/assets/member.jpeg")
                            .info
                                span Владимир
                                span Коробков

        section.sep(data-change="green")
        section#contacts
            .container
                h2.section_title
                    met-title(title="Обратная связь")
                .contact_form
                    form-element(label='Сообщение', :in_action="textFocus || text")
                        textarea.form_message(
                            v-model='text'
                            @focus="textFocus = true"
                            @blur="textFocus = false"
                            rows='3'
                        )
                .form_actions
                    form-element(label='email', :in_action="emailFocus || email")
                        input(
                            v-model='email'
                            @focus="emailFocus = true"
                            @blur="emailFocus = false"
                        )
                    button.btn Отправить

        footer
            .container
                .footer_list
                    p.met_adres
                        | Народный Коллектив
                        br
                        | Молодёжный Экспериментальный Театр
                        br
                        | "ЭТЮД"
                        br
                        br
                        |ул. Ленина 3а, г. Сафоново, Смоленской обл.
                        br
                        |тел: +7 123 456 78 90

                    ul.first_list
                        - for(var i = 0; i < 5; i++)
                            li Ссылка c описанием #{ i }
                    ul.first_list
                        - for(var i = 0; i < 5; i++)
                            li Ещё ссылка #{ i }
                    ul
                        - for(var i = 0; i < 5; i++)
                            li какая то маленькая ссылка #{ i }
</template>

<script>
    import SiteHeader from "@component/siteHeader";
    import MainSlider from "@component/mainSlider";
    import MetTitle from "@component/metTitle";
    import DateFormat from "@component/dateFormat";
    import Carousel from "@component/carousel";
    import FormElement from "@component/formElement";

    export default {
        name: "App",
        components: {FormElement, Carousel, DateFormat, MetTitle, MainSlider, SiteHeader},
        data() {
            return {
                bodyClass: 'default',
                scrolls: [],
                slides: [
                    {
                        img: 'frontend/assets/slide3.jpg',
                        text: 'Юбилейный концерт. 20 лет',
                        date: '7 ноября'
                    },
                    {
                        img: 'frontend/assets/slide2.jpg',
                        text: 'А зори здесь тихие',
                        date: '23 марта'
                    },
                    {
                        img: 'frontend/assets/slide1.jpg',
                        text: 'День театра',
                        date: '27 марта'
                    },
                ],
                slideIndex: 1,
                quote: {
                    text: 'В театре режиссёр - Бог, но актёры, увы, атеисты.',
                    author: 'Жарко Петан'
                },
                news: [
                    {
                        title: 'Заголовок новости с непонятным названием',
                        date: new Date(2018, 10, 3),
                        link: '#'
                    },
                    {
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        date: new Date(2018, 9, 30),
                        link: '#'
                    },
                    {
                        title: 'Aliquam rhoncus ex lacus, vitae placerat augue posuere ut. Praesent ac dui cursus, sollicitudin erat vel, efficitur ligula.',
                        date: new Date(2018, 9, 17),
                        link: '#'
                    }
                ],
                repertoire: [
                    {img: "frontend/assets/ss.jpg", title: 'Название спектакля'},
                    {img: "frontend/assets/ss.jpg", title: 'Название спектакля'},
                    {img: "frontend/assets/ss.jpg", title: 'Название спектакля'},
                    {img: "frontend/assets/ss.jpg", title: 'Название спектакля'},
                    {img: "frontend/assets/ss.jpg", title: 'Название спектакля'}
                ],
                text: null,
                email: null,
                textFocus: false,
                emailFocus: false
            }
        },
        computed: {},
        methods: {
            changeBodyClass() {
                let body = document.getElementsByTagName('body')[0];
                let doChange = false;
                this.scrolls.forEach(data => {
                    if (data.offsetTop <= window.scrollY - 300) {
                        doChange = true;
                        body.classList.add(data.className)
                    } else if (data.offsetTop > window.scrollY - 300) {
                        body.classList.remove(data.className)
                    }
                })
            },
            pushSep: e => {
                return {
                    className: e.dataset.change,
                    offsetTop: e.getBoundingClientRect().top + window.scrollY
                }
            }
        },
        mounted() {
            let scroll = [];
            const self = this;
            NodeList.prototype.forEach = Array.prototype.forEach;
            document.querySelectorAll('.sep').forEach(el => scroll.push(self.pushSep(el)));
            this.scrolls = scroll;
            window.onscroll = this.changeBodyClass;

        },
        created () {
            window.addEventListener('scroll', this.changeBodyClass);
        },
        destroyed () {
            window.removeEventListener('scroll', this.changeBodyClass);
        }
    }
</script>

<style lang="stylus">
    html,
    body
        font-family "Arial" sans-serif
        width 100vw
        min-height 100vh
        padding 0
        margin 0
        color #444

    body
        background-color hsl(2, 57%, 20%)
        background-attachment fixed
        background-image:
            repeating-linear-gradient(transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
            repeating-linear-gradient(270deg, transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
            repeating-linear-gradient(125deg, transparent, transparent 2px, rgba(0,0,0,.2) 2px, rgba(0,0,0,.2) 3px, transparent 3px, transparent 5px, rgba(0,0,0,.2) 5px)

        & > section
            background-image url("../../assets/masks.svg")
            background-repeat no-repeat
            background-position center
            background-size 20%
            background-attachment fixed
        &.blue
            background-color hsl(229, 57%, 20%)
        &.green
            background-color hsl(137, 57%, 20%)
    h1,h2,h3,h4,svg,nav,.brand
        font-family "Arial Black" sans-serif
    h1,h2,h3,h4
        margin 0
    ul
        margin 0
        padding 0
        list-style none
    a
        text-decoration none
        color inherit
    *
        box-sizing border-box
    textarea, input
        width 100%
        border none
        outline none
        border-bottom 2px solid #ccc
        resize: none
        font-size inherit
        color #999
        margin 0
        padding 0
    .container
        width 1140px
        margin 0 auto
    .section_title
        font-size 1.4em
        border-bottom 1px solid #6f0000
    .quote
        font-size 1.3em
        font-style italic
        padding 2em 0
        color #666
        blockquote
            width 70%
            margin 0 auto
            position relative
            background #f4f4f4
            padding 1em 1em 2em 4em
            box-shadow 2px 2px 2px #ccc

            &:before
                content '"'
                position absolute
                font-size 8em
                color white
                left .01em
                top .01em
                text-shadow -2px -2px 2px #ccc
            span
                float right
                font-weight bolder
                padding-bottom 2em
    section > *
        background white
        padding-bottom 2em

    .sep
        background none
        height 300px
        position relative
        overflow hidden
        box-shadow:
            inset 0 20px 16px rgba(0,0,0,.6),
            inset 0 -20px 16px rgba(0,0,0,.6)
        &:before, &:after
            content ''
            display block
            position absolute
        &:before
            border-left 100vw solid white
            border-top 50px solid white
            border-right 100vw solid transparent
            border-bottom 50px solid transparent
            top 0
        &:after
            border-right 100vw solid white
            border-bottom 50px solid white
            border-left 100vw solid transparent
            border-top 50px solid transparent
            bottom 0
            left -50%


    .empty
        height 500px
    .news
        display flex
        justify-content space-between
        padding-top 2em
        flex-direction column
        & > article
            margin-bottom 2em
            display flex
            justify-content space-between
            align-items center
            font-size .7em
    .news_title
        flex-grow 1
        font-size 1.6rem
        color #999
        padding-left 1em
        transition .5s
        &:hover
            color #666

    .cal
        flex-shrink 0
     .stages, .members
        margin-top 1em
    .stage
        width 360px
        margin 0 10px
        position relative
        h3
            position absolute
            display block
            width 100%
            bottom 0
            color black
            background rgba(255,255,255,.8)
            padding .8em
            font-size 1.2em
    .member
        width 220px
        margin 0 32.5px
        border-radius 50% 5px
        overflow hidden
        position relative
        .info
            border-radius 50% 5px
            position absolute
            width 100%
            height 100%
            left 0
            top 0
            display flex
            justify-content center
            align-items center
            flex-direction column
            line-height 1.5
            background rgba(0,0,0,.8)
            color white
            font-weight bold
            opacity 0
            transition .5s
        &:hover .info
            opacity 1
    .contact_form
        margin-top 2em
        font-size 1.4em
    .form_actions
        margin-top 1em
        font-size 1.4em
        display flex
        justify-content space-between
        .btn
            margin-left 30%
            border none
            background #6f0000
            font-family "Arial Black" sans-serif
            color white
            padding .5em 1em
            font-size 1em
    footer
        background #222
        color white
        padding-top 2em
        .footer_list
            display flex
            justify-content space-between
            & > *
                flex-basis 25%
                line-height 1.3em
            .first_list
                text-transform uppercase
</style>
