<template>
    <div class="jbutton">
        <div :href="site" rel="external">
            <p>
                <span class="bg"></span>
                <span class="base"></span>
                <span class="text">
                    <slot></slot>
                </span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: "jbutton",
    props: {
        site: {type: String, default: ''}
    }
}
</script>
<style lang="scss" src="./style.scss"></style>