<template>
    <section v-scrollanimation class="contact-me">
        <h2 class="numbered-header" style="margin: 10px 0px -10px">
            <Icon class="front-icon" name="envelope" :size="30" /> Contact Me
        </h2>

        <div>
            <div class="form" style="max-width: 800px">
                <p class="header-des">
                    Although I'm not currently looking for any new
                    opportunities, my inbox is always open. Whether you have a
                    question or want to say hi, I'll try my best to get back to
                    you! You can check my social profile below.
                </p>
                <GradientBorder
                    @click="sendMeMessage()"
                    aria-label="Send Message"
                    style="margin-top: 30px; width: 300px; font-size: 1.5rem !important; font-weight: 900;"
                >
                    <p class="padding: 20px;">Send me Message!</p>
                </GradientBorder>
            </div>
        </div>
    </section>
</template>
<script>
import { socialMediaLinks } from "./../../constant/social-network";
import Icon from "./../../components/Icons";
import GradientBorder from './../../components/GradientBorder'
export default {
    components: { Icon, GradientBorder},
    data: () => {
        return {
            socials: socialMediaLinks,
        };
    },
    methods: {
        sendMeMessage() {
            window.location.href = "mailto:jenuelganawed936@gmail.com";
        },
    },
};
</script>