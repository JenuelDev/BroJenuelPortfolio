import { ExternalLinkSquareAlt, Github, Html5, NodeJs, Vuejs } from '@vicons/fa';
import letsChat from './common/lets-chat';
import portfolioDesign from './common/portfolio-design';
import speechToText from './common/speech-to-text';
import textToSpeech from './common/text-to-speech';
import webCalculator from './common/web-calculator';
import worldTimeReact from './common/world-time-react';

export default [
    {
        title: 'Random Name Selector',
        des: '<p>This is a simple name random name/item selector.</p>',
        headIcon: 'chat',
        links: [
            {
                link: 'https://github.com/BroJenuel/random-name-select',
                icon: Github,
                tooltip: 'Open In Github',
            },
            {
                link: 'https://random-select.brojenuel.com',
                icon: ExternalLinkSquareAlt,
                tooltip: 'Open Link',
            },
        ],
        techs: [
            {
                name: 'html&css',
                icon: Html5,
            },
            {
                name: 'express',
                icon: NodeJs,
            },
            {
                name: 'VueJS',
                icon: Vuejs,
            },
        ],
    },
    letsChat,
    worldTimeReact,
    portfolioDesign,
    webCalculator,
    speechToText,
    textToSpeech,
];
