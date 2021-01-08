<template>
    <section>
        <div class="page-payment__form">
            <div class="box-info" v-if="!owner.first_free">
                <div class="box-info__content">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.7313 15.8011H20.1442L25.9214 0L8.27051 24.1989H19.8575L14.0804 40L31.7313 15.8011Z"
                              fill="#FFD83B"/>
                    </svg>
                    <div class="sum">
                        {{ followPrice() }}₽
                    </div>
                    <div class="time">В месяц</div>
                </div>
            </div>
            <div style="display: flex; justify-content: center; flex-direction: column" class="box-info" v-else>
                <div class="box-info__content">
                    <svg style="margin-left: auto; margin-right: auto;" width="46" height="43" viewBox="0 0 46 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path d="M8.23288 31H37.7681L40.961 14.6884C41.0319 14.3265 41.0057 13.9489 40.8858 13.6041C40.766 13.2592 40.5579 12.963 40.2885 12.7535C40.019 12.544 39.7005 12.4308 39.3739 12.4285C39.0473 12.4262 38.7275 12.5348 38.4558 12.7405L30.1795 19.0019L24.4635 6.02641C24.3276 5.71798 24.1187 5.45859 23.8602 5.27731C23.6017 5.09602 23.3038 5 23 5C22.6961 5 22.3983 5.09602 22.1398 5.27731C21.8813 5.45859 21.6724 5.71798 21.5365 6.02641L15.8205 19.0019L7.54398 12.7405C7.27224 12.5349 6.95251 12.4263 6.62594 12.4287C6.29936 12.431 5.98088 12.5442 5.71147 12.7537C5.44206 12.9632 5.23404 13.2594 5.11419 13.6042C4.99433 13.949 4.96812 14.3266 5.03892 14.6884L8.23288 31Z"
                                  fill="url(#paint0_linear)"/>
                        </g>
                        <g filter="url(#filter1_d)">
                            <path d="M8 33V36.3333C8 36.7754 8.17559 37.1993 8.48816 37.5118C8.80072 37.8244 9.22464 38 9.66667 38H36.3333C36.7754 38 37.1993 37.8244 37.5118 37.5118C37.8244 37.1993 38 36.7754 38 36.3333V33H8Z"
                                  fill="url(#paint1_linear)"/>
                        </g>
                        <defs>
                            <filter id="filter0_d" x="0" y="0" width="46" height="36" filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="2.5"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.870588 0 0 0 0 0.745098 0 0 0 0 0.337255 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            <filter id="filter1_d" x="3" y="28" width="40" height="15" filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="2.5"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.870588 0 0 0 0 0.745098 0 0 0 0 0.337255 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear" x1="5" y1="18" x2="41" y2="18"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#C29219"/>
                                <stop offset="1" stop-color="#FAEB93"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="8" y1="35" x2="38" y2="35"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#C19117"/>
                                <stop offset="1" stop-color="#F6E48A"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <div class="sum" style="display: flex; justify-content: center">Бесплатно</div>
                    <div class="time" style="text-align: center">Бесплатный период 3 дня. <br> Далее {{ followPrice() }} руб/мес</div>
                </div>
            </div>
            <div v-if="card_exist" class="btn-success" @click="follow">{{ buttonText() }}</div>
            <div v-else class="btn-success" @click="setupFollow">{{ buttonText() }}</div>
            <p>
                При нажатии на кнопку "{{ buttonText() }}" вы соглашаетесь с
                <a href="/OFERTA.pdf" target="_blank">условиями использования</a>
                и <a href="/PRIVACY.pdf" target="_blank">политикой конфиденциальности</a>.
            </p>
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
                    <div @click="setupFollow" class="btn">Привязать новую карту</div>
                </div>
            </div>
            <div class="popups__footer">
                <div class="btn close">Отмена</div>
            </div>
        </div>
        <div :class="this.preloader ? 'load-payment active' : 'load-payment'">
            <img src="/image/load/load-new.gif" alt="">
            <p>Ваш платеж обрабатывается, пожалуйста подождите</p>
        </div>
    </section>
</template>

<script>
import io from 'socket.io-client';
import {mapGetters, mapMutations} from 'vuex'
import { SET_LOAD } from '../store/types'

export default {
    name: "PaymentForm",
    //props: ['user', 'owner'],
    data() {
        return {
            owner: {},
            preloader: false,
            no_money: false,
            socket: null
        }
    },
    computed:{
        card_exist(){
            return this.getUser.cards.length > 0 ? true : false;
        },
        ...mapGetters([
            'getUser'
        ])
    },
    mounted() {
        this.setLoad(true)
        this.getOwner(this.$router.currentRoute.params.id)    
    },
    methods: {
        getOwner(id){
            axios
                .get(`/webapi/account/${id}`)
                .then(response => {
                    this.owner = response.data.user
                    this.setLoad(false)
                }).catch(function (error) {
                this.loadVideo = false
                console.log(error)
            })
        },
        setupFollow() {
            this.preloader = true;
            this.no_money = false;
            window.open('/yakassa/card/follow/bank_card/'+this.owner.id, "_blank");
        },
        follow() {
            this.preloader = true;
            axios.get('/yakassa/follow/'+this.owner.id).then((resp) => {
                const status = parseInt(resp.data.status_code);
                if (status === 200) {
                    window.location.href = '/account/'+this.owner.username;
                } else if(status === 204) {
                    this.no_money = true;
                }
                this.preloader = false;
            });
        },
        followPrice() {
            return this.owner.follow_price;
        },
        buttonText() {
            return this.owner.button_text ? this.owner.button_text : 'Подписаться';
        },
        ...mapMutations({
            setLoad: SET_LOAD,
        })
    }
}
</script>

<style scoped>

</style>
