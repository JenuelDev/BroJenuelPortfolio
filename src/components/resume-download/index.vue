<template>
    <v-tooltip right color="primary">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                aria-label="Change-Theme"
                class="resume-download-btn"
                @click="Download()"
            >
                <v-icon class="icon">{{ colorIcon }}</v-icon>
            </v-btn>
        </template>
        <span style="color: var(--v-background-base)">Download Resume/CV</span>
    </v-tooltip>
</template>
<script>
import { mdiFileDownloadOutline } from '@mdi/js'
import { themes } from './../../data/theme'
export default {
    data: () => ({
        fav: true,
        menu: false,
        message: false,
        hints: true,
        colorIcon: mdiFileDownloadOutline,
        themes: themes,
    }),
    methods: {
        Download() {
            window.open("https://github.com/BroJenuel/BroJenuel/raw/master/resume/JenuelGanawed_CV_2020.pdf");
        }
    }
}
</script>
<style lang="scss">
.resume-download-btn {
    position: fixed;
    top: 120px;
    left: 40px;
    z-index: 15;

    .icon {
        color: var(--v-slate-base) !important;
    }
    &:hover {
        .icon {
            color: var(--v-primary-base) !important;
        }
    }
}
@media only screen and (max-width: 1078px) {
    .resume-download-btn {
        // top: 20px;
        left: 20px;
    }
}
@media only screen and (max-width: 800px) {
    .resume-download-btn {
        top: 15px;
        left: 80px;
        background-color: var(--v-background-base);
        box-shadow: var(--black-shadow) !important;
        .icon {
            color: var(--v-primary-base) !important;
        }
    }
}
</style>