<template>
    <svg
        :viewBox="viewBox"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        :height="size"
        v-html="getIcon(name)"
    ></svg>
</template>
<script>
import Icons from "./icons";
export default {
    name: "Icon",
    data: () => {
        return {
            icons: Icons,
        };
    },
    props: {
        name: { type: String },
        size: { type: Number, default: 24 },
        viewBox: { type: String, default: "0 0 15 15" },
    },
    methods: {
        getIcon(name) {
            return Icons[name];
        },
    },
};
</script>