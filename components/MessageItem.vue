<template>
    <div :class="messageAddClass(messageData)" :style="getStyle(messageData)">
        <div class="img" :style="{'overflow': (messageData.sender_id != getUser.id && messageData.paid == 0) ? 'revert' : 'hidden'}"  v-if="messageData.type==1">
            <expandable-image :src="messageData.related.src" alt="" v-if="messageData.paid == 1"></expandable-image>
            <div class="blured" v-if="messageData.paid != 1">
                <img  :src="messageData.related.blured"  alt="" >&lt;!&ndash;</img>&ndash;&gt;
            </div>
            <div class="img__box-price" v-if="messageData.paid != 1">
                {{messageData.related.price}}₽
                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6389 6.40625H11.5555V5.15624C11.5555 2.74385 9.28769 0.78125 6.5 0.78125C3.71231 0.78125 1.44446 2.74385 1.44446 5.15624V6.40625H0.361122C0.161518 6.40625 0 6.54603 0 6.71876V14.5313C0 15.2207 0.647799 15.7812 1.44446 15.7812H11.5556C12.3522 15.7812 13 15.2207 13 14.5312V6.71876C13 6.54603 12.8385 6.40625 12.6389 6.40625ZM7.58123 12.9343C7.59251 13.0225 7.55974 13.111 7.49132 13.1772C7.4229 13.2434 7.32486 13.2813 7.22225 13.2813H5.77779C5.67518 13.2813 5.57714 13.2434 5.50872 13.1772C5.4403 13.111 5.40749 13.0225 5.4188 12.9343L5.6466 11.1615C5.27668 10.9287 5.05558 10.5603 5.05558 10.1562C5.05558 9.46687 5.70338 8.90624 6.50003 8.90624C7.29669 8.90624 7.94449 9.46684 7.94449 10.1562C7.94449 10.5603 7.72339 10.9287 7.35346 11.1615L7.58123 12.9343ZM9.38888 6.40625H3.61112V5.15624C3.61112 3.77776 4.90709 2.65625 6.5 2.65625C8.09291 2.65625 9.38888 3.77776 9.38888 5.15624V6.40625Z" fill="white"/>
                </svg>
            </div>
            <div class="borders" :style="{bottom : (messageData.paid == 0 && messageData.sender_id != getUser.id) ? '60px' : '14px'}">
                <div class="text-time">{{getMessageTime(messageData)}}</div>
            </div>
            <div class="btn-pay" v-if=" (!messageData.paid && messageData.sender_id != getUser.id) && card_exist" @click="follow(index)">Оплатить</div>
            <div class="btn-pay" v-if="(!messageData.paid && messageData.sender_id != getUser.id) && !card_exist" @click="setupFollow(message)">Оплатить</div>
        </div>
        <div class="text" style="word-break: break-all;"  v-if="messageData.type==0" >
            {{messageData.message}}
            <div class="text-time">{{getMessageTime(messageData)}}</div>
        </div>
        <div class="video" @click="openList(0,message)" v-if="messageData.type == 2">
            <div class="video__box" style="height: inherit;">
                <div class="video__box-time">
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.05022 0.393555H1.75053C0.787737 0.393555 0 1.18129 0 2.14408V8.04336C0 9.00615 0.787737 9.79388 1.75053 9.79388H9.05022C10.013 9.79388 10.8007 9.00615 10.8007 8.04336V2.14408C10.8007 1.16379 10.013 0.393555 9.05022 0.393555Z" fill="white"/>
                        <path d="M14.7042 1.35632C14.5992 1.37383 14.4941 1.42634 14.4066 1.47886L11.6758 3.05433V7.11555L14.4241 8.69102C14.9318 8.98861 15.562 8.81356 15.8595 8.3059C15.9471 8.14836 15.9996 7.9733 15.9996 7.78075V2.37163C15.9996 1.72393 15.3869 1.19877 14.7042 1.35632Z" fill="white"/>
                    </svg>
                </div>
                <div class="video__box-price" v-if="messageData.paid == 0">
                    {{messageData.related.price}}₽
                    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6389 6.40625H11.5555V5.15624C11.5555 2.74385 9.28769 0.78125 6.5 0.78125C3.71231 0.78125 1.44446 2.74385 1.44446 5.15624V6.40625H0.361122C0.161518 6.40625 0 6.54603 0 6.71876V14.5313C0 15.2207 0.647799 15.7812 1.44446 15.7812H11.5556C12.3522 15.7812 13 15.2207 13 14.5312V6.71876C13 6.54603 12.8385 6.40625 12.6389 6.40625ZM7.58123 12.9343C7.59251 13.0225 7.55974 13.111 7.49132 13.1772C7.4229 13.2434 7.32486 13.2813 7.22225 13.2813H5.77779C5.67518 13.2813 5.57714 13.2434 5.50872 13.1772C5.4403 13.111 5.40749 13.0225 5.4188 12.9343L5.6466 11.1615C5.27668 10.9287 5.05558 10.5603 5.05558 10.1562C5.05558 9.46687 5.70338 8.90624 6.50003 8.90624C7.29669 8.90624 7.94449 9.46684 7.94449 10.1562C7.94449 10.5603 7.72339 10.9287 7.35346 11.1615L7.58123 12.9343ZM9.38888 6.40625H3.61112V5.15624C3.61112 3.77776 4.90709 2.65625 6.5 2.65625C8.09291 2.65625 9.38888 3.77776 9.38888 5.15624V6.40625Z" fill="white"/>
                    </svg>
                </div>

                <div @click="openList(0,messageData)" :class="{'blured': messageData.paid == 0}" style="height: inherit; max-width: inherit;">
                    <img :src="messageData.related.thumbnail" style="max-width: 300px; max-height: 264px; width: auto;">
                </div>
                <div class="borders" :style="{'bottom: 60px': messageData.paid == 0 && messageData.sender_id != getUser.id}">
                    <div class="text-time">{{getMessageTime(messageData)}}</div>
                </div>
            </div>
            <div class="video__btn" v-if="(messageData.paid == 0 && messageData.sender_id != getUser.id) && card_exist" @click="follow(index)">Оплатить</div>
            <div class="video__btn" v-if="(messageData.paid == 0 && messageData.sender_id != getUser.id) && !card_exist" @click="setupFollow(messageData)">Оплатить</div>
        </div>
        <div v-if="messageData.type == 3">
            <div class="only-sum">
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.4979 6.46943C48.0289 2.5765 44.3028 0 40.1419 0H9.99999C4.47715 0 0 4.47715 0 10V48C0 53.5229 4.47715 58 10 58H40.1419C44.3028 58 48.0289 55.4235 49.4979 51.5306L56.6677 32.5306C57.5264 30.2552 57.5264 27.7448 56.6677 25.4694L49.4979 6.46943Z" fill="url(#paint0_linear)"/>
                    <path d="M29.8 33.6H21.75V37.65H34.15V41.05H21.75V47H17.15V41.05H12.9V37.65H17.15V33.6H12.9V29.4H17.15V12H29.8C32.8333 12 35.4167 13.0667 37.55 15.2C39.6833 17.3 40.75 19.85 40.75 22.85C40.75 25.85 39.6833 28.4 37.55 30.5C35.45 32.5667 32.8667 33.6 29.8 33.6ZM21.75 16.35V29.4H29.8C31.5333 29.4 33.0167 28.7667 34.25 27.5C35.5167 26.2 36.15 24.65 36.15 22.85C36.15 21.05 35.5333 19.5167 34.3 18.25C33.0667 16.9833 31.5667 16.35 29.8 16.35H21.75Z" fill="white"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="58" y1="0" x2="0" y2="58" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#36CC76"/>
                            <stop offset="1" stop-color="#36CC76" stop-opacity="0.6"/>
                        </linearGradient>
                    </defs>
                </svg>
                <div v-if="!messageData.paid">
                    <div v-if="messageData.sender_id != getUser.id">
                        Вам выставлен счет на сумму: {{messageData.related.amount}}руб
                    </div>
                    <div v-else>
                        Выставлен счет на сумму: {{messageData.related.amount}}руб
                    </div>
                </div>
                <div v-else>
                    Счет успешно оплачен на сумму: {{messageData.related.amount}}руб
                </div>
                <div class="text-time">{{getMessageTime(messageData)}}</div>
            </div>
            <div v-if="!messageData.paid && message.sender_id != getUser.id">
                <div v-if="card_exist" class="btn-pay" @click="follow(index)">Оплатить</div>
                <div v-else class="btn-pay" @click="setupFollow(messageData)">Оплатить</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import VueExpandableImage from 'vue-expandable-image'
const MessageItem = {
    props: ['message', 'getUser', 'index'],
    data: () => ({
       messageData: ''
    }),
    components: {
        VueExpandableImage,
    },
    mounted() {
        this.messageData = this.message;
        if (this.message.type === 2) {
            if (this.message.related.converted_for_streaming_at === null) {
                this.messageData = {
                    id: this.message.id,
                    type: 2,
                    sender_id: this.message.sender_id,
                    created_at: new Date().toISOString(),
                    related:{
                        src: '/image/load.gif',
                        thumbnail: "/image/load.gif",
                        converted_for_downloading_at: "true",
                        converted_for_streaming_at: "true"
                    }
                }
            }
        }
    },
    computed: {
        card_exist(){
            return this.getUser.cards.length > 0 ? true : false;
        },
        ...mapGetters([
            'getSocket'
        ]),
    },
    methods: {
        getMessageTime(message){
            let newMessageTime = new Date(message.created_at)
            let time = (+newMessageTime.getMinutes()) >= 10 ? newMessageTime.getMinutes() : ('0' + newMessageTime.getMinutes())
            return newMessageTime.getHours() + ":" + time;
        },
        messageAddClass(message){
            console.log(message)
            let addClasses = "chat__item ";
            if (message.sender_id == this.getUser.id)
                addClasses  += "you ";
            if(message.type == 3)
                addClasses += "pay ";
            return addClasses;
        },
        getStyle(message){
            let styles = ""
            if((message.type == 1 || message.type == 2) && message.sender_id != this.getUser.id && message.paid == 0){
                //styles = "margin-bottom: 55px;"
            }
            return styles;
        },
        openList(index, message) {
            this.$emit('video-open', [{index: index, message: message}])
        },
        setupFollow(message=null) {
            this.$emit('setup-foll', [message]);
        },
        follow(index) {
            this.preloader_2 = true;
            axios.get("/messages/pay?message_id=" + this.messageList[index].id).then((resp) => {
                const status = parseInt(resp.data.status_code);
                if (status === 200) {
                    this.messageList[index].paid = 1
                } else if(status === 204) {
                    this.messageToPay = index
                    this.no_money = true;
                }
                this.preloader_2 = false;
            }).catch(function(error){
                console.log(error)
            });
        },
    }
}
export default MessageItem;
</script>

<style scoped>
</style>
