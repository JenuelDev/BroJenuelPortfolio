<template>
     <section class="intro">
          <slide-y-up-transition :delay="200">
               <h1 v-show="show">Hi! <v-icon>{{handIcon}}</v-icon> my name is</h1>
          </slide-y-up-transition>
          <slide-y-up-transition :delay="300">
               <h2 v-show="show">{{name}}</h2>
          </slide-y-up-transition>
          <slide-y-up-transition :delay="400">
               <h3 v-show="show">{{ido}}</h3>
          </slide-y-up-transition>
          <slide-y-up-transition :delay="600">
               <p v-show="show">{{des}}</p>
          </slide-y-up-transition>
          <slide-y-up-transition :delay="700">
               <v-btn v-show="show" outlined x-large class="get-in-touch" :href="'mailto:'+email">
                    Get In Touch
               </v-btn>
          </slide-y-up-transition>
     </section>
</template>

<script>
import { email, IDo, name, simpleDescription } from './../../data/intro';
import { SlideYUpTransition  } from 'vue2-transitions';
import { mdiHand } from '@mdi/js'

export default {
     name: "Intro",
     components: {
           SlideYUpTransition
     },
     mounted() {
          this.show = true;
     },
     data: () => {
          return {
               name: name,
               ido: IDo,
               des: simpleDescription,
               email: email,
               show: false,
               handIcon: mdiHand
          }
     }
}
</script>
<style lang="scss" scope>
     .intro {
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          flex-direction: column;
          align-items: flex-start;
          min-height: 90vh;
          max-width: 1000px;

          h1 {
               margin: 0px 0px 0px 4px;
               color: var(--green);
               font-family: var(--font-mono) !important;
               font-size: 17px !important;
               font-weight: lighter;
               line-height: 1.1;
          }
          h2 {
               margin: 0px 0px -20px 0px !important;
               font-size: clamp(40px, 8vw, 80px);
               color: var(--white);
          }
          h3 {
               margin-top: 10px;
               color: var(--slate);
               line-height: 0.9;
               font-size: clamp(40px, 8vw, 80px);
          }
          p {
               margin: 20px 0px 0px;
               max-width: 500px;
               color: var(--slate);
          }
          .get-in-touch {
               border: 1px solid var(--green);
               border-radius: 4px;
               font-size: 14px;
               color: var(--green);
               margin-top: 30px;
          }
     }
</style>