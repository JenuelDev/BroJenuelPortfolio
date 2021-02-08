<template>
    <div>
        <div class="gradient-border" :class="{'bg':withBg}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        withBg: {type: Boolean, default: true}
    }
}
</script>