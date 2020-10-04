<template>
     <footer class="footer">
          <div class="social-links">
               <ul>
                    <li v-for="social in socials" :key="social.name">
                         <a :href="social.link" target="_blank">
                              <v-icon class="icon">{{social.icon}}</v-icon>
                         </a>
                    </li>
               </ul>
               <a href="mailto:jenuelganawed936@gmail">
                    jenuelganawed936@gmail.com
               </a>
          </div>
          <div class="footer-text">
               <a href="#">
                    <div>Built by Jenuel Ganawed based on Brittany's Design</div>
                    <div>using <v-icon small color="green">{{vueIcon}}</v-icon> Vue.js</div>
               </a>
          </div>
     </footer>
</template>
<script>
import { mdiVuejs } from '@mdi/js'
import { socialMediaLinks } from './../../data/social-network'
export default {
     data: () => {
          return {
               vueIcon: mdiVuejs,
               socials: socialMediaLinks
          }
     }
}
</script>
<style lang="scss">
     .footer {
          padding: 50px;
          text-align: center;

          .social-links {
               display: flex;
               flex-direction: column;
               align-items: center;
               text-align: center;
               ul {
                    display: flex;
                    flex-direction: row;
                    list-style: none;
                    li {
                         margin: 0px 10px;
                         .icon {
                              color: var(--slate);
                         }
                         &:hover {
                              .icon {
                                   color: var(--green) !important;
                              }
                         }
                    }
               }

               a {
                    font-family: var(--font-mono) !important;
                    font-size: 13px;
                    padding: 10px 0px 0px 0px;
                    color: var(--slate);

                    &:hover {
                         color: var(--green);
                    }
               }
          }

          .footer-text {
               div {
                    font-family: var(--font-mono) !important;
                    font-size: 13px;
                    color: var(--slate);
               }

               &:hover {
                    div {
                         color: var(--green);
                    }
               }
          }
     }
</style>