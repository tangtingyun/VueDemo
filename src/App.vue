<template>
  <div id="example">{{items}}</div>
</template>
<script>
import axios from "./http.js";

export default {
  data() {
    return {
      items: "5555"
    };
  },
  mounted() {
    axios
      .get("/api/data/福利/10/1")
      .then(function(response) {
        console.log("========");
        $data.items = response.data;
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
      
  }
};
</script>


<style>
#example {
  color: red;
}
</style>
