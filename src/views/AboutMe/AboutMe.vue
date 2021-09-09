<template>
    
    <AboutMeSection />
    <TechnicalSkills />
    <div class="what-i-offer-content">
        <div v-scrollview class="services-title">
            <h2><Icon class="service-title-icon" name="qrCode" /> What I can Offer/Service</h2>
            <p>Your complete website solution</p>
        </div>
        <div class="services-wrapper">
            <div class="services-item" v-scrollview v-for="(service, i) in services" :key="service.title" :style="`transition-delay: ${i * 200}ms;`">
                <Card :index="1" :icon="service.icon" :title="service.title" :description="service.description" />
            </div>
        </div>
    </div>
</template>
<script>
import Icon from './../../components/Icons';
import AboutMe from './../../constant/about-me';
import Card from './../../components/Card/Card.vue';
import AboutMeSection from './../../components/AboutMe/ABoutMeSection.vue';
import TechnicalSkills from './../../components/AboutMe/TechnicalSkills.vue';
export default {
    components: {
        Icon,
        Card,
        AboutMeSection,
        TechnicalSkills
    },
    setup() {
        const services = [
            {
                icon: 'gridLayout',
                title: 'Front-End Development',
                description: 'Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.',
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
    data: () => {
        return {
            AboutMe: AboutMe,
            dialog: false,
            dialogContent: {
                title: '',
                des: '',
            },
        };
    },
    methods: {
        openDialog(skill) {
            this.dialogContent = {
                title: skill.text,
                des: skill.des,
                icon: skill.icon,
            };

            document.getElementById('main-screen-window').style.overflowY = 'hidden';
            this.dialog = !this.dialog;
        },
        closeDialog() {
            document.getElementById('main-screen-window').style.overflowY = 'overlay';
            this.dialog = !this.dialog;
        },
    },
};
</script>
<style lang="postcss">
.what-i-offer-content {
    margin: 70px auto 10px auto;
    max-width: 1000px;
    min-height: 60vh;

    .services-title {
        display: flex;
        flex-direction: column;
        align-items: center;

        &.a-view-before-enter {
            opacity: 0;
            transform: translateY(20px);
            transition: 0.3s;
            transition-delay: 400ms;
        }

        &.a-view-enter {
            opacity: 1;
            transform: translateY(0px);
        }

        h2 {
            display: flex;
            align-items: center;
            font-size: clamp(17px, 5vw, 32px);
            margin: 0 0 10px 0;

            .service-title-icon {
                margin-right: 10px;
                color: var(--primary);
            }
        }
        p {
            margin: 0;
        }
    }

    .services-wrapper {
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .services-item {
            margin: 10px;

            &.a-view-before-enter {
                opacity: 0;
                transform: translateY(20px);
                transition: 0.3s;
            }

            &.a-view-enter {
                opacity: 1;
                transform: translateY(0px);
            }
        }
    }
}

// modal
.modal-window {
    .skill-icon {
        min-width: 30px;
    }
    .modal-window-bg {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 80;
    }
    .modal-window-content {
        position: fixed;
        z-index: 90;
        top: 0;
        left: 0;

        .box {
            position: fixed;
            max-width: 250px;
            background-color: var(--background);
            padding: 20px;
            border-radius: 10px;
            left: 50%;
            margin-left: -125px;
            margin-top: 20vh;

            .x-close-button {
                float: right;
                cursor: pointer;
                transition: 0.3s;

                &:hover {
                    color: var(--primary);
                }
            }

            h1 {
                margin: 10px 0;
                display: flex;
                align-items: center;
                gap: 10px;
                color: var(--primary);
                font-size: 1.3rem;
            }
        }
    }
}


@media screen and (max-width: 553px) {
    .modal-window {
        .modal-window-content {
            .box {
                position: fixed;
                max-width: 250px;
                background-color: var(--background);
                padding: 20px;
                left: 45%;
                border-radius: 10px;
                margin-left: -125px;
                margin-top: 20vh;
            }
        }
    }
}
</style>