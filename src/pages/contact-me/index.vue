<template>
     <section class="contact-me">
          <SlideYUpTransition :delay="200">
               <h2 class="numbered-header" v-show="show" style="margin: 10px 0px -10px;"> <v-icon class="front-icon">{{contactIcon}}</v-icon> Contact Me</h2>
          </SlideYUpTransition>
          
          <div>
               <SlideYUpTransition :delay="400">
               <div v-show="show" class="form" style="max-width: 800px;">
                    <p>
                         Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! You can fill up the form bellow.
                    </p>
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
                    <v-btn color="primary" large outlined>
                         Send Message
                    </v-btn>
               </div>
               </SlideYUpTransition>
          </div>
     </section>
</template>
<script>
import { mdiEmailEditOutline } from '@mdi/js'
import { SlideYUpTransition  } from 'vue2-transitions';
export default {
     components: {
          SlideYUpTransition
     },
     data: () => {
          return {
               show: false,
               contactIcon: mdiEmailEditOutline
          }
     },
     mounted() {
          this.show = true;
     }
}
</script>
<style lang="scss">
     .contact-me {
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          flex-direction: column;
          align-items: flex-start;
          min-height: 100vh;
          max-width: 1000px;
          .form {
               margin-top: 30px;
          }
     }
</style>