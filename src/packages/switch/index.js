import Switch from './switch.vue';
var install = function (vue, opt) {
    vue.component('mb-switch', Switch);
};
var switchComponent = {
    component: Switch,
    install: install
};
export default switchComponent;
