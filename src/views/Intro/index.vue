<template>
    <div>
        <section class="intro">
            <h1 v-scrollanimation style="transition-delay: 100ms"><span>👋</span>Hi! my name is</h1>
            <h2 v-scrollanimation style="transition-delay: 250ms">
                {{ name }}
            </h2>
            <h3 v-scrollanimation style="transition-delay: 400ms">{{ IDo }}</h3>
            <p v-scrollanimation style="transition-delay: 550ms">{{ des }}</p>
            <div v-scrollanimation style="transition-delay: 700ms; width: 300px;" >
                <GradientBorder
                    @click="closeModal()"
                    aria-label="Send Message"
                    style="margin-top: 30px; width: 300px; font-size: 1.5rem !important; font-weight: 900;"
                    class="go-button"
                >
                    <p class="padding: 20px;" style="
                        display: flex;
                        align-items: center;
                        gap: 20px;
                    ">
                        <span>CONTINUE</span>
                        <Icon class="arrow-icon" name="arrowRight" :size="24"/>
                    </p>
                </GradientBorder>
            </div>
        </section>
    </div>
</template>

<script>
import GradientBorder from "./../../components/GradientBorder";
import Icon from './../../components/Icons'
export default {
    name: "Intro",
    components: {
        GradientBorder, Icon
    },
    data: () => {
        return {
            name: 'Jenuel Ganawed.',
            IDo: 'I Build Things for the web.',
            des: "I'm a software/web developer specializing in creating (and sometimes designing) exceptional websites, applications, and everything in between.",
            email: "jenuelganawed936@gmail.com"
        }
    },
    methods: {
        closeModal() {
            if (this.$store.state.show == false) {
                localStorage.setItem('showedIntro','done')
                localStorage.setItem('expy', Date.now() + (1*60*60*1000))
                this.$store.state.show = true
            }
        },
    },
};
</script>
<style lang="scss">
.intro {
    display: flex;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    flex-direction: column;
    max-width: 1000px;
    padding: 0 30px;

    .a-before-enter {
        opacity: 0;
        transform: translateX(-30px);
        transition: 0.2s ease-in;
    }

    .a-enter {
        opacity: 1;
        transform: translateX(0);
    }

    h1 {
        color: var(--primary);
        font-family: var(--font-mono) !important;
        font-size: 25px;
        font-weight: lighter;
        margin: 0;

        span {
            font-size: 50px !important;
        }
    }
    h2 {
        font-family: sans-serif;
        font-size: clamp(2px, 8vw, 3rem);
        color: var(--white);
        margin: 0;
    }
    h3 {
        color: var(--slate);
        font-family: sans-serif;
        font-size: clamp(2rem, 8vw, 3rem);
        margin: 0;
    }
    p {
        max-width: 500px;
        color: var(--slate);
    }
    .get-in-touch {
        border: 1px solid var(--primary);
        border-radius: 4px;
        font-size: 14px;
        color: var(--primary);
        margin-top: 30px;
    }

    .go-button {
        
        &:hover {
            p {
                color: var(--primary);
            }

            .arrow-icon {
                transition: 0.2s;
                animation: sigways 1s infinite;
            }
        }
    }
}

@keyframes sigways {
  0% {
    transform:translateX(0px);
  }
  50% {
      transform:translateX(20px);
  }
  100% {
    transform:translateX(0px);
  }
}
</style>