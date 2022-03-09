<template>
    <div class="theme-dropdown" :class="{ 'open-dropdown': open }" v-click-outside="clickOutSide()">
        <div class="color-selector" @mouseover="open = true"></div>
        <div class="theme-dropdown-content" @mouseover="open = true" @mouseout="open = false">
            <div class="theme-dropdown-content-wrapper">
                <div v-for="theme in themes" class="color-theme-choices" :class="{ active: selectedTheme == theme.name }" :key="theme.name" @click="changeTheme(theme)">
                    <div class="color-selector-pallette">
                        <div class="color-selections" :style="`background-color: ${theme.color1};`"></div>
                        <div class="color-selections" :style="`background-color: ${theme.color2};`"></div>
                        <div class="color-selections" :style="`background-color: ${theme.color3};`"></div>
                    </div>
                    <span>{{ theme.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { themes } from './Themes';
export default {
    setup() {
        let theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'greenLight';
        document.documentElement.setAttribute('theme', theme);

        const open = ref(false);
        const selectedTheme = ref(theme);

        const clickOutSide = () => (el) => {
            if (el) {
                open.value = false;
            } else {
                open.value = true;
            }
        };

        const close = () => {
            open.value = false;
        };

        const changeTheme = (theme) => {
            localStorage.setItem('theme', theme.name);
            selectedTheme.value = theme.name;
            document.documentElement.setAttribute('theme', theme.name);
        };

        return {
            clickOutSide,
            open,
            themes,
            close,
            changeTheme,
            selectedTheme,
        };
    },
};
</script>
<style lang="postcss">
.theme-dropdown {
    @apply cursor-pointer relative;

    .color-selector {
        @apply h-[35px] w-[35px] bg-[var(--primary)] mt-[3px] mr-[20px] mb-0 ml-20px rounded-1 border border-width-3px border-[var(--primary)] duration-100;
    }

    .theme-dropdown-content {
        position: absolute;
        min-width: 180px;
        transform: translateY(30px);
        right: 20px;
        top: 20px;
        padding: 15px 0 0 0;
        opacity: 0;
        z-index: 1;
        transition: 0.1s;
        visibility: hidden;

        .theme-dropdown-content-wrapper {
            padding: 5px 5px;
            display: flex;
            flex-direction: column;
            background-color: var(--lightBackground);
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            gap: 3px;
        }
    }

    .color-theme-choices {
        @apply flex items-center p-10px rounded-md;

        .color-selector-pallette {
            display: flex;
            margin: 0 10px 0 0;
        }

        .color-selections {
            @apply h-[15px] w-[15px];
            border-radius: 100%;
            transition: 0.2s;
        }

        &:hover,
        &.active {
            color: var(--primary);
            background-color: rgba(0, 0, 0, 0.3);

            .color-selections {
                border-radius: 0%;
            }
        }
    }

    &.open-dropdown,
    &:focus {
        .color-selector {
            border: 3px solid #fff;
        }
        .theme-dropdown-content {
            transform: translateY(0px);
            opacity: 1;
            visibility: visible;
        }
    }
}
</style>
