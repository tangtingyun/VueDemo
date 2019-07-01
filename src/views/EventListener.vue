<template>
    <div>
        {{msg}}
        <p data-foo="Hello">world</p>
        <div class="outer" @click="outer">
            <div class="inner" @click="inner"></div>
        </div>

        <p>Please click on the checkbox control.</p>

        <form>
            <label for="id-checkbox">Checkbox:</label>
            <input type="checkbox" id="id-checkbox"/>
        </form>

        <div id="output-box"></div>
    </div>
</template>

<script>
    /*eslint-disable*/
    export default {
        name: "EventListener",
        data() {
            return {
                msg: ""
            }
        },
        mounted() {
            console.log(this);
            console.log(window)
            console.log(document)
            for (let event in window) {
                if (/^on/.test(event)) {
                    console.log(event)
                }
            }

            document.querySelector("#id-checkbox").addEventListener("click", function (event) {
                document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
                event.preventDefault();
            }, false);
        },
        methods: {
            outer(event) {
                console.log("i am outer")
                console.log(event)
            },
            inner() {
                console.log("i am inner")
                console.log(event)
                event.stopPropagation();
            }
        }
    }
</script>

<style scoped>
    p:before {
        content: attr(data-foo) " ";
    }

    .outer {
        display: flex;
        width: 300px;
        height: 300px;
        background: lightblue;
        align-items: center;
        justify-content: center;
    }

    .inner {
        width: 100px;
        height: 100px;
        background: lightgreen;
    }
</style>