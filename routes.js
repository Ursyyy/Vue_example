import Vue from 'vue'
import VueRouter from 'vue-router'

import Account_menu from "./components/Account-menu"
import Account from './components/Account'
import Chats from './components/Chats'
import Language from './components/Language'
import Law from './components/Law'
import LawInfo from './components/LawInfo'
import Messages from './components/Messages'
import Notification from './components/Notification'
import NotifySettings from './components/NotifySettings'
import PaymentCards from './components/PaymentCards'
import FAQPage from "./components/FAQPage"
import Legal from "./components/Legal"
import Payment from './components/Payment'
import Verification from './components/Verification'
import MainSlider from './components/MainSlider'
import Publication from './components/Publication'
import WithdrawMoney from './components/WithdrawMoney'
import WithdrawCard from './components/WithdrawCard'
import Settings from './components/Settings'
import Follower from './components/Followers'

import Management from './components/SubscriptionManagement'

import AuthForm from './components/auth/AuthForm'
import Reset from './components/auth/passwords/Reset'

import {SET_ROUTER} from './store/types'
import store from './store/index.js'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    data() {
        return {
          prevRoute: null,
          fullPath: null
        }
       },
    routes:[
        {
            name: 'index',
            path: '/',
            component: MainSlider
        },
        {
            name: 'notifications',
            path: '/notifications',
            component: Notification
        },
        {
            name: 'management',
            path: '/subscription_management',
            component: Management
        },
        {
            name: 'account',
            path: '/account/:username',
            component: Account,
            key: store.getters.getPrevRouter
        },
        {
            name: 'payment',
            path: '/payment/:id',
            component: Payment
        },
        {
            name: "payment_card",
            path: '/payment_card',
            component: PaymentCards

        },
        {
            name: 'menu',
            path: '/menu',
            component: Account_menu
        },
        {
            name: 'auth',
            path: '/auth',
            component: AuthForm
        },
        {
            name: 'forgot_password',
            path: '/forgot_password',
            component: Reset
        },
        {
            name: 'publication',
            path: '/publication',
            component: Publication
        },
        {
            name: 'verification',
            path: '/verification',
            component: Verification
        },
        {
            name: 'chats',
            path: '/messages/chats',
            component: Chats
        }, 
        {
            name: 'messages',
            path: '/chat/:id',
            component: Messages
        },
        {
            name: 'settings',
            path: '/settings',
            component: Settings
        },
        {
            name: 'cards',
            path: '/cards',
            component: PaymentCards
        },
        {
            name: 'NotifySettings',
            path: '/settings/notifications',
            component: NotifySettings
        },
        {
            name: 'language',
            path: '/language',
            component: Language
        },
        {
            name: 'followers',
            path: '/friends',
            component: Follower
        },
        {
            name: 'withdrawal',
            path: '/withdrawal',
            component: WithdrawMoney
        },
        {
            name: 'withdrawal-card',
            path: '/withdrawal/:type',
            component: WithdrawCard
        },
        {
            name: 'law',
            path: '/law',
            component: Law
        },
        {
            name: 'law_info',
            path: '/law_info',
            component: LawInfo
        },
        {
            name: 'help',
            path: '/help',
        },
        {
            name: 'promo',
            path: '/promo',
        },
        {
            name: 'FAQ',
            path: '/FAQ',
            component: FAQPage,
        },
        {
            name: 'FAQ_ID',
            path: '/FAQ/:id',
            component: FAQPage,
            props: true
        },
        {
            name: 'legal',
            path: '/legal',
            component: Legal,
        },
        {
            name: 'legal_id',
            path: '/legal/:id',
            component: Legal,
            props: true
        },
    ],
})

router.beforeEach((to, from, next) => {
    store.commit(SET_ROUTER, to.fullPath)
    next()
})

export default router
