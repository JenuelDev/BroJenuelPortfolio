<template>
    <section v-scrollanimation class="my-work-experience lg:mt-130px mx-auto">
        <div class="relative">
            <h2 class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mt-10px mb-15px md:px-10px">
                My work experience
            </h2>
            <p class="md:text-size-24px text-size-20px md:px-10px w-[100%] max-w-[770px] md:leading-relaxed leading-relaxed">
                This are companies that I have worked for. I have learned and enjoyed working on this companies.
            </p>
            <div class="container">
                <div>
                    <ul class="timeline">
                        <li class="timeline-event" v-for="(exp, index) in experiences" :key="exp.company + index">
                            <label class="timeline-event-icon"></label>
                            <div class="timeline-event-copy">
                                <p class="timeline-event-thumbnail" v-html="exp.workStart + ' - ' + exp.workUntil"></p>
                                <h3 class="lg:text-size-30px md:text-size-28px text-size-26px font-700 items-center gap-7px">
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
                                        class="border border-[var(--primary)] rounded-md px-15px py-5px text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)] duration-300"
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
                        </li>
                    </ul>
                </div>
            </div>
            <SvgDecoration classNames="absolute md:visible invisible right-[0px] top-[70px] transform fill-[var(--primary)] opacity-50" :type="1" />
        </div>
    </section>
</template>
<script>
import SvgDecoration from '@/components/SvgDecoration/SvgDecoration.vue';
import Experience from './experiences/index.js';
import { ref, onUnmounted, onMounted } from 'vue';
const tabKey = 'expTabKey';
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
            let tabindex = localStorage.getItem(tabKey);
            if (tabindex) {
                tab.value = parseInt(tabindex);
            }
        });

        onUnmounted(() => {
            window.removeEventListener('resize', widthHandler());
        });

        return {
            experiences: Experience,
            tab,
            width,
            changeTab(index) {
                localStorage.setItem(tabKey, index);
                tab.value = index;
            },
        };
    },
};
</script>
<style lang="scss">
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
}
</style>
