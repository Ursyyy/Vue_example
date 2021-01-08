
<template>
    <div>
        <div class="page-chat" :class="{noScroll: scroll}">
<!--            <div class="preloader" :class="{none:preloader, none2: firstRender}"></div>-->
            <div class="page-chat__title" >
                <div class="page-chat__title-box">
                    <a class="beck" @click="$router.go(-1)">
                        <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.1708 2.03017L3.18474 9.5L11.1708 16.9698L11.366 17.1524L11.1708 17.335L10.2646 18.1826L10.0939 18.3423L9.92312 18.1826L0.829288 9.68264L0.633266 9.49942L0.829867 9.31682L1.74182 8.46983L1.74246 8.46922L9.92305 0.817421L10.0938 0.657683L10.2646 0.817421L11.1708 1.66502L11.366 1.8476L11.1708 2.03017Z"
                                fill="#2F80ED" stroke="#2F80ED" stroke-width="0.5"/>
                        </svg>
                        <span>Назад</span>
                    </a>
                    <h2>{{friend.name}}</h2>
                    <div class="status" :class="{active: userOnline.status}">{{userOnline.time}}</div>
                    <a @click="$router.push({name: 'account', params:{username: friend.username}})" class="user">
                        <img v-if="friend.avatar != '/avatar.jpg'" :src="friend.avatar" alt="" style="border-radius: 50%">
                        <span v-else class="avatar-none" :class="'bgColor-'+ friend.id % 7">
                        {{friend.name.slice(0,1)}}
                    </span>
                    </a>
                </div>
            </div>
            <div class="page-chat__content" :class="{noScroll: scroll}">
                <div id="chat" class="list-chat" :class="{noScroll: scroll}" >
<!--                    <div direction="top" class="page-account__videoPreloader post_load" :class="{noDisplay: allUpload}" :distance="100" @infinite="infiniteHandler" v-if="!allUpload || dist"></div>-->
                    <infinite-loading direction="top" :class="{noDisplay: allUpload}" :distance="100" @infinite="infiniteHandler" v-if="!allUpload || dist">
                        <div slot="spinner">
                            <div class="page-account__videoPreloader post_load"></div>
                        </div>
                    </infinite-loading>
                    <div id="chat-content" class="chat" :class="{noScroll: scroll}"  v-if="messageList.length != 0" >
                        <message-item
                            v-for="(message, index) in messageList"
                            :message="message"
                            :index="index"
                            :getUser="getUser"
                            :key="message.id"
                            @video-open="openList"
                            @setup-foll="followSetupFromItem"
                        ></message-item>
                    </div>

                    <div class="preview-info" v-else-if="firstRender && messageList.length != 0">
                        <p>
                            🔒 Ваши диалоги и сообщения защищены сквозным шифрованием. Третьи лица, включая FriendsOnly не могут прочитать их.
                        </p>
                    </div>
                    <div class="preloader" v-else></div>

                </div>
                <div class="panel" ref="inputPanel" id="inputPanel" @click="focusTextArea()" style="max-height: 150px; resize: vertical;">
                    <div class="panel__add"  @click="switchOnClass('plus')">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.0832 10.0833H11.9166V0.91668C11.9166 0.410403 11.5062 0 10.9999 0C10.4937 0 10.0833 0.410403 10.0833 0.91668V10.0833H0.91668C0.410403 10.0833 0 10.4937 0 10.9999C0 11.5062 0.410403 11.9166 0.91668 11.9166H10.0833V21.0833C10.0833 21.5895 10.4937 21.9999 11 21.9999C11.5063 21.9999 11.9167 21.5895 11.9167 21.0833V11.9166H21.0833C21.5896 11.9166 22 11.5062 22 10.9999C22 10.4937 21.5895 10.0833 21.0832 10.0833Z" fill="#2F80ED"/>
                        </svg>
                    </div>
                    <div class="form__group">
                        <!--<div contenteditable="true" placeholder="Сообщение..." class="textareaDiv" v-model="message_text"></div>-->
                        <textarea v-autosize type="text" @focus="focusTextArea" autofocus placeholder="Сообщение..."
                                  style="border-radius: 20px;max-height: 100px; padding-left: 13px; padding-top: 5px;"
                                  @keypress.enter=""  oninput="textarea_resize(event,30,1)" id="chatTextarea" ref="input"
                                  v-model="message_text"></textarea>
                        <div id="chatTextarea_div" ></div>
                        <button id="chatTextarea_btn" :class="{'active':message_text != null}" @click="send">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 2L2.5 1.5L15 6.40039L25 12.4004L4.5 11.9004L1.5 2Z" fill="#2F80ED"/>
                                <path d="M24.7375 11.3277C24.4806 10.7835 24.0523 10.3441 23.522 10.0805L3.76094 0.269478C2.45917 -0.377609 0.892687 0.180621 0.26201 1.51626C-0.0592884 2.19678 -0.0862977 2.98473 0.187683 3.68672L3.6239 12.499L0.187683 21.3123C-0.347541 22.6948 0.310913 24.2607 1.65836 24.8098C1.96303 24.934 2.28771 24.9985 2.61555 25C3.0122 25 3.40373 24.9082 3.76094 24.7313L23.5219 14.9175C24.8238 14.2706 25.368 12.6634 24.7375 11.3277ZM3.00054 23.1163C2.56655 23.3318 2.04442 23.1456 1.83433 22.7003C1.72726 22.4735 1.71836 22.2108 1.80972 21.9769L5.15514 13.3947H22.5817L3.00054 23.1163ZM5.15519 11.6033L1.80977 3.02116C1.67053 2.67906 1.75698 2.28401 2.02539 2.03586C2.2852 1.77611 2.6775 1.71517 3.00054 1.88449L22.5817 11.6033H5.15519Z" fill="#2F80ED"/>
                                <path d="M5 13H24L17 17L1 24L5 13Z" fill="#2F80ED"/>
                                <rect x="3" y="12" width="22" height="1" fill="#FAFAFA"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="popups popupsMessagePlus popupsAnim " :class="{active: classes.plus}">
            <div class="popups__bgClose" :class="{active: classes.plus}" @click="switchOffClass('plus')"></div>
            <div class="popupsAnim__content" :class="{active: classes.plus_content}">
                <div class="popups__content">
                    <div class="btn btn-popupsAnim" @click="switchOffClassPlus('file')">Фото или видео</div>
                    <!--<div class="btn btn-popupsAnim" data-href="#popupsMessageDonation">Пожертвование</div>-->
                    <div class="btn btn-popupsAnim" data-href="#popupsMessageBill" @click="switchOffClassPlus('bill')">Выставить счет </div>
                </div>
                <div class="popups__footer">
                    <div class="btn close"  @click="switchOffClass('plus')">Отмена</div>
                </div>
            </div>
        </div>
        <div class="popups popupsMessageBill popupsAnim " :class="{active: classes.bill}">
            <div class="popups__bgClose" :class="{active: classes.bill}" @click="switchOffClass('bill')"></div>
            <div class="popupsAnim__content" :class="{active: classes.bill_content}">
                <div class="popups__content">
                    <h2 style="font-size: 15px;">Выставить счет</h2>
                    <div class="form__group">
                        <input type="numder" inputmode="numeric" placeholder="0" v-model="price">
                    </div>
                    <div class="btn close" @click="send(); switchOffClass('bill')">Отправить</div>
                </div>
                <div class="popups__footer">
                    <div class="btn close" @click="cancel(); switchOffClass('bill')" >Отмена</div>
                </div>
            </div>
        </div>
        <!--<div class="popups popupsMessageBill popupsAnim" id="popupsMessageDonation">
            <div class="popups__bgClose"></div>
            <div class="popupsAnim__content">
                <div class="popups__content">
                    <h2>Пожертвование</h2>
                    <div class="form__group">
                        <input type="text" value="550" placeholder="0">
                    </div>
                    <div class="btn">Отправить</div>
                </div>
                <div class="popups__footer">
                    <div class="btn close">Отмена</div>
                </div>
            </div>
        </div> -->
        <div class="popups popupsMessageBill popupsAnim" :class="{active: classes.file}">
            <div class="popups__bgClose" :class="{active: classes.file}" @click="switchOffClass('file')"></div>
            <div class="popupsAnim__content" :class="{active: classes.file_content}">
                <div class="popups__content">
                    <div class="box-first">
                        <div class="box-file">
                            <div class="box-file__content" id="fileChatContent">
                                <div class="list-img__item"   v-if="file != null">
                                    <img :src="src" id="uploadFile" >
                                </div>
                            </div>
                            <div class="group"  v-if="file == null">
                                <label for="fileChat" class="btn" >Добавить видео/фото</label>
                                <input class="inputFile" type="file"  id="fileChat" ref="file" @change="onFileChange()">
                            </div>
                            <div class="box-last" v-if="inputPrice">
                                <h2 style="font-size: 15px;">Введите сумму</h2>
                                <input  type="number"  placeholder="0" v-model="price" style="background-position: 96px 17px;" inputmode="numeric">
                            </div>
                            <div class="btn-finish close" id="fileChatBtn" @click="send(); switchOffClass('file')" v-if="file != null" >Отправить<span></span></div>
                        </div>
                        <div class="btn btn-addBill" v-if="price==null && !inputPrice" @click="inputPrice = true">Прикрепить счёт </div>
                    </div>
                </div>
                <div class="popups__footer">
                    <div class="btn close" @click="cancel(); switchOffClass('file')">Отмена</div>
                </div>
            </div>
        </div>
        <div class="main-slider account-slide" :class="{active:dialog}" v-show="dialog">
            <div class="account-slide__back" @click="closeList()">
                <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.36037 8.50359L9.7282 2.14366C9.90354 1.96896 10 1.73538 10 1.48633C10 1.23713 9.90354 1.00369 9.7282 0.828715L9.17022 0.271724C8.99516 0.0964715 8.76114 0 8.51176 0C8.26239 0 8.02865 0.0964715 7.85345 0.271724L0.271523 7.84377C0.0956306 8.0193 -0.000688238 8.25385 3.70763e-06 8.50318C-0.000688238 8.75362 0.0954922 8.98789 0.271523 9.16355L7.84639 16.7283C8.02159 16.9035 8.25533 17 8.50484 17C8.75422 17 8.98796 16.9035 9.1633 16.7283L9.72115 16.1713C10.0841 15.8088 10.0841 15.2186 9.72115 14.8562L3.36037 8.50359Z"
                        fill="white"></path>
                </svg>
                Назад
            </div>
            <div class="main-sliderList">
                <div class="main-slider__recommended">
                    <swiper ref="swiper_box"
                            :options="swiperOption">
                        <swiper-slide ref="recommended_item" class="item" v-for="(item, index) in listVideos"
                                      :key="index">
                            <div class="swipeBox"
                                 v-if="index == 0"
                                 ref="recommended_video">
                                <div class="video-player" >
                                    <!--  Android  -->
                                    <video loop="" :src="item.related.src" webkit-playsinline="true" playsinline=""
                                           :poster="item.related.thumbnail"></video>
                                    <div class="video-player__box" @click="startVideo($event)"></div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="video-playerIPhone" v-if="getIPhone">
                        <video ref="videoIPhone" :src="videoIPhone" loop="" webkit-playsinline="true"
                               playsinline=""></video>
                    </div>
                </div>
            </div>
        </div>
        <div :class="no_money ? 'popups popupsBottom active' : 'popups popupsBottom'">
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
                    <div @click="setupFollow(null)" class="btn">Привязать новую карту</div>
                </div>
            </div>
            <div class="popups__footer">
                <div class="btn close">Отмена</div>
            </div>
        </div>
        <div :class="this.preloader_2 ? 'load-payment active' : 'load-payment'">
            <img src="/image/load/load-new.gif" alt="">
            <p>Ваш платеж обрабатывается, пожалуйста подождите</p>
        </div>
    </div>
    </div>
</template>
<script>
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
import 'swiper/swiper.scss'
import 'swiper/swiper-bundle.css'

import InfiniteLoading from 'vue-infinite-loading';

import MessageItem from "./MessageItem";
import autosize from 'v-autosize';
function clearActive(){
    $('#popupsMessageFile').removeClass('active');
    $('#popupsMessageBill').removeClass('active')
}

function clearTextArea(){
    document.querySelector('#chatTextarea').value = null;
    document.getElementById("chatTextarea").style.height = 32;
    document.getElementById("inputPanel").style.height = 53;
}

function animateScroll(duration) {
    let start = document.getElementById('chat').scrollTop;
    let end = document.getElementById('chat').scrollHeight;
    let change = end - start;
    let increment = 20;
    function easeInOut(currentTime, start, change, duration) {
        currentTime /= duration / 2;
        if (currentTime < 1) {
            return change / 2 * currentTime * currentTime + start;
        }
        currentTime -= 1;
        return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
    }
    function animate(elapsedTime) {
        elapsedTime += increment;
        let position = easeInOut(elapsedTime, start, change, duration);
        document.getElementById('chat').scrollTop = position;
        if (elapsedTime < duration) {
            setTimeout(function() {
                animate(elapsedTime);
            }, increment)
        }
    }
    animate(0);
}
function scrollToBottom() {
    let duration = 400
    animateScroll(duration);
}
import {mapGetters} from 'vuex'

const Messages = {
    //props:['user', "chat_id", "card_exist"],
    name: "page-chats",
    components: {
        Swiper,
        SwiperSlide,
        InfiniteLoading,
        MessageItem
    },
    directives: {
        swiper: directive,
        autosize,
    },
    data: () => ({
        preloader: true,
        messageToPay: null,
        message_text: null,
        messageList: [],
        classes: {
            bill: false,
            bill_content: false,
            file: false,
            file_content: false,
            plus: false,
            plus_content: false
        },
        scroll: false,
        firstRender: false,
        friend: {
            name:"",
        },
        userOnline: {
            time: '',
            status: false
        },
        swiperOption: {
            direction: 'vertical',
            pagination: false
        },
        src: null,
        errors: false,
        inputPrice: false,
        price: null,
        file: null,
        type: null,
        chat_id: -1,
        dialog: false,
        videoIPhone: null,
        listVideos: [],
        is_pay: false,
        no_money: null,
        preloader_2: false,
        uploadFileCount: 0,
        allUpload: false,
    }),
    computed: {

        ...mapGetters([
            'getUser',
            'getIPhone',
            'getSocket'
        ]),

        friendLink(){
            return "/account/" + this.friend.id;
        },
        messageEmpty(){
            return this.message_text != null && this.message_text.trim().length > 0;
        },
        inpPrice:{
            get:function(){
                return this.price;

            },
            set:function(newValue){
                this.price=newValue.replace(/[^\d]/g,'');
            }
        },
        dist(){
            return (this.messageList.length >= 30);
        }
    },
    mounted() {
        this.chat_id = this.$router.currentRoute.params.id
        this.updateMessages();
        this.focusTextArea();
        setTimeout(() => {
            this.firstRender = true;
        }, 1000)
    },
    methods: {
        send(){
            if(this.file != null || this.price != null || this.messageEmpty){
                let isFile = false,
                    mesIdDel = -1;
                let formt = new FormData();
                if(this.file != null){
                    formt.append("type", this.type)
                    formt.append("file", this.file)
                    isFile = true;
                    mesIdDel = --this.uploadFileCount
                    this.messageList.unshift({
                        id: mesIdDel,
                        type: 1,
                        paid: 1,
                        sender_id: this.getUser.id,
                        created_at: new Date().toISOString(),
                        related:{
                            src: '/image/load.gif',
                            thumbnail: "/image/load.gif",
                            converted_for_downloading_at: "true",
                            converted_for_streaming_at: "true"
                        }
                    })
                    scrollToBottom();
                }
                if (this.price != null){
                    formt.append("price", this.price)
                    this.price = null
                    this.inputPrice = false
                }
                if(this.file == null && this.price == null){
                    formt.append('message', this.message_text);
                    this.message_text = null
                }
                formt.append('chat_id', this.chat_id);
                formt.append('receiver_id', this.getUser.id);
                this.cancel()
                axios
                    .post("/messages/send", formt, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                    .then(response => {
                        if(response.status == 200){
                            if(isFile){
                                this.uploadFileCount++;
                                let index = this.messageList.findIndex(p => p.id == mesIdDel)
                                if(response.data.data.message.type == 2){
                                    this.messageList[index] = response.data.data.message
                                    this.$forceUpdate();
                                }
                                else{
                                    this.$forceUpdate();
                                }
                            }
                            else{
                                this.messageList.unshift(response.data.data.message)
                            }
                            scrollToBottom()
                            this.cancel()
                            this.focusTextArea()
                            this.$refs.input.focus();
                            clearTextArea()
                        }
                    })
                    .catch(
                        function (error) {
                            console.log(error)
                        })
            }
            else{
                this.message_text = null;
                clearTextArea();
            }
            this.$refs.input.focus();
            this.focusTextArea();
            clearTextArea();

        },
        followSetupFromItem: function(data) {
            this.setupFollow(data[0])
        },
        setupFollow(message=null) {
            this.preloader_2 = true;
            this.no_money = false;
            if(message == null){
                message = this.messageList[this.messageToPay]
            }
            axios
                .get('/messages/pay/setup/'+ message.id)
                .then(response =>{
                    window.open(response.data.redirect_url, "_blank");
                })
        },
        focusTextArea(){
            document.querySelector("#chatTextarea").addEventListener("focus", function() {
                let t = this;
                t.focus();
                setTimeout(function() { // Some browsers won't let you do it until
                    t.focus();          // after the blur has completed
                }, 100);
            });
        },
        cancel(){
            this.price = null;
            this.file = null;
            this.type = null;
            this.inputPrice = false;
            clearActive();
        },
        onFileChange() {
            let file = this.$refs.file.files[0];
            if (file) {
                this.type = file.type.split("/")[0];
                this.file = file;
                this.src = URL.createObjectURL(file);
            }
        },
        startVideo(event, message) {
            let video = event.target.parentElement.querySelector('video')
            setTimeout(function () {
                event.target.classList.toggle("active");
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            }, 100)
        },
        switchOnClass(name){
            this.classes[name] = true
            setTimeout(() => {
                this.classes[name + '_content'] = true
            }, 100)
        },
        switchOffClass(name){
            this.classes[name + '_content'] = false
            setTimeout(() => {
                this.classes[name] = false
            }, 100)
        },
        switchOffClassPlus(name){
            this.switchOffClass('plus')
            setTimeout(()=> {this.switchOnClass(name)}, 120)
        },
        deleteMessage(messageID){
            let status_code = -1;
            fetch(`/messages/delete/message/${messageID}`)
                .then(response => {
                    status_code = responce.status_code
                })
                .catch(function (error) {
                    console.log(error)
                    this.errors = error
                })
        },
        scrollDown(top = 9999999999) {
            setTimeout(function () {
                document.getElementById('chat').scrollTop = top;
            }, 400);
            setTimeout(function () {
                document.getElementById('chat-content').scrollTop = top;
            }, 400);
        },
        updateMessages(){
            axios
                .get('/messages?chat_id='+this.chat_id)
                .then(response => {
                    this.messageList = response.data.data.messages
                    this.friend = response.data.data.participants[0].id != this.getUser.id ? response.data.data.participants[0] : response.data.data.participants[1]
                    this.lastOnline(this.friend.last_online_at);
                    console.log(this.userOnline)
                    this.preloader = true
                    this.scrollDown()
                })
                .catch(function (error) {
                    console.log(error)
                })
        },

        openList(data) {
            console.log(data)
            // if(data[0].message.paid == 1 && data[0].message.related.converted_for_streaming_at != null){
                console.log(this.dialog)
                this.dialog = true
                console.log(this.dialog)
                this.listVideos.push(data[0].message)
                this.$refs.swiper_box.$swiper.activeIndex = data[0].index;
                //setTimeout(this.maxCountOn(index), 1000)
                if (this.getIPhone) {
                    this.videoIPhone = data[0].message.related.src
                }
            // }
        },
        closeList() {
            this.dialog = false
            this.listVideos = []
            if (this.getIPhone) {
                this.$refs.videoIPhone.pause()
                //this.$refs.recommended_item[this.countSlider].$el.querySelector('.video-player__boxIPhone').classList.remove("play");
                this.videoIPhone = null
            } else {
                //this.$refs.recommended_item[this.countSlider].$el.querySelector('.video-player__box').click()
            }
        },
        infiniteHandler($state){
            let time = this.getIPhone ? 400 : 400;
            this.preloader = false
            this.scroll = true;
            let t = setTimeout(()=>{
                let count = this.messageList.length
                axios
                    .get(`/messages?chat_id=${this.chat_id}&last_id=${this.messageList[this.messageList.length - 1].id}`)
                    .then(response =>{
                        if(response.data.data.messages.length == 0){
                            this.preloader = true
                            this.scroll = false
                            this.allUpload = true
                            //$state.loaded()
                            //console.log(this.allUpload)
                            clearTimeout(t)
                            return
                        }
                        if(response.data.status_code == 200){
                            this.messageList = this.messageList.concat(response.data.data.messages)
                            $state.loaded()
                            if(length == this.messageList.length){
                                this.preloader = false
                                $state.complete()
                            }//
                            setTimeout(()=>{
                                this.preloader = true
                                this.scroll = false
                            }, 200)
                        }
                    })
                    .catch(function (error) {
                        $state.complete()
                        console.log(error)
                        this.preloader = true;
                        this.scroll = false;
                    })
            }, time)
            // this.preloader = true
            // this.scroll = false;
        },
        lastOnline(time) {
            let onlineTime = new Date(time),
                nowTime = new Date();
            if ((nowTime - onlineTime) / 1000 < 120) {
                this.userOnline.status = true;
                this.userOnline.time = 'online';
            } else {
                this.userOnline.time = 'был(а) недавно';
                this.userOnline.status = false;
            }
            // else if ((nowTime - onlineTime) / 1000 < 300) {
            //     this.lastTimeOnline = 'был(а) недавно';
            // } else if (nowTime.getDate() - onlineTime.getDate() === 0) {
            //     this.lastTimeOnline = `был(а) сегодня в ${onlineTime.getHours()}:${onlineTime.getMinutes()}`;
            // } else if (nowTime.getDate() - onlineTime.getDate() === 1) {
            //     this.lastTimeOnline = `был(а) вчера в ${onlineTime.getHours()}:${onlineTime.getMinutes()}`;
            // }
        },
    },

}

export default Messages
</script>

<style>
.page-chat .page-chat__title .status{
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #707579;
}
.page-chat .page-chat__title .status.active{
    color: #468ADE;
}

textarea::-webkit-resizer {
    background-color: transparent;
}

#uploadFile{
    max-width: 200px;
    max-height: 200px;
    border-radius: 25px;
    padding: 5px
}

#video_load{
    backround: black;
    width: auto;
    height: auto;
}

.noDisplay{
    display:none;
}

.noScroll{
    overflow: hidden;
}

textarea{
    padding-left: 13px;
    padding-top: 4px;
}
#chat .preloader{
    top: 0;
}
/*
.expandable-image img {
	width: 100%;
	border-radius: 10px;
}

.expandable-image{
	width: 100%;

	z-index: 0;
}

.you .expandable-image{
	width: 100%;
	border-radius: 25px;
	/*right: -37px;*

}*/
.page-chat .page-chat__title{
    height: 51px;
    max-height: 51px;
}
.page-chat .page-chat__title-box{
    height: 51px;
    max-height: 51px;
}
.page-chat .page-chat__content .chat__item .video{
    width: auto;
    height: auto;
    max-height: none;
}
</style>
