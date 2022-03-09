<script setup>
import CodeChallenge from './../../constant/code-challenges-page/index.js';
import IconLink from './../../components/Icon.vue';

function openSite(site) {
    window.open(site, '_blank');
}
</script>
<template>
    <section v-scrollanimation class="code-challenge">
        <h2 class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mb-15px md:px-10px">others projects</h2>
        <p class="md:text-size-24px text-size-20px md:px-10px w-[100%] max-w-[770px] md:leading-relaxed leading-normal">
            {{ CodeChallenge.des }}
        </p>
        <div class="code-grid">
            <template v-for="(code, index) in CodeChallenge.challenges" :key="index">
                <div v-scrollanimation :style="'transition-delay:' + index * 100 + 'ms'">
                    <div class="code-item">
                        <div class="code-item-inner">
                            <header>
                                <div class="item-top">
                                    <div class="text-[var(--primary)] text-size-52px">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -57 511.99973 511" width="50" class="fill-[var(--primary)]">
                                            <path
                                                d="m506.039062 180.988281c-7.78125-12.546875-21.53125-20.046875-36.78125-20.046875h-339.5625c-16.832031 0-32.140624 9.488282-39.011718 24.179688l-89.8125 188.308594c3.390625 13.789062 16.269531 24.089843 31.609375 24.089843h361.269531c15.445312 0 29.5625-8.734375 36.460938-22.554687l77.628906-155.59375c6.128906-12.3125 5.449218-26.660156-1.800782-38.382813zm0 0"
                                            />
                                            <path
                                                d="m72.402344 156.15625c6.863281-14.6875 22.175781-24.179688 39.011718-24.179688h319.753907v-40.898437c0-16.859375-14.222657-30.578125-31.703125-30.578125h-186.445313c-.273437 0-.460937-.070312-.53125-.121094l-33.371093-46.660156c-5.910157-8.277344-15.671876-13.21875-26.101563-13.21875h-121.304687c-17.488282 0-31.710938 13.71875-31.710938 30.578125v276.875zm0 0"
                                            />
                                        </svg>
                                    </div>
                                    <div class="item-links">
                                        <div
                                            class="item-links-toggle customTooltip"
                                            :gloss="link.tooltip"
                                            v-for="link in code.links"
                                            :key="link.link"
                                            @click="openSite(link.link)"
                                        >
                                            <IconLink :icon="link.icon" :size="30" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="md:text-size-24px text-size-22 font-700 mt-20px text-[var(--primary)]">{{ code.title }}</h3>
                                    <div class="md:text-size-20px text-size-18 md:leading-snug leading-tight mt-10px" v-html="code.des"></div>
                                </div>
                            </header>

                            <footer class="mt-30px">
                                <ul class="flex gap-10px flex-wrap">
                                    <li class="flex items-center gap-5px" v-for="tech in code.techs" :key="tech.name">
                                        <IconLink :icon="tech.icon" />
                                        {{ tech.name }}
                                    </li>
                                </ul>
                            </footer>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

<style lang="postcss">
.code-challenge {
    @apply max-w-[1000px] mx-auto my-100px;

    &.a-before-enter {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.3s ease-in;
    }

    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }

    .code-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        position: relative;
        margin-top: 50px;
        gap: 20px;

        .a-before-enter {
            opacity: 0;
            transform: translateY(20px);
            transition: 0.2s ease-in-out;
        }

        .a-enter {
            opacity: 1;
            transform: translateY(0);
        }

        .code-item {
            visibility: visible;
            box-shadow: 0 10px 30px -15px var(--navy-shadow);
            border-radius: var(--border-radius);
            transition: 0.2s;
            height: 100%;
            z-index: 1;
            background-color: var(--lightBackground);

            .code-item-inner {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                padding: 2rem 1.75rem;
                height: 100%;

                header {
                    .item-top {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        .item-links {
                            display: flex;
                            margin-right: -15px;
                            color: var(--lightSlate) !important;

                            .item-links-toggle {
                                padding: 0px 5px;
                                cursor: pointer;
                                .highlight-hover {
                                    color: var(--lightSlate) !important;
                                }

                                &:hover {
                                    .highlight-hover {
                                        color: var(--primary) !important;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            &:hover {
                transform: translate(0px, -5px);
                box-shadow: var(--black-shadow);
                background-color: var(--lightBackground);
            }
        }
    }
}
</style>
