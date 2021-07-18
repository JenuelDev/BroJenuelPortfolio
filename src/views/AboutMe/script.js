import Icon from "./../../components/Icons";
import AboutMe from "./../../constant/about-me";
import Card from "./../../components/Card/Card.vue";
export default {
    components: {
        Icon,
        Card
    },
    setup() {
        const services = [
            {
                icon: "gridLayout",
                title: "Front-End Development",
                description:
                    "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data."
            },
            {
                icon: "database",
                title: "Back-End Development",
                description:
                    "Developing the server side responsible for storing and organizing data of an application and everything that communicates between the database and the browser."
            },
            {
                icon: "toggle",
                title: "Website Management",
                description:
                    "Managing all of the activities included in the process of posting and maintaining a website on the World Wide Web. This includes Website optimization and SEO friendly."
            }
        ]

        return {
            services
        }
    },
    data: () => {
        return {
            AboutMe: AboutMe,
            dialog: false,
            dialogContent: {
                title: "",
                des: ""
            }
        };
    },
    methods: {
        openDialog(skill) {
            this.dialogContent = {
                title: skill.text,
                des: skill.des,
                icon: skill.icon
            };

            document.getElementById("main-screen-window").style.overflowY =
                "hidden";
            this.dialog = !this.dialog;
        },
        closeDialog() {
            document.getElementById("main-screen-window").style.overflowY =
                "overlay";
            this.dialog = !this.dialog;
        }
    }
};
