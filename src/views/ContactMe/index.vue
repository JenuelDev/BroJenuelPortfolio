<template>
    <section v-scrollanimation class="contact-me max-w-[1000px] lg:mt-130px mx-auto text-center flex flex-col items-center relative">
        <h1 class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mt-10px mb-15px md:px-10px">Contact me</h1>
        <p class="md:text-size-24px text-size-20px md:px-10px w-[100%] max-w-[770px] md:leading-relaxed leading-relaxed">
            I am currently not looking for Job. However, if you have other request or questions, don't hesitate to contact me using the form bellow.
        </p>
        <div v-scrollanimation class="contact-me-form max-w-[700px] w-[100%] mt-30px mb-100px">
            <Form />
        </div>
        <SvgDecoration classNames="absolute md:visible invisible left-[-50px] bottom-[80px] transform rotate-[-180deg] fill-[var(--primary)] opacity-50" :type="1" />
        <SvgDecoration classNames="absolute md:right-0 md:visible invisible z-20 fill-[var(--primary)] opacity-50" :type="2" />
    </section>
</template>
<script>
import SvgDecoration from '@/components/SvgDecoration/SvgDecoration.vue';
import { socialMediaLinks } from './../../constant/social-network';
import Form from './../../components/Form';

export default {
    components: { Form, SvgDecoration },
    setup() {
        return {
            socials: socialMediaLinks,
        };
    },
};
</script>
<style lang="scss">
.contact-me-form {
    &.a-before-enter {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.3s ease-in;
        transition-delay: 0.1s;
    }

    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }
}
.contact-me {
    &.a-before-enter {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.3s ease-in;
    }

    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }

    .form {
        margin-top: 30px;
    }

    .social-icons {
        margin-bottom: 20px;
        ul {
            list-style: none;
            display: flex;
            flex-direction: row;
            padding-left: 0;
            li {
                margin: 10px;
                .icons {
                    color: var(--v-slate-base);
                }

                &:hover {
                    .icons {
                        color: var(--v-primary-base);
                    }
                }
            }
        }
    }
}
</style>
