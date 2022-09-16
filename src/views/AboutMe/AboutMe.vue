<script setup>
import AboutMeSection from './../../components/AboutMe/ABoutMeSection.vue';
import TechnicalSkills from './../../components/AboutMe/TechnicalSkills.vue';
import WhatIconOffer from './../../components/AboutMe/WhatIOffer.vue';
</script>
<template>
    <AboutMeSection />
    <TechnicalSkills />
    <WhatIconOffer />
</template>
<style lang="scss">
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
</style>
