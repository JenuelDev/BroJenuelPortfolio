<template>
    <section v-scrollanimation class="my-work-experience lg:mt-130px mx-auto">
        <div class="relative">
            <h2 class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mt-10px mb-15px md:px-10px">
                My work experience
            </h2>
            <p class="md:text-size-24px text-size-20px md:px-10px w-[100%] max-w-[770px] md:leading-relaxed leading-relaxed">
                This are companies that I have worked for. I have learned and enjoyed working on this companies.
            </p>
            <div class="inner">
                <ul class="tab-list">
                    <li v-for="(exp, index) in experiences" :key="exp.company" @click="tab = index" :class="tab == index ? 'active' : ''">
                        <div>
                            <span class="md:text-size-18px text-size-16">{{ exp.tab }}</span>
                        </div>
                    </li>
                    <div
                        class="slider"
                        :style="
                            width >= 600
                                ? 'transform: translateY(calc(' + tab + ' * var(--tab-height)));'
                                : 'transform: translateX(calc(' + tab + ' * var(--tab-width)));'
                        "
                    ></div>
                </ul>
                <template v-for="(exp, index) in experiences" :key="exp.company + index">
                    <div v-scrollanimation class="company-details" v-if="tab == index">
                        <p class="range font-600" v-html="exp.workStart + ' - ' + exp.workUntil"></p>
                        <h3 class="lg:text-size-34px md:text-size-28px text-size-26px font-700 items-center gap-7px">
                            <span>{{ exp.position }}</span>
                            <span class="text-[var(--primary)] opacity-70 hover:opacity-100 duration-100">
                                @
                                <a :href="exp.url" target="_blank" rel="noopener">
                                    {{ exp.company }}
                                </a>
                            </span>
                        </h3>
                        <div class="mt-20px mb-26px">
                            <a
                                class="
                                    border
                                    border-[var(--primary)]
                                    rounded-md
                                    px-15px
                                    py-5px
                                    text-[var(--primary)]
                                    hover:bg-[var(--primary)]
                                    hover:text-[var(--background)]
                                    duration-300
                                "
                                v-if="exp.certificate"
                                rel="external"
                                target="_blank"
                                :href="exp.certificate.link"
                                hreflang="es-es"
                            >
                                <i class="bx bx-certification"></i>
                                {{ exp.certificate.label }}
                            </a>
                        </div>
                        <div>
                            <p class="md:text-size-20px text-size-18px md:leading-normal leading-snug" v-html="exp.des"></p>
                        </div>
                    </div>
                </template>
            </div>
            <SvgDecoration classNames="absolute md:visible invisible right-[0px] top-[70px] transform fill-[var(--primary)] opacity-50" :type="1" />
        </div>
    </section>
</template>
<script>
import SvgDecoration from '@/components/SvgDecoration/SvgDecoration.vue';
import Experience from './experiences/index.js';
import { ref, onUnmounted, onMounted } from 'vue';
export default {
    components: { SvgDecoration },
    setup() {
        const tab = ref(0);
        const width = ref(500);

        const widthHandler = () => {
            width.value = window.innerWidth;
        };

        onMounted(() => {
            window.addEventListener('resize', widthHandler());
            widthHandler();
        });

        onUnmounted(() => {
            window.removeEventListener('resize', widthHandler());
        });

        return {
            experiences: Experience,
            tab,
            width,
        };
    },
};
</script>
<style lang="postcss">
.my-work-experience {
    --tab-height: 50px;
    --tab-width: 120px;

    max-width: 1000px;
    display: flex;
    flex-direction: column;
    min-height: 50vh;

    &.a-before-enter {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.3s ease-in;
    }

    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }

    .inner {
        margin-top: 30px;
        display: flex;
        gap: 10px;

        .tab-list {
            position: relative;
            z-index: 3;
            width: max-content;
            padding: 0px;
            margin: 20px 0 0 0;
            list-style: none;

            li {
                height: var(--tab-height);

                div {
                    text-decoration: none;
                    text-decoration-skip-ink: auto;
                    position: relative;
                    transition: var(--transition);
                    cursor: pointer;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    height: var(--tab-height);
                    padding: 0px 20px 2px;
                    border-left: 2px solid var(--lightBackground);
                    background-color: transparent;
                    color: var(--slate);
                    font-family: var(--font-mono);
                    text-align: left;
                    white-space: nowrap;
                    font-size: 0.8rem;
                }

                &.active {
                    background-color: var(--lightBackground);
                    div {
                        color: var(--primary);
                    }
                }

                &:hover {
                    background-color: var(--lightBackground);
                }
            }

            .slider {
                position: absolute;
                top: 0px;
                left: 0px;
                z-index: 10;
                width: 2px;
                height: var(--tab-height);
                border-radius: var(--border-radius);
                background: var(--primary);
                transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
            }
        }

        .company-details {
            width: 100%;
            height: auto;
            padding-left: 30px;
            padding-top: 20px;

            p.range {
                .present-work {
                    @apply text-[var(--primary)];
                }
            }

            &.a-before-enter {
                opacity: 0;
                transform: translateY(20px);
                transition: 0.5s;
            }

            &.a-enter {
                opacity: 1;
                transform: translateY(0px);
            }
        }
    }
}

@media only screen and (max-width: 600px) {
    .my-work-experience {
        .inner {
            display: block;
            .tab-list {
                display: flex;
                overflow-x: auto;
                overflow-y: hidden;
                width: calc(100% + 50px);
                margin-left: -50px;
                margin-bottom: 30px;
                li:first-of-type {
                    margin-left: 50px;
                }
                li {
                    div {
                        display: flex;
                        -webkit-box-pack: center;
                        justify-content: center;
                        -webkit-box-align: center;
                        align-items: center;
                        min-width: 90px;
                        padding: 0px 15px;
                        border-left: 0px;
                        border-bottom: 2px solid var(--lightest-navy);
                        text-align: center;
                    }
                }

                .slider {
                    top: auto;
                    bottom: 0px;
                    width: 100%;
                    max-width: var(--tab-width);
                    height: 2px;
                    margin-left: 50px;
                }
            }

            .company-details {
                @apply pl-0;
            }
        }
    }
}
</style>