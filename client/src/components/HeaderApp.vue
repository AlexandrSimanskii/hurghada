<template>
  <header class="header container">
    <img src="/public/images/image/hurghada.png" alt="hurghada" />
    <ul class="navigation">
      <li class="navigation__el" v-for="list of navList" :key="list">{{ list }}</li>
    </ul>
    <div class="weather">
      <img src="/public/images/icons/wheather.png" alt="cloud" />Hurghada, Red Sea
      {{ temperature }}C
    </div>
    <ul class="icons">
      <li class="icons__el"><img src="/public/images/icons/search.png" alt="" /></li>
      <li class="icons__el"><img src="/public/images/icons/user.png" alt="" /></li>
      <li class="icons__el"><img src="/public/images/icons/menu.png" alt="" /></li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const navList: string[] = [
  'Things to do',
  'News',
  'Night life',
  'Food guide',
  'Real estate',
  'Excursions',
  'Jobs',
  'Airport transfer',
  'Contact us'
]
const temperature = ref('')
const isAnimate = ref(false)

const getWheather = () => {
  fetch(`https://api.weatherapi.com/v1/current.json?key=69ed7b91ab4b4d4f9f282327242604&q=Hurghada`)
    .then((response) => response.json())
    .then((data) => {
      temperature.value = data.current.temp_c
    })
    .catch((error) => {
      console.error(error)
    })
}
getWheather()
</script>

<style scoped lang="scss">
@import '@/assets/style/main.scss';
.weather {
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
  text-wrap: nowrap;
}
.header {
  padding: 16px;
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  top: -100px;
  opacity: 0.5;
  color: #f5f5f5;
  background-color: rgba(53, 53, 53, 0.5);
  backdrop-filter: blur(3px);
  display: flex;
  gap: 80px;
  justify-content: space-between;
  align-items: center;
  animation: headerAnimate ease-in-out forwards;
  animation-duration: calc($main-animation-duration);
  animation-delay: calc($main-animation-delay / 5);
}

.icons {
  display: flex;

  &__el {
    padding: 0 30px;
    cursor: pointer;
    &:not(:last-child) {
      border-right: 1px solid #616161;
    }
  }
}

.navigation {
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 20px;
  flex-wrap: wrap;
  height: 20px;
  overflow-y: hidden;
  &__el {
    cursor: pointer;
  }
}
@keyframes headerAnimate {
  from {
    top: -100px;
    opacity: 0.5;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
</style>
