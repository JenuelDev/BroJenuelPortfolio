<script setup>
import RenderIcon from './../../components/Icon.vue';
import { WindowAd20Filled, Server24Regular, WindowDevTools20Filled } from "@vicons/fluent"
const services = [
    {
        icon: WindowAd20Filled,
        title: 'Front-End Development',
        description:
            'Converting data/designs to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.',
    },
    {
        icon: Server24Regular,
        title: 'Back-End Development',
        description:
            'Developing the server side responsible for storing and organizing data of an application and everything that communicates between the database and the browser/application.',
    },
    {
        icon: WindowDevTools20Filled,
        title: 'Website Management',
        description:
            'Manage all of the activities included in the process of posting and maintaining a website on the World Wide Web. These include maintenance, Website optimization, SEO friendly, etc.',
    },
];
</script>

<template>
    <section class="flex flex-col w-[100%] max-w-[1200px] visible opacity-100 z-10 px-10px mt-100px mx-auto">
        <div class="text-center mb-40px">
            <h1 class="lg:text-size-52px md:text-size-44px text-size-36px font-800 text-[var(--primary)] tracking-tight mt-10px mb-15px">What I can offer</h1>
            <p class="md:text-size-24px text-size-20px md:px-10px w-[100%] max-w-[770px] md:leading-relaxed leading-normal mx-auto">
                If you hire me, here are the things that I can do to help solve some of your company's problems, and help to reduce issues. I will also create and
                maintain web apps.
            </p>
        </div>

        <div class="flex gap-20px flex-wrap">
            <div class="services-item" v-scrollview v-for="(service, i) in services" :key="service.title" :style="`transition-delay: ${i * 200}ms;`">
                <div class="card-item bg-[var(--lightBackground)] shadow-sm duration-200 h-[100%]">
                    <div class="flex flex-col p-20px justify-center items-center gap-10px">
                        <div class="text-size-52px">
                            <RenderIcon :icon="service.icon" :size="50" />
                        </div>
                        <h3 class="item-title md:text-size-24px text-size-20px font-700">{{service. title }}</h3>
                        <div class="item-des md:text-size-20px text-size-18px md:leading-normal leading-snug text-center" v-html="service.description"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-30px text-center mb-50px">
            <div>
                <router-link to="/contact" class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100">
                    Get In Touch
                </router-link>
            </div>
        </div>
    </section>
</template>

<style lang="postcss">
.services-item {
    flex: 1 1 300px;
}
</style>
