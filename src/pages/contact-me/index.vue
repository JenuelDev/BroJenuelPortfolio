<template>
    <section class="contact-me">
        <SlideYUpTransition :delay="200">
            <h2
                class="numbered-header"
                v-show="$store.state.contactMeShow && !$store.state.modalShow"
                style="margin: 10px 0px -10px"
            >
                <v-icon class="front-icon">{{ contactIcon }}</v-icon> Contact Me
            </h2>
        </SlideYUpTransition>

        <div>
            
                <div
                    class="form"
                    style="max-width: 800px"
                >
                    <SlideYUpTransition :delay="400">
                        <p v-show="$store.state.contactMeShow && !$store.state.modalShow">
                            Although I'm not currently looking for any new
                            opportunities, my inbox is always open. Whether you have
                            a question or want to say hi, I'll try my best to get
                            back to you! You can check my social profile below.
                        </p>
                    </SlideYUpTransition>
                    <SlideYUpTransition :delay="600">
                        <Button
                            v-show="$store.state.contactMeShow && !$store.state.modalShow"
                            @click.native="sendMeMessage()"
                            aria-label="Send Message"
                            style="margin-top: 30px"
                        >
                            Send Me Message
                        </Button>
                    </SlideYUpTransition>
                </div>
            
        </div>
    </section>
</template>
<script>
import { mdiEmailEditOutline } from '@mdi/js'
import { SlideYUpTransition } from 'vue2-transitions'
import { socialMediaLinks } from './../../data/social-network'
import Button from '@/components/button'
export default {
    components: {
        SlideYUpTransition,
        Button,
    },
    data: () => {
        return {
            contactIcon: mdiEmailEditOutline,
            socials: socialMediaLinks,
        }
    },
    mounted() {
        this.$store.state.contactMeShow = true
    },
    computed: {
        INTRO() {
            return this.$store.state.introPage
        }
    },
    methods: {
        sendMeMessage() {
            window.location.href = 'mailto:' + this.INTRO.email;
        },
    }
}
</script>
<style lang="scss">
.contact-me {
    display: flex;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1000px;
    .form {
        margin-top: 30px;
    }

    .social-icons {
        margin-bottom: 20px;
        ul {
            list-style: none;
            display: flex;
            flex-direction: row;
            padding-left: 0;
            li {
                margin: 10px;
                .icons {
                    color: var(--v-slate-base);
                }

                &:hover {
                    .icons {
                        color: var(--v-primary-base);
                    }
                }
            }
        }
    }
}
</style>