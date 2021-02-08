<template>
    <Overlay v-show="!$store.state.show">
        <Intro />
    </Overlay>
    <MobileNav />
    <Header v-show="$store.state.show" />
    <SocialMediaLinks v-show="$store.state.show" />
    <main v-show="$store.state.show">
        <router-view />
    </main>
    <Footer v-show="$store.state.show" />
</template>

<script>
import Footer from './components/Footer'
import SocialMediaLinks from "./components/social-media-links";
import Header from "./components/Header";
import Overlay from "./components/overlay";
import Intro from "./views/Intro";
import MobileNav from "./components/Header/MobileNav";

export default {
    components: { SocialMediaLinks, Header, Overlay, Intro, MobileNav, Footer},
    created() {
        if (localStorage.getItem("showedIntro") == "done") {
            let ext = localStorage.getItem("expy") ? localStorage.getItem("expy"):'';

            if (ext != "") {
                let isExpire = parseInt(ext);
                let dateNow = Date.now();
                
                if (isExpire > dateNow) {
                    this.$store.state.show = true;
                } else {
                    this.$store.state.show = false;
                }
            }
        }
    },
};
</script>

<style lang="scss">
  main {
      margin: 0px auto;
      max-width: 1600px;
      counter-reset: section 0;
      margin-top: 130px;
      margin-bottom: 200px;
  }

  @media only screen and (max-width: 1186px) {
      main {
          margin-top: 100px;
          padding: 0px 110px;
      }
  }

  @media only screen and (max-width: 1050px) {
      main {
          margin-top: 80px;
          padding: 0px 110px;
      }
  }

  @media only screen and (max-width: 768px) {
      main {
          margin-top: 70px;
          padding: 2px 20px;
      }
  }

  @media only screen and (max-width: 425px) {
      main {
          padding: 10px 10px 30px 10px;
      }
  }
</style>