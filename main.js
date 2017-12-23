import Vue from "vue"
import App from "./src/App.vue"
import axios from "./src/http.js"

function refresh(data) {

}

var a = new Vue({
    el: '#list',
    data: {
        items: Object
    },
    methods: {
        init: function() {
            axios.get('/api/data/福利/10/1')
                .then(function(response) {
                    a.$data.items = response.data.results;
                }).catch(function(error) {
                    console.log(error)
                });
        },
        test: function() {
            console.log("gggg");
        },
        test2: function() {
            a.$watch(items, function(old, pre) {
                console.log(" ===== >>> " + old);
                console.log(pre);
            });
        }
    },
    mounted: function() {
        console.log("hhhhhh");
        this.init();
        // this.test2();
    }
});



// new Vue({
//     el: '#example',
//     template: '<App/>',
//     components: { App }
// });