<template>
    <div class="modal-window">
        <div class="modal-window-content">
            <transition name="modal">
                <div class="box" v-show="dialog">
                    <div>
                        <Icon @click="closeDialog()" class="x-close-button" name="x" />
                        <h1>
                            <div class="skill-icon">
                                <Icon :name="dialogContent.icon" :size="30" />
                            </div>
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
    <section class="flex flex-col w-[100%] max-w-[900px] visible opacity-100 z-10 px-10px mt-100px">
        <h1 class="text-size-52px font-600 text-[var(--primary)] tracking-tight mt-10px">Technical skill set</h1>
        <p class="text-size-24px md:px-10px w-[100%] max-w-[770px] leading-relaxed">
            I’m constantly learning and keep up to date with the latest technologies, so I can pick the best tech for the job.
        </p>
        <div>
            <div>
                <div class="flex items-center">
                    <span class="">
                        <i class="bx bxl-javascript"></i>
                    </span>
                    <h3>JavaScript</h3>
                    <span></span>
                </div>
                <div class="text-size-20px leading-normal">It’s my main language and I know it well. I focus on building single-page apps with attention to code quality and best practices.</div>
                <div>
                    <div>VueJs</div>
                    <div>NuxtJs</div>
                    <div>NodeJs</div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { reactive, ref } from '@vue/reactivity';
import Icon from './../../components/Icons';
import { skillList } from './TechnicalSkills';
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