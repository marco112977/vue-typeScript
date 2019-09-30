<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="TypeScript App" />
    <hello-world msg="TypeScript Test" />
    <div class="div1">div1</div>
    <div class="div2">div2</div>
    <div class="f24">使用scss循环生成的类名（.f12 ~ .f30）f代表：font-size</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    // HelloWorld
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
.div1 {
  color: $primary; // 使用scss变量
}
.div2 {
  @include primary; // 使用scss混合
}
</style>
