<template>
    <section class="my-work">
        <div>
            <slide-y-up-transition :delay="100">
                <h2
                    v-show="$store.state.experienceShow && !$store.state.modalShow"
                    class="numbered-header"
                    style="margin: 10px 0px -10px"
                >
                    <v-icon class="front-icon">{{ workIcon }}</v-icon> Where
                    I've Worked
                </h2>
            </slide-y-up-transition>
            <slide-y-up-transition :delay="100">
                <p v-show="$store.state.experienceShow && !$store.state.modalShow">{{$store.state.experiencePage.des}}</p>
            </slide-y-up-transition>
            <slide-x-left-transition :delay="300">
                <div v-show="$store.state.experienceShow && !$store.state.modalShow">
                    <v-tabs v-if="showTab" :class="vertical ? 'verticaltabs' : 'horizontaltabs'" :height="vertical ? '120px' : ''" :vertical="vertical">
                        <template v-for="work in $store.state.experiencePage.experiences">
                            <v-tab :key="work.company">
                                {{ work.tab }}
                            </v-tab>
                            <v-tab-item class="tab-items" :key="work.company">
                                <div style="min-height: 200px">
                                    <h3>
                                        {{ work.position }}
                                        <span class="highlight cursor-pointer" @click="openNewTab(work.url)"
                                            >@ {{ work.company }}</span
                                        >
                                    </h3>
                                    <p class="date">
                                        {{ work.workStart }} -
                                        <span
                                            :class="
                                                work.present ? 'highlight' : ''
                                            "
                                            >{{ work.workUntil }}</span
                                        >
                                    </p>
                                    <div class="list">
                                        <ul>
                                            <li
                                                v-for="d in work.des"
                                                :key="d"
                                                v-html="d"
                                            ></li>
                                        </ul>
                                    </div>
                                </div>
                            </v-tab-item>
                        </template>
                    </v-tabs>
                    <div v-else>
                        <div
                            v-for="work in $store.state.experiencePage.experiences"
                            :key="work.company"
                            class="small-size"
                        >
                            <div>
                                <h3>
                                    {{ work.position }}
                                    <span class="highlight"
                                        >@ {{ work.company }}</span
                                    >
                                </h3>
                                <p class="date">
                                    {{ work.workStart }} -
                                    <span>{{ work.workUntil }}</span>
                                </p>
                                <div class="list">
                                    <ul>
                                        <li
                                            v-for="d in work.des"
                                            :key="d"
                                            v-html="d"
                                        ></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </slide-x-left-transition>
        </div>
    </section>
</template>
<script>
import { mdiHeadHeartOutline } from '@mdi/js'
import { SlideYUpTransition, SlideXLeftTransition } from 'vue2-transitions'
export default {
    components: {
        SlideYUpTransition,
        SlideXLeftTransition,
    },
    data: () => {
        return {
            workIcon: mdiHeadHeartOutline,
            vertical: true,
            showTab: true,
        }
    },
    mounted() {
        this.$store.state.experienceShow = true
        this.setTabs()
        window.onresize = () => {
            this.setTabs()
        }
    },
    methods: {
        setTabs() {
            if (window.innerWidth < 375) {
                this.showTab = false
            } else if (window.innerWidth < 502) {
                this.vertical = false
                this.showTab = true
            } else {
                this.vertical = true
                this.showTab = true
            }
        },
        openNewTab(url) {
            window.open(url,'_blank')
        }
    }
}
</script>
<style lang="scss">
.my-work {
    z-index: 5;
    max-width: 1000px;
    visibility: visible;
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
        transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
    display: flex;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    flex-direction: column;
    max-width: 1000px;
    margin: 0px auto;

    .small-size {
        margin-bottom: 30px;
    }
    .tab-items,
    .small-size {
        padding: 0px 20px;
        h3 {
            font-size: 22px;
        }
        ul {
            font-size: var(--fz-lg);
            list-style: none;
            font-weight: 200;
            li {
                
                &::before {
                    content: '▹';
                    position: absolute;
                    left: 20px;
                    color: var(--v-primary-base);
                }
            }
        }
        .date {
            margin: 0px 0px 20px 0px;
            opacity: 0.8;
        }
        .highlight {
            font-weight: 800;
            color: var(--v-primary-base);
        }
        .list {
            font-family: var(--font-sans) !important;
            opacity: 0.7;
        }
    }
    .v-tab{
        text-transform: none !important;
        font-family: var(--font-mono) !important;
        font-weight: 200 !important;
        letter-spacing: 0em;
        color: var(--v-lightSlate-base);
    }
    .v-tab--active {
        color: var(--v-primary-base);
    }
    .v-tabs--vertical {
        .v-tab{
            border-left: 2px solid var(--v-lightBackground-base) !important;
            justify-content: left !important;
        }
    }
    .horizontaltabs {
        .v-tab{
            border-bottom: 2px solid var(--v-lightBackground-base) !important;
        }
        .v-tabs-bar {
            margin-bottom: 30px !important;
        }
    }
    
    
}
</style>