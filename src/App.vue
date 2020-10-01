<template>
  <v-app>
    <router-view/>
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
