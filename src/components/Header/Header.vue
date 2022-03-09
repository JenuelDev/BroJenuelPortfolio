<script setup>
import ThemeChanger from './../themeChanger/themeChanger';
import { Home20Filled, Briefcase20Filled, Code20Filled, Mail20Filled, WebAsset24Filled, Navigation20Regular } from '@vicons/fluent';
import { Icon } from '@vicons/utils';
import { onBeforeMount, onMounted, ref } from 'vue';

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
</script>

<template>
    <div class="header" :class="{ 'navbar--hidden': !showNavbar && scroll > 100, 'nav-min': scroll > 50 }">
        <nav>
            <div class="logo-image">
                <h2 class="sm:ml-[50px] ml-10px font-700 text-[var(--primary)] text-size-2.5rem">JG</h2>
            </div>
            <div class="navs">
                <ol>
                    <li v-scrollanimation style="transition-delay: 100ms" @click="$router.push({ name: 'AboutMe' })">
                        <div class="flex items-center" :class="{ active: $route.name == 'AboutMe' }">
                            <Icon size="20">
                                <Home20Filled />
                            </Icon>
                            <span class="text-size-14px font-500"> Home </span>
                        </div>
                    </li>
                    <li v-scrollanimation style="transition-delay: 250ms" @click="$router.push({ name: 'Experience' })">
                        <div class="flex items-center" :class="{ active: $route.name == 'Experience' }">
                            <Icon size="20">
                                <Briefcase20Filled />
                            </Icon>
                            <span class="text-size-14px font-500"> Experience </span>
                        </div>
                    </li>
                    <li v-scrollanimation style="transition-delay: 400ms" @click="$router.push({ name: 'Project' })">
                        <div :class="{ active: $route.name == 'Project' }">
                            <Icon size="20">
                                <Code20Filled />
                            </Icon>
                            <span class="text-size-14px font-500"> Projects </span>
                        </div>
                    </li>
                    <li v-scrollanimation style="transition-delay: 550ms" @click="$router.push({ name: 'Contact' })">
                        <div :class="{ active: $route.name == 'Contact' }">
                            <Icon size="20">
                                <Mail20Filled />
                            </Icon>
                            <span class="text-size-14px font-500"> Contact Me </span>
                        </div>
                    </li>
                    <li v-scrollanimation style="transition-delay: 650ms">
                        <a class="text-size-14px font-500" rel="external" href="https://brojenuelblog.ml" hreflang="es-es">
                            <Icon size="20">
                                <WebAsset24Filled />
                            </Icon>
                            Blog
                        </a>
                    </li>
                </ol>
                <div v-scrollanimation style="transition-delay: 700ms">
                    <ThemeChanger />
                </div>
            </div>
            <div class="show-mobile-nav-but">
                <Icon size="40" @click="$store.state.navShow = true" style="margin-right: 20px">
                    <Navigation20Regular />
                </Icon>
            </div>
        </nav>
    </div>
</template>
