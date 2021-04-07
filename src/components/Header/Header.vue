<template>
    <div
        class="header"
        :class="{ 'navbar--hidden': !showNavbar && scroll > 100, 'nav-min': scroll > 50 }"
    >
        <nav>
            <div class="logo-image">
                <img :src="require('./../../assets/images/brojenuellogo.svg')" @click="$router.push('/')"/>
            </div>
            <div class="navs">
                <ol>
                    <li
                        v-scrollanimation
                        style="transition-delay: 100ms"
                        @click="$router.push({ name: 'AboutMe' })"
                    >
                        <div :class="{ active: $route.name == 'AboutMe' }">
                            <Icon name="user" :size="15" />
                            About Me
                        </div>
                    </li>
                    <li
                        v-scrollanimation
                        style="transition-delay: 250ms"
                        @click="$router.push({ name: 'Experience' })"
                    >
                        <div :class="{ active: $route.name == 'Experience' }">
                            <Icon name="case" :size="15" />
                            Experience
                        </div>
                    </li>
                    <li
                        v-scrollanimation
                        style="transition-delay: 400ms"
                        @click="$router.push({ name: 'Work' })"
                    >
                        <div :class="{ active: $route.name == 'Work' }">
                            <Icon name="code" :size="15" />
                            Works
                        </div>
                    </li>
                    <li
                        v-scrollanimation
                        style="transition-delay: 550ms"
                        @click="$router.push({ name: 'Contact' })"
                    >
                        <div :class="{ active: $route.name == 'Contact' }">
                            <Icon name="envelope" :size="15" />
                            Contact Me
                        </div>
                    </li>
                </ol>
                <GradientBorder
                    v-scrollanimation
                    style="transition-delay: 850ms; margin-left: 20px; font-weight: 900"
                    :withBg="false"
                >
                    <a
                        href="https://github.com/BroJenuel/BroJenuel/raw/master/resume/JenuelGanawed-2021.pdf"
                        target="_blank"
                        class="resume-button"
                        rel="noopener"
                    >
                        <Icon name="file" :size="15" />
                        Resume
                    </a>
                </GradientBorder>
                <div v-scrollanimation style="transition-delay: 1000ms;">
                    <ThemeChanger />
                </div>
            </div>
            <div class="show-mobile-nav-but">
                <Icon name="menu" :size="30" @click="$store.state.navShow = true" style="margin-right: 20px;"/>
            </div>
        </nav>
    </div>
</template>

<script>
import ThemeChanger from './../themeChanger/themeChanger'
import Icon from "./../../components/Icons";
import GradientBorder from "./../GradientBorder";
export default {
    name: "Header",
    components: { Icon, GradientBorder, ThemeChanger },
    data() {
        return {
            scroll: 0,
            width: 0,
            showNavbar: true,
            lastScrollPosition: 0,
        };
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener('resize', this.handleWidth);
    },
    methods: {
        handleScroll() {
            this.scroll = window.scrollY;
        },
        handleWidth() {
            this.width = window.innerWidth;
        },
        onScroll() {
            // Get the current scroll position
            const currentScrollPosition =
                window.pageYOffset || document.documentElement.scrollTop;
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
        window.addEventListener("scroll", this.onScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    },
};
</script>