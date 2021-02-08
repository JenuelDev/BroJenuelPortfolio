<template>
    <div v-scrollanimation class="my-footer">
        <router-link to="/">{{new Date().getFullYear()}} <Icon class="icon-highlight" name="vue" :size="20"/> Jenuel Ganawed</router-link>
    </div>
</template>
<script>
import Icon from './../Icons'
export default {
    name: "Footer",
    components: {Icon}
}
</script>