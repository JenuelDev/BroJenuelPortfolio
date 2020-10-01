<template>
     <div class="social-network">
          <div class="social-media social-meida-orientation social-media-placement">
               <ul class="social-media-list">
                    <li v-for="link in links" :key='link.link'>
                         <a :href="link.link" target="_blank"  icon>
                              <v-icon class="social-buttons">{{link.icon}}</v-icon>
                         </a>
                    </li>
               </ul>
          </div>
          <div class="email-media social-meida-orientation social-media-placement">
               <div class="email-media-link">
                    <a :href="email">{{email}}</a>
               </div>
          </div>
     </div>
</template>
<script>
import { email, socialMediaLinks } from './../../data/social-network'

export default {
     name: "SocialMediaLinks",
     data: () => {
          return {
               links: socialMediaLinks,
               email: email
          }
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
                    color: red;
                    transition: 0.3s;
                    &:hover {
                         transform: translate(0px, -5px);
                    }
               }
               &::after{
                    content: "";
                    display: block;
                    width: 1px;
                    height: 90px;
                    margin: 0px auto;
                    margin-top: 20px;
                    background-color: white;
               }
          }
     }

     .email-media{
          left: auto;
          right: 40px;
          .email-media-link{
               position: relative;
               a {
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
                    transition: 0.3s;
                    &:hover {
                         transform: translate(0px, -5px);
                    }
               }
               &::after {
                    content: "";
                    display: block;
                    width: 1px;
                    height: 90px;
                    margin: 0px auto;
                    background-color: white;
               }
          }
     }
}
</style>