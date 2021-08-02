const info =
    "<p>Hi! I'm Jenuel Ganawed, and I am a <b>Software Developer</b>.</p>" +

    "<p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.<br><br>I'd Love to <u><i><b>Join/Work</b></i></u> in a company/projects and <u><i><b>Help solve their problems or create ideas</b></i></u>, that will also help me grow in knowledge and enhance my skills. I welcome challenging projects and enjoy working with all sorts of personalities.</p>" +

    "<p>Here are a few technologies I've been working with recently:</p>";

const skillList = [
    {
        icon: 'code',
        text: 'PHP',
        des: "<a href='https://www.php.net/' target='_blank' alt='Go to PHP Website'>PHP:Hypertext Processor</a> is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world."
    },
    {
        icon: 'javascript',
        text: 'JavaScript',
        des: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
    },
    {
        icon: 'html',
        text: 'HTML & (S)CSS',
        des: "HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices."
    },
    {
        icon: 'vue',
        text: "Vue",
        des: `Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. <a href="https://vuejs.org/" target="_blank" alt="Go To VueJS">Go To VueJS</a>`
    },
    {
        icon: 'nuxt',
        text: 'Nuxt JS',
        des: `Build your next Vue.js application with confidence using NuxtJS. An open source framework making web development simple and powerful. <a href="https://nuxtjs.org/" target="_blank" alt="go to Nuxtjs">Go To NuxtJS</a>`
    },
    {
        icon: 'laravel',
        text: 'laravel/Lumen',
        des: "<a href='https://laravel.com/' target='_blank' alt='Go to Laravel'>Laravel</a> is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony. Laravel <a href='https://lumen.laravel.com/' target='_blank' alt='Go to lumen'>Lumen</a> is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax."
    },
    // {
    //     icon: 'angular',
    //     text: 'AngularS',
    //     des: "AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications."
    // },
    {
        icon: 'ruby',
        text: 'Ruby on Rails',
        des: "Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages."
    },
    {
        icon: 'fire',
        text: 'CodeIgniter',
        des: "CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications."
    },
    {
        icon: 'tablet',
        text: 'Progressive Web Apps (PWA)',
        des: "A progressive web application is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript. It is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices."
    },
    {
        icon: 'tailwind',
        text: 'Tailwind CSS',
        des: 'Tailwind utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. <a href="https://tailwindcss.com/" target="_blank" alt="go to tailwind website">Check It Here</a>'
    },
    {
        icon: 'react',
        text: 'React JS',
        des: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.'
    }
];

export default {
    info: info,
    skills: skillList
}