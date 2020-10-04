import { mdiGithub, mdiOpenInNew } from "@mdi/js";
import MyPortFolio from './../assets/image/MyWork/MyPortFolio.png'
export default [
     {
          overline: 'Featured Project',
          title: 'My Portfolio v1',
          des: "I nicer look new look of my portfolio based in Brittany's Portfolio design. I created Ground Up using The Technology Called Vue to Create This Portfolio.",
          techs: [
               "vue-cli",
               "vuetify",
               "vue2-transition",
          ],
          links: [
               {
                    link: "https://github.com/MisterJ936/jenuel-portfolio-v2",
                    icon: mdiGithub
               },
               {
                    link: 'https://jenuelganawed.ml',
                    icon: mdiOpenInNew
               }
          ],
          imageLink: "#",
          img: MyPortFolio
     }
];