<template>
    <div>
        <div>兄</div>
        <div>弟</div>
        <div class="a b"></div>
    </div>

</template>

<script>
    /*eslint-disable*/
    import h from 'vue'

    export default {
        name: "VnodePage",
        mounted () {
            this.createdTest();
            console.log(0xffff)
        },
        methods: {
            createdTest () {
                let hello = Object.create(null, {
                    x: {
                        enumerable: true,
                        configurable: true,
                        get () {
                            return "world"
                        },
                        set () {

                        }
                    }
                })
                console.log(hello.x)
            },
            assignTest () {
                let obj1 = {a: 0, b: {c: 0}};
                let obj2 = Object.assign({}, obj1);

                console.log(JSON.stringify(obj2));

                obj1.a = 1;
                console.log(JSON.stringify(obj1));
                console.log(JSON.stringify(obj2));

                obj2.a = 2;
                console.log(JSON.stringify(obj1));
                console.log(JSON.stringify(obj2));

                obj2.b.c = 3;
                console.log(JSON.stringify(obj1));
                console.log(JSON.stringify(obj2));

                obj1 = {a: 0, b: {c: 0}};
                let obj3 = JSON.parse(JSON.stringify(obj1));
                obj1.a = 4;
                obj1.b.c = 4;
                console.log(JSON.stringify(obj3));


            }
        }
    }
</script>

<style scoped>

    .a {

    }

    .b {

    }

</style>