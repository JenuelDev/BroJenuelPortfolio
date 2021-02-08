
import Experience from './../../constant/experiences/index.js'
import Icon from './../../components/Icons'
export default {
    components: {Icon},
    data: () => {
        return {
            experiences: Experience,
            vertical: true,
            showTab: true,
            tab: 0,
            width: 500
        }
    },
    created() {
        window.addEventListener("resize",this.widthHandler)
        this.widthHandler();
    },
    unmounted() {
        window.removeEventListener('resize', this.widthHandler);
    },
    methods: {
        widthHandler() {
            this.width = window.innerWidth
        }
    }
}
