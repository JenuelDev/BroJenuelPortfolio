<template>
    <v-app>
        <main>
            <router-view/>
        </main>
        <SocialNetworkSite />
    </v-app>
</template>

<script>
import SocialNetworkSite from '@/components/social-media-links'

export default {
    name: 'App',
    components: {
        SocialNetworkSite
    },
    data: () => ({
      
    }),
};
</script>
<style lang="">
  
</style>
