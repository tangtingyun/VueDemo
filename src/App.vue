<template>
  <div id="example">{{message}}</div>
</template>
<script>
export default {
  data(){
      console.log("========");
      return {
          message:'hello template'
      }
  }
}
</script>


<style>
#example{
    color: red
}
</style>
