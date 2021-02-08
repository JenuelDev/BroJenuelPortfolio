<template>
    <section v-scrollanimation class="my-work">
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
                                    <a
                                        v-for="link in work.links"
                                        :key="link.name"
                                        :href="link.link"
                                        target="_blank"
                                        aria-label="GitHUB Link"
                                        rel="noreferrer"
                                        ><Icon :name="link.icon" :size="25"/></a
                                    >
                                </div>
                            </div>
                            <div
                                class="work-info-image"
                                :class="
                                    i % 2 == 0 ? 'right-image' : 'left-image'
                                "
                            >
                                <a :href="work.imageLink" target="_blank" rel="noopener">
                                    <div class="image-wrapping">
                                        <div class="front-filter"></div>
                                        <img loading='lazy' :src="work.img" alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>
                </template>
            </div>
    </section>
</template>
<script>
import Icon from './../../components/Icons'
import Work from './../../constant/work-page'
export default {
    name: "Work",
    components: {Icon},
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
    }
}
</script>