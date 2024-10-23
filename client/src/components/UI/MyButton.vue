<template>
  <button class="button"><slot /></button>
</template>

<script setup lang="ts">
const props = defineProps<{
  image?: String
}>()
</script>

<style scoped lang="scss">
@import '@/assets/style/main.scss';
.button {
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid $primaryMain;
  font-size: 20px;
  font-weight: 500;
  padding: 20px 86px;
  @include buttonGlass;
 
}
</style>
