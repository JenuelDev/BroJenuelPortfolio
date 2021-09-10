import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import './registerServiceWorker'
import ScrollAnimation, { animationViewFull } from './directives/scrollAnimation'
import { store } from './store/store'
import VueSession from './helper/VueSession'
import 'boxicons/css/boxicons.min.css'
import 'windi.css'

createApp(App)
    .directive('scrollanimation', ScrollAnimation)
    .directive('scrollview', animationViewFull)
    .directive('click-outside', {
        beforeMount(el, binding) {
            el.clickOutsideEvent = function (event) {
                if (!(el === event.target || el.contains(event.target))) {
                    binding.value(event, el);
                }
            };
            document.body.addEventListener('click', el.clickOutsideEvent);
        },
        unmounted(el) {
            document.body.removeEventListener('click', el.clickOutsideEvent);
        }
    })
    .use(store)
    .use(router)
    .use(VueSession, {
        persist: true
    })
    .mount('#app')
