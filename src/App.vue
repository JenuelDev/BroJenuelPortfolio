<template>
    <v-app>
        <NavigationBar />
        <ThemeChanger />
        <ResumeDownloader />
        <main>
            <vue-page-transition name="fade-in-up">
                <router-view />
            </vue-page-transition>
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
import ResumeDownloader from './components/resume-download'

export default {
    name: 'App',
    components: {
        SocialNetworkSite,
        NavigationBar,
        Footer,
        ThemeChanger,
        ResumeDownloader
    },
    data: () => ({}),
}
</script>
<style lang="scss">
main {
    padding: 0px 150px;
    margin: 0px auto;
    width: 100%;
    max-width: 1600px;
    counter-reset: section 0;
    margin-top: 100px;
    margin-bottom: 200px;
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
