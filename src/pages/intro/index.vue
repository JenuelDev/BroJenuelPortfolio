<template>
    <v-dialog v-model="$store.state.modalShow" persistent max-width="700">
        <v-card>
            <v-card-text>
                <section class="intro">
                    <slide-y-up-transition :delay="200">
                        <h1 v-show="$store.state.introShow">
                            Hi! <v-icon>{{ handIcon }}</v-icon> my name is
                        </h1>
                    </slide-y-up-transition>
                    <slide-y-up-transition :delay="300">
                        <h2 v-show="$store.state.introShow">
                            {{ INTRO.name }}
                        </h2>
                    </slide-y-up-transition>
                    <slide-y-up-transition :delay="400">
                        <h3 v-show="$store.state.introShow">{{ INTRO.IDo }}</h3>
                    </slide-y-up-transition>
                    <slide-y-up-transition :delay="600">
                        <Button
                            @click.native="closeModal()"
                            aria-label="Send Message"
                            v-show="$store.state.introShow"
                            style="margin-top: 30px"
                        >
                            Let's Go
                        </Button>
                    </slide-y-up-transition>
                </section>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { SlideYUpTransition } from 'vue2-transitions'
import { mdiHand } from '@mdi/js'
import Button from '@/components/button'

export default {
    name: 'Intro',
    components: {
        SlideYUpTransition,
        Button,
    },
    mounted() {
        this.$store.state.introShow = true
    },
    data: () => {
        return {
            handIcon: mdiHand
        }
    },
    computed: {
        INTRO() {
            return this.$store.state.introPage
        },
    },
    methods: {
        closeModal() {
            if (this.$route.name != 'About') {
                this.$router.replace({name: 'About'})
            }
            
            this.$store.state.modalShow = !this.$store.state.modalShow
        }
    }
}
</script>
<style lang="scss" scope>
.intro {
    display: flex;
    -webkit-box-pack: center;
    margin-top: 50px;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    text-align: center;

    h1 {
        margin: 0px 0px 0px 4px;
        color: var(--v-primary-base);
        font-family: var(--font-mono) !important;
        font-size: 18px !important;
        font-weight: lighter;
        line-height: 1.1;
    }
    h2 {
        margin: 0px 0px -20px 0px !important;
        font-family: sans-serif;
        font-size: clamp(50px, 8vw, 70px);
        color: var(--v-white-base);
        line-height: 0.9;
    }
    h3 {
        margin-top: 20px;
        color: var(--v-slate-base);
        line-height: 0.9;
        font-size: clamp(40px, 8vw, 50px);
    }
    p {
        margin: 20px 0px 0px;
        max-width: 500px;
        color: var(--v-slate-base);
    }
    .get-in-touch {
        border: 1px solid var(--v-primary-base);
        border-radius: 4px;
        font-size: 14px;
        color: var(--v-primary-base);
        margin-top: 30px;
    }
}
</style>