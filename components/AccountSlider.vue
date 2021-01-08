<template>
    <div class="slider">
        <div class="main-slider account-slide" :class="{active:dialog}">
            <div class="account-slide__back" @click="closeList(); setMenu(true)">
                <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.36037 8.50359L9.7282 2.14366C9.90354 1.96896 10 1.73538 10 1.48633C10 1.23713 9.90354 1.00369 9.7282 0.828715L9.17022 0.271724C8.99516 0.0964715 8.76114 0 8.51176 0C8.26239 0 8.02865 0.0964715 7.85345 0.271724L0.271523 7.84377C0.0956306 8.0193 -0.000688238 8.25385 3.70763e-06 8.50318C-0.000688238 8.75362 0.0954922 8.98789 0.271523 9.16355L7.84639 16.7283C8.02159 16.9035 8.25533 17 8.50484 17C8.75422 17 8.98796 16.9035 9.1633 16.7283L9.72115 16.1713C10.0841 15.8088 10.0841 15.2186 9.72115 14.8562L3.36037 8.50359Z"
                        fill="white"></path>
                </svg>
                Назад
            </div>
            <div class="main-sliderList">
                <div class="main-slider__recommended">
                    <div class="main-slider__navs">
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
                    <swiper ref="swiper_box"
                            @swiper="onSwiper"
                            @slideChange="onSlideChange"
                            @touchMove="touchStartIPhone"
                            @touchEnd="touchEndIPhone"
                            :options="swiperOption"
                    >
                        <swiper-slide ref="recommended_item" class="item" v-for="(item, index) in videos"

                                      :key="index">
                            <div class="item-noTel" :style="`background-image: url(${item.thumbnail})`"></div>
                            <div class="item-noTelShadow"></div>

                            <div class="swipeBox"
                                 v-if="index == countSlider || index == countSlider-1|| index == countSlider+1"
                                 ref="recommended_video">
                                <div class="video-player"  v-if="item.privacy==0 || item.available">
                                    <!--  Android  -->
                                    <video loop="" :src="item.src" webkit-playsinline="true" playsinline=""
                                           :poster="item.thumbnail" v-if="!useIPhone"></video>
                                    <div class="video-player__box" v-if="!useIPhone" @click="startVideo($event)">
                                        <div class="shadow"></div>
                                    </div>
                                    <!--  iPhone   -->
                                    <div class="video-player__boxIPhone" v-if="useIPhone"
                                         @click="startVideoIPhone($event)"
                                         :style="`background-image: url(${item.thumbnail})`">
                                        <div class="shadow">
                                            <div class="play"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="video-privacy" v-if="item.privacy==1 && !item.available">
                                    <img :src="item.thumbnail" alt="">
                                    <p>Это видео, доступно только для друзей</p>
                                    <a @click="$router.push({name: 'payment', params: {id: item.user.id}})">Подружиться</a>
                                </div>
                                <div class="video-privacy" v-if="item.privacy==2 && !item.available">
                                    <img :src="item.thumbnail" alt="">
                                    <p>Это видео платное</p>
                                    <a v-if="card_exist && user" href="javascript:void(0)" @click="yakassaBuyVideo(item)">
                                        Разблокировать за
                                        {{ item.price }}₽
                                    </a>
                                    <a v-else-if="!card_exist && user" href="javascript:void(0)" @click="yakassaSetupBuyVideo(item)">
                                        Разблокировать за
                                        {{ item.price }}₽
                                    </a>
                                    <a v-else href="javascript:void(0)" @click="redirectToLogin(item)">
                                        Разблокировать за
                                        {{ item.price }}₽
                                    </a>
                                </div>
                                <div class="item__content-desc">
                                    <div class="inf">
                                        <div class="inf-avatar">
                                            <a @click="$router.push({name: 'account', params: {id: item.user.username}})">
                                                <img v-if="item.user.avatar && item.user.avatar != '/avatar.jpg'" :src="item.user.avatar"
                                                     :alt="item.user.username">
                                                <div v-else class="avatar-none"  :class="'bgColor-'+ item.user.id % 7">
                                                    {{item.user.username.slice(0,1)}}
                                                </div>
                                            </a>
                                        </div>
                                        <div class="inf-text">
                                            <a @click="$router.push({name: 'account', params: {id: item.user.username}})">{{ item.user.name }}</a>
                                            <a @click="$router.push({name: 'account', params: {id: item.user.username}})" class="btn-add">
                                                Перейти в профиль
                                            </a>
                                        </div>
                                    </div>
                                    <p ref="desc">{{ item.description }} <span @click="descToggle($event)"></span></p>
                                </div>
                                <div class="item__content-nav">
                                    <ul>
                                        <li>
                                            <div class="btn-muted active" @click="muted(index)">
                                            </div>
                                        </li>
                                        <li>
                                            <div @click="wishlistCheck(index,item)" ref="wishlistCheck"
                                                 class="wishlist" :class="{active: item.liked }">
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21.84 0.000301193C26.3375 0.0270479 29.9781 4.47392 30 9.96766C30 20.0326 15 30 15 30C15 30 0 19.8861 0 9.96766C0 4.46289 3.65333 0.000301193 8.16003 0.000301193C10.9187 -0.0259779 13.4978 1.66888 15 4.49534C16.5125 1.68263 19.085 -0.00783504 21.84 0.000301193Z"
                                                        fill="white"/>
                                                </svg>
                                                <span>{{ item.likers_count }}</span>
                                            </div>
                                        </li>
                                        <li v-if="getUser.id == item.user.id">
                                            <div class="delay" @click="openDialogDelay(item.id,index)">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.14258 12H22.8569V10.8572H9.14258V12Z" fill="white"/>
                                                    <path
                                                        d="M16 0C7.1635 0 0 7.1635 0 16C0 24.8365 7.1635 32 16 32C24.8365 32 32 24.8365 32 16C31.99 7.16769 24.8323 0.0100446 16 0ZM24 12.5714C24 12.887 23.7441 13.1429 23.4286 13.1429H22.8027L21.7143 24.0572C21.6847 24.3502 21.4375 24.5728 21.1429 24.5714H10.8571C10.5625 24.5728 10.3153 24.3502 10.2857 24.0572L9.20006 13.1429H8.57143C8.25586 13.1429 8 12.887 8 12.5714V10.2857C8 9.97015 8.25586 9.71429 8.57143 9.71429H14.3909C14.3231 9.53125 14.2877 9.33789 14.2857 9.14286C14.2857 8.19615 15.0533 7.42857 16 7.42857C16.9467 7.42857 17.7143 8.19615 17.7143 9.14286C17.7123 9.33789 17.6769 9.53125 17.6091 9.71429H23.4286C23.7441 9.71429 24 9.97015 24 10.2857V12.5714Z"
                                                        fill="white"/>
                                                    <path
                                                        d="M11.3742 23.4285H20.6286L21.6571 13.1428H10.3457L11.3742 23.4285ZM18.2885 15.9291C18.3094 15.7229 18.4403 15.544 18.6309 15.4617C18.8211 15.3797 19.0413 15.4073 19.2056 15.5337C19.37 15.6601 19.4528 15.8658 19.4222 16.0708L18.8507 20.6423C18.8153 20.9274 18.5731 21.142 18.2857 21.1428C18.2617 21.1428 18.238 21.1411 18.2143 21.1384C17.9012 21.099 17.6791 20.8136 17.7182 20.5005L18.2885 15.9291ZM15.4286 16C15.4286 15.6844 15.6844 15.4285 16 15.4285C16.3156 15.4285 16.5714 15.6844 16.5714 16V20.5714C16.5714 20.887 16.3156 21.1428 16 21.1428C15.6844 21.1428 15.4286 20.887 15.4286 20.5714V16ZM13.072 15.433C13.385 15.3939 13.6705 15.616 13.7098 15.9291L14.2813 20.5005C14.3203 20.8136 14.0982 21.099 13.7852 21.1384C13.7617 21.1411 13.738 21.1425 13.7143 21.1428C13.4263 21.1425 13.1836 20.928 13.1479 20.6423L12.5765 16.0708C12.5374 15.7581 12.7592 15.4726 13.072 15.433Z"
                                                        fill="white"/>
                                                    <path
                                                        d="M16.5706 9.14296C16.5706 9.45853 16.3147 9.71439 15.9992 9.71439C15.6836 9.71439 15.4277 9.45853 15.4277 9.14296C15.4277 8.82739 15.6836 8.57153 15.9992 8.57153C16.3147 8.57153 16.5706 8.82739 16.5706 9.14296Z"
                                                        fill="white"/>
                                                </svg>
                                                <span>Удалить</span>
                                            </div>
                                        </li>
                                        <li v-else>
                                            <a href="#" data-href="#popups-tip" class="btn-popups"
                                               @click="openTips(item.user)"
                                               :data-id="`${item.user.id}`"
                                               :data-cloud-token="`${item.user.cloud_token}`"
                                               :data-avatar="`${item.user.avatar}`"
                                               :data-name="`${item.user.name}`"
                                               :data-username="`${item.user.username}`"
                                            >
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M18.0082 9.90833H13.9248V16.0666H18.0082C19.706 16.0666 21.0874 14.6853 21.0874 12.9874C21.0873 11.265 19.6911 9.90833 18.0082 9.90833Z"
                                                        fill="white"/>
                                                    <path
                                                        d="M16 0C7.17756 0 0 7.17756 0 16C0 24.8224 7.17756 32 16 32C24.8224 32 32 24.8224 32 16C32 7.17756 24.8224 0 16 0ZM18.0084 17.9416H13.925V20.0833H18.0084C18.5261 20.0833 18.9459 20.5031 18.9459 21.0208C18.9459 21.5386 18.5261 21.9583 18.0084 21.9583H13.925V24.0333C13.925 24.5511 13.5053 24.9708 12.9875 24.9708C12.4698 24.9708 12.05 24.5511 12.05 24.0333V21.9583H10.9792C10.4614 21.9583 10.0417 21.5386 10.0417 21.0208C10.0417 20.5031 10.4614 20.0833 10.9792 20.0833H12.05V17.9416H10.9792C10.4614 17.9416 10.0417 17.5219 10.0417 17.0041C10.0417 16.4864 10.4614 16.0666 10.9792 16.0666H12.05V8.97081C12.05 8.45306 12.4698 8.03331 12.9875 8.03331H18.0084C20.6824 8.03331 22.9626 10.1883 22.9626 12.9875C22.9625 15.7193 20.7401 17.9416 18.0084 17.9416Z"
                                                        fill="white"/>
                                                </svg>
                                                <span>Подарить</span>
                                            </a>
                                        </li>
                                        <li v-if="shareStatus">
                                            <a href="javascript:void(0)"
                                               @click="share(item.user.name,item.description,item.user.username)"
                                               class="shareBtn" :data-id-video="`${item.id}`"
                                               :data-share-title="`${item.user.name}`"
                                               :data-share-text="`${item.description}`"
                                               :data-share-link="`https://friendsonly.me/account/${item.user.username}?share=${item.id}`">
                                                <svg width="32" height="25" viewBox="0 0 32 25" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M31.6267 10.9137L20.071 0.358474C19.6941 0.0145919 19.1163 -0.0933544 18.6133 0.0847426C18.1084 0.264558 17.7777 0.694625 17.7777 1.17308V6.25543H17.3334C7.77606 6.25543 0 13.0953 0 21.5019V23.8475C0 24.3915 0.435548 24.8451 1.03809 24.9688C1.13607 24.9905 1.23373 25 1.33138 25C1.83464 25 2.31641 24.7403 2.54916 24.3323C5.04884 19.9334 10.0746 17.2015 15.6657 17.2015H17.7777V22.2836C17.7777 22.7623 18.1084 23.1924 18.6133 23.3705C19.113 23.5503 19.6941 23.4409 20.071 23.0968L31.6267 12.5415C32.1244 12.0865 32.1244 11.3704 31.6267 10.9137Z"
                                                        fill="white"/>
                                                </svg>
                                                <span>{{ item.shares_count }}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="video-playerIPhone" v-if="useIPhone">
                        <video ref="videoIPhone" :src="videoIPhone" loop="" webkit-playsinline="true"
                               playsinline=""></video>
                    </div>
                </div>
            </div>
            <div class="popups popups-delay " :class="{active:dialogDelay}">
                <div class="popups__content">
                    <p>Вы уверены, что хотите удалить? </p>
                    <div class="yes" @click="itemDelay(delayId,delayIndex)">OK</div>
                    <div class="closes" @click="dialogDelay=false">Отмена</div>
                </div>
            </div>
            <!-- tips -->
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
            <div v-show="no_money" :class="no_money ? 'popups popupsBottom active' : 'popups popupsBottom'" style="z-index: 9999">
                <div class="popups__bgClose"></div>
                <div class="popups__content">
                    <div class="popups__content-box">

                        <div class="logo">
                            <img src="/image/error-balance.png" alt="">
                        </div>
                        <p>
                            К сожалению на вашей привязанной карте не достаточно средств, пожалуйста пополните ее или
                        </p>
                    </div>
                    <div class="popups__content-buttons">
                        <div @click="yakassaSetupBuyVideo(videoToBuy)" class="btn">Привязать новую карту</div>
                    </div>
                </div>
                <div class="popups__footer">
                    <div class="btn close">Отмена</div>
                </div>
            </div>
        </div>
        <div :class="this.paymentPreloader ? 'load-payment active' : 'load-payment'">
            <img src="/image/load/load-new.gif" alt="">
            <p>Ваш платеж обрабатывается, пожалуйста подождите</p>
        </div>
    </div>
</template>

<script>
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import {SET_LOAD, SET_MENU, SET_USER} from "../store/types";
import {mapMutations, mapGetters} from 'vuex'
const AccountSlider = {
    props: ['getUser', 'videos', 'videosCount', 'selected'],
    data: () => ({
        checkedMuted: true,
        dialogDelay: false,
        delayId: '',
        delayIndex: '',
        swiperOption: {
            direction: 'vertical',
            pagination: false
        },
        dialog: false,
        shareStatus: true,
        countSlider: 0,
        useIPhone: false,
        startVideoCheckIPhone: false,
        videoIPhone: '',
        paymentPreloader: false,
        no_money: false,
        videoToBuy: null,
        loadAll: false,
        // tips
        tip:{
            show: false,
            show_content: false,
            dop: "display: none;",
            user: {},
            desc: '',
            price: "",
            error: false
        }
    }),
    computed: {
        canShare() {
            return navigator.share !== undefined
        },
        ...mapGetters([
            'getSocket'
        ])
    },
    mounted () {
        // video slider
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.shareStatus = true
        } else {
            this.shareStatus = false
        }
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            this.useIPhone = true
            // console.log('iPhone')
        } else {
            this.useIPhone = false
            // console.log('Android')
        }
        const strGET = this.getUrlVars()["share"];
        let indexList;
        if (strGET) {
            this.videos.forEach(function (value, key) {
                if (value.id == strGET) {
                    indexList = key;
                }
            });
            if (indexList) {
                this.$refs.list[indexList].click()
            }
        }

        this.openList(this.selected.index, this.selected.src);
    },
    methods: {
        ...mapMutations({
            setLoad: SET_LOAD,
            setUser: SET_USER,
            setMenu: SET_MENU
        }),
        checkIsFollowing(id) {
            axios
                .get(`/webapi/isFollowing/${id}/`)
                .then(response => {
                    let data = response.data
                    this.isFollowing = data
                }).catch((error) => {
                this.getUser = false
            })
        },
        share: async (name, desc, userName) => {
            let link = 'https://friendsonly.me/account/' + userName;
            if (!desc) {
                desc = '';
            }
            try {
                await navigator.share(
                    {
                        title: name, // Заголовок
                        text: desc, // Текст
                        url: link, // ссылка
                    }
                )
            } catch (err) {
                console.error("Share failed:", err.message);
            }
        },
        // TIPS HERE
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
        // VIDEO SLIDER
        swiperNext() {
            this.$refs.swiper_box.$swiper.slideNext()
        },
        swiperPrev() {
            this.$refs.swiper_box.$swiper.slidePrev()
        },
        touchStartIPhone(swiper) {
            if (this.useIPhone) {
                let index = swiper.activeIndex
                if (this.startVideoCheckIPhone) {
                    this.$refs.recommended_item[index].$el.querySelector('.video-player__boxIPhone').classList.remove("active");
                }
            }
        },
        touchEndIPhone(swiper) {
            if (this.useIPhone) {
                let index = swiper.activeIndex
                if (this.startVideoCheckIPhone) {
                    this.$refs.recommended_item[index].$el.querySelector('.video-player__boxIPhone').classList.add("active");
                }
            }
        },
        onSlideChange(swiper) {
            this.countSlider = swiper.activeIndex
            let index = swiper.activeIndex
            let $listItem = this.$refs.recommended_item
            // check active slide in slider for load videos
            if ((this.countSlider + 1 === $listItem.length - 1) && $listItem.length < this.videosCount) {
                this.$emit('load-new', ['swipe']);
            }
            if (!this.useIPhone) {
                if (!this.checkedMuted) {
                    if (index != 0) {
                        if ($listItem[index - 1].$el.querySelector('video')) {
                            if (!$listItem[index - 1].$el.querySelector('video').paused) {
                                $listItem[index - 1].$el.querySelector('.video-player__box').click()
                            }
                        }
                    }
                    if ($listItem[index].$el.querySelector('video')) {
                        // $listItem[index].$el.querySelector('.video-player__box').click()
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
                    if (index + 1 <= this.videos.length - 1) {
                        if ($listItem[index + 1].$el.querySelector('video')) {
                            if (!$listItem[index + 1].$el.querySelector('video').paused) {
                                $listItem[index + 1].$el.querySelector('.video-player__box').click()
                            }
                        }
                    }
                }
            } else {
                // console.log('index: ' + index)
                if (index != 0) {
                    if ($listItem[index - 1].$el.querySelector('.video-player__boxIPhone')) {
                        // console.log("------------------------------")
                        // console.log($listItem[index - 1].$el.querySelector('.video-player__boxIPhone').classList.contains('active'))
                        if ($listItem[index - 1].$el.querySelector('.video-player__boxIPhone').classList.contains('active')) {
                            $listItem[index - 1].$el.querySelector('.video-player__boxIPhone').classList.remove("active");
                            $listItem[index - 1].$el.querySelector('.video-player__boxIPhone').classList.remove("play");
                        }
                    }
                }
                if (index + 1 <= this.videos.length - 1) {
                    if ($listItem[index + 1].$el.querySelector('.video-player__boxIPhone')) {
                        if ($listItem[index + 1].$el.querySelector('.video-player__boxIPhone').classList.contains("active")) {
                            $listItem[index + 1].$el.querySelector('.video-player__boxIPhone').classList.remove("active");
                            $listItem[index + 1].$el.querySelector('.video-player__boxIPhone').classList.remove("play");
                        }
                    }
                }
                this.videoIPhone = this.videos[index].src;
                if (this.startVideoCheckIPhone) {
                    if ($listItem[index].$el.querySelector('.video-player__boxIPhone')) {
                        $listItem[index].$el.querySelector('.video-player__boxIPhone').click()
                    }
                }
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
                console.log('no')
                //this.$router.push({name: 'auth'})
            }
        },
        yakassaBuyVideo(video) {
            this.paymentPreloader = true;
            this.videoToBuy = video;
            axios.get('/yakassa/charge/video?video_id='+video.id).then((resp) => {
                const status = parseInt(resp.data.status_code);
                if (status == 200) {
                    window.location.href = '/account/'+video.user.username;
                } else if(status == 204) {
                    this.no_money = true;
                }
                this.paymentPreloader = false;
            });
        },
        yakassaSetupBuyVideo(video) {
            this.videoToBuy = video;
            this.no_money = false;
            this.paymentPreloader = true;
            window.open('/yakassa/card/video/bank_card/'+video.id, '_blank');
        },
        onSwiper() {
            if (this.$refs.desc) {
                this.$refs.desc.forEach(function (value, key) {
                    value.style.maxHeight = 'max-content'
                    if (value.clientHeight <= 36) {
                        value.querySelector('span').classList.add('hide')
                        value.style.maxHeight = 'max-content'
                    } else {
                        value.style.maxHeight = '36px'
                        value.querySelector('span').classList.remove('hide')
                        value.querySelector('span').classList.remove('hide')
                    }
                });
            }
        },
        getUrlVars() {
            let vars = {};
            let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
                vars[key] = value;
            });
            return vars;
        },
        openList(index, src) {
            console.log(index)
            let thi = this;
            setTimeout(function () {
                thi.onSwiper();
            }, 100)
            this.dialog = true
            this.$refs.swiper_box.$swiper.activeIndex = index
            setTimeout(this.maxCountOn(index), 1000)
            if (this.useIPhone) {
                this.videoIPhone = src
            }
        },
        closeList() {
            this.dialog = false
            this.$emit('video-close');
            if (this.videos[this.countSlider].available) {
                if (this.useIPhone) {
                    this.$refs.videoIPhone.pause()
                    this.$refs.recommended_item[this.countSlider].$el.querySelector('.video-player__boxIPhone').classList.remove("play");
                } else {
                    let video = this.$refs.recommended_item[this.countSlider].$el.querySelector('.video-player__box').offsetParent.children[0]
                    this.$refs.recommended_item[this.countSlider].$el.querySelector('.video-player__box').classList.remove('active')
                    setTimeout(function () {
                        if (!video.paused) {
                            video.pause();
                        }
                    }, 100)
                }
            }
        },
        maxCountOn(index) {
            this.countSlider = index
        },
        startVideo(event) {
            this.checkedMuted = false
            let video = event.target.parentElement.querySelector('video')
            if (!video) {
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
            } else if (event.target.classList[0] == 'shadow') {
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
        descToggle(e) {
            // console.log(e)
            e.target.parentElement.classList.toggle("active");
        },
        openDialogDelay(id, index) {
            this.delayId = id
            this.delayIndex = index
            this.dialogDelay = true
        },
        itemDelay(id, index) {
            let indexSSS = index
            axios
                .post('/delete/' + id)
                .then(response => {
                    this.itemListDelay(indexSSS)
                });
        },
        itemListDelay(index) {
            this.dialogDelay = false
            this.dialog = false;
            this.$emit('item-removed', [index]);
        },
        redirectToLogin(item = null) {
            if (!item) {
                window.location.href = '/login';
            } else {
                window.location.href = '/login?back=/account/' + item.user_id;
            }
        }
    },
    components: {
        Swiper,
        SwiperSlide
    }
}
export default AccountSlider;
</script>

<style scoped>
</style>
