<template>
    <div class="modal-window">
        <div
            class="modal-window-content"
        >
            <transition name="modal">
            <div class="box" v-show="dialog">
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
            </transition>
        </div>
        <transition name="modalBg">
            <div v-show="dialog" class="modal-window-bg" @click="dialog = !dialog"></div>
        </transition>
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
                            src="https://i.ibb.co/6FNxFDB/Untitled-1.png"
                            alt="Jenuel Ganawed - Profile Picture"
                            width="300px"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="what-i-offer-content">
            <div v-scrollview class="services-title">
                <h2><Icon class="service-title-icon" name="qrCode" /> What I can Offer/Service</h2>
                <p>Your complete website solution</p>
            </div>
            <div class="services-wrapper" >
                <div class="services-item" v-scrollview  v-for="(service,i) in services" :key="service.title" :style="`transition-delay: ${i*200}ms;`">
                    <Card
                        :index="1"
                        :icon="service.icon"
                        :title="service.title"
                        :description="service.description"
                    />
                </div>
            </div>
    </div>
</template>
<script src="./script.js"></script>