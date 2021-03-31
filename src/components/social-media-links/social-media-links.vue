<template>
  <div class="social-network">
    <div class="social-media social-media-orientation social-media-placement">
      <ul v-scrollanimation class="social-media-list">
        <li v-for="link in links" :key="link.link">
          <div
            @click="openSite(link.link)"
            class="a-link"
          >
            <Icon :name="link.icon" :size="25"/>
          </div>
        </li>
      </ul>
    </div>
    <div v-scrollanimation class="email-media social-media-orientation social-media-placement">
      <div  class="email-media-link">
        <div class="mail-link" @click="$router.push('/contact')">{{ email }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { email, socialMediaLinks } from "./../../constant/social-network";
import Icon from './../Icons'
export default {
  name: "SocialMediaLinks",
  components: {Icon},
  data: () => {
    return {
      links: socialMediaLinks,
      email: email,
      show: true,
    };
  },
  methods: {
    openSite(site) {
      window.open(site,'_blank')
    }
  }
};
</script>