<template>
  <div id="example">
     <!-- <div v-on:click="itemClick()">
       {{items}}
     </div> -->

    <div v-for="item in items"  v-bind:key="item.createdAt">
            <img v-bind:src="item.url" width="300px" height="300px" @click="itemClick()" />
        </div>
  </div>
</template>
<script>
import axios from "./http.js";

export default {
  name: "zyflist",
  data() {
    return {
      items: "5555"
    };
  },
  mounted() {
    var self = this;
    axios
      .get("/api/data/福利/10/1")
      .then(function(response) {
        console.log("========");
        console.log(self);
        self.items = response.data.results;
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    itemClick() {
      console.log("组件点击事件");
    }
  }
};
</script>


<style>
#example {
  color: red;
}
</style>
