import WorkPage from './data/work-page'
import AnimationShow from './data/animation-show'
import IntroPage from './data/intro-page'
import AboutMePage from './data/about-me-page'
import experiencePage from './data/experience-page'
import codeChallengesPage from './data/code-challenges-page'

let modalShow = {
    modalShow: true
};

let states = Object.assign(
    AnimationShow,
    IntroPage,
    AboutMePage,
    experiencePage,
    WorkPage,
    codeChallengesPage,
    modalShow
)
export default states