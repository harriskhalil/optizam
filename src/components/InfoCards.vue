<template>
  <div class="col-xl-4 col-lg-6 col-md-4 col-sm-12 col-xs-12 mb-lg-md mb-xs-md" v-for="data in cards">
    <div class="card bg-white ml-sm mr-sm pt-md pb-md pl-lg pr-lg">
      <div class="flex-container">
        <div class="col-xs-10">
          <p class="text-bold">{{ data.title }}</p>
        </div>
        <div class="col-xs-2">
          <p class="text-bold">{{ data.icon }}</p>
        </div>
      </div>
      <div class="mt-xl">
        <p class="text-xl text-bold">{{ data.number }}</p>
        <div>
          <div><span class="mr-sm text-dark-green">{{ data.icon_2 }}</span> <span
              class="mr-sm text-dark-green">{{ data.percentage }}</span> <span
              class="text-gray-bold ">{{ data.timeStamp }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    cards:[]
  }
}

</script>

<style scoped>

</style>