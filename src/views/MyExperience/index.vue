<template>
    <section v-scrollanimation class="my-work">
        <div>
            <h2 class="numbered-header" style="margin: 10px 0px -10px">
                <Icon class="front-icon" name="case" :size="30" /> Where I've
                Worked
            </h2>
            <p class="header-des">
                This are companies that I have worked for. I have learned and
                enjoyed working on this companies.
            </p>
            <div class="inner">
                <ul class="tab-list">
                    <li v-for="(exp, index) in experiences" :key="exp.company" @click="tab = index" :class="tab == index ? 'active' : ''">
                        <div>
                            <span>{{exp.tab}}</span>
                        </div>
                    </li>
                    <div
                        class="slider"
                        :style="width >= 600 ?
                            'transform: translateY(calc(' +
                            tab +
                            ' * var(--tab-height)));' :
                            'transform: translateX(calc(' +
                            tab +
                            ' * var(--tab-width)));'
                        "
                    ></div>
                </ul>
                <template v-for="(exp, index) in experiences" :key="exp.company+index">
                    <div v-scrollanimation class="company-details"  v-if="tab == index">
                        <h3>
                            <span>{{exp.position}}</span>
                            <span class="company">
                                @
                                <a :href="exp.url" target="_blank" rel="noopener">{{exp.company}}</a>
                            </span>
                        </h3>
                        <p class="range" v-html="exp.workStart+' - '+ exp.workUntil"></p>
                        <div>
                            <ul>
                                <li v-for="d in exp.des" :key="d"><p v-html="d"></p></li>
                            </ul>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>
<script src='./script.js'></script>