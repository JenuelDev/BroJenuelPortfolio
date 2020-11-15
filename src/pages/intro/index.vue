<template>
    <section class="intro">
        <slide-y-up-transition :delay="200">
            <h1 v-show="$store.state.introShow">
                Hi! <v-icon>{{ handIcon }}</v-icon> my name is
            </h1>
        </slide-y-up-transition>
        <slide-y-up-transition :delay="300">
            <h2 v-show="$store.state.introShow">{{ INTRO.name }}</h2>
        </slide-y-up-transition>
        <slide-y-up-transition :delay="400">
            <h3 v-show="$store.state.introShow">{{ INTRO.IDo }}</h3>
        </slide-y-up-transition>
        <slide-y-up-transition :delay="600">
            <p v-show="$store.state.introShow">{{ INTRO.des }}</p>
        </slide-y-up-transition>
        <slide-y-up-transition :delay="700">
            <!-- <v-btn
                v-show="$store.state.introShow"
                outlined
                x-large
                class="get-in-touch"
                :href="'mailto:' + INTRO.email"
                aria-label="Send Message"
            >
                Get In Touch
            </v-btn> -->
            <Button :site="'mailto:' + INTRO.email"
                aria-label="Send Message" v-show="$store.state.introShow" style="margin-top: 30px;" >
                Check me Out
            </Button>
        </slide-y-up-transition>
    </section>
</template>

<script>
import { SlideYUpTransition } from 'vue2-transitions'
import { mdiHand } from '@mdi/js'
import Button from '@/components/button'

export default {
    name: 'Intro',
    components: {
        SlideYUpTransition,
        Button
    },
    mounted() {
        this.$store.state.introShow = true
    },
    data: () => {
        return {
            handIcon: mdiHand,
        }
    },
    computed: {
        INTRO() {
            return this.$store.state.introPage
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
        align-items: flex-start;
        max-width: 1000px;

        h1 {
            margin: 0px 0px 0px 4px;
            color: var(--v-primary-base);
            font-family: var(--font-mono) !important;
            font-size: 17px !important;
            font-weight: lighter;
            line-height: 1.1;
        }
        h2 {
            margin: 0px 0px -20px 0px !important;
            font-family: Tungsten !important;
            font-size: clamp(50px, 8vw, 90px);
            color: var(--v-white-base);
        }
        h3 {
            margin-top: 10px;
            font-family: Tungsten !important;
            color: var(--v-slate-base);
            line-height: 0.9;
            font-size: clamp(50px, 8vw, 90px);
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