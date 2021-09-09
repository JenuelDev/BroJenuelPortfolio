<template>
    <div class="modal-window">
        <div class="modal-window-content">
            <transition name="modal">
                <div class="box" v-show="dialog">
                    <div>
                        <Icon @click="closeDialog()" class="x-close-button" name="x" />
                        <h1>
                            <div class="skill-icon text-size-34px" v-html="dialogContent.icon"></div>
                            {{ dialogContent.title }}
                        </h1>
                        <div>
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
    <section class="flex flex-col w-[100%] max-w-[900px] visible opacity-100 z-10 px-10px mt-100px select-none">
        <h1 class="text-size-52px font-600 text-[var(--primary)] tracking-tight mt-10px mb-15px">Technical skill set</h1>
        <p class="text-size-24px md:px-10px w-[100%] max-w-[770px] leading-relaxed">
            I’m constantly learning and keep up to date with the latest technologies, so I can pick the best tech for the job.
        </p>
        <div class="technical-skills-wrapper mt-30px flex flex-wrap gap-10px">
            <div class="flex flex-col justify-between" v-for="mySkill in mySkills" :key="mySkill.tech">
                <div>
                    <div class="flex items-center">
                        <span class="text-[var(--primary)] text-size-30px" v-html="mySkill.icon"></span>
                        <h3 class="ml-7px font-600 text-size-24px">{{ mySkill.tech }}</h3>
                        <span class="technical-skill-year">{{ mySkill.yearStarted }}</span>
                    </div>
                    <div class="text-size-20px leading-normal py-[1rem]">
                        {{ mySkill.des }}
                    </div>
                </div>
                <div class="text-size-14px flex items-center gap-5px">
                    <div class="bg-dark-900 bg-opacity-50 p-5px rounded-md opacity-80 hover:opacity-100 cursor-pointer" v-for="tool in mySkill.tools" :key="tool.text" @click="openDialog(tool)">{{ tool.text }}</div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { reactive, ref } from '@vue/reactivity';
import Icon from './../../components/Icons';
import { skillList, mySkills } from './TechnicalSkills';
export default {
    components: { Icon },
    setup() {
        const dialog = ref(false);
        const dialogContent = reactive({
            title: '',
            des: '',
            icon: '',
        });
        return {
            dialog,
            skillList,
            dialogContent,
            mySkills,
            openDialog(skill) {
                dialogContent.skill = skill.text;
                dialogContent.title = skill.text;
                dialogContent.des = skill.des;
                dialogContent.icon = skill.icon;

                document.getElementById('main-screen-window').style.overflowY = 'hidden';
                dialog.value = !dialog.value;
            },
            closeDialog() {
                document.getElementById('main-screen-window').style.overflowY = 'overlay';
                dialog.value = !dialog.value;
            },
        };
    },
};
</script>
<style lang="postcss">
.technical-skill-year {
    @apply text-size-20px opacity-60;
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
        @apply py-30px;
        flex: 1 1 300px;
    }
}
</style>