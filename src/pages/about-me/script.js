import { mdiFaceOutline } from '@mdi/js'
import {
    SlideYUpTransition,
    SlideXLeftTransition,
    SlideXRightTransition,
} from 'vue2-transitions'
export default {
    components: {
        SlideYUpTransition,
        SlideXLeftTransition,
        SlideXRightTransition,
    },
    data: () => {
        return {
            aboutIcon: mdiFaceOutline,
            dialog: false,
            dialogConent: {
                title: "",
                des: "",
                icon: ""
            }
        }
    },
    mounted() {
        this.$store.state.aboutMeShow = true
    },
    methods: {
        openDialog(skill) {
            this.dialogConent = {
                title: skill.text,
                des: skill.des,
                icon: skill.icon
            }
            this.dialog = !this.dialog
        }
    },
}