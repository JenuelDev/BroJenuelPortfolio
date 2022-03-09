import { Bolt, ExternalLinkSquareAlt, Github, Html5, NodeJs } from "@vicons/fa"

export default {
    title: "Lets Chat",
    des: "<p>Lets Chat is a web app that I made where a user can chat with another person or more than one person, depending on the room selected.</p>",
    headIcon: 'chat',
    links: [
        {
            link: "https://github.com/BroJenuel-Youtube/lets-chat",
            icon: Github,
            tooltip: 'Open In Github'
        },
        {
            link: "https://lets-chat-app-by-jenuel.herokuapp.com/",
            icon: ExternalLinkSquareAlt,
            tooltip: 'Open Link'
        }
    ],
    techs: [
        {
            name: "html&css",
            icon: Html5
        },
        {
            name: "express",
            icon: NodeJs
        },
        {
            name: "socket.io",
            icon: Bolt
        }
    ]
}