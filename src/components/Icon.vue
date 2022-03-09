<script>
import { h } from 'vue';
import { Icon } from '@vicons/utils';

export default {
    props: ['icon', 'size'],
    setup(props) {
        // return the render function
        return () => h(Icon, { size: props.size ? props.size : 20, class: 'highlight-hover' }, () => h(props.icon));
    },
};
</script>
