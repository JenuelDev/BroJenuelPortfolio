<template>
    <div class="social-network">
        <div class="social-media social-media-orientation social-media-placement">
            <ul v-scrollanimation class="social-media-list">
                <li>
                    <div @click="openSite('https://www.facebook.com/ganawed/')" class="a-link">
                        <div class="text-size-25px"><i class="bx bxl-facebook"></i></div>
                        <span>Facebook</span>
                    </div>
                </li>
                <li>
                    <div @click="openSite('https://www.youtube.com/channel/UCNANDtTF63UTRcYioVsSCdA')" class="a-link">
                        <div class="text-size-25px"><i class="bx bxl-youtube"></i></div>
                        <span>Youtube</span>
                    </div>
                </li>
                <li>
                    <div @click="openSite('https://www.linkedin.com/in/jenuelganawed/')" class="a-link">
                        <div class="text-size-25px"><i class="bx bxl-linkedin"></i></div>
                        <span>LinkedIn</span>
                    </div>
                </li>
                <li>
                    <div @click="openSite('https://github.com/BroJenuel')" class="a-link">
                        <div class="text-size-25px"><i class="bx bxl-github"></i></div>
                        <span>GitHub</span>
                    </div>
                </li>
                <li>
                    <div @click="openSite('https://twitter.com/broJenuel')" class="a-link">
                        <div class="text-size-25px"><i class="bx bxl-twitter"></i></div>
                        <span>Twitter</span>
                    </div>
                </li>
            </ul>
        </div>
        <div v-scrollanimation class="email-media social-media-orientation social-media-placement">
            <div class="email-media-link">
                <div class="mail-link" @click="$router.push('/contact')">jenuelganawed936@gmail.com</div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity';
export default {
    name: 'SocialMediaLinks',
    setup() {
        return {
            show: ref(true),
            openSite(site) {
                window.open(site, '_blank');
            },
        };
    },
};
</script>