<script setup>
import ThemeChanger from './../themeChanger/themeChanger';
import { Home20Filled, Briefcase20Filled, Code20Filled, Mail20Filled, WebAsset24Filled } from '@vicons/fluent';
import { Icon } from '@vicons/utils';
import { socialMediaLinks } from './../../constant/social-network';
import { computed } from 'vue';

const SocialNetwork = computed(() => socialMediaLinks);
</script>
<template>
    <div class="nav-mobile">
        <div class="nav-front" :class="{ 'show-nav': $store.state.navShow }">
            <div class="close-button">
                <Icon name="x" :size="30" @click="$store.state.navShow = false" />
            </div>
            <ul>
                <li>
                    <div>
                        <ThemeChanger />
                    </div>
                </li>
                <li
                    v-scrollanimation
                    style="transition-delay: 100ms"
                    @click="
                        $router.push({ name: 'AboutMe' });
                        $store.state.navShow = false;
                    "
                >
                    <div :class="{ active: $route.name == 'AboutMe' }">
                        <Icon size="20">
                            <Home20Filled />
                        </Icon>
                        Home
                    </div>
                </li>
                <li
                    v-scrollanimation
                    style="transition-delay: 250ms"
                    @click="
                        $router.push({ name: 'Experience' });
                        $store.state.navShow = false;
                    "
                >
                    <div :class="{ active: $route.name == 'Experience' }">
                        <Icon size="20">
                            <Briefcase20Filled />
                        </Icon>
                        Experience
                    </div>
                </li>
                <li
                    v-scrollanimation
                    style="transition-delay: 400ms"
                    @click="
                        $router.push({ name: 'Project' });
                        $store.state.navShow = false;
                    "
                >
                    <div :class="{ active: $route.name == 'Project' }">
                        <Icon size="20">
                            <Code20Filled />
                        </Icon>
                        Projects
                    </div>
                </li>
                <li
                    v-scrollanimation
                    style="transition-delay: 550ms"
                    @click="
                        $router.push({ name: 'Contact' });
                        $store.state.navShow = false;
                    "
                >
                    <div :class="{ active: $route.name == 'Contact' }">
                        <Icon size="20">
                            <Mail20Filled />
                        </Icon>
                        Contact Me
                    </div>
                </li>
                <li v-scrollanimation style="transition-delay: 650ms">
                    <a rel="external" href="https://dev.to/BroJenuel" hreflang="es-es">
                        <Icon size="20">
                            <WebAsset24Filled />
                        </Icon>
                        Blog
                    </a>
                </li>
                <li>
                    <ul class="social-medias-in-nav">
                        <li v-for="social in SocialNetwork" :key="social.link">
                            <Icon :name="social.icon" :size="30" />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="nav-back" :class="{ 'show-nav': $store.state.navShow }" @click="$store.state.navShow = false"></div>
    </div>
</template>

<style lang="scss">
.nav-mobile {
    display: none;

    .show-bar-button {
        position: absolute;
        right: 0;
        top: 0;
        margin: 20px;
    }

    .nav-front {
        position: fixed;
        height: 100%;
        overflow: auto;
        background-color: var(--background);
        z-index: 40;
        top: 0;
        right: 0;
        width: 300px;
        margin-right: -300px;
        transition: all 0.3s;

        &.show-nav {
            margin-right: 0px;
        }

        .close-button {
            text-align: right;
            margin: 20px;
            position: absolute;
            top: 0;
            right: 0;
        }

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-size: 1.3rem;
            margin-left: 20px;

            .theme-dropdown-content {
                left: -25px !important;
                top: 40px !important;
            }

            li {
                cursor: pointer;

                div,
                a {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    padding: 10px;
                    user-select: none; /* supported by Chrome and Opera */
                    -webkit-user-select: none; /* Safari */
                    -khtml-user-select: none; /* Konqueror HTML */
                    -moz-user-select: none; /* Firefox */
                    -ms-user-select: none; /* Internet Explorer/Edge */

                    &.active {
                        color: var(--primary);
                    }
                }
            }
        }

        ul.social-medias-in-nav {
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            visibility: hidden;
        }
    }
    .nav-back {
        background-color: rgba(0, 0, 0, 0.4);
        height: 0%;
        width: 0%;
        position: fixed;
        z-index: 30;
        top: 0;
        right: 0;

        &.show-nav {
            height: 100%;
            width: 100%;
        }
    }
}

@media only screen and (max-width: 1050px) {
    .nav-mobile {
        display: block;
    }
}

@media only screen and (max-width: 768px) {
    .nav-mobile {
        .nav-front {
            ul.social-medias-in-nav {
                visibility: visible;
            }
        }
    }
}

@media only screen and (max-width: 375px) {
    .nav-mobile {
        .nav-front {
            width: 100%;
            margin-right: -385px;
        }
    }
}
</style>
