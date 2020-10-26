<template>
    <section class="contact-me">
        <SlideYUpTransition :delay="200">
            <h2 class="numbered-header" v-show="$store.state.contactMeShow" style="margin: 10px 0px -10px;"> <v-icon class="front-icon">{{contactIcon}}</v-icon> Contact Me</h2>
        </SlideYUpTransition>
        
        <div>
            <SlideYUpTransition :delay="400">
            <div v-show="$store.state.contactMeShow" class="form" style="max-width: 800px;">
                <p>
                        Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! You can check my social profile bellow.
                </p>
                <div class="social-icons">
                        <ul>
                            <li v-for="social in socials" :key="social.name">
                                <a :href="social.link" target="_blank">
                                    <v-icon class="icons">{{social.icon}}</v-icon>
                                </a>
                            </li>
                        </ul>
                </div>
                <a v-if="true" href="mailto:jenuelganawed936@gmail.com" style="text-decoration: none;">
                        <v-btn x-large color="primary" outlined aria-label="Send Message">
                            Send Message
                        </v-btn>
                </a>
                <div v-else>
                        <v-text-field
                            label="Your Name"
                            outlined
                            dense
                            required
                            style="width: 100%;"
                        ></v-text-field>
                        <v-text-field
                            label="Your Email"
                            outlined
                            dense
                            required
                            style="width: 100%;"
                        ></v-text-field>
                        <v-textarea
                            outlined
                            name="input-7-4"
                            label="Write your Message Here."
                            required
                            value=""
                        ></v-textarea>
                        <v-btn color="primary" large outlined aria-label="Send Message">
                            Send Message
                        </v-btn>
                </div>
                
            </div>
            </SlideYUpTransition>
        </div>
    </section>
</template>
<script>
import { mdiEmailEditOutline } from '@mdi/js'
import { SlideYUpTransition  } from 'vue2-transitions';
import {socialMediaLinks} from './../../data/social-network'
export default {
     components: {
          SlideYUpTransition
     },
     data: () => {
          return {
               contactIcon: mdiEmailEditOutline,
               socials: socialMediaLinks
          }
     },
     mounted() {
         this.$store.state.contactMeShow = true
     }
}
</script>
<style lang="scss">
     .contact-me {
          display: flex;
          -webkit-box-pack: center;
        //   justify-content: center;
          -webkit-box-align: center;
          flex-direction: column;
          align-items: flex-start;
          min-height: 100vh;
          max-width: 1000px;
          .form {
               margin-top: 30px;
          }

          .social-icons {
               margin-bottom: 20px;
               ul {
                    list-style: none;
                    display: flex;
                    flex-direction: row;
                    li {
                         margin: 10px;
                         .icons {
                              color: var(--v-slate-base)
                         }

                         &:hover {
                              .icons {
                              color: var(--v-primary-base)
                         }
                         }
                    }
               }
          }
     }
</style>