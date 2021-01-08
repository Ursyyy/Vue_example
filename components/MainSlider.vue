<template>
    <div>
        <div class="main-slide home-slide">
            <v-touch @swipe="tutorialStart" class="main-slide__tutorial" v-if="tutorial">
                <img src="/image/tiktok.gif" alt="">
                <p>
                    Свайпните вверх чтобы перейти к следующему видео
                </p>
            </v-touch>
            <div class="main-slider__nav">
                <ul>
                    <li class="btn-subscriptions" :class="{active: !getShowRecVideos}"><a @click="changeRec(false)">Мои подписки</a></li>
                    <li class="btn-recommended" :class="{active: getShowRecVideos}"><a @click="changeRec(true)">Рекомендуем</a></li>
                </ul>
            </div>
            <div class="main-sliderList">
                <div class="main-slider active">
                    <div class="main-slider__recommended main-slider__Home">
                        <div class="main-slider__navs" v-if="!isEmpty">
                            <div class="prev" @click="swiperPrev">
                                <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 13.9465L13.623 3.13297L24.9928 14.2124" stroke="white" stroke-width="3" stroke-miterlimit="10"/>
                                </svg>
                            </div>
                            <div class="next" @click="swiperNext">
                                <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.998 2.0105L13.4958 12.9524L2.00368 1.99995" stroke="white" stroke-width="3" stroke-miterlimit="10"/>
                                </svg>
                            </div>
                        </div>
                        <swiper ref="swiper_box" v-if="!isEmpty"
                                @swiper="onSwiper"
                                @slideChange="onSlideChange"
                                @touchMove="touchStartIPhone"
                                @touchEnd="touchEndIPhone"
                                :options="swiperOption"
                        >
                            <swiper-slide ref="recommended_item" class="item" v-for="(item, index) in listVideos"
                                            :key="index">
                                <div class="item-noTel" :style="`background-image: url(${item.thumbnail})`"></div>
                                <div class="swipeBox"
                                        v-if="index == countSlider || index == countSlider-1|| index == countSlider+1"
                                        ref="recommended_video">
                                    <div class="video-player">
                                        <!--  Android  -->
                                        <video loop="" :src="item.src" webkit-playsinline="true" playsinline=""
                                                :poster="item.thumbnail" v-if="!getIPhone"></video>
                                        <div class="video-player__box" v-if="!getIPhone" @click="startVideo($event)">
                                            <div class="shadow"></div>
                                        </div>
                                        <!--  iPhone   -->
                                        <div class="video-player__boxIPhone" v-if="getIPhone"
                                                @click="startVideoIPhone($event)"
                                                :style="`background-image: url(${item.thumbnail})`">
                                            <div class="shadow"></div>
                                        </div>
                                    </div>
                                    <div class="item__content-desc">
                                        <div class="inf">
                                            <div class="inf-avatar">
                                                <a @click="routeToAccount(item.user.username)" >
                                                    <img v-if="item.user.avatar != '/avatar.jpg'"  :src="item.user.avatar"
                                                            :alt="item.user.username">
                                                    <span v-else class="avatar-none"  :class="'bgColor-'+ item.user.id % 7">
                                                        {{item.user.name.slice(0,1)}}
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="inf-text">
                                                <a @click="routeToAccount(item.user.username)">{{ item.user.name }}</a>
                                                <a @click="routeToAccount(item.user.username)" class="btn-add">
                                                    Перейти в профиль
                                                </a>
                                            </div>
                                        </div>
                                        <p ref="desc" v-if="item.description">{{ item.description }} <span @click="descToggle($event)"></span></p>
                                    </div>
                                    <div class="item__content-nav">
                                        <ul>
                                            <li>
                                                <div class="btn-muted active" @click="muted(index)">
                                                </div>
                                            </li>
                                            <li>
                                                <div @click="wishlistCheck(index, item)" ref="wishlistCheck"
                                                        class="wishlist" :class="{active: item.liked }">
                                                    <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M26.208 0.000343801C31.605 0.0308742 35.9737 5.10682 36 11.3777C36 22.8665 18 34.2439 18 34.2439C18 34.2439 0 22.6993 0 11.3777C0 5.09422 4.384 0.000343801 9.79203 0.000343801C13.1025 -0.0296528 16.1974 1.90497 18 5.13126C19.815 1.92066 22.9019 -0.00894341 26.208 0.000343801Z" fill="white"/>
                                                    </svg>
                                                    <span>{{ item.likers_count }}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#" @click="openTips(item.user)" data-href="#popups-tip" class="btn-popups"
                                                    :data-id="`${item.user.id}`"
                                                    :data-cloud-token="`${item.user.cloud_token}`"
                                                    :data-avatar="`${item.user.avatar}`"
                                                    :data-name="`${item.user.name}`"
                                                    :data-username="`${item.user.username}`"
                                                >
                                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.2598 11.1467H15.666V18.0748H20.2598C22.1699 18.0748 23.7239 16.5208 23.7239 14.6107C23.7238 12.673 22.1531 11.1467 20.2598 11.1467Z" fill="white"/>
                                                        <path d="M18 0C8.07476 0 0 8.07476 0 18C0 27.9252 8.07476 36 18 36C27.9252 36 36 27.9252 36 18C36 8.07476 27.9252 0 18 0ZM20.2594 20.1843H15.6656V22.5937H20.2594C20.8419 22.5937 21.3141 23.0659 21.3141 23.6484C21.3141 24.2309 20.8419 24.7031 20.2594 24.7031H15.6656V27.0375C15.6656 27.6199 15.1934 28.0922 14.6109 28.0922C14.0285 28.0922 13.5563 27.6199 13.5563 27.0375V24.7031H12.3516C11.7691 24.7031 11.2969 24.2309 11.2969 23.6484C11.2969 23.0659 11.7691 22.5937 12.3516 22.5937H13.5563V20.1843H12.3516C11.7691 20.1843 11.2969 19.7121 11.2969 19.1296C11.2969 18.5472 11.7691 18.075 12.3516 18.075H13.5563V10.0922C13.5563 9.5097 14.0285 9.03748 14.6109 9.03748H20.2594C23.2677 9.03748 25.8329 11.4618 25.8329 14.6109C25.8328 17.6842 23.3326 20.1843 20.2594 20.1843Z" fill="white"/>
                                                    </svg>
                                                    <span>Подарить</span>
                                                </a>
                                            </li>
                                            <li v-if="shareStatus">
                                                <a href="javascript:void(0)"
                                                    @click="share(item.id,item.user.name,item.user.username)"
                                                    class="shareBtn" :data-id-video="`${item.id}`"
                                                    :data-share-title="`${item.user.name}`"
                                                    :data-share-text="` `"
                                                    :data-share-link="`https://friendsonly.me/account/${item.user.username}?share=${item.id}`">
                                                    <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M35.58 12.2779L22.5799 0.403283C22.1558 0.0164159 21.5058 -0.105024 20.94 0.0953355C20.372 0.297627 19.9999 0.781453 19.9999 1.31972V7.03736H19.5C8.74807 7.03736 0 14.7322 0 24.1897V26.8285C0 27.4405 0.489991 27.9507 1.16785 28.0899C1.27808 28.1144 1.38794 28.125 1.49781 28.125C2.06397 28.125 2.60596 27.8328 2.86781 27.3738C5.67995 22.4251 11.3339 19.3517 17.6239 19.3517H19.9999V25.069C19.9999 25.6076 20.372 26.0914 20.94 26.2918C21.5021 26.4941 22.1558 26.3711 22.5799 25.9839L35.58 14.1092C36.14 13.5974 36.14 12.7917 35.58 12.2779Z" fill="white"/>
                                                    </svg>
                                                    <span>{{ item.shares_count }}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                        <div class="video-playerIPhone" v-if="getIPhone && !isEmpty">
                            <video ref="videoIPhone" v-if="videoIPhone"  :src="videoIPhone" loop="" webkit-playsinline="true"
                                    playsinline="">
                            </video>
                        </div>
                        <div class="no-video" v-if="isEmpty">
                            <p>Здесь будут появляться новые видео от профилей, на которые вы подписаны</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="popups popups-tip popupsAnim" :class="{active: tip.show}">
            <div class="popups__bgClose" @click="closeTip()" :class="{active: tip.show}"></div>
            <div class="popupsAnim__content" :class="{active: tip.show_content}">
                <div class="popups__content">
                    <h2>Отправить подарок</h2>
                    <div class="info-account">
                        <div class="info-account__avatar">
                            <img :src="tip.user.avatar" alt="">
                        </div>
                        <div class="info-account__desc">
                            <div class="name">{{tip.user.name}}</div>
                            <div class="nick">@{{tip.user.username}}</div>
                        </div>
                    </div>
                    <div class="tip-form">
                        <div class="form__group" :class="{has_error: tip.error, has_success: !tip.error}">
                            <input  type="number" inputmode="numeric" @input="showDescr()" v-model="tip.price" class="summ" placeholder="0">
                            <input hidden type="text">
                            <input hidden type="text">
                        </div>
                        <div class="dop" :style="tip.dop">
                            <div class="form__group">
                                <textarea type="tex" rows="1" v-model="tip.desc" oninput="textarea_resize(event,19,1)" placeholder="Сообщение (необязательно)"></textarea>
                                <div id="desc__textarea3_div"></div>
                            </div>
                            <div class="form__buttons">
                                <div class="btn-send" @click="sendTips()">Отправить</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popups__footer">
                    <div class="btn close" @click="closeTip()">Закрыть</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
import 'swiper/swiper.scss'
import 'swiper/swiper-bundle.css'
import VueTouch from 'vue-touch';

import {SET_SHOWRECVIDEOS, SET_LOAD, SET_MENU} from '../store/types'

import {mapGetters, mapMutations} from 'vuex'

const MainSlider = {
    props: ['videosx', 'auth', 'first_time'],
    data: () => ({
        tutorial: true,
        checkedMuted: true,
        swiperOption: {
            direction: 'vertical',
            pagination: false
        },
        prevVideo:null,
        listVideos: [],
        listVideosRec: [],
        listVideosSub: [],
        shareStatus: true,
        countSlider: 0,
        countSliderRec: 0,
        countSliderSub: 0,
        indexListVideo: 20,
        startVideoCheckIPhone: false,
        videoIPhone: '',

        tip:{
            show: false,
            show_content: false,
            dop: "display: none;",
            user:{},
            desc: '',
            price: "",
            error: false
        }
    }),
    computed: {
        ...mapGetters([
            'getShowRecVideos',
            'getIPhone',
            'getLoad',
            'getUser'
        ]),
        isEmpty(){
            return this.listVideos.length == 0
        }
    },

    mounted() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && navigator.share !== undefined) {
            this.shareStatus = true
        } else {
            this.shareStatus = false
        }
        this.setMenu(true)
        this.tutorial = this.first_time
        axios
            .post(`/load/?recommended=${this.getShowRecVideos}`)
            .then(response => {
                if(this.getShowRecVideos){
                    this.listVideos = this.listVideosRec = this.listVideos.concat(response.data.videos)
                }
                else{
                    this.listVideos = this.listVideosSub = this.listVideos.concat(response.data.videos)
                }
                if(this.getIPhone){
                    this.videoIPhone = this.listVideos[0].src
                }
                this.prevVideo = this.listVideos[0].src
                let thi = this;
                setTimeout(function () {
                    thi.onSwiper();
                }, 200)
            }).then(()=>{
        })
        axios
            .post(`/load/?recommended=${!this.getShowRecVideos}`)
                .then(response => {
                    if(!this.getShowRecVideos){
                        this.listVideosRec = this.listVideos.concat(response.data.videos)
                    }
                    else{
                        this.listVideosSub = this.listVideos.concat(response.data.videos)
                    }
                })
        
    
    },
    methods: {
         ...mapMutations({
            setMenu: SET_MENU
        }),
        closeTip(){
            this.tip.show_content = false
            setTimeout(()=> {
                this.tip.show = false
                this.tip.user = {}
            }, 100)
        },
        openTips(user){
            this.tip.show = true
            setTimeout(()=> {
                this.tip.show_content = true
            }, 100)
            this.tip.user = user

        },
        showDescr(){
            if(this.tip.price > 0){
                this.tip.error = false
                this.tip.dop = ""
            }else{
                this.tip.error = true
                this.tip.dop = "display: none;"
            }
        },
        async sendTips(){
            let amount = +this.tip.price
            let desc = this.tip.desc
            let id = +this.tip.user.id
            let cloud_token = this.tip.user.cloud_token
            let transaction, email;
            if (cloud_token != null) {
                await axios.post('cloudpayment/charge/' + id, {amount: amount, desc: desc}).then((response) => {
                    // console.log(response)
                });
            } else {
                await axios.post('/transaction/create/' + id, {amount: amount, desc: desc}).then((response) => {
                    // console.log(response)
                    transaction = response.data.transaction
                    email = response.data.email
                });
                let widget = new cp.CloudPayments();
                widget.charge({ // options
                    publicId: 'pk_13b45dc1dec583490fe85c4ff353d',  //id из личного кабинета
                    description: transaction.desc, //назначение
                    amount: parseFloat(transaction.amount), //сумма
                    currency: 'RUB', //валюта
                    invoiceId: transaction.id, //номер заказа  (необязательно)
                    accountId: email, //идентификатор плательщика (необязательно)
                    skin: "mini", //дизайн виджета
                    data: {
                        'setup': true,
                    }
                })
            }
            this.closeTip()
        },
        routeToAccount(username){
			this.$router.push({name: 'account', params:{username: username}})
            setTimeout(()=>{
                this.$forceUpdate();
            }, 100)
		},
        ...mapMutations({
            setRecVideos: SET_SHOWRECVIDEOS,
            setLoad: SET_LOAD
        }),
        changeRec(recommended){
            if(recommended == this.getShowRecVideos){
                return;
            }
            this.setLoad(true)
            if(recommended){
                this.listVideos = this.listVideosRec

            }
            else{
                if(this.getUser){
                    this.listVideos = this.listVideosSub
                }else{
                    this.$router.push({name: 'auth', params:{login: 'login'}})
                }
            }
            if(this.getIPhone && !this.isEmpty){
                this.videoIPhone = this.listVideos[0].src  
            }
            this.prevVideo = this.isEpmty ? this.listVideos[0].src : ''
            let thi = this;
            setTimeout(function () {
                thi.onSwiper();
            }, 200)
            this.setRecVideos(recommended)
            this.setLoad(false)
            this.$forceUpdate();
        },
        swiperNext() {
            this.$refs.swiper_box.$swiper.slideNext()
        },

        swiperPrev() {
            this.$refs.swiper_box.$swiper.slidePrev()

        },
        loadNewList(){
            let ids = this.listVideos.map(video => {video.id})
            let data = {
                recommended: this.getShowRecVideos,
                ids: JSON.stringify(ids)
            }
            axios.post('/load', ids)
                .then( resp => {
                    if(this.getShowRecVideos){   

                        this.listVideos = this.listVideosRec = this.listVideos.concat(resp.data.videos)
                    }
                    else{
                        this.listVideos = this.listVideosSub = this.listVideos.concat(resp.data.videos)
                    }
                })
        },
        tutorialStart() {
            this.tutorial = false
        },
        share(id, name,  userName) {
            let link = 'https://friendsonly.me/account/' + userName + '?share=' + id
            if (navigator.share) {
                navigator.share({
                    title: name, // Заголовок
                    text: '', // Текст
                    url: link, // ссылка
                });
            } else {
            }

            axios
                .get('/share/' + id)
                .then(response => {
                });

        },
        paymentVideo(item) {
            let user = this.user.id
            let email = this.user.email
            let video = item.id
            let amount = item.price
            var widget = new cp.CloudPayments();
            widget.charge({ // options
                    publicId: 'pk_13b45dc1dec583490fe85c4ff353d',  //id из личного кабинета
                    description: "Покупка видео", //назначение
                    amount: parseFloat(amount), //сумма
                    currency: 'RUB', //валюта
                    invoiceId: 0, //номер заказа  (необязательно)
                    accountId: email, //идентификатор плательщика (необязательно)
                    skin: "mini", //дизайн виджета
                    data: {
                        'setup': true,
                        'user': user,
                        'video': video,
                    }
                })   
        },
        onSwiper() {
            if (this.$refs.desc) {
                this.$refs.desc.forEach(function (value, key) {
                    value.style.maxHeight = 'max-content'
                    if (value.clientHeight <= 36) {
                        value.querySelector('span').classList.add('hide')
                        value.style.maxHeight = 'max-content'
                    }else{
                        value.style.maxHeight = '32px'
                        value.querySelector('span').classList.remove('hide')
                        value.querySelector('span').classList.remove('hide')
                    }
                });
            }
        },
        // maxCountOn(index) {
        //     this.countSlider = index
        // },
        startVideo(event) {
            this.checkedMuted = false
            let video = event.target.parentElement.querySelector('video')
            if(!video){
                video = event.target.offsetParent.offsetParent.children[0]
            }
            setTimeout(function () {
                event.target.offsetParent.classList.toggle("active");
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            }, 100)
        },
        startVideoIPhone(event) {
            let video = this.$refs.videoIPhone
            this.startVideoCheckIPhone = true
            if(event.target.classList[0] == 'video-player__boxIPhone'){
                setTimeout(function () {
                    event.target.classList.toggle("play");
                    if (video.paused) {
                        if (!event.target.classList.contains("active")) {
                            event.target.classList.add("load");
                        }
                        event.target.classList.add("active");
                        video.play();
                        video.oncanplay = () => {
                            event.target.classList.remove("load");
                        }
                        video.oncanplaythrough = () => {
                            event.target.classList.remove("load");
                        };
                    } else {
                        video.pause();
                        if (event.target.classList.contains("load")) {
                            event.target.classList.remove("load");
                        }
                    }

                }, 100)
            }else if(event.target.classList[0] == 'shadow'){
                setTimeout(function () {
                    event.target.offsetParent.classList.toggle("play");
                    if (video.paused) {
                        if (!event.target.offsetParent.classList.contains("active")) {
                            event.target.offsetParent.classList.add("load");
                        }
                        event.target.offsetParent.classList.add("active");
                        video.play();
                        video.oncanplay = () => {
                            event.target.offsetParent.classList.remove("load");
                        }
                        video.oncanplaythrough = () => {
                            event.target.offsetParent.classList.remove("load");
                        };
                    } else {
                        video.pause();
                        if (event.target.offsetParent.classList.contains("load")) {
                            event.target.offsetParent.classList.remove("load");
                        }
                    }

                }, 100)
            }

        },
        touchStartIPhone(swiper) {
            if (this.getIPhone) {
                let index = swiper.activeIndex
                if (this.startVideoCheckIPhone) {
                    this.$refs.recommended_item[index].$el.querySelector('.video-player__boxIPhone').classList.remove("active");
                }
            }
        },
        touchEndIPhone(swiper) {
            if (this.getIPhone) {
                let index = swiper.activeIndex
                if (this.startVideoCheckIPhone) {
                    let item = this.$refs.recommended_item[index].$el.querySelector('.video-player__boxIPhone')
                    setTimeout(function (){
                        item.classList.add("active");
                    },200)
                }
            }
        },
        onSlideChange(swiper) {
            this.countSlider = swiper.activeIndex
            let index = swiper.activeIndex
            let $listItem = this.$refs.recommended_item
           
            //
            //
            if (!this.getIPhone) {
                if (!this.checkedMuted) {
                    if (index != 0) {
                        if ($listItem[index - 1].$el.querySelector('video')) {
                            if (!$listItem[index - 1].$el.querySelector('video').paused) {
                                $listItem[index - 1].$el.querySelector('.video-player__box').click()
                            }
                        }
                    }
                    if ($listItem[index].$el.querySelector('video')) {
                        this.checkedMuted = false
                        let video = $listItem[index].$el.querySelector('.video-player__box').offsetParent.children[0]
                        setTimeout(function () {
                            $listItem[index].$el.querySelector('.video-player__box').classList.add("active");
                            if (video.paused) {
                                video.play();
                            } else {
                                video.pause();
                            }
                        }, 100)
                    }
                    if (index + 1 <= this.listVideos.length - 1) {
                        if ($listItem[index + 1].$el.querySelector('video')) {
                            if (!$listItem[index + 1].$el.querySelector('video').paused) {
                                $listItem[index + 1].$el.querySelector('.video-player__box').click()
                            }
                        }
                    }
                }
            } else {
                if (index != 0) {
                    if ($listItem[index - 1].$el.querySelector('.video-player__boxIPhone')) {
                        if ($listItem[index - 1].$el.querySelector('.video-player__boxIPhone').classList.contains('active')) {
                            $listItem[index - 1].$el.querySelector('.video-player__boxIPhone').classList.remove("active");
                            $listItem[index - 1].$el.querySelector('.video-player__boxIPhone').classList.remove("play");
                        }
                    }
                }
                if (index + 1 <= this.listVideos.length - 1) {
                    if ($listItem[index + 1].$el.querySelector('.video-player__boxIPhone')) {
                        if ($listItem[index + 1].$el.querySelector('.video-player__boxIPhone').classList.contains("active")) {
                            $listItem[index + 1].$el.querySelector('.video-player__boxIPhone').classList.remove("active");
                            $listItem[index + 1].$el.querySelector('.video-player__boxIPhone').classList.remove("play");
                        }
                    }
                }
                this.prevVideo = this.listVideos[index].src;
                this.videoIPhone = this.listVideos[index].src;
                if (this.startVideoCheckIPhone) {
                    if ($listItem[index].$el.querySelector('.video-player__boxIPhone')) {
                        $listItem[index].$el.querySelector('.video-player__boxIPhone').click()
                        setTimeout(function (){
                            $listItem[index].$el.querySelector('.video-player__boxIPhone').classList.add("play");
                        },200)
                    }
                }
            }
            if (this.$refs.desc) {
                this.$refs.desc.forEach(function (value, key) {
                    value.style.maxHeight = 'max-content'
                    if (value.clientHeight <= 36) {
                        value.querySelector('span').classList.add('hide')
                        value.style.maxHeight = 'max-content'
                    }else{
                        value.style.maxHeight = '32px'
                        value.querySelector('span').classList.remove('hide')
                        value.querySelector('span').classList.remove('hide')
                    }
                });
            }
            if(swiper.isEnd){
                this.loadNewList()
            }
        },
        wishlistCheck(index, item) {
            if (this.getUser) {
                let axiosUrl
                if (item.liked == false) {
                    axiosUrl = '/like/'
                } else {
                    axiosUrl = '/unlike/'
                }
                if (index == 0) {
                    index = 0
                } else {
                    index = 1
                }
                axios
                    .get(axiosUrl + item.id)
                    .then(response => {
                        this.$refs.wishlistCheck[index].classList.toggle("active");
                        this.$refs.wishlistCheck[index].querySelector('span').innerText = item.liked ? --item.likers_count: ++item.likers_count
                        item.liked = !item.liked
                    });

            } else {
                //this.$router.push({name: 'auth'})
            }
        },
        descToggle(e) {
            e.target.parentElement.classList.toggle("active");
        },

    },
    components: {
        Swiper,
        SwiperSlide,
        VueTouch
    }
}

export default MainSlider
</script>
