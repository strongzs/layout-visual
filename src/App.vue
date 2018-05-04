<template>
  <div id="app">
    <VueComponent :author="author"/>
  </div>
</template>

<script>
import VueComponent from './lib/'
export default {
  name: 'app',
  components: {
    VueComponent
  },
  data () {
    return {
      author: 'cjm'
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
</style>
