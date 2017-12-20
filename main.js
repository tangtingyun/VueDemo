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
    mounted() {
        axios.get('/api/data/福利/10/1')
            .then(function(response) {
                a.$data.items = response.data.results;
            }).catch(function(error) {
                console.log(error)
            });

    }
});


new Vue({
    el: '#example',
    template: '<App/>',
    components: { App }
});