<template>
     <section class="my-work">
          <slide-y-up-transition :delay="100">
               <h2 v-show="show" class="numbered-header"> <v-icon class="front-icon">{{headIcon}}</v-icon> Some of my Work</h2>
          </slide-y-up-transition>
          <slide-y-down-transition :delay="400">
               <div v-show="show">
                    <template v-for="(work, i) in myWorks">
                         <slide-y-down-transition :delay="i*900" :key="work.title">
                              <div v-show="show" class="work-info">
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
import { SlideYDownTransition, SlideYUpTransition   } from 'vue2-transitions'
import myWorks from './../../data/my-work'
export default {
     components: {
          SlideYDownTransition,
          SlideYUpTransition 
     },
     data: () => {
          return {
               headIcon: mdiFileDocumentMultipleOutline,
               githubIcon: mdiGithub,
               externalIcon: mdiOpenInNew,
               show: false,
               myWorks: myWorks
          }
     },
     mounted() {
          this.show = true;
     }
}
</script>
<style lang="scss" src="./my-work.scss"></style>