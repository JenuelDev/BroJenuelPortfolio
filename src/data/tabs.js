import { mdiBrain, mdiEmailEditOutline, mdiFaceOutline, mdiFileDocumentMultipleOutline, mdiHeadHeartOutline } from '@mdi/js'

export default [
    {
        icon: mdiFaceOutline,
        name: 'About Me',
        to: '/about'
    },
    {
        icon: mdiHeadHeartOutline,
        name: "Experience",
        to: '/experience'
    },
    {
        icon: mdiFileDocumentMultipleOutline,
        name: "Work",
        to: '/work'
    },
    {
        icon: mdiBrain,
        name: "Code Challenge",
        to: '/codechallenge'
    },
    {
        icon: mdiEmailEditOutline,
        name: "Contact Me",
        to: '/contact'
    }
];