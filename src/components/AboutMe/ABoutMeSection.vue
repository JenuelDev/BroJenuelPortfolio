<script setup>
import SvgDecoration from './../SvgDecoration/SvgDecoration.vue';
import Document16Regular from '@vicons/fluent/Document16Regular';
import { Icon } from '@vicons/utils';
import { Mail20Filled } from '@vicons/fluent';

const yearCount = () => {
    return new Date().getFullYear() - 2017;
};
</script>
<template>
    <section v-scrollanimation class="about-me mx-auto mb-100px">
        <div class="about-me-inner flex flex-row items-center gap-[50px] relative">
            <div class="about-me-text">
                <div class="about-me-text-info text-right max-w-500px">
                    <div>
                        <h3 class="lg:text-size-36px text-size-30px font-500">Software Developer</h3>
                        <h1 class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mt-10px">Hi there, I’m Jenuel</h1>
                        <h2 class="text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--lightestSlate)] tracking-tight">I create apps and websites</h2>
                    </div>
                    <div class="mt-30px flex lg:justify-end justify-center flex-wrap gap-20px items-center">
                        <div>
                            <router-link
                                to="/contact"
                                class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 flex items-center gap-5px"
                            >
                                <Icon size="20">
                                    <Mail20Filled />
                                </Icon>
                                <span> Get In Touch </span>
                            </router-link>
                        </div>
                        <div>
                            <a
                                href="https://drive.google.com/file/d/1CEMto0ubGMVBJNCLq-QQN8-aFsYUo2Dd/view?usp=sharing"
                                target="_blank"
                                class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 cursor-pointer whitespace-nowrap flex items-center gap-5px"
                            >
                                <Icon size="20">
                                    <Document16Regular />
                                </Icon>
                                <span> Resume </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-me-photo z-50">
                <div class="wrapper">
                    <div class="photo" style="position: relative; overflow: hidden">
                        <div class="photo-front"></div>
                        <img
                            class="max-w-300px w-[100%] w-[300px] profile-picture-style"
                            loading="lazy"
                            width="300px"
                            src="./../../assets/images/profileImage.webp"
                            alt="Jenuel Ganawed - Profile Picture"
                        />
                    </div>
                </div>
            </div>
            <SvgDecoration classNames="absolute md:visible invisible left-[-50px] bottom-[-40px] transform rotate-[-180deg] fill-[var(--primary)] opacity-50" :type="1" />
            <SvgDecoration classNames="absolute md:right-[-56px] md:visible invisible z-20 fill-[var(--primary)] opacity-50" :type="2" />
        </div>
        <div class="md:text-size-24px text-size-20px md:px-10px w-[100%] max-w-[770px] pt-100px md:leading-relaxed leading-relaxed relative">
            <p class="mb-30px">
                My name is Jenuel Ganawed or call me BroJenuel. I’m a developer with a full-stack background and a keen eye for good design. I love to make complex things
                simple and joy to use. Currently, I focus on building web apps with VueJs(v2)(v3) and Laravel.
            </p>
            <p class="mb-30px">
                Over the past {{ yearCount() }} years, I’ve gained experience across some aspects of the application lifecycle, including frontend, backend, and dev-ops.
                It allows me to take full ownership of a project from design to implementation and deployment.
            </p>
            <SvgDecoration classNames="absolute right-[-150px] top-90 md:block hidden z-20 fill-[var(--primary)] opacity-50" :type="3" />
        </div>
    </section>
</template>

<style lang="postcss">
.about-me {
    @apply flex flex-col items-center max-w-[900px] visible opacity-100 z-10 px-10px lg:mt-130px;

    &.a-before-enter {
        @apply opacity-0 transform translate-y-[20px] duration-[0.3s] ease-in;
    }

    &.a-enter {
        @apply opacity-100 transform translate-y-0;
    }

    .about-me-photo {
        position: relative;

        .wrapper {
            @apply overflow-hidden rounded-lg;
        }
    }
}

@media only screen and (max-width: 856px) {
    .about-me {
        .about-me-text-info {
            @apply text-center;
        }

        .about-me-inner {
            @apply flex flex-col gap-[50px];

            .about-me-photo {
                @apply order-1 self-center;
            }
            .about-me-text {
                @apply order-2 self-center;
            }
        }
    }
}
</style>
