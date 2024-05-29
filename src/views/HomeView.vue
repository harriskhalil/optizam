<template>
  <div class="flex-container">
    <div class=" col-xl-2 col-lg-2 col-md-3 xs:hidden lg:block bg-dark-blue ">
      <SideBar/>
    </div>
    <div class="col-xl-10 col-lg-10 col-xs-12 bg-gray-dark">
      <div class="pl-lg-lg pt-md">
        <div class="flex-container">
          <div class="col-xl-9 col-lg-9 col-xs-12">
            <p class="text-xl text-bold mb-md pl-sm">Overview</p>
            <div class="flex-container">
              <InfoCards :cards="cards"/>
            </div>

            <div class="flex-container mt-xl-xl mt-lg-none mt-xs-xl">
              <div class="col-lg-6 col-sm-12 col-xs-12 mb-sm-none mb-xs-md">
                <div class="card bg-white ml-sm mr-sm pt-md pb-md pl-lg pr-lg">
                  <div>
                    <apexchart
                        type="line"
                        :options="chartOptions"
                        :series="series"
                    ></apexchart>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12 col-xs-12 mb-sm-none mb-xs-md  mt-lg-none mt-sm-lg ">
                <div class="card bg-white ml-sm mr-sm pt-md pb-md pl-lg pr-lg">
                  <div>
                    <apexchart
                        type="bar"
                        :options="chartOptions"
                        :series="series"
                    ></apexchart>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-container">
              <div class="col-xs-12 col-xl-12 ">
                <DataTable class=""/>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-xs-12">
            <p class="pl-lg">Administrator</p>
            <div class="card bg-white mt-xl ml-xl-md pl-md pt-sm pb-sm">
              <p class="text-bold">Popular Products</p>
              <PopularProducts :popular_gadgets="popular_gadgets"/>

              <p class="text-bold">Chat</p>
              <Chats :chats="chats"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SideBar from "@/components/SideBar.vue";
import InfoCards from "@/components/InfoCards.vue";
import PopularProducts from "@/components/PopularProducts.vue";
import Chats from "@/components/Chats.vue";
import DataTable from "@/components/DataTable.vue";

export default {
  components: {DataTable, Chats, PopularProducts, InfoCards, SideBar},
  data() {
    return {
      cards: [
        {
          title: 'Document',
          icon: 'Icon',
          number: '146.0000',
          percentage: '17%',
          icon_2: 'icon',
          timeStamp: 'Since last week'
        },
        {
          title: 'Contact',
          icon: 'Icon',
          number: '1400',
          percentage: '17%',
          icon_2: 'icon',
          timeStamp: 'Since last week'
        },
        {
          title: 'Email',
          icon: 'Icon',
          number: '150.700',
          percentage: '17%',
          icon_2: 'icon',
          timeStamp: 'Since last week'
        },
      ],
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
      popular_gadgets: [
        {
          imgUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          title: 'Gadget',
          price: '$250',
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          title: 'Lens Camera',
          price: '$50',
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          title: 'AirPods',
          price: '$100',
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          title: 'Mac Book',
          price: '$999',
        },
      ],

      chats: [
        {
          imgUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          name: 'Debra Young',
          comment: 'How is my product',
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          name: 'Dorothy Collins',
          comment: 'How was the meeting',
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          name: 'Chris Jordan',
          comment: 'How employees performance',
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          name: 'Denise Murphy',
          comment: 'How was the meeting',
        },
      ]

    }
  }

}
</script>

<style scoped>


</style>
