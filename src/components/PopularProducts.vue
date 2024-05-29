<template>
  <div class="flex-container" v-for="items in popular_gadgets">
    <img class="image" :src="items.imgUrl">
    <div class="ml-md">
      <p class="mt-sm text-bold">{{ items.title }}</p>
      <p class=" text-gray-bold">{{ items.price }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    popular_gadgets:[]
  }
}
</script>

<style scoped>

</style>