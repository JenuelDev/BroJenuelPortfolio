<template>
    <v-app>
        <NavigationBar />
        <ThemeChanger />
        <main>
            <router-view/>
        </main>
        <SocialNetworkSite />
        <Footer />
    </v-app>
</template>

<script>
import SocialNetworkSite from '@/components/social-media-links'
import NavigationBar from './components/navigation-bar'
import Footer from './components/footer'
import ThemeChanger from './components/themeChanger'

export default {
    name: 'App',
    components: {
        SocialNetworkSite,
        NavigationBar,
        Footer,
        ThemeChanger
    },
    data: () => ({
      
    }),
};
</script>
<style lang="scss">
    main {
        padding: 0px 150px;
        margin: 0px auto;
        width: 100%;
        max-width: 1600px;
        counter-reset: section 0;
        margin-top: 100px;
    }
    @media only screen and (max-width: 1078px) {
        main {
            padding: 0px 90px;
        }
    }

    @media only screen and (max-width: 768px) {
        main {
            padding: 0px 20px;
        }
    }
</style>
