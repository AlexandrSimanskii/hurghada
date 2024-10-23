<template>
  <div class="not-found">
    <div class="content">
      <h6 class="content__title">Welcome the 404th wonder of the Hurghada</h6>
      <p class="content__text">Plan your trip with us</p>
      <my-button class="button" @click="$router.push('/')">
        <span class="button__text">Home Page</span></my-button
      >
    </div>
    <div class="digit">404</div>
    <!-- <picture>
	<source src="image.webp" type="image/webp">
	<source src="image.avif" type="image/avif">
	<img src="image.jpg" alt="description">
</picture> -->
  </div>
</template>

<script setup lang="ts">
import MyButton from '@/components/UI/MyButton.vue'
</script>

<style scoped lang="scss">
@import '@/assets/style/main.scss';
.not-found {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  background-image: url(/images/image/notFound.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.content {
  text-transform: uppercase;
  max-width: 453px;
  &__title {
    font-size: 42px;
    font-weight: 700;
  }
  &__text {
    margin: 60px 0 16px;
    font-size: 20px;
  }
}
.digit {
  background: url(/public/images/image/404_1.jpg);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  color: yellow;
  font-size: 326px;
  font-weight: bold;
}
.button {
  display: flex;
  gap: 10px;
  &__text {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      mask-image: url(/public/images/icons/toHome.svg);
      -webkit-mask-image: url(/public/images/icons/toHome.svg);
      mask-size: cover;
      width: 24px;
      height: 24px;
      background-color: $primaryMain;
      top: -2px;
      left: -30px;
    }
  }
}
.img {
  height: 30px;
}
</style>
