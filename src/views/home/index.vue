<template>
  <div>
    <h1>{{ appName }}</h1>
    <ol>
      <li>mapGetters使用</li>
      <li>scss文件引用方式使用</li>
      <li>项目使用eslint检查代码规范</li>
      <li>jenkins 非常好用！OK🙆</li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'appName'
    ])
  }
}
</script>

<style scoped lang="scss">
  // @代表src目录，这里只是演示了样式的引用方式，实际使用的时候可以直接在这里写
  /*@import "@/assets/scss/home.scss";*/
  h1 {
    color: blueviolet;
  }
</style>
