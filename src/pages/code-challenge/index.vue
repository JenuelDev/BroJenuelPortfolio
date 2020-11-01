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
                This projects under this page, are simple projects that I
                created to challenge my self to experience and learn things.
            </p>
        </SlideXLeftTransition>
        <div class="code-grid">
            <template v-for="(code, index) in codes">
                <SlideYUpTransition :key="code.title" :delay="index * 150">
                    <div
                        v-show="$store.state.codeChallengeShow"
                        class="code-item"
                    >
                        <div class="code-item-inner">
                            <header>
                                <div class="item-top">
                                    <div class="item-folder">
                                        <svg
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                        >
                                            <path
                                                d="M.5 12.5v-10a1 1 0 011-1h4l2 2h6a1 1 0 011 1v8a1 1 0 01-1 1h-12a1 1 0 01-1-1z"
                                                stroke="currentColor"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div class="item-links">
                                        <a
                                            v-for="link in code.links"
                                            :key="link.link"
                                            :href="link.link"
                                            target="_blank"
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
import codeChallenge from './../../data/code-challenge'
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
            codes: codeChallenge,
            folderIcon: mdiFolderOpenOutline,
        }
    },
    mounted() {
        this.$store.state.codeChallengeShow = true
    },
}
</script>
<style lang="scss">
.code-challenge {
    max-width: 1000px;
    p {
        color: var(--v-slate-base);
    }

    .code-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 15px;
        position: relative;
        margin-top: 50px;

        .code-item {
            transition-delay: 0ms;
            visibility: visible;
            opacity: 1;
            transition: 0.2s;
            box-shadow: 0 0px 0px 0px black;

            .code-item-inner {
                display: flex;
                -webkit-box-pack: justify;
                justify-content: space-between;
                -webkit-box-align: center;
                flex-direction: column;
                align-items: flex-start;
                position: relative;
                height: 100%;
                padding: 2rem 1.75rem;
                border-radius: var(--border-radius);
                background-color: var(--v-lightBackground-base);
                transition: var(--transition);

                header {
                    .item-top {
                        display: flex;
                        -webkit-box-pack: justify;
                        justify-content: space-between;
                        -webkit-box-align: center;
                        align-items: center;
                        margin-bottom: 30px;

                        .item-folder {
                            color: var(--v-primary-base) !important;
                            .icon {
                                color: var(--v-primary-base) !important;
                            }
                        }
                        .item-links {
                            margin-right: -15px;
                            color: var(--v-lightSlate-base) !important;
                            a {
                                padding: 0px 5px;
                                .icon {
                                    color: var(--v-lightSlate-base) !important;
                                }

                                &:hover {
                                    .icon {
                                        color: var(--v-primary-base) !important;
                                    }
                                }
                            }
                        }
                    }

                    h3 {
                        margin: 0px 0px 0px;
                        color: var(--v-lightestSlate-base);
                        font-size: var(--fz-xxl);
                        line-height: 1.1;
                    }

                    .item-des {
                        color: var(--v-lightSlate-base);
                        font-size: 17px;
                    }
                }

                footer {
                    ul {
                        display: flex;
                        align-items: flex-end;
                        -webkit-box-flex: 1;
                        flex-grow: 1;
                        flex-wrap: wrap;
                        padding: 0px;
                        margin: 0px 10px 0px 10px;
                        gap: 10px;
                        list-style: none;

                        li {
                            font-family: var(--font-mono);
                            font-size: var(--fz-xxs);
                            line-height: 1.75;
                            color: var(--v-lightSlate-base);

                            .icon {
                                color: var(--v-lightSlate-base);
                            }
                        }
                    }
                }
            }

            &:hover {
                transform: translate(0px, -5px);
                box-shadow: var(--black-shadow);
            }
        }
    }
}
</style>