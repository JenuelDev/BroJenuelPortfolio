<template>
     <div class="social-network">
          <slide-y-down-transition  :delay="1300">
               <div v-show="show" class="social-media social-meida-orientation social-media-placement">
                    <ul class="social-media-list">
                         <li v-for="link in links" :key='link.link'>
                              <a :href="link.link" target="_blank"  icon>
                                   <v-icon size="20" class="social-buttons">{{link.icon}}</v-icon>
                              </a>
                         </li>
                    </ul>
               </div>
          </slide-y-down-transition>
          <slide-y-down-transition :delay="1600">
               <div v-show="show" class="email-media social-meida-orientation social-media-placement">
                    <div class="email-media-link">
                         <a :href="'mailto:'+email">{{email}}</a>
                    </div>
               </div>
          </slide-y-down-transition>
     </div>
</template>
<script>
import { email, socialMediaLinks } from './../../data/social-network'
import { SlideYDownTransition } from 'vue2-transitions'
export default {
     name: "SocialMediaLinks",
     components: {
          SlideYDownTransition
     },
     data: () => {
          return {
               links: socialMediaLinks,
               email: email,
               show: false
          }
     },
     mounted() {
          this.show = true
     }
}
</script>
<style lang="scss">

.social-network {
     .social-meida-orientation {
          display: flex;
          flex-direction: column;
          -webkit-box-align: center;
          align-items: center;
     }
     .social-media-placement {
          width: 40px;
          position: fixed;
          bottom: 0px;
          z-index: 10;
     }
     .social-media {
          left: 40px;
          .social-media-list{
               margin: 0;
               padding: 0;
               list-style: none;
               
               li {
                    padding: 10px;
                    transition: 0.3s;
                    opacity: 0.7;
                    .social-buttons{
                         color: var(--v-white-base);
                    }
                    &:hover {
                         transform: translate(0px, -4px);
                         opacity: 1;
                         .social-buttons{
                              color: var(--v-primary-base) !important;
                         }
                    }
               }
               &::after{
                    opacity: 0.7;
                    content: "";
                    display: block;
                    width: 1px;
                    height: 90px;
                    margin: 0px auto;
                    margin-top: 20px;
                    background-color: var(--v-white-base);
               }
          }
     }

     .email-media{
          left: auto;
          right: 40px;
          .email-media-link{
               position: relative;
               a {
                    opacity: 0.7;
                    margin: 20px auto;
                    padding: 10px;
                    font-size: 13px;
                    font-family: 'Courier New', Courier, monospace !important;
                    letter-spacing: 0.1em;
                    -webkit-writing-mode: vertical-rl;
                    writing-mode: vertical-lr;
                    display: inline-block;
                    text-decoration: none;
                    text-decoration-skip-ink: auto;
                    color: inherit;
                    position: relative;
                    transition: 0.2s !important;
                    &:hover {
                         transform: translate(0px, -5px);
                         color: var(--v-primary-base) !important;
                         opacity: 1;
                    }
               }
               &::after {
                    opacity: 0.7;
                    content: "";
                    display: block;
                    width: 1px;
                    height: 90px;
                    margin: 0px auto;
                    background-color: var(--v-white-base);
               }
          }
     }
}
@media only screen and (max-width: 1078px) {
     .social-media {
          left: 20px !important;
     }
     .email-media{
          right: 20px !important;
     }
}

@media only screen and (max-width: 768px){
     .social-network {
          display: none;
     }
}

</style>