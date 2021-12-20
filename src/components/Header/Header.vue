<template>
    <div class="header" :class="{ 'navbar--hidden': !showNavbar && scroll > 100, 'nav-min': scroll > 50 }">
        <nav>
            <div class="logo-image"></div>
            <div class="navs">
                <ol>
                    <li v-scrollanimation style="transition-delay: 100ms" @click="$router.push({ name: 'AboutMe' })">
                        <div class="flex items-center" :class="{ active: $route.name == 'AboutMe' }">
                            <span class="text-size-14px font-500"> Home </span>
                        </div>
                    </li>
                    <li v-scrollanimation style="transition-delay: 250ms" @click="$router.push({ name: 'Experience' })">
                        <div class="flex items-center" :class="{ active: $route.name == 'Experience' }">
                            <span class="text-size-14px font-500"> Experience </span>
                        </div>
                    </li>
                    <li v-scrollanimation style="transition-delay: 400ms" @click="$router.push({ name: 'Project' })">
                        <div :class="{ active: $route.name == 'Project' }">
                            <span class="text-size-14px font-500"> Projects </span>
                        </div>
                    </li>
                    <li v-scrollanimation style="transition-delay: 550ms" @click="$router.push({ name: 'Contact' })">
                        <div :class="{ active: $route.name == 'Contact' }">
                            <span class="text-size-14px font-500"> Contact Me </span>
                        </div>
                    </li>
                    <li v-scrollanimation style="transition-delay: 650ms">
                        <a class="text-size-14px font-500" rel="external" href="https://brojenuelblog.ml" hreflang="es-es"> Blog </a>
                    </li>
                </ol>
                <div v-scrollanimation style="transition-delay: 700ms">
                    <ThemeChanger />
                </div>
            </div>
            <div class="show-mobile-nav-but">
                <Icon name="menu" :size="30" @click="$store.state.navShow = true" style="margin-right: 20px" />
            </div>
        </nav>
    </div>
</template>

<script>
import ThemeChanger from './../themeChanger/themeChanger';
import Icon from './../../components/Icons';
export default {
    name: 'Header',
    components: { Icon, ThemeChanger },
    data() {
        return {
            scroll: 0,
            width: 0,
            showNavbar: true,
            lastScrollPosition: 0,
        };
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleWidth);
    },
    methods: {
        goToLink(link) {
            window.open(link);
        },
        handleScroll() {
            this.scroll = window.scrollY;
        },
        handleWidth() {
            this.width = window.innerWidth;
        },
        onScroll() {
            // Get the current scroll position
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition < 0) {
                return;
            }
            // Here we determine whether we need to show or hide the navbar
            this.showNavbar = currentScrollPosition < this.lastScrollPosition;
            // Set the current scroll position as the last scroll position
            this.lastScrollPosition = currentScrollPosition;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeUmount() {
        window.removeEventListener('scroll', this.onScroll);
    },
};
</script>
