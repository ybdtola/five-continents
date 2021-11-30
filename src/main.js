
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faShoppingCart)

// Vue.config.productionTip = false


createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount('#app')
