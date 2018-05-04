<template>
  <div class='layout-visual'>
    请开启你的组件开发之旅！
    {{propA}}
    {{propB}}
    {{propC}}
  </div>
</template>

<script>
export default {
  name: 'layout-visual',
  props: {
    // 基础类型检测 (`null` 意思是任何类型都可以)
    propA: Number,
    // 多种类型
    propB: [String, Number],
    // 必传且是字符串
    author: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      author: 'cjm'
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style>
  .layout-visual{
    color: brown;
    font-size: 18px;
  }
</style>
