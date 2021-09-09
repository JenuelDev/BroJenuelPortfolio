<template>
    <div class="card-item">
        <div class="card-item-inner">
            <header>
                <div class="item-top">
                    <div class="header-logo">
                        <Icon :size="50" :name="icon" />
                    </div>
                </div>
                <h3 class="item-title text-size-24px">{{ title }}</h3>
                <div class="item-des text-size-20px " v-html="description"></div>
            </header>
        </div>
    </div>
</template>
<script>
import Icon from './../Icons';
export default {
    components: { Icon },
    props: ['index', 'icon', 'links', 'title', 'description', 'techs'],
};
</script>
<style lang="scss">
.card-item {
    visibility: visible;
    background-color: var(--lightBackground);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    border-radius: var(--border-radius);
    transition: 0.2s;
    height: 100%;
    max-width: 300px;

    .card-item-inner {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        flex-direction: column;
        gap: 20px;
        padding: 2rem 1.75rem;
        height: 88%;

        header {
            text-align: center;
            .item-top {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 10px;

                .header-logo {
                    color: var(--primary) !important;
                    .icon {
                        color: var(--primary) !important;
                    }
                }
            }

            h3 {
                margin: 0px 0px 0px;
                color: var(--lightestSlate);
                line-height: 1.1;
            }

            .item-des {
                margin-top: 10px;
                color: var(--lightSlate);
                line-height: 1.2;
            }
        }

        footer {
            ul {
                display: flex;
                align-items: flex-end;
                flex-grow: 1;
                flex-wrap: wrap;
                padding: 0px;
                gap: 10px;
                list-style: none;

                li {
                    font-family: var(--font-mono);
                    font-size: 0.8rem;
                    color: var(--lightSlate);
                    display: flex;
                    align-items: center;
                    gap: 5px;

                    .icon {
                        color: var(--lightSlate);
                    }
                }
            }
        }
    }

    &:hover {
        transition-delay: 0ms !important;
        transform: translate(0px, -5px);
        box-shadow: var(--black-shadow);
    }
}
</style>