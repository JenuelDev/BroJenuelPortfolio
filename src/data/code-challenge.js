import { mdiCircle, mdiDownload, mdiGithub, mdiLanguageCss3, mdiLanguageHtml5, mdiLanguageJavascript, mdiOpenInNew, mdiVuejs } from '@mdi/js'

export default [
     {
          title: "World Time Using React Native",
          des: "<p>World Time is a simple App that I made using React Native. I was able to fetch data from World Time API and Used it in this app. I was able to build the app as an apk and you can check it by clicking the download button.</p>",
          links: [
               {
                    link: "https://github.com/BroJenuel/MyPortFolio/tree/master/appDev/world_time",
                    icon: mdiGithub
               },
               {
                    link: "https://drive.google.com/file/d/1kc7EE7naz9Rpvq8kyJhJ4F_eB96tnEi5/view",
                    icon: mdiDownload
               }
          ],
          techs: [
               {
                    icon: mdiCircle,
                    name: "react-native"
               },
               {
                    icon: mdiLanguageJavascript,
                    name: "javaScript"
               }
          ]
     },
     {
          title: "Web Calculator",
          des: "<p>Calculator is one fascinating computer that is created during the early days. People Have been using it for computing a lot of stuff. Its been a useful tool for eveyone specially students and workers. So I created my simple calculator using Vue.</p>",
          links: [
               {
                    link: "https://github.com/BroJenuel/MyPortFolio/tree/master/calculator-vue",
                    icon: mdiGithub
               },
               {
                    link: "https://jenuelganawed-calculator-vue.netlify.app/",
                    icon: mdiOpenInNew
               }
          ],
          techs: [
               {
                    name: "vue.js",
                    icon: mdiVuejs
               }
          ]
     },
     {
          title: "Speech To Text",
          des: "<p>This is a simple speech to text using HTML, CSS, and JS. I was fascinated with what javascrip can do so I made a simple, project to try and convert speech to text. And JavaScript has a library called Speech Recognition.</p>",
          links: [
               {
                    link: "https://github.com/BroJenuel/MyPortFolio/tree/master/speach-to-text",
                    icon: mdiGithub
               },
               {
                    link: "https://jenuelganawed-speechtotext.netlify.app/",
                    icon: mdiOpenInNew
               }
          ],
          techs: [
               {
                    name: "html",
                    icon: mdiLanguageHtml5
               },
               {
                    name: "javaScript",
                    icon: mdiLanguageJavascript
               },
               {
                    name: "css",
                    icon: mdiLanguageCss3
               }
          ]
     },
     {
          title: "Text To Speech",
          des: "<p>This is a simple Text to Speech using HTML, CSS, and JS. I was fascinated with what javascrip can do so I made a simple, project to try and convert speech to text. And JavaScript has a library called Speech Recognition.</p>",
          links: [
               {
                    link: "https://github.com/BroJenuel/MyPortFolio/tree/master/text-to-speach",
                    icon: mdiGithub
               },
               {
                    link: "https://jenuelganawed-texttospeach.netlify.app/",
                    icon: mdiOpenInNew
               }
          ],
          techs: [
               {
                    name: "html",
                    icon: mdiLanguageHtml5
               },
               {
                    name: "javaScript",
                    icon: mdiLanguageJavascript
               },
               {
                    name: "css",
                    icon: mdiLanguageCss3
               }
          ]
     }
];