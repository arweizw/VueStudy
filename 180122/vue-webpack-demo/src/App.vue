<template>
  <div id="app">
    <h1 @click="change">{{ msg }}</h1>
    <input type="button" value="分割字母" @click="split">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  methods: {
    change(){
      this.msg = '点击切换成功！'
    },
    split(){
      //如果需要更改原有字符串内容，需要先存储到一个变量在进行更改
      var str = this.msg;
      str = str.split('');
      this.msg = str;
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
