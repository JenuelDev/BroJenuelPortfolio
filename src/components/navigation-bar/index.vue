<template>
    <slide-y-up-transition :delay="900">
    <div v-show="show">
        <v-tabs 
            :style="tabShow ? 'top: 0px;' : 'top: -50px'" 
            class="navigation-tab"
            :class="tabTop ? 'navigation-tab-top' : ''"
            centered 
            :height="tabTop ? '60px' : '40px'"
        >
            <v-tab v-for="tab in tabs" :key="tab.name" :to="tab.to">
                <v-icon small style="margin-right: 5px;">{{tab.icon}}</v-icon> {{tab.name}}
            </v-tab>
        </v-tabs>
        <div class="responsive-nav-tab">
            <v-btn class="nav-button-show" color="primary" large icon elevation="0" rounded @click="dialog = !dialog" aria-label="Open Drawer">
                <v-icon large>{{menuIcon}}</v-icon>
            </v-btn>
            <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="slide-x-transition"
                class="nav-dialog"
            >
                <v-btn x-large icon style="position: absolute; z-index: 20; right: 10px; top: 10px;" @click="dialog = !dialog" aria-label="Close Drawer">
                        <v-icon x-large>{{closeIcon}}</v-icon>
                </v-btn>
                <div style="padding-top: 50px;">
                    <v-tabs class="show-navigation-tab" vertical>
                            <v-tab  v-for="tab in tabs" :key="tab.name" :to="tab.to" @click="dialog = !dialog">
                                <v-icon small style="margin-right: 5px;">{{tab.icon}}</v-icon> {{tab.name}}
                            </v-tab>
                    </v-tabs>
                </div>
            </v-dialog>
        </div>
    </div>
    </slide-y-up-transition>
</template>
<script>
import Tabs from './../../data/tabs'
import { mdiClose, mdiMenu } from '@mdi/js'
import { SlideYUpTransition  } from 'vue2-transitions';
export default {
    name: "Navigation",
    components: {
        SlideYUpTransition
    },
    data: () => {
        return {
            tabs: Tabs,
            tabShow: true,
            tabTop: true,
            menuIcon: mdiMenu,
            dialog: false,
            closeIcon: mdiClose,
            show: false
        }
    },
    mounted() {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            var currentScrollPos = window.pageYOffset;
            this.tabShow = prevScrollpos > currentScrollPos;
            prevScrollpos = currentScrollPos;
            if(window.pageYOffset < 2) {
                this.tabTop = true;
            } else {
                this.tabTop = false;
            }
        }
        this.show = true;
    },
}
</script>
<style lang="scss">
     
    .navigation-tab {
        opacity: 0.9;
        -webkit-box-pack: justify;
        position: fixed;
        z-index: 11;
        transition: 0.2s;
        backdrop-filter: blur(10px);
        box-shadow: 0 10px 30px -10px rgb(2, 12, 27, 0.7);
        &:hover {
            opacity: 1;
        }
    }

    .responsive-nav-tab {
        
        display: none;
        position: fixed;
        top: 10px;
        right: 20px;
        z-index: 100 !important;

        
    }

    .show-navigation-tab {
        .v-tab, a {
              max-width: 100% !important;
        }
    }

    .navigation-tab-top {
        box-shadow: 0 0px 0px 0px rgb(2, 12, 27, 0.7) !important;
    }

    @media only screen and (max-width: 800px) {
        .responsive-nav-tab {
            display: block;
            .nav-button-show {
                background-color: var(--v-background-base);
            }
        }
        .navigation-tab {
            display: none;
            
        }
    }
</style>