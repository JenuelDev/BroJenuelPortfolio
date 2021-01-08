<template>
    <SlideYUpTransition :delay="1700">
        <footer v-show="show" class="footer">
            <div class="social-links">
                <ul>
                    <li v-for="social in socials" :key="social.name">
                        <a :href="social.link" target="_blank" rel="author">
                            <v-icon class="icon">{{ social.icon }}</v-icon>
                        </a>
                    </li>
                </ul>
                <a href="mailto:jenuelganawed936@gmail" rel="author">
                    jenuelganawed936@gmail.com
                </a>
            </div>
            <div class="footer-text">
                <a
                    href="https://github.com/MisterJ936/jenuel-portfolio-v2"
                    target="_blank"
                    rel="author"
                >
                    <div>
                        <span
                            >Built by Jenuel Ganawed using
                            <v-icon small color="primary">{{ vueIcon }}</v-icon>
                            Vue.js</span
                        >
                    </div>
                </a>
            </div>
        </footer>
    </SlideYUpTransition>
</template>
<script>
import { mdiVuejs } from '@mdi/js'
import { socialMediaLinks } from './../../data/social-network'
import { SlideYUpTransition } from 'vue2-transitions'
export default {
    data: () => {
        return {
            vueIcon: mdiVuejs,
            socials: socialMediaLinks,
            show: false,
        }
    },
    components: {
        SlideYUpTransition,
    },
    mounted() {
        this.show = true
    },
}
</script>
<style lang="scss">
.footer {
    padding: 20px 0px;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;

    .social-links {
        display: none;
        flex-direction: column;
        align-items: center;
        text-align: center;
        ul {
            display: flex;
            flex-direction: row;
            list-style: none;
            margin-bottom: 10px;
            li {
                margin: 0px 10px;
                .icon {
                    color: var(--v-slate-base);
                }
                &:hover {
                    .icon {
                        color: var(--v-primary-base) !important;
                    }
                }
            }
        }

        a {
            font-family: var(--font-mono) !important;
            font-size: 13px;
            padding: 10px 0px 0px 0px;
            color: var(--v-slate-base);

            &:hover {
                color: var(--v-primary-base);
            }
        }
    }

    .footer-text {
        padding: 0 30px;
        div {
            margin-top: 10px;
            span {
                font-family: var(--font-mono) !important;
                font-size: 13px;
                color: var(--v-slate-base);
                margin: 10px;

                &:hover {
                    color: var(--v-primary-base);
                }
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .footer {
        .social-links {
            display: flex;
        }
    }
}
</style>