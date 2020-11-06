import { mdiGithub, mdiOpenInNew } from "@mdi/js";
import MyPortFolio from '@/assets/image/MyWork/MyPortFolio.png'

export default {
    workPage: {
        title: "My Work",
        des: "Showcasing complete functional demonstrates what I can bring to your project. I built these projects from the ground up to show my skills in front-end, back-end, and database development. Most of these projects are full-stack web projects, and you can demo them easily.",
        works: [
            {
                overline: 'Featured Project',
                title: 'My Portfolio v2',
                des: "It's is a new cool look for my portfolio based on Brittany's design. I created Ground Up using the Technology Called Vue to Create This Portfolio.",
                techs: [
                    "vue-cli",
                    "vuetify",
                    "vue2-transition",
                ],
                links: [
                    {
                        link: "https://github.com/BroJenuel/jenuel-portfolio-v2",
                        icon: mdiGithub
                    },
                    {
                        link: 'https://jenuelganawed.ml',
                        icon: mdiOpenInNew
                    }
                ],
                imageLink: "https://jenuelganawed.ml",
                img: MyPortFolio
            }
        ]
    }
}