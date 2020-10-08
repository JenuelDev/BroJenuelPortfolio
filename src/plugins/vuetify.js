import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
     theme: {
          options: {
               customProperties: true
          },
          themes: {
               dark: {
                    background: '#0a192f',
                    lightBackground: '#172a45',
                    primary: '#64ffda',
                    liteprimary: '#172a45',
                    lightestPrimary: '#303C55',
                    slate: '#8892b0',
                    lightSlate: '#a8b2d1',
                    lightestSlate: '#ccd6f6',
                    white: '#e6f1ff',
                    secondary: '#424242',
                    accent: '#82B1FF',
                    error: '#FF5252',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FFC107',
                    shadow: '#000000',
               }
          },
          dark: true
     }
});
