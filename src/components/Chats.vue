<template>
  <div class="flex-container" v-for="items in chats">
    <img class="image" :src="items.imgUrl">
    <div class="ml-md">
      <p class="mt-sm text-bold">{{ items.name }}</p>
      <p class=" text-gray-bold">{{ items.comment }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    chats:[]
  }
}
</script>

<style scoped>

</style>