<template>
  <div class="mall-footer">
      <div class="container">
          <h3>Copyright © 2018-2023 Miaosiwei 妙思维教育科技. 蜀ICP备18026059号</h3>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
    name: "MallFooter",
})
export default class MallFooter extends Vue {}
</script>

<style scoped lang="scss">
.mall-footer {
    height: 6.5rem;

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        height: 100%;
        width: 1226px;
    }
}
</style>
