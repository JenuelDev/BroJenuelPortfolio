<template>
    <section class="flex flex-col w-[100%] max-w-[1200px] visible opacity-100 z-10 px-10px mt-100px mx-auto">
        <div class="text-center mb-40px">
            <h1 class="lg:text-size-52px md:text-size-44px text-size-36px font-800 text-[var(--primary)] tracking-tight mt-10px mb-15px">What I can offer</h1>
            <p class="md:text-size-24px text-size-20px md:px-10px w-[100%] max-w-[770px] md:leading-relaxed leading-normal mx-auto">
                If you hire me, here are the things that I can do to help solve some of your companies problems, and help to reduce issues.
            </p>
        </div>

        <div class="flex gap-20px flex-wrap">
            <div class="services-item" v-scrollview v-for="(service, i) in services" :key="service.title" :style="`transition-delay: ${i * 200}ms;`">
                <Card :index="1" :icon="service.icon" :title="service.title" :description="service.description" />
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
<script>
import Card from './../../components/Card/Card.vue';
export default {
    components: { Card },
    setup() {
        const services = [
            {
                icon: `<i class='bx bx-window-alt'></i>`,
                title: 'Front-End Development',
                description:
                    'Converting data/designs to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.',
            },
            {
                icon: "<i class='bx bx-data' ></i>",
                title: 'Back-End Development',
                description:
                    'Developing the server side responsible for storing and organizing data of an application and everything that communicates between the database and the browser/application.',
            },
            {
                icon: "<i class='bx bx-edit' ></i>",
                title: 'Website Management',
                description:
                    'Manage all of the activities included in the process of posting and maintaining a website on the World Wide Web. These include maintenance, Website optimization, SEO friendly, etc.',
            },
        ];
        return {
            services,
        };
    },
};
</script>
<style lang="postcss">
.services-item {
    flex: 1 1 300px;
}
</style>