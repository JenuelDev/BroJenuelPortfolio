<template>
    <div class="card-item bg-[var(--lightBackground)] shadow-sm duration-200 h-[100%]">
        <div class="flex flex-col p-20px justify-center items-center gap-10px">
            <div class="text-size-52px" v-html="icon"></div>
            <h3 class="item-title md:text-size-24px text-size-20px font-700">{{ title }}</h3>
            <div class="item-des md:text-size-20px text-size-18px md:leading-normal leading-snug text-center" v-html="description"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['index', 'icon', 'links', 'title', 'description', 'techs'],
};
</script>
<style lang="postcss">
.card-item {
    &:hover {
        @apply shadow-lg;
        transition-delay: 0ms !important;
        transform: translate(0px, -5px);
    }
}
</style>