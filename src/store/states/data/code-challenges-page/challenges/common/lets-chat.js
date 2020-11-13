import { mdiChatProcessingOutline, mdiGithub, mdiLanguageHtml5, mdiLightningBoltOutline, mdiNodejs, mdiOpenInNew } from '@mdi/js'
export default {
    title: "Lets Chat",
    des: "<p>Lets Chat is a web app that I made where a user can chat with another person or more than one person, depending on the room selected.</p>",
    headIcon: mdiChatProcessingOutline,
    links: [
        {
            link: "https://github.com/BroJenuel-Youtube/lets-chat",
            icon: mdiGithub
        },
        {
            link: "https://lets-chat-app-by-jenuel.herokuapp.com/",
            icon: mdiOpenInNew
        }
    ],
    techs: [
        {
            name: "html&css",
            icon: mdiLanguageHtml5
        },
        {
            name: "express",
            icon: mdiNodejs
        },
        {
            name: "socket.io",
            icon: mdiLightningBoltOutline
        }
    ]
}