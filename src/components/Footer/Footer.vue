<template>
    <div v-scrollanimation class="my-footer">
        <a href="https://github.com/BroJenuel/jenuel-portfolio-v2" target="_blank" rel="noreferrer">{{new Date().getFullYear()}} <Icon class="icon-highlight" name="vue" :size="20"/> Jenuel Ganawed</a>
    </div>
</template>
<script>
import Icon from './../Icons'
export default {
    name: "Footer",
    components: {Icon}
}
</script>