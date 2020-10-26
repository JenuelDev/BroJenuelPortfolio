<template>
     <section class="my-work">
          <SlideXRightTransition :delay="200">
               <h2 class="numbered-header" v-show="$store.state.workShow" style="margin: 10px 0px -10px;"> <v-icon class="front-icon">{{headIcon}}</v-icon> My Work</h2>
          </SlideXRightTransition>
          <SlideXLeftTransition :delay="300">
               <p v-show="$store.state.workShow">This are projects that I made, and deployed it live for everyone to use.</p>
          </SlideXLeftTransition>
          <slide-y-down-transition :delay="400">
               <div v-show="$store.state.workShow" style="margin-top: 20px;">
                    <template v-for="(work, i) in myWorks">
                         <slide-y-down-transition :delay="i*900" :key="work.title">
                              <div v-show="$store.state.workShow" class="work-info">
                                   <div class="work-info-details" :class="i%2 == 0 ? 'left-content' : 'right-content' ">
                                        <p class="info-overline">{{work.overline}}</p>
                                        <h3 class="info-title">{{work.title}}</h3>
                                        <div class="info-des-container">
                                             <p class="info-text" v-html="work.des"></p>
                                        </div>
                                        <ul class="info-tech-list" :class="i%2==0 ? '' : 'work-links-right'">
                                             <li v-for="tech in work.techs" :key="tech">{{tech}}</li>
                                        </ul>
                                        <div class="work-links" :class="i%2==0 ? '' : 'work-links-right'">
                                             <a v-for="link in work.links" :key="link.name" :href="link.link" target="_blank" aria-label="GitHUB Link"><v-icon class="highlight-hover">{{link.icon}}</v-icon></a>
                                        </div>
                                   </div>
                                   <div class="work-info-image " :class="i%2 == 0 ? 'right-image' : 'left-image' ">
                                        <a :href="work.imageLink" target="_blank">
                                             <div class="image-wrapping">
                                                  <div class="front-filter"></div>
                                                  <img :src="work.img" alt="">
                                             </div>
                                        </a>
                                   </div>
                              </div>
                         </slide-y-down-transition>
                    </template>
               </div>
          </slide-y-down-transition>
     </section>
</template>
<script>
import { mdiFileDocumentMultipleOutline, mdiGithub, mdiOpenInNew } from '@mdi/js'
import { SlideYDownTransition, SlideXLeftTransition, SlideXRightTransition   } from 'vue2-transitions'
import myWorks from './../../data/my-work'
export default {
     components: {
          SlideYDownTransition,
          SlideXLeftTransition,
          SlideXRightTransition
     },
     data: () => {
          return {
               headIcon: mdiFileDocumentMultipleOutline,
               githubIcon: mdiGithub,
               externalIcon: mdiOpenInNew,
               myWorks: myWorks
          }
     },
     mounted() {
         this.$store.state.workShow = true
     }
}
</script>
<style lang="scss" src="./my-work.scss"></style>