<template>
  <div class="mall-header cover">
      <div class="container">
          <div class="logo" @click="backHome">
              <img src="../../assets/logo.png" alt="">
          </div>
          <div class="user">
              leah
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: 'MallHeader'
})
export default class HelloWorld extends Vue {
    backHome(){
        this.$router.push('/');
    }
}
</script>

<style scoped lang="scss">
@import "../../assets/mixin.scss";

.mall-header {
    height: 5rem;
    background-color: #fff;
    
    .container {
        @include flex-container;
        height: 100%;
        justify-content: space-between;

        .logo {
            width: 5rem;
            height: 100%;

            img {
                height: 80%;
                padding-top: 10%;
            }
        }

        .user {
            display: flex;
            height: 100%;
            width: 10rem;
            padding: 1rem;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
        }
    }
}
</style>
