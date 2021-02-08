<template>
    <div class="block-overlay">
        <slot></slot>
    </div>
</template>
<style lang="scss">
    .block-overlay {
        z-index: 20;
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>