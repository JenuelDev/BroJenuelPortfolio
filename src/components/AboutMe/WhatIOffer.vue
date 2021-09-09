<template>
    <section class="flex flex-col w-[100%] max-w-[1200px] visible opacity-100 z-10 px-10px mt-100px select-none mx-auto">
        <div class="text-center mb-40px">
            <h1 class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mt-10px mb-15px">What I can offer</h1>
            <p class="md:text-size-24px text-size-20px md:px-10px w-[100%] max-w-[770px] md:leading-relaxed leading-normal mx-auto">
                I’m constantly learning and keep up to date with the latest technologies, so I can pick the best tech for the job.
            </p>
        </div>

        <div class="flex gap-20px flex-wrap justify-center">
            <div class="services-item" v-scrollview v-for="(service, i) in services" :key="service.title" :style="`transition-delay: ${i * 200}ms;`">
                <Card :index="1" :icon="service.icon" :title="service.title" :description="service.description" />
            </div>
        </div>
        <div class="mt-30px text-center mb-50px">
            <div>
                <button class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100">Get In Touch</button>
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
                icon: 'gridLayout',
                title: 'Front-End Development',
                description:
                    'Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.',
            },
            {
                icon: 'database',
                title: 'Back-End Development',
                description:
                    'Developing the server side responsible for storing and organizing data of an application and everything that communicates between the database and the browser.',
            },
            {
                icon: 'toggle',
                title: 'Website Management',
                description:
                    'Managing all of the activities included in the process of posting and maintaining a website on the World Wide Web. This includes Website optimization and SEO friendly.',
            },
        ];
        return {
            services,
        };
    },
};
</script>