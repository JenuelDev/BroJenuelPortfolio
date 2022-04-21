<script setup>
import { Icon } from '@vicons/utils';
import { Facebook, Youtube, LinkedinIn, Github, Twitter, Dev } from '@vicons/fa';

function openSite(site) {
    window.open(site, '_blank');
}
</script>

<template>
    <div class="social-network">
        <div class="social-media social-media-orientation social-media-placement">
            <ul v-scrollanimation class="social-media-list">
                <li>
                    <div @click="openSite('https://www.facebook.com/ganawed/')" class="a-link">
                        <div class="text-size-40px">
                            <Icon><Facebook /></Icon>
                        </div>
                        <span class="icon-title">Facebook</span>
                    </div>
                </li>
                <li>
                    <div @click="openSite('https://www.youtube.com/channel/UCNANDtTF63UTRcYioVsSCdA')" class="a-link">
                        <div class="text-size-40px">
                            <Icon><Youtube /></Icon>
                        </div>
                        <span class="icon-title">Youtube</span>
                    </div>
                </li>
                <li>
                    <div @click="openSite('https://www.linkedin.com/in/jenuelganawed/')" class="a-link">
                        <div class="text-size-40px">
                            <Icon><LinkedinIn /></Icon>
                        </div>
                        <span class="icon-title">LinkedIn</span>
                    </div>
                </li>
                <li>
                    <div @click="openSite('https://github.com/BroJenuel')" class="a-link">
                        <div class="text-size-40px">
                            <Icon><Github /></Icon>
                        </div>
                        <span class="icon-title">GitHub</span>
                    </div>
                </li>
                <li>
                    <div @click="openSite('https://twitter.com/broJenuel')" class="a-link">
                        <div class="text-size-40px">
                            <Icon><Twitter /></Icon>
                        </div>
                        <span class="icon-title">Twitter</span>
                    </div>
                </li>
                <li>
                    <div @click="openSite('https://dev.to/brojenuel')" class="a-link">
                        <div class="text-size-40px">
                            <Icon><Dev /></Icon>
                        </div>
                        <span class="icon-title">Dev.to</span>
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
