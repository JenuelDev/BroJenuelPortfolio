<template>
    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size+'px'" :height="size+'px'" v-html="getIcon(name)">
    </svg>
</template>
<script>
import Icons from './icons'
export default {
    name: "Icon",
    data: () => {
        return {
            icons: Icons
        }
    },
    props: {
        name: {type: String},
        size: {type: Number}
    },
    methods: {
        getIcon(name) {
            return Icons[name]
        }
    }
}
</script>