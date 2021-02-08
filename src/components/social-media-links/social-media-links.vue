<template>
  <div class="social-network">
    <div class="social-media social-meida-orientation social-media-placement">
      <ul v-scrollanimation class="social-media-list">
        <li v-for="link in links" :key="link.link">
          <a
            :href="link.link"
            target="_blank"
            rel="noreferrer"
          >
            <Icon :name="link.icon" :size="25"/>
          </a>
        </li>
      </ul>
    </div>
    <div v-scrollanimation class="email-media social-meida-orientation social-media-placement">
      <div  class="email-media-link">
        <a :href="'mailto:' + email">{{ email }}</a>
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
  }
};
</script>