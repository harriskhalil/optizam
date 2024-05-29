import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from "vue3-apexcharts";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* add icons to the library */
// library.add(...all)
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
//
// library.add(faUserSecret)
const app = createApp(App)
app.use(VueApexCharts);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
