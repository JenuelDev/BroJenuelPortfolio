import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import './registerServiceWorker'
import ScrollAnimation from './directives/scrollAnimation'
import { store } from './store/store'

createApp(App)
.directive('scrollanimation', ScrollAnimation)
.use(store)
.use(router)
.mount('#app')
