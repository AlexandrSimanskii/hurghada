<template>
  <div class="card">
    <div
      class="picture"
      :style="{
        backgroundImage: `url(${images[0]})`
      }"
    >
      <p class="category"></p>
      <div class="picture__icons"></div>
    </div>
    <div class="rating"></div>
    <div class="description">
      <h2 class="description__title">
        {{ name }}
      </h2>
      <p class="description__text">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  card: {
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
  }
}>()

const {
  _id,
  name,
  price,
  images,
  category,
  description,
  duration,
  group,
  reviews,
  rating,
  location,
  program
} = props.card
</script>

<style lang="scss" scoped>
.card {
  min-width: 420px;

  border-radius: 8px;
  overflow: hidden;
  
}
.picture {
  
  height: 500px;
  width: 100%;
 
  background-size: cover;
  background-position: center;
}
</style>
