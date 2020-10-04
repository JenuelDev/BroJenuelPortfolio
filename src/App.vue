<template>
    <v-app>
        <NavigationBar />
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

export default {
    name: 'App',
    components: {
        SocialNetworkSite,
        NavigationBar,
        Footer
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
    }
    @media only screen and (max-width: 1078px) {
        main {
            padding: 0px 90px;
            padding-top: 70px;
        }
    }

    @media only screen and (max-width: 768px) {
        main {
            padding: 0px 20px;
            padding-top: 70px;
        }
    }
</style>
