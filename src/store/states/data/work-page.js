import { mdiGithub, mdiOpenInNew } from "@mdi/js";

export default {
    workPage: {
        title: "My Work",
        des: "Showcasing complete functional demonstrates what I can bring to your project. I built these projects from the ground up to show my skills in front-end, back-end, and database development. Most of these projects are full-stack web projects, and you can demo them easily.",
        works: [
            {
                overline: 'Documentation Project',
                title: 'Laravel MongoDB Documentation',
                des: 'Documentation about laravel with mongodb, this package adds functionalities to the Eloquent model and Query builder for MongoDB, using the original Laravel API. This library extends the original Laravel classes, so it uses exactly the same methods.',
                techs: [
                    "vuepress",
                    "vue"
                ],
                links: [
                    {
                        link: "https://github.com/BroJenuel-Youtube/laravel-mongodb",
                        icon: mdiGithub
                    },
                    {
                        link: 'https://laravel-mongodb.netlify.app/',
                        icon: mdiOpenInNew
                    }
                ],
                imageLink: "https://laravel-mongodb.netlify.app/",
                img: 'https://i.ibb.co/NWMHjGx/laravelmongodb.png'
            },
            {
                overline: 'Portfolio Project',
                title: 'Portfolio',
                des: "It's is a new cool look for my portfolio based on Brittany's design. I created Ground Up using the Technology Called Vue to Create This Portfolio.",
                techs: [
                    "vue",
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
                img: 'https://i.ibb.co/yWW9Zy3/My-Port-Folio.png'
            },
            {
                overline: 'Search Engine Project',
                title: `Get GIF's`,
                des: "With this website, you can search the wide internet to get GIFs that you can download for your content.",
                techs: [
                    "vue",
                    "API"
                ],
                links: [
                    {
                        link: "https://github.com/BroJenuel-Youtube/get-gifs",
                        icon: mdiGithub
                    },
                    {
                        link: 'https://jenuelganawed.ml',
                        icon: mdiOpenInNew
                    }
                ],
                imageLink: "https://www.getgifs.ml/",
                img: 'https://i.ibb.co/rMqXVJP/getgifs.png'
            },
        ]
    }
}