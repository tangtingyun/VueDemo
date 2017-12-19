import Vue from "vue"

console.log("=========测试=========");
console.log(Vue);
var ele = new Vue({
    el: "#app",
    data: {
        message: "hello"
    }
});

console.log("==================");
console.log(ele);