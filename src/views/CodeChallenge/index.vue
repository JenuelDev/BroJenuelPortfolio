<template>
    <section v-scrollanimation class="code-challenge">
        <h2 class="numbered-header" style="margin: 10px 0px -10px">
            <Icon class="front-icon" name="folders" :size="30" /> Work Challenges
        </h2>
        <p class="header-des">
            {{ CodeChallenge.des }}
        </p>
        <div class="code-grid">
            <template
                v-for="(code, index) in CodeChallenge.challenges"
                :key="index"
            >
                <div v-scrollanimation :style="'transition-delay:'+(index*100)+'ms'">
                    <div  class="code-item" >
                        <div class="code-item-inner">
                            <header>
                                <div class="item-top">
                                    <div class="item-folder">
                                        <svg
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                        >
                                            <path
                                                d="M1.5 1A1.5 1.5 0 000 2.5v10A1.5 1.5 0 001.5 14h12a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013.5 3H7.707l-2-2H1.5z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div class="item-links">
                                        <a
                                            v-for="link in code.links"
                                            :key="link.link"
                                            :href="link.link"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Icon
                                                class="icon"
                                                :name="link.icon"
                                                :size="25"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <h3 class="item-title">{{ code.title }}</h3>
                                <div class="item-des" v-html="code.des"></div>
                            </header>
                            <footer>
                                <ul>
                                    <li v-for="tech in code.techs" :key="tech.name">
                                        <Icon :name="tech.icon" :size="15" />
                                        {{ tech.name }}
                                    </li>
                                </ul>
                            </footer>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>
<script>
import CodeChallenge from "./../../constant/code-challenges-page/index.js";
import Icon from "./../../components/Icons";
export default {
    components: { Icon },
    data: () => {
        return {
            CodeChallenge: CodeChallenge,
        };
    },
};
</script>