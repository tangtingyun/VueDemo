<template>
    <div class="body">
        <div class="box"></div>
    </div>
</template>

<script>
    export default {
        name: "clipPath"
    }
</script>

<style scoped>
    .body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .box {
        background: orange;
        clip-path: circle(75%);
        transition: clip-path 1s;
        height: 200px;
        width: 200px;
    }

    .box:hover {
        clip-path: circle(25%);
    }
</style>