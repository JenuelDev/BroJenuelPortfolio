<template>
    <div class="jbutton">
        <a :href="site">
            <p>
                <span class="bg"></span>
                <span class="base"></span>
                <span class="text">
                    <slot></slot>
                </span>
            </p>
        </a>
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