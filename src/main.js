import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import './registerServiceWorker'
import ScrollAnimation, { animationViewFull } from './directives/scrollAnimation'
import { store } from './store/store'

createApp(App)
.directive('scrollanimation', ScrollAnimation)
.directive('scrollview', animationViewFull)
.use(store)
.use(router)
.mount('#app')
