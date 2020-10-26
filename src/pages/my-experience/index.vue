<template>
     <section class="my-work">
          <div>
               <slide-y-up-transition :delay="100">
                    <h2 v-show="$store.state.experienceShow" class="numbered-header"> <v-icon class="front-icon">{{workIcon}}</v-icon> Where I've Worked</h2>
               </slide-y-up-transition>
               <slide-x-left-transition :delay="300">
                    <div v-show="$store.state.experienceShow">
                         <v-tabs v-if="showTab" :vertical="vertical">
                              <template v-for="work in works">
                                   <v-tab :key="work.company">
                                        <!-- <v-icon left>
                                             {{ work.icon }}
                                        </v-icon> -->
                                        {{work.tab}}
                                   </v-tab>
                                   <v-tab-item class="tab-items" :key="work.company">
                                        <div style="min-height: 200px;">
                                             <h3>{{work.position}} <span class="highlight">@ {{work.company}}</span></h3>
                                             <p class="date">{{work.workStart}} - <span :class="work.present ? 'highlight' : ''">{{work.workUntil}}</span></p>
                                             <div class="list">
                                                  <ul>
                                                       <li v-for="d in work.des" :key="d" v-html="d"></li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </v-tab-item>
                              </template>
                         </v-tabs>
                         <div v-else >
                              <div v-for="work in works" :key="work.company" class="small-size">
                                   <div>
                                        <h3>{{work.position}} <span class="highlight">@ {{work.company}}</span></h3>
                                        <p class="date">{{work.workStart}} - <span>{{work.workUntil}}</span></p>
                                        <div class="list">
                                             <ul>
                                                  <li v-for="d in work.des" :key="d" v-html="d"></li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </slide-x-left-transition>
          </div>
     </section>
</template>
<script>
import { mdiHeadHeartOutline } from '@mdi/js'
import works from './../../data/experience'
import { SlideYUpTransition, SlideXLeftTransition } from 'vue2-transitions'
export default {
     components: {
          SlideYUpTransition,
          SlideXLeftTransition
     },
     data: () => {
          return {
               workIcon: mdiHeadHeartOutline,
               works: works,
               vertical: true,
               showTab: true
          }
     },
     mounted() {
         this.$store.state.experienceShow = true
          this.setTabs();
          window.onresize = () => {
               this.setTabs();
          }
     },
     methods: {
          setTabs() {
               if (window.innerWidth < 375) {
                    this.showTab = false;
               } else if (window.innerWidth < 502) {
                    this.vertical = false;
                    this.showTab = true;
               } else {
                    this.vertical = true;
                    this.showTab = true;
               }
          }
     }
}
</script>
<style lang="scss">
     .my-work {
          z-index: 5;
          max-width: 1000px;
          visibility: visible;
          opacity: 1;
          transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
          display: flex;
          -webkit-box-pack: center;
        //   justify-content: center;
          -webkit-box-align: center;
          flex-direction: column;
          min-height: 100vh;
          max-width: 1000px;
          margin: 0px auto;

          .small-size {
               margin-bottom: 30px;
          }
          .tab-items, .small-size {
               padding: 0px 20px;
               h3 {
                    font-size: 22px;
               }
               ul {
                    font-size: 18px;
                    list-style: none;
                    li {
                         &::before {
                              content: "▹";
                              position: absolute;
                              left: 20px;
                              color: var(--v-primary-base);
                         }
                    }
               }
               .date {
                    margin: 0px 0px 20px 0px;
                    opacity: 0.8;
               }
               .highlight {
                    color: var(--v-primary-base)
               }
               .list{
                    opacity: 0.8;
               }
          }
     }
</style>