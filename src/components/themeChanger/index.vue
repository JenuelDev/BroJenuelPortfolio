<template>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="100"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          aria-label="Change-Theme"
          class="change-theme-btn"
        >
          <v-icon class="icon">{{colorIcon}}</v-icon>
        </v-btn>
      </template>

      <v-card>
          <v-list color="lightBackground">
               <v-list-item>
                    <v-list-item-content>
                         <div v-for="theme in themes" :key="theme.name" class="theme-chooser" v-ripple @click="changeTheme(theme)">
                              <p style="margin:0px;">{{theme.name}}</p>
                              <div class="colors-flex">
                                   <div v-for="(color, index) in theme.dark" :key="index" class="colors-show" :style="'background-color:'+color">
                                   </div>
                              </div>
                         </div>
                    </v-list-item-content>
               </v-list-item>
          </v-list>
      </v-card>
    </v-menu>
</template>
<script>
import { mdiFormatPaint } from '@mdi/js'
import { themes } from './../../data/theme'
export default {
    data: () => ({
        fav: true,
        menu: false,
        message: false,
        hints: true,
        colorIcon: mdiFormatPaint,
        themes: themes
    }),
    methods: {
        changeTheme(theme) {
            const name = theme.name;
            const dark = theme.dark;

            // set Themne
            Object.keys(dark).forEach(i => {
                this.$vuetify.theme.themes.dark[i] = dark[i];
            });

            // save local theme
            localStorage.setItem('theme-selected', name)

            this.menu = false;
        }
    },
    mounted() {
        const themeName = localStorage.getItem('theme-selected')
        if (themeName) {
            this.themes.forEach(theme => {
                if (theme.name == themeName) {
                    this.changeTheme(theme)
                    return true
                }
            })
        }
    }
}
</script>
<style lang="scss">
     .change-theme-btn {
          position: fixed;
          top: 60px;
          left: 40px;
          z-index: 15;

          .icon {
               color: var(--v-slate-base) !important;
               
          }
          &:hover {
               .icon {
                    color: var(--v-primary-base) !important;
               }
          }
          
     }
     .theme-chooser {
          width: 40px;
          padding: 10px;
          cursor: pointer;
          transition: all .25s ease;
          opacity: 0.5;

          .colors-flex {
               display: flex;
               flex-direction: row;
               .colors-show {
                    height: 15px;
                    width: 15px;
                    border-radius: 100%;
                    margin: 2px;
               }
          }

          &:hover {
               background-color: var(--v-background-base) !important;
               opacity: 1;
               border-radius: 10px;
          }
     }
     @media only screen and (max-width: 1078px) {
         .change-theme-btn {
            // top: 20px;
            left: 20px;
         }
     }
     @media only screen and (max-width: 800px) {
          .change-theme-btn {
              
            top: 15px;
            left: 20px;
            background-color: var(--v-background-base);
            box-shadow: var(--black-shadow) !important;
            .icon {
                color: var(--v-primary-base) !important;
            }
          }
     }
</style>