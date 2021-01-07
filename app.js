/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.Vue = require('vue');
import { VueHammer } from 'vue2-hammer'
import gsap from "gsap";
import { TweenMax } from 'gsap/all';
gsap.registerPlugin(TweenMax);

import VueVideoPlayer from 'vue-video-player'
Vue.use(VueVideoPlayer)
import InfiniteLoading from 'vue-infinite-loading';




import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueTouch from 'vue-touch';
Vue.use(VueTouch);

import VueExpandableImage from 'vue-expandable-image'
Vue.use(VueExpandableImage)

import TextareaAutosize from 'vue-textarea-autosize'
Vue.use(TextareaAutosize)

import Vuex from 'vuex'
// Vue.use(Vuex)

import store from './store/index'

import router from './routes'

import App from './components/App'
// Vue.config.productionTip = false
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('main-slider', require('./components/MainSlider.vue').default);
Vue.component('main-slider-sub', require('./components/MainSliderSub.vue').default);
Vue.component('list-account-video', require('./components/AccountVideo.vue').default);
Vue.component('account', require('./components/Account.vue').default);
Vue.component('notification', require('./components/Notification.vue').default);

Vue.component('payment-form', require('./components/PaymentForm.vue').default);
Vue.component('messages', require('./components/Messages.vue').default);
Vue.component('chats', require('./components/Chats.vue').default);
Vue.component('payment-cart', require('./components/PaymentCards.vue').default)
Vue.component('verification', require('./components/Verification.vue').default)
Vue.component('menu-block', require('./components/Menu.vue').default);
Vue.component('law-page', require('./components/Law.vue').default)
Vue.component('lang-page', require('./components/Language.vue').default)
Vue.component('account-menu', require('./components/Account-menu.vue').default)
Vue.component('law-info-page', require('./components/LawInfo.vue').default)
Vue.component('notify-settings', require('./components/NotifySettings.vue').default)
Vue.component('notify-messages', require('./components/NotificationMessage.vue').default)
Vue.component('publication', require('./components/Publication.vue').default)
Vue.component('withdraw', require('./components/WithdrawMoney.vue').default)
Vue.component('register', require('./components/auth/Register.vue').default)
Vue.component('login', require('./components/auth/Login.vue').default)


Vue.component('infinite-loading', InfiniteLoading)
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,
});
