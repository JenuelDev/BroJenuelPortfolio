<template>
    <section class="code-challenge">
        <SlideXRightTransition :delay="200">
            <h2
                class="numbered-header"
                v-show="$store.state.codeChallengeShow"
                style="margin: 10px 0px -10px"
            >
                <v-icon class="front-icon">{{ headIcon }}</v-icon> Code
                Chellenge
            </h2>
        </SlideXRightTransition>
        <SlideXLeftTransition :delay="300">
            <p v-show="$store.state.codeChallengeShow">
                {{CODE_CHALLENGE.des}}
            </p>
        </SlideXLeftTransition>
        <div class="code-grid">
            <template v-for="(code, index) in CODE_CHALLENGE.challenges">
                <SlideYUpTransition :key="code.title" :delay="index * 150">
                    <div
                        v-show="$store.state.codeChallengeShow"
                        class="code-item"
                    >
                        <div class="code-item-inner">
                            <header>
                                <div class="item-top">
                                    <div class="item-folder">
                                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M1.5 1A1.5 1.5 0 000 2.5v10A1.5 1.5 0 001.5 14h12a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013.5 3H7.707l-2-2H1.5z" fill="currentColor"></path></svg>
                                    </div>
                                    <div class="item-links">
                                        <a
                                            v-for="link in code.links"
                                            :key="link.link"
                                            :href="link.link"
                                            target="_blank"
                                            rel="external"
                                        >
                                            <v-btn
                                                class="icon"
                                                icon
                                                aria-label="Link Icons"
                                            >
                                                <v-icon>{{ link.icon }}</v-icon>
                                            </v-btn>
                                        </a>
                                    </div>
                                </div>
                                <h3 class="item-title">{{ code.title }}</h3>
                                <div class="item-des" v-html="code.des"></div>
                            </header>
                            <footer>
                                <ul>
                                    <li
                                        v-for="tech in code.techs"
                                        :key="tech.name"
                                    >
                                        <v-icon class="icon" small>{{
                                            tech.icon
                                        }}</v-icon>
                                        {{ tech.name }}
                                    </li>
                                </ul>
                            </footer>
                        </div>
                    </div>
                </SlideYUpTransition>
            </template>
        </div>
    </section>
</template>
<script>
import { mdiBrain, mdiFolderOpenOutline } from '@mdi/js'
import {
    SlideYUpTransition,
    SlideXLeftTransition,
    SlideXRightTransition,
} from 'vue2-transitions'
export default {
    components: {
        SlideYUpTransition,
        SlideXLeftTransition,
        SlideXRightTransition,
    },
    data: () => {
        return {
            headIcon: mdiBrain,
            folderIcon: mdiFolderOpenOutline,
        }
    },
    mounted() {
        this.$store.state.codeChallengeShow = true
    },
    computed: {
        CODE_CHALLENGE() {
            return this.$store.state.codeChallengePage
        }
    }
}
</script>
<style lang="scss" src="./style.scss"></style>