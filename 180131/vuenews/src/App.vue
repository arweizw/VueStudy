<template>
  <div id="app">
    <p>{{msg}}</p>

  <button @click="inserted">添加数据</button>
  </div>
</template>

<script>
import AV from 'leancloud-storage'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    inserted(){
      var Todo = AV.Object.extend('Todo');
      // 声明类型
      var TodoFolder = AV.Object.extend('TodoFolder');
      // 新建对象
      var todoFolder = new TodoFolder();
      // 设置名称
      todoFolder.set('name','工作');
      // 设置优先级
      todoFolder.set('priority',1);
      todoFolder.save().then(function (todo) {
        console.log('objectId is ' + todo.id);
      }, function (error) {
        console.error(error);
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
