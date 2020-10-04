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
               <a href="https://github.com/MisterJ936/jenuel-portfolio-v2" target="_blank">
                    <div>
                         <span>Built by Jenuel Ganawed based on Brittany's Design
                         <br>
                         using <v-icon small color="green">{{vueIcon}}</v-icon> Vue.js</span>
                    </div>
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
          margin-top: 20px;
          padding: 50px;
          text-align: center;

          .social-links {
               display: none;
               flex-direction: column;
               align-items: center;
               text-align: center;
               ul {
                    display: flex;
                    flex-direction: row;
                    list-style: none;
                    margin-bottom: 10px;
                    li {
                         margin: 0px 10px;
                         .icon {
                              color: var(--v-slate-base);
                         }
                         &:hover {
                              .icon {
                                   color: var(--v-primary-base) !important;
                              }
                         }
                    }
               }

               a {
                    font-family: var(--font-mono) !important;
                    font-size: 13px;
                    padding: 10px 0px 0px 0px;
                    color: var(--v-slate-base);

                    &:hover {
                         color: var(--v-primary-base);
                    }
               }
          }

          .footer-text {
               div {
                    margin-top: 10px;
                    span {
                         font-family: var(--font-mono) !important;
                         font-size: 13px;
                         color: var(--v-slate-base);
                         margin: 10px;

                         &:hover {
                              color: var(--v-primary-base);
                         }
                    }
               }
          }
     }

     @media only screen and (max-width: 768px) {
          .footer {
               .social-links {
                    display: flex;
               }
          }
     }
</style>