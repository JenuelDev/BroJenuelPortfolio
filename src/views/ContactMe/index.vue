<template>
    <section v-scrollanimation class="contact-me">
        <h2 class="numbered-header" style="margin: 10px 0px -10px">
            <Icon class="front-icon" name="envelope" :size="30" /> Contact Me
        </h2>

        <div>
            <div class="form" style="max-width: 800px">
                <p class="header-des">
                    Hi! I am an open book, and is looking for opportunities. Whether you have a
                    question or want to say hi, I'll try my best to get back to
                    you! by sending me message through this form bellow.
                </p>
            </div>
            <Form />
        </div>
    </section>
</template>
<script>
import { socialMediaLinks } from "./../../constant/social-network";
import Icon from "./../../components/Icons";
import Form from "./../../components/Form"

export default {
    components: { Icon, Form},
    data: () => {
        return {
            socials: socialMediaLinks,
        };
    },
};
</script>