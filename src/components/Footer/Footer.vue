<template>
    <div v-scrollanimation class="my-footer text-size-20px">
        <div
            class="footer-toggle-link"
            @click="openSite('https://github.com/BroJenuel/BroJenuelPortfolio')"
            >
            <div class="copy-right">
                {{ new Date().getFullYear() }}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-copyright"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M14.5 9a3.5 4 0 1 0 0 6"></path>
                </svg>
                Jenuel Ganawed
            </div>
            <q class="text-center">Programming isn't about what you know; it's about what you can figure out.</q>
        </div>
    </div>
</template>
<script>
export default {
    name: "Footer",
    methods: {
        openSite(site) {
            window.open(site,'_blank')
        }
    }
};
</script>