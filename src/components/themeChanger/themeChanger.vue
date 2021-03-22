<template>
    <div class="theme-dropdown">
        <div class="color-selector"></div>
        <div class="theme-dropdown-content">
            <div v-for="theme in themes" class="color-theme-choices" :key="theme.name" @click="changeTheme(theme)">
                <div class="color-selections" :style="`padding: 10px; background-color: ${theme.color};`"></div>
                <span>{{theme.name}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => {
        return {
            themes: [
                {
                    name: 'greenLight',
                    color: '#64ffda'
                },
                {
                    name: 'yellowOrange',
                    color: '#f0a500'
                }
            ]
        }
    },
    methods: {
        changeTheme(theme) {
            localStorage.setItem('theme',theme.name)
            document.documentElement.setAttribute('theme',theme.name)
        }
    },
    mounted() {
        // check for active theme
        let htmlElement = document.documentElement;
        let theme = localStorage.getItem("theme");

        if (theme === 'yellowOrange') {
            htmlElement.setAttribute('theme', 'yellowOrange')
        } else {
            htmlElement.setAttribute('theme', 'greenLight');
        }
    }
}
</script>
<style lang="scss">
    .theme-dropdown {
        display: inline-block;
        cursor: pointer;

        .color-selector {
            padding: 17px;
            background-color: var(--primary);
            margin: 3px 20px 0px 20px;
            border-radius: 100%;
            border: 3px solid var(--primary);
            transition: 0.3s;
        }

        .theme-dropdown-content {
            visibility: hidden;
            position: absolute;
            background-color: var(--lightBackground);
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            transform: translateY(30px);
            right: 20px;
            padding: 12px 16px;
            opacity: 0;
            z-index: 1;
            transition: 0.3s;
            display: flex;
            flex-direction: column;
            gap: 20px;
            border-radius: 8px;
        }

        .color-theme-choices {
            display: flex;
            gap: 10px;

            .color-selections {
                border-radius: 100%;
                transition: 0.2s;
            }

            &:hover {
                color: var(--primary);

                .color-selections {
                    border-radius: 0%;
                }
            }
        }

        &:hover, &:focus {
            .color-selector {
                border: 3px solid #FFF;
            }
            .theme-dropdown-content {
                transform: translateY(0px);
                opacity: 1;
                visibility: visible;
            }
        }
    }
</style>