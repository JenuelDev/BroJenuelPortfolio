<template>
    <AboutMeSection />
    <TechnicalSkills />
    <WhatIconOffer />
</template>
<script>
import AboutMeSection from './../../components/AboutMe/ABoutMeSection.vue';
import TechnicalSkills from './../../components/AboutMe/TechnicalSkills.vue';
import WhatIconOffer from './../../components/AboutMe/WhatIOffer.vue';
export default {
    components: {
        AboutMeSection,
        TechnicalSkills,
        WhatIconOffer
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