<template>
  <div>
    <mall-header/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import MallHeader from "../components/mallHeader/mallHeader.vue"

@Component({
  name: 'Address',
  components: {
    MallHeader
  }
})
export default class Address extends Vue {}
</script>

<style scoped lang="scss">
</style>

