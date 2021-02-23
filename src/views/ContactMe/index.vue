<template>
    <section v-scrollanimation class="contact-me">
        <h2 class="numbered-header" style="margin: 10px 0px -10px">
            <Icon class="front-icon" name="envelope" :size="30" /> Contact Me
        </h2>
        <div>
            <div class="form" style="max-width: 800px">
                <p class="header-des">
                    I am interested in freelance opportunities, it can be very simple to medium projects but not very large project.
                    However, if you have other request or questions, don't hesitate
                    to contact me using the form bellow.
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