<template>
    <div class="modal-window">
        <div
            class="modal-window-content"
            :class="{ show: dialog }"
            @click="dialog = !dialog"
        >
            <div class="box">
                <h1>
                    <Icon
                        class="skill-icon"
                        :name="dialogConent.icon"
                        :size="20"
                    />{{ dialogConent.title }}
                </h1>
                <div>
                    {{ dialogConent.des }}
                </div>
            </div>
        </div>
        <div class="modal-window-bg" :class="{ show: dialog }"></div>
    </div>
    <section v-scrollanimation class="about-me">
        <h2 class="numbered-header">
            <Icon class="front-icon" name="user" :size="30" /> About Me
        </h2>
        <div class="about-me-inner">
            <div class="about-me-text">
                <div class="about-me-text-info" v-html="AboutMe.info"></div>
                <ul class="skill-list">
                    <li
                        v-for="(skill, i) in AboutMe.skills"
                        v-scrollanimation
                        :key="skill.text"
                        @click="openDialog(skill)"
                        :style="'transition-delay: ' + i * 100 + 'ms'"
                    >
                        <Icon
                            class="skill-icon"
                            :name="skill.icon"
                            :size="20"
                        />
                        {{ skill.text }}
                    </li>
                </ul>
            </div>
            <div class="about-me-photo">
                <div class="wrapper">
                    <div
                        class="photo"
                        style="position: relative; overflow: hidden"
                    >
                        <div class="photo-front"></div>
                        <img
                            src="https://i.ibb.co/kmCTWf7/profile.jpg"
                            alt="Jenuel Ganawed - Profile Picture"
                            width="300px"
                            height="300px"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script src="./script.js"></script>