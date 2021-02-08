import Icon from './../../components/Icons'
import AboutMe from './../../constant/about-me'
export default {
    components: {
        Icon
    },
    data: () => {
        return {
            AboutMe: AboutMe,
            dialog: false,
            dialogConent: {
                title: "",
                des: "",
            }
        }
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