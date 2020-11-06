import { mdiAngularjs, mdiFire, mdiLanguageHtml5, mdiLanguageJavascript, mdiLanguageRubyOnRails, mdiLaravel, mdiVuejs } from '@mdi/js'

const info =
    "<p>Hi! I'm Jenuel, and I am a Web Developer.</p>" +

    "<p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to Join or Work in any opportunity that will help me grow in this Industry. I welcome challenging projects and enjoy working with all sorts of personalities..</p>" +

    "<p>Shortly after graduating from <a href='http://kcp.edu.ph/' target='_blank'>Kings College of The Philippines</a>, I joined the team of software developers at a company where I work on a wide variety of fascinating technologies and helpful projects..</p>" +

    "<p>Here are a few technologies I've been working with recently:</p>";

const skillList = [
    {
        icon: mdiLanguageJavascript,
        text: 'JavaScript (ES6+)'
    },
    {
        icon: mdiLanguageHtml5,
        text: 'HTML & (S)CSS'
    },
    {
        icon: mdiVuejs,
        text: "Vue"
    },
    {
        icon: mdiLaravel,
        text: 'laravel/Lumen'
    },
    {
        icon: mdiAngularjs,
        text: 'AngularS'
    },
    {
        icon: mdiLanguageRubyOnRails,
        text: 'Ruby on Rails'
    },
    {
        icon: mdiFire,
        text: 'CodeIgniter'
    }
];

export default {
    aboutMe: {
        info: info,
        skills: skillList
    }
}