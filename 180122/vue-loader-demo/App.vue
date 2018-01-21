<template>
    <h1>Welcome! Vue</h1>
    <h2 @click="change">{{msg}}</h2>
	<my-menu></my-menu>
</template>

<script>
    import Menu from './components/Menu.vue'

    export default{
        data(){
            return {
                msg:'测试成功！'
            }
        },
        methods: {
            change(){
                this.msg = '点击事件成功！'
            }
        },
        components:{
            'my-menu':Menu
        }
    }
</script>

<style>
    body{
        background: #ccc;
    }
</style> 
