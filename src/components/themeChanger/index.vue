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
               // const name = theme.name;
               const dark = theme.dark;

               Object.keys(dark).forEach(i => {
                    this.$vuetify.theme.themes.dark[i] = dark[i];
               });

               this.menu = false;
          }
     },
}
</script>
<style lang="scss">
     .change-theme-btn {
          position: fixed;
          top: 50px;
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
          width: 80px;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
          transition: all .25s ease;

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
          }
     }
     
     
</style>