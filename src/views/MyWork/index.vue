<template>
    <section v-scrollanimation class="my-work" style="margin-bottom: 80px;">
            <h2
                class="numbered-header"
                style="margin: 10px 0px -10px"
            >
                <Icon class="front-icon" name="code" :size="25"/> {{works.title}}
            </h2>
            <p class="header-des" >{{works.des}}</p>
            <div  style="margin-top: 20px">
                <template v-for="(work, i) in works.works" :key="i">
                        <div v-scrollanimation class="work-info" :style="'transition-delay:'+(i*200)+'ms'">
                            <div
                                class="work-info-details"
                                :class="
                                    i % 2 == 0
                                        ? 'left-content'
                                        : 'right-content'
                                "
                            >
                                <p class="info-overline">{{ work.overline }}</p>
                                <h3 class="info-title">{{ work.title }}</h3>
                                <div class="info-des-container">
                                    <p class="info-text" v-html="work.des"></p>
                                </div>
                                <ul
                                    class="info-tech-list"
                                    :class="
                                        i % 2 == 0 ? '' : 'work-links-right'
                                    "
                                >
                                    <li v-for="tech in work.techs" :key="tech">
                                        {{ tech }}
                                    </li>
                                </ul>
                                <div
                                    class="work-links"
                                    :class="
                                        i % 2 == 0 ? '' : 'work-links-right'
                                    "
                                >
                                    <div
                                        v-for="link in work.links"
                                        class="work-links-toggle"
                                        :key="link.name"
                                        aria-label="GitHUB Link"
                                        @click="openSite(link.link)"
                                    >
                                        <Icon class="highlight-hover" :name="link.icon" :size="25"/>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="work-info-image"
                                :class="
                                    i % 2 == 0 ? 'right-image' : 'left-image'
                                "
                            >
                                <div class="work-info-image-link" @click="openSite(work.imageLink)">
                                    <div class="image-wrapping">
                                        <div class="front-filter"></div>
                                        <img loading='lazy' :src="work.img" alt="work image preview" />
                                    </div>
                                </div>
                            </div>
                        </div>
                </template>
            </div>
    </section>
    <CodeChallenge />
</template>
<script>
import CodeChallenge from './../CodeChallenge/index.vue'
import Icon from './../../components/Icons'
import Work from './../../constant/work-page'
export default {
    name: "Work",
    components: {Icon, CodeChallenge},
    data: () => {
        return {
            works: Work
        }
    },
    mounted() {
        this.$store.state.workShow = true
    },
    computed: {
        myWorks() {
            return this.$store.state.workPage.works
        }
    },
    methods: {
        openSite(site) {
            window.open(site,'_blank')
        }
    }
}
</script>