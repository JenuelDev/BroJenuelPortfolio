import { Html5 } from '@vicons/fa';
import { DesignIdeas16Regular, Javascript16Filled } from '@vicons/fluent';
import { codeigniter, figma, html5, laravel, nodejs, nuxt, rails, sass, tailwind, typeScript, vue, windicss } from '../../assets/SVG_ICONS';
import { Php, Gem } from '@vicons/fa';

export const skillList = [];

export const mySkills = [
    {
        icon: Javascript16Filled,
        tech: 'JavaScript',
        des: 'It’s my main language and I know most of it. I focus on building single-page apps with attention to code quality and best practices.',
        yearStarted: 2017,
        tools: [
            {
                icon: vue,
                text: 'Vue',
                des: `Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. <a href="https://vuejs.org/" target="_blank" alt="Go To VueJS">Go To VueJS</a>`,
            },
            {
                icon: nuxt,
                text: 'Nuxt JS',
                des: `Build your next Vue.js application with confidence using NuxtJS. An open source framework making web development simple and powerful. <a href="https://nuxtjs.org/" target="_blank" alt="go to Nuxtjs">Go To NuxtJS</a>`,
            },
            {
                icon: nodejs,
                text: 'NodeJs',
                des: `Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.`,
            },
            {
                icon: typeScript,
                text: 'TypeScript',
                des: `Its actually like javascript but focuses more on types, this was created to be useful on IDEs like VS Code, and also help lower type errors in the future, specially as the project grows. <a href="https://www.typescriptlang.org/">To Know More Click Here</a>`,
            },
        ],
    },
    {
        icon: Html5,
        tech: 'HTML/CSS',
        des: 'I write semantic markup with accessibility in mind. I keep my CSS manageable and also slowly following BEM conventions/rules.',
        yearStarted: 2016,
        tools: [
            {
                icon: tailwind,
                text: 'tailwindcss',
                des: `A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.`,
            },
            {
                icon: windicss,
                svg: true,
                text: 'windicss',
                des: `If you are already familiar with Tailwind CSS, think about Windi CSS as an on-demand alternative to Tailwind, which provides faster load times, fully compatible with Tailwind v2.0 and with a bunch of additional cool features.`,
            },
            {
                icon: sass,
                text: 'SASS',
                des: `CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.`,
            },
            {
                icon: html5,
                text: 'html5',
                des: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
            },
        ],
    },
    {
        icon: Php,
        tech: 'PHP',
        des: 'Technology I used for Backend Development. PHP is the first ever language I learned for building backend functionalities. After that I started focusing on using PHP frameworks to build faster server-side rendering websites and API calls.',
        yearStarted: 2017,
        tools: [
            {
                icon: codeigniter,
                teny: true,
                text: 'CodeIgniter',
                des: 'CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications.',
            },
            {
                icon: laravel,
                teny: true,
                text: 'laravel/Lumen',
                des: "<a href='https://laravel.com/' target='_blank' alt='Go to Laravel'>Laravel</a> is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony. Laravel <a href='https://lumen.laravel.com/' target='_blank' alt='Go to lumen'>Lumen</a> is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax.",
            },
        ],
    },
    {
        icon: Gem,
        tech: 'Rails',
        des: 'Ruby on Rails is a ruby framework for Web Development that also followed the MVC structure like Laravel and any other frameworks. I Just Started learning Ruby, and I only know little of it.',
        yearStarted: 2019,
        tools: [
            {
                icon: rails,
                text: 'Ruby on Rails',
                des: 'Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.',
            },
        ],
    },
    {
        icon: DesignIdeas16Regular,
        tech: 'UI Design',
        des: 'As a developer that also works with frontend development. I started to learn and gain experience for UX designing because everything I built, I want it to be User Friendly. Figma is really a great tool for creating designs, and is what I use.',
        yearStarted: 2021,
        tools: [
            {
                icon: figma,
                text: `Figma`,
                des: `As a developer that also works with frontend development, I started to learn and gain experience in UX designing because I want it to be User Friendly. Figma is great for creating designs and is what I use.`,
            },
        ],
    },
];
