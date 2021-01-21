<template>
    <section class="about-me">
        <v-dialog
            v-model="dialog"
            max-width="300"
        >
            <v-card>
                <v-card-title class="headline" style="display: block">
                    <v-icon color="primary" style="margin-right: 10px;">{{dialogConent.icon}}</v-icon> <span style="color: var(--v-primary-base);">{{dialogConent.title}}</span>
                </v-card-title>
                <v-card-text>{{dialogConent.des}}</v-card-text>
            </v-card>
        </v-dialog>
        <slide-y-up-transition :delay="100">
            <h2 v-show="$store.state.aboutMeShow && !$store.state.modalShow" class="numbered-header">
                <v-icon class="front-icon">{{ aboutIcon }}</v-icon> About Me
            </h2>
        </slide-y-up-transition>
        <div class="about-me-inner">
            <slide-x-left-transition :delay="230">
                <div v-show="$store.state.aboutMeShow && !$store.state.modalShow" class="about-me-text">
                    <div class="about-me-text-info" v-html="$store.state.aboutMe.info"></div>
                    <ul class="skill-list">
                        <li v-for="skill in $store.state.aboutMe.skills" :key="skill.text" @click="openDialog(skill)">
                            <v-icon color="primary" small class="skill-icon">{{
                                skill.icon
                            }}</v-icon>
                            {{ skill.text }}
                        </li>
                    </ul>
                </div>
            </slide-x-left-transition>
            <slide-x-right-transition :delay="430">
                <div v-show="$store.state.aboutMeShow && !$store.state.modalShow" class="about-me-photo">
                    <div class="wrapper">
                        <div
                            class="photo"
                            style="position: relative; overflow: hidden"
                        >
                            <div class="photo-front"></div>
                            <img
                                src="https://i.ibb.co/7kmD65f/profile.jpg"
                                alt=""
                                width="300px"
                                height="300px"
                            />
                        </div>
                    </div>
                </div>
            </slide-x-right-transition>
        </div>
    </section>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>