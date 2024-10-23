<template>
  <main>
    <section class="top-section">
      <div class="welcome">
        <img class="welcome__content" src="/public/images/image/title.svg" alt="" />
        <div class="play"></div>
      </div>

      <aside class="aside">
        <ul class="aside__list">
          <li><img src="/images/icons/Facebook_white.png" alt="Facebook" /></li>
          <li><img src="/images/icons/Instagram_white.png" alt="Instagram" /></li>
          <li><img src="/public/images/icons/Twitter_white.png" alt="Twitter" /></li>
          <li><img src="/public/images/icons/Youtube_white.png" alt="Youtube" /></li>
        </ul>
      </aside>
    </section>

    <cards-section :name="'Things To Do in Hurghada'">
      <card-app v-for="card of thinkToDoCards" :key="card._id" :card="card"></card-app
    ></cards-section>
  </main>
</template>

<script setup lang="ts">
import CardApp from '@/components/CardApp.vue'
import CardsSection from '@/components/CardsSection.vue'

import { ref } from 'vue'
import type { Ref } from 'vue'
const thinkToDoCards: Ref<
  {
    _id: string
    name: string
    price: string
    images: string[]
    category: string
    description: string
    'full descriptions': string
    duration: string
    group: string
    reviews: string[]
    rating: number
    location: string
    'important information': string[]
    program: string[]
  }[]
> = ref([])

const getThinkToDoCards = async () => {
  try {
    const data = await fetch('http://localhost:3004/api/excursions')
    const cards = await data.json()
    thinkToDoCards.value = cards
  } catch (error) {
    console.log("Ошибка при получении 'ThinkToDoCards'")
  }
}
getThinkToDoCards()
</script>

<style scoped lang="scss">
@import '@/assets/style/main.scss';
.top-section {
  margin-bottom: 120px;
  position: relative;
  background-image: url(/images/image/mainImg.jpg);
  background-size: cover;
  overflow: hidden;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.welcome {
  overflow: hidden;
  position: absolute;
  transform: translateY(58%);
  bottom: 50%;
  max-width: 1264px;
  display: flex;
  text-align: center;
  justify-content: start;
  flex-direction: column;
  text-transform: uppercase;
  color: white;

  &__content {
    transform: translateX(-1300px);
    opacity: 0;
    animation: welcomeAnimate 2s ease-in-out forwards;
    animation-delay: calc(($main-animation-duration + $main-animation-delay) * 0.7);
    margin-bottom: 50px;
  }
}
.aside {
  position: absolute;
  right: -50px;
  top: 50%;
  opacity: 0;
  transform: translateY(-50%);
  &__list {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  animation: asideAnimate ease-in-out forwards;
  animation-duration: calc($main-animation-duration / 2);
  animation-delay: calc(($main-animation-duration + $main-animation-delay) * 0.5);
}
.play {
  transform: scale(0);
  position: relative;
  align-self: center;
  border: 3px solid white;
  border-radius: 50%;
  background-color: rgba(171, 161, 161, 0.1);
  backdrop-filter: blur(1px);
  width: 106px;
  height: 106px;
  cursor: pointer;
  &::before {
    content: url(/public/images/icons/play.png);
    position: absolute;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
  }

  animation: playAnimate ease-in forwards;
  animation-duration: $main-animation-duration;
  animation-delay: calc(($main-animation-duration + $main-animation-delay) * 1);
}

@keyframes welcomeAnimate {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes asideAnimate {
  to {
    right: 10px;
    opacity: 1;
  }
}
@keyframes playAnimate {
  to {
    transform: scale(1);
  }
}
</style>
