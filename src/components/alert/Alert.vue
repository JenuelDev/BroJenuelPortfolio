<template>
    <div v-show="show" class="alert-component text-left" :class="setType(type)">
        <h1 class="text-[var(--background)] md:text-size-24px text-size-20px font-700 mb-7px">{{ title }}</h1>
        <p class="text-[var(--background)] md:text-size-20px text-size-18px" v-html="description"></p>
    </div>
</template>
<script>
export default {
    props: {
        show: { type: Boolean, default: false },
        type: {
            type: String,
            default: 'success',
            validator(value) {
                return ['success', 'error'].includes(value);
            },
        },
        title: { type: String },
        description: { type: String },
    },
    setup() {
        let types = {
            success: 'show-success',
            error: 'show-error',
        };
        return {
            setType: (type) => {
                return type ? types[type] : 'show-success';
            },
        };
    },
};
</script>
<style lang="scss">
.alert-component {
    padding: 10px;
    opacity: 0.8;
    border-radius: 5px;

    &.show-error {
        background-color: var(--error);
    }

    &.show-success {
        background-color: var(--primary);
    }
}
</style>