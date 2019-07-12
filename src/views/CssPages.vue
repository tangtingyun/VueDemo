<template>
    <div>
        <div class="underline">underline</div>

        <div class="small-btn" @click="smallClick">smallClick</div>
        <div class="clip-path">clipPath</div>
        <input type="checkbox"/>
        <label/>
        <div class="slide">
            <div class="content"></div>
            <div class="arrow" @click="toggle"></div>
        </div>
        <div class="content-box">
            content-box
        </div>
        <div class="border-box">
            border-box
        </div>
        <!--<div class="dimmed"></div>-->

        <!--<div class="light-box"></div>-->

        <!--<div class="cat"></div>-->
        <!--<img alt="猫" src="../assets/cat.png">-->

    </div>
</template>

<script>
    export default {
        name: "CssPages",
        methods: {
            smallClick() {
                window.alert("i am small btn")
            },
            toggle() {
                var content = document.getElementsByClassName("content")[0];
                if (content.style.width == "0px") {
                    content.style.width = "100px"
                } else {
                    content.style.width = "0px"
                }

            }
        }
    }

</script>

<style scoped>

    .slide {
        position: fixed;
        top: 80%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
    }

    .content {
        width: 100px;
        height: 100px;
        transition: all .3s ease-out;
        background-color: lightgreen;
    }

    .arrow {
        width: 20px;
        height: 20px;
        background-color: red;
    }

    .cat {
        width: 300px;
        height: 300px;
        background-image: url("../assets/cat.png");
        background-position: 50px 50px;
        /*background-size: 300px 300px;*/
    }

    .content-box {
        width: 100px;
        height: 100px;
        background-color: lightgreen;
        box-sizing: content-box;
        border: red solid 20px;
    }

    .border-box {
        width: 100px;
        height: 100px;
        margin-top: 20px;
        background-color: lightgreen;
        box-sizing: border-box;
        border: red solid 20px;
    }

    .dimmed {
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .light-box {
        position: absolute;
        z-index: 1;
        width: 100px;
        height: 100px;
        margin-top: 20px;
        background-color: lime;
    }

    .underline {
        background: linear-gradient(90deg, black, black);
        background-position: 0 1em;
        background-size: 100% 2px;
        background-repeat: no-repeat;
        margin-bottom: 20px;
    }

    .small-btn {
        width: 50px;
        height: 50px;
        margin-bottom: 20px;
        text-align: center;
        background-color: lime;
        position: relative;
    }

    /*.small-btn:before {
        content: '';
        position: absolute;
        width: 140px;
        height: 140px;
        background-color: fuchsia;
        top: -35px;
        left: -35px;
    }*/

/*    .clip-path {
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
        background-color: red;
        clip-path: circle(40%);
    }

    input[type="checkbox"] {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
    }

    input[type="checkbox"] + label::before {
        content: '\2639';
        display: inline-block;
        width: 1.2em;
        height: 1.2em;
        !*width: 50px;*!
        !*height: 50px;*!
        background-color: yellow;
        margin-right: .5em;
        border-radius: .1em;
        text-indent: .15em;
        line-height: 1.4;
    }

    input[type="checkbox"]:checked + label::before {
        background-color: red;
    }*/

    input[type="checkbox"]{
        background-color: yellow;
    }
    input[type="checkbox"]:checked{
        background-color: red;
    }
</style>