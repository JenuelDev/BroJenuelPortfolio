<script setup>
import ThemeChanger from './../themeChanger/themeChanger';
import { Home20Filled, Briefcase20Filled, Code20Filled, Mail20Filled, WebAsset24Filled, Navigation20Regular } from '@vicons/fluent';
import Facebook from '@vicons/fa/Facebook';
import LinkedinIn from '@vicons/fa/LinkedinIn';
import Youtube from '@vicons/fa/Youtube';
import Github from '@vicons/fa/Github';
import Twitter from '@vicons/fa/Twitter';
import Dev from '@vicons/fa/Dev';
import { Icon } from '@vicons/utils';
import { onBeforeMount, onMounted, ref } from 'vue';
import Document16Regular from '@vicons/fluent/Document16Regular';
import { RouterLink } from 'vue-router';

const scroll = ref(0);
const width = ref(0);
const showNavbar = ref(true);
const lastScrollPosition = ref(0);

function handleScroll() {
    scroll.value = window.scrollY;
}
function handleWidth() {
    width.value = window.innerWidth;
}
function onScroll() {
    // Get the current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
    if (currentScrollPosition < 0) {
        return;
    }
    // Here we determine whether we need to show or hide the navbar
    showNavbar.value = currentScrollPosition < lastScrollPosition.value;

    // Set the current scroll position as the last scroll position
    lastScrollPosition.value = currentScrollPosition;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleWidth);
    window.addEventListener('scroll', onScroll);
});

onBeforeMount(() => {
    window.removeEventListener('scroll', onScroll);
});

function openSite(site) {
    window.open(site, '_blank');
}
</script>

<template>
    <div class="header" :class="{ 'navbar--hidden': !showNavbar && scroll > 100, 'nav-min': scroll > 50 }">
        <nav>
            <div class="logo-image">
                <h2 class="sm:ml-[50px] ml-10px font-700 text-[var(--primary)] text-size-2.5rem -mt-6px">JG</h2>
            </div>
            <div class="navs">
                <div class="nav-o">
                    <RouterLink v-scrollanimation style="transition-delay: 100ms" to="/">
                        <div class="flex items-center" :class="{ active: $route.name == 'AboutMe' }">
                            <Icon size="20">
                                <Home20Filled />
                            </Icon>
                            <span class="text-size-14px font-500"> Home </span>
                        </div>
                    </RouterLink>
                    <RouterLink v-scrollanimation style="transition-delay: 250ms" to="/experience">
                        <div class="flex items-center" :class="{ active: $route.name == 'Experience' }">
                            <Icon size="20">
                                <Briefcase20Filled />
                            </Icon>
                            <span class="text-size-14px font-500"> Experience </span>
                        </div>
                    </RouterLink>
                    <RouterLink v-scrollanimation style="transition-delay: 400ms" to="/project">
                        <div :class="{ active: $route.name == 'Project' }">
                            <Icon size="20">
                                <Code20Filled />
                            </Icon>
                            <span class="text-size-14px font-500"> Projects </span>
                        </div>
                    </RouterLink>
                    <RouterLink v-scrollanimation style="transition-delay: 550ms" to="/contact">
                        <div :class="{ active: $route.name == 'Contact' }">
                            <Icon size="20">
                                <Mail20Filled />
                            </Icon>
                            <span class="text-size-14px font-500"> Contact Me </span>
                        </div>
                    </RouterLink>
                    <div v-scrollanimation style="transition-delay: 650ms">
                        <a class="text-size-14px font-500" rel="external" href="https://blog.brojenuel.com" hreflang="es-es">
                            <Icon size="20">
                                <WebAsset24Filled />
                            </Icon>
                            Blog
                        </a>
                    </div>
                    <div v-scrollanimation style="transition-delay: 650ms">
                        <a
                            class="text-size-14px font-500"
                            rel="external"
                            href="https://drive.google.com/file/d/1CEMto0ubGMVBJNCLq-QQN8-aFsYUo2Dd/view?usp=sharing"
                            hreflang="es-es"
                            target="_blank"
                        >
                            <Icon size="20">
                                <Document16Regular />
                            </Icon>
                            Resume
                        </a>
                    </div>
                </div>
                <div v-scrollanimation style="transition-delay: 700ms">
                    <ThemeChanger />
                </div>
            </div>
            <div class="nav-mobile">
                <ol>
                    <li>
                        <div @click="openSite('https://www.facebook.com/ganawed/')" class="a-link">
                            <div class="text-size-25px">
                                <Icon size="37"><Facebook /></Icon>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div @click="openSite('https://www.youtube.com/channel/UCNANDtTF63UTRcYioVsSCdA')" class="a-link">
                            <div class="text-size-25px">
                                <Icon size="37"><Youtube /></Icon>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div @click="openSite('https://www.linkedin.com/in/jenuelganawed/')" class="a-link">
                            <div class="text-size-25px">
                                <Icon size="37"><LinkedinIn /></Icon>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div @click="openSite('https://github.com/BroJenuel')" class="a-link">
                            <div class="text-size-25px">
                                <Icon size="37"><Github /></Icon>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div @click="openSite('https://twitter.com/broJenuel')" class="a-link">
                            <div class="text-size-25px">
                                <Icon size="37"><Twitter /></Icon>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div @click="openSite('https://dev.to/brojenuel')" class="a-link">
                            <div class="text-size-25px">
                                <Icon size="37"><Dev /></Icon>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
            <div class="show-mobile-nav-but mt-[10px]">
                <Icon size="40" @click="$store.state.navShow = true" style="margin-right: 20px">
                    <Navigation20Regular />
                </Icon>
            </div>
        </nav>
    </div>
</template>
