<template>
     <section class="about-me">
          <slide-y-up-transition :delay="100">
               <h2 v-show="show" class="numbered-header"> <v-icon class="front-icon">{{aboutIcon}}</v-icon> About Me</h2>
          </slide-y-up-transition>
          <div class="about-me-inner">
               <slide-x-left-transition :delay="230">
                    <div v-show="show" class="about-me-text">
                         <div class="about-me-text-info" v-html="info"></div>
                         <ul class="skill-list">
                              <li v-for="skill in skills" :key="skill.text">
                                   <v-icon color="primary" small class="skill-icon">{{skill.icon}}</v-icon> {{skill.text}}
                              </li>
                         </ul>
                    </div>
               </slide-x-left-transition>
               <slide-x-right-transition :delay="430">
                    <div v-show="show" class="about-me-photo">
                         <div class="wrapper">
                              <div class="photo" style="position: relative; overflow: hidden;">
                                   <div class="photo-front"></div>
                                   <img src="./../../assets/image/profile.jpeg" alt="">
                              </div>
                         </div>
                    </div>
               </slide-x-right-transition>
          </div>
     </section>
</template>
<script>
import { mdiFaceOutline } from '@mdi/js'
import { info, skillList } from './../../data/aboutme'
import { SlideYUpTransition, SlideXLeftTransition, SlideXRightTransition   } from 'vue2-transitions'
export default {
     components: {
          SlideYUpTransition,
          SlideXLeftTransition,
          SlideXRightTransition
     },
     data: () => {
          return {
               aboutIcon: mdiFaceOutline,
               info: info,
               skills: skillList,
               show: false
          }
     },
     mounted() {
          this.show = true;
     }
}
</script>

<style lang="scss">
     .about-me {
          z-index: 5;
          -webkit-box-pack: center;
          -webkit-box-align: center;
          min-height: 100vh;
          max-width: 1000px;
          visibility: visible;
          opacity: 1;
          transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-content: center;
          

          .about-me-inner {
               display: flex;
               flex-direction: row;
               gap: 50px;
          }

          .about-me-text {
               
               
               p {
                    color: var(--v-slate-base) !important;
               }
          }

          .skill-list {
               display: grid;
               grid-template-columns: repeat(2, minmax(140px, 200px));
               padding: 0px;
               margin: 20px 0px 0px;
               overflow: hidden;
               list-style: none;
               li {
                    font-family: var(--font-mono) !important;
                    font-size: 13px;
                    color: var(--v-slate-base) !important;
               }

               .skill-icon {
                    margin: 0px 5px;
               }
          }

          .about-me-photo {
               position: relative;
               max-width: 300px;

               .wrapper {
                    display: block;
                    position: relative;
                    width: 100%;
                    border-radius: 10px;
                    background-color: var(--v-primary-base);
                    transition: var(--transition);

                    &::before, &::after {
                         content: "";
                         display: block;
                         position: absolute;
                         width: 100%;
                         height: 100%;
                         border-radius: 10px;
                         transition: 0.3s;
                    }

                    &::before {
                         top: 0;
                         left: 0;
                         mix-blend-mode: screen;
                    }
                    .photo {
                         border-radius: 10px;
                         height: 300px;
                         mix-blend-mode: multiply;
                         filter: grayscale(100%) contrast(1);
                         transition: 0.3s !important;
                    }
                    &::after {
                         border: 2px solid var(--v-primary-base);
                         top: 20px;
                         left: 20px;
                         z-index: -1;
                    }

                    &:hover {
                         .photo {
                              mix-blend-mode: normal;
                              filter: grayscale(50%);
                         }
                         &::after {
                              top: 10px;
                              left: 10px;
                         }
                    }
               }
          }
     }
@media only screen and (max-width: 856px) {
     .about-me {
          .about-me-inner {
               display: flex;
               flex-direction: column;
               gap: 50px;
               
               .about-me-photo {
                    order: 1;
                    align-self: center;
               }
               .about-me-text {
                    order: 2;
                    align-self: center;
               }
          }
     }
}
</style>