<script setup>
import { reactive, ref } from '@vue/reactivity';
import { Icon } from '@vicons/utils';
import { skillList, mySkills } from './TechnicalSkills';
import RenderIcon from './../../components/Icon.vue';
const dialog = ref(false);
const dialogContent = reactive({
    title: '',
    des: '',
    icon: '',
});

const openDialog = (skill) => {
    dialogContent.skill = skill.text;
    dialogContent.title = skill.text;
    dialogContent.des = skill.des;
    dialogContent.icon = skill.icon;

    document.getElementById('main-screen-window').style.overflowY = 'hidden';
    dialog.value = !dialog.value;
};
const closeDialog = () => {
    document.getElementById('main-screen-window').style.overflowY = 'overlay';
    dialog.value = !dialog.value;
};
</script>

<template>
    <div class="modal-window">
        <div class="modal-window-content">
            <transition name="modal">
                <div class="box" v-show="dialog">
                    <div>
                        <Icon @click="closeDialog()" class="x-close-button" name="x" />
                        <h1 class="flex flex-col items-center">
                            <div class="skill-icon w-50px" v-html="dialogContent.icon"></div>
                            <div>
                                {{ dialogContent.title }}
                            </div>
                        </h1>
                        <div class="text-center">
                            <p v-html="dialogContent.des"></p>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <transition name="modalBg">
            <div v-show="dialog" class="modal-window-bg" @click="closeDialog()"></div>
        </transition>
    </div>
    <ul v-show="false">
        <li v-for="(skill, i) in skillList" v-scrollanimation :key="skill.text" @click="openDialog(skill)" :style="'transition-delay: ' + i * 50 + 'ms'">
            <div>
                <Icon class="skill-icon" :name="skill.icon" :size="20" />
                {{ skill.text }}
            </div>
        </li>
    </ul>
    <section class="flex flex-col w-[100%] max-w-[900px] visible opacity-100 z-10 px-10px mx-auto">
        <h1 class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mt-10px mb-15px md:px-10px">Technical skill set</h1>
        <p class="md:text-size-24px text-size-20px md:px-10px w-[100%] max-w-[770px] md:leading-relaxed leading-relaxed">
            I am continuously learning to keep up with the latest technologies and be able to pick the best tech for the job.
        </p>
        <div class="technical-skills-wrapper mt-30px flex flex-wrap gap-0px sm:gap-40px">
            <div class="flex flex-col justify-between" v-for="mySkill in mySkills" :key="mySkill.tech">
                <div>
                    <div class="flex items-center">
                        <RenderIcon :icon="mySkill.icon" :size="30" />
                        <h3 class="ml-7px font-600 md:text-size-24px text-size-20px">{{ mySkill.tech }}</h3>
                        <span class="technical-skill-year">{{ mySkill.yearStarted }}</span>
                    </div>
                    <div class="md:text-size-20px text-size-18px md:leading-normal leading-normal py-[1rem]">
                        {{ mySkill.des }}
                    </div>
                </div>
                <div class="text-size-14px flex items-center gap-5px">
                    <div
                        class="hover:bg-dark-900 p-5px rounded-md cursor-pointer flex items-center gap-5px text-size-20px max-w-40px overflow-hidden hover:max-w-200px duration-300 truncate"
                        v-for="tool in mySkill.tools"
                        :key="tool.text"
                        @click="openDialog(tool)"
                    >
                        <div class="skill-icon min-w-30px" v-html="tool.icon"></div>
                        <span class="ml-10px">{{ tool.text }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="postcss">
.technical-skill-year {
    @apply md:text-size-20px text-size-18px opacity-60;
    &::before {
        content: '\2022';
        color: #a0aec0;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        font-weight: 400;
    }
}

.technical-skills-wrapper {
    & > * {
        @apply py-15px;
        flex: 1 1 300px;
    }
}

.modal-enter-active,
.modal-leave-active {
    transition: 0.3s;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.8) translateY(100px) rotate(0.5turn);
}

.modalBg-enter-active,
.modalBg-leave-active {
    transition: 0.3s;
}

.modalBg-enter-from,
.modalBg-leave-to {
    opacity: 0;
    transform: scale(1) translateY(0px) rotate(0turn);
}

// modal
.modal-window {
    .skill-icon {
        min-width: 30px;
    }
    .modal-window-bg {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 80;
    }
    .modal-window-content {
        position: fixed;
        z-index: 90;
        top: 0;
        left: 0;
        font-size: 1.1rem;

        .box {
            position: fixed;
            max-width: 290px;
            background-color: var(--background);
            padding: 20px;
            border-radius: 10px;
            left: 50%;
            margin-left: -125px;
            margin-top: 20vh;

            .x-close-button {
                float: right;
                cursor: pointer;
                transition: 0.3s;

                &:hover {
                    color: var(--primary);
                }
            }

            h1 {
                margin: 10px 0;
                align-items: center;
                gap: 10px;
                color: var(--primary);
                font-size: 1.3rem;
            }
        }
    }
}

@media screen and (max-width: 553px) {
    .modal-window {
        .modal-window-content {
            .box {
                position: fixed;
                max-width: 250px;
                background-color: var(--background);
                padding: 20px;
                left: 45%;
                border-radius: 10px;
                margin-left: -125px;
                margin-top: 20vh;
            }
        }
    }
}
</style>
