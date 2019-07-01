<template>
    <div>
        <ol style="text-align: left;">
            <li @click="event">EventListener</li>
            <li @click="cssPage">Element-UI</li>
            <li @click="ui">道连格雷的画像</li>
            <li @click="ui">月亮与六便士</li>
            <li @click="ui">圆桌派</li>
        </ol>

        <ul class="container">
            <li class="scroll-text">{{uuu}} {{uuu2}}</li>
        </ul>

    </div>
</template>

<script>
    /*eslint-disable*/

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                uuu: '虽然一次使用一个选择器就很有用，但在某些情形中却可能导致效率低下。 CSS选择器在你开始组合他们时就进行细粒度选择的会更加有效。基于元素之间的相互关联关系，CSS提供了几种方法来对元素进行选择。下表使用连接符展示了这些关联关系(A和B代表前文所述的任意选择',
                uuu2: '虽然一次使用一个选择器就很有用，但在某些情形中却可能导致效率低下。 CSS选择器在你开始组合他们时就进行细粒度选择的会更加有效。基于元素之间的相互关联关系，CSS提供了几种方法来对元素进行选择。下表使用连接符展示了这些关联关系(A和B代表前文所述的任意选择'
            }
        },
        methods: {
            event() {
                this.$router.push("/event")
            },
            cssPage() {
                this.$router.push("/css")
            },
            ui() {
                this.$message.error('请输入用户名')
            }
        },
        mounted() {
            console.log(this)
            // this.axios.get('/api/dictionary/CityVideoType').then((res) => {
            //     console.log(res)
            // })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    ol li:not(:last-child) {
        background-color: red;
    }

    .container
        list-style none
        width auto
        display inline
        float left
        text-align left
        .scroll-text
            margin-top 10px
            display inline-block
            background-color lightgreen

    /*overflow-wrap break-word*/
    /*word-wrap break-word*/
    /*-ms-word-break: break-all*/
    /*word-break: break-all*/
    /*word-break break-word*/
    /*hyphens auto*/
</style>
