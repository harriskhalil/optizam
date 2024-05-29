<template>
  <div class="sidebar bg-dark-blue text-white pt-xl pl-xl-lg pl-lg-sm">
    <i class="header text-red text-bold pl-md text-xl">CRM.io</i>
    <div class="mr-md">
      <div>
        <div class="flex-container menu text  mt-lg">
          <a class="text-white text-md pt-md pb-md pl-md" href="#"><i class="fas fa-tachometer-alt "></i> Dashboard</a>
        </div>

        <div v-for="items in navigation">
          <div class="mt-lg pl-md flex-container flex-direction-col">
            <div >
              <a class=" text-md pt-md pb-md text-bold-blue text-bold">{{items.name}}</a>
              <div v-for="data in items.children">
                <p class="text-sm text-light-blue pt-sm children" >{{data.name}}</p>
              </div>
            </div>
          </div>
          <div class="divider pt-md"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        {
          name: 'Management',
          children: [
            {
              name: 'Document',

            },
            {
              name:'Contact',
            },
            {
              name:'Product',
            },
            {
              name:'Work Flow',
            },
          ]
        },
        {
          name: 'Connection',
          children: [
            {
              name: 'Chat Integration',

            },
            {
              name:'Marketing Automation',
            },
            {
              name:'Email Integration',
            },
          ]
        },
        {
          name: 'Customer',
          children: [
            {
              name: 'Transaction',

            },
            {
              name:'Maintenance',
            },
          ]
        },
      ]
    }
  }

}
</script>

<style scoped>
.sidebar {
  box-sizing: border-box;
  height: 100vw;
}
.sidebar .menu a {
  text-decoration: none;
  transition: background 0.3s;
}
.text:hover {
  background: dodgerblue;
  font-weight: bold;
  border-radius: 15px;
}

.children:hover{
  color: white;
  font-weight: bold;
}

.divider {
  border-bottom: 2px solid cornflowerblue;
  margin: 4px 10px;
}

</style>