<template>
     <div class="page-withdrawMoney">
        <div class="page-withdrawMoney__title">
            <div class="page-withdrawMoney__title-box">
                <a @click="$router.go(-1)" class="beck">
                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.36037 8.50359L9.7282 2.14366C9.90354 1.96896 10 1.73538 10 1.48633C10 1.23713 9.90354 1.00369 9.7282 0.828715L9.17022 0.271724C8.99516 0.0964715 8.76114 0 8.51176 0C8.26239 0 8.02865 0.0964715 7.85345 0.271724L0.271523 7.84377C0.0956306 8.0193 -0.000688238 8.25385 3.70763e-06 8.50318C-0.000688238 8.75362 0.0954922 8.98789 0.271523 9.16355L7.84639 16.7283C8.02159 16.9035 8.25533 17 8.50484 17C8.75422 17 8.98796 16.9035 9.1633 16.7283L9.72115 16.1713C10.0841 15.8088 10.0841 15.2186 9.72115 14.8562L3.36037 8.50359Z" fill="#4892F3"/>
                    </svg>
                </a>
                <div class="name">Деньги</div>
            </div>
        </div>
        <div class="page-withdrawMoney__content">
            <div class="withdrawMoney">
                <div class="withdrawMoney__balance">
                    <div class="balanceTrye">
                        <div class="balance__name">Подтвержденный доход</div>
                        <div class="balance__value">{{ getUser.balance }} ₽</div>
                    </div>
                    <div class="balanceWhite">
                        <div class="balance__name">Ожидаемый доход</div>
                        <div class="balance__value">{{ expected }} ₽</div>
                    </div>
                </div>
                <div class="withdrawMoney__output">
                    <h2>Вывести деньги</h2>
                    <div class="output">
                        <div class="output__info">
                            <div class="icon">
                                <div v-if="getType == 'card'">
                                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.20117 1.14819H10.7977V9.58845H6.20117V1.14819Z" fill="#FF5F00"/>
                                        <path d="M6.49348 5.36836C6.49348 3.65347 7.28146 2.13244 8.4926 1.14823C7.60248 0.432453 6.47889 0 5.25315 0C2.34935 0 0 2.40084 0 5.36836C0 8.33588 2.34934 10.7367 5.25315 10.7367C6.47889 10.7367 7.60248 10.3043 8.4926 9.5885C7.28146 8.6192 6.49348 7.08327 6.49348 5.36838V5.36836Z" fill="#EB001B"/>
                                        <path d="M17.0004 5.36836C17.0004 8.33588 14.6511 10.7367 11.7473 10.7367C10.5215 10.7367 9.39793 10.3043 8.50781 9.5885C9.73356 8.6043 10.5069 7.08327 10.5069 5.36838C10.5069 3.65347 9.71895 2.13244 8.50781 1.14823C9.39793 0.432453 10.5215 0 11.7473 0C14.6511 0 17.0004 2.41577 17.0004 5.36836Z" fill="#F79E1B"/>
                                    </svg>
                                </div>
                                <div v-else-if="getType == 'yandex'">
                                    <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M1.03418 12.4C1.03418 10.9969 1.1524 10.1055 4.04574 7.93438C6.44207 6.1375 14.1226 0 14.1226 0V10.25H19.9637V25H2.85885C2.37528 24.9979 1.91212 24.804 1.57033 24.4604C1.22854 24.1167 1.03582 23.6514 1.03418 23.1656V12.4Z" fill="#FFCF01"/>
                                        <path d="M14.123 10.2476V16.1866L3.38965 23.5312L16.9595 19.096V10.2476H14.123Z" fill="#D3AC06"/>
                                        <path d="M9.21718 9.94062C9.84485 9.18984 10.7626 8.925 11.2666 9.34843C11.7691 9.77265 11.668 10.7258 11.0411 11.4766C10.4126 12.2281 9.4964 12.4937 8.9924 12.0687C8.48996 11.6445 8.59107 10.6914 9.21796 9.94062H9.21718Z" fill="#1D1D1F"/>
                                    </svg>
                                </div>
                                <div v-else-if="getType == 'qiwi'">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M11.0245 0C17.1019 0 22.0475 4.95703 22.0475 11.1219C22.0475 13.2094 21.4978 15.1664 20.4968 16.8289C20.4635 16.8953 20.3667 16.8625 20.3667 16.7977C19.9788 14.057 18.3306 12.5242 15.9058 12.1C15.7123 12.0688 15.6465 11.9375 15.9375 11.9047C16.6815 11.8391 17.7476 11.8391 18.2655 11.9375C18.2981 11.6773 18.2981 11.3828 18.2981 11.0891C18.299 10.1207 18.1106 9.16171 17.7437 8.26693C17.3769 7.37215 16.8387 6.55918 16.1601 5.87457C15.4814 5.18996 14.6756 4.64715 13.7888 4.27722C12.902 3.9073 11.9516 3.71752 10.992 3.71875C10.0324 3.71752 9.08199 3.9073 8.19518 4.27722C7.30837 4.64715 6.50257 5.18996 5.82393 5.87457C5.14528 6.55918 4.60712 7.37215 4.24025 8.26693C3.87339 9.16171 3.68502 10.1207 3.68594 11.0891C3.68502 12.0574 3.87338 13.0165 4.24024 13.9113C4.6071 14.8061 5.14525 15.6192 5.82388 16.3038C6.50251 16.9885 7.30831 17.5314 8.19512 17.9014C9.08194 18.2714 10.0324 18.4613 10.992 18.4602H11.3481L11.2978 18.1531C11.2165 17.5965 11.1898 17.0331 11.2181 16.4711C11.2506 16.0141 11.3481 15.9492 11.5409 16.3078C12.5435 18.068 13.9982 19.6672 16.8108 20.2875C19.1055 20.8078 21.4335 21.4281 23.9234 24.5922C24.1494 24.8523 23.8266 25.1469 23.5672 24.918C21.0139 22.6352 18.7177 21.918 16.6181 21.918C14.2575 21.918 12.6728 22.2445 11.0237 22.2445C4.9471 22.2445 0 17.2531 0 11.1219C0 4.99062 4.91381 0 11.0245 0ZM16.649 17.5469C16.9084 17.5805 17.1987 17.6773 17.4248 17.8734C17.9094 18.2969 18.072 18.7859 17.8126 19.1453C17.6841 19.3406 17.4248 19.4391 17.167 19.4391C16.8963 19.4429 16.6329 19.3505 16.423 19.1781C15.9708 18.7859 15.8408 18.1344 16.1326 17.775C16.1984 17.703 16.2783 17.6456 16.3672 17.6064C16.456 17.5671 16.552 17.5468 16.649 17.5469ZM19.0738 15.7531C19.4934 15.9164 19.656 16.5359 19.6877 16.8289C19.7528 17.3195 19.6235 17.5141 19.4617 17.5141C19.2991 17.5141 19.0738 17.3188 18.8477 16.9273C18.5892 16.5367 18.5249 16.1117 18.6217 15.8844C18.6859 15.7203 18.8795 15.6547 19.0738 15.7539V15.7531Z" fill="url(#paint0ss_linear)"/>
                                        <defs>
                                            <linearGradient id="paint0ss_linear" x1="4.43148" y1="3.40469" x2="12.5624" y2="24.7857" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FFC04C"/>
                                                <stop offset="1" stop-color="#FD8C25"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div v-else-if="getType == 'mts'">
                                    <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <g filter="url(#filter0_d)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9995 5C12.1211 5 9.89394 6.72001 8.05691 9.61166C6.14223 12.6064 5 16.3139 5 19.5335C5 24.2468 7.77714 29 14 29C20.2154 29 23 24.2468 23 19.5335C23 16.3139 21.8583 12.6064 19.9529 9.61166C18.0986 6.72001 15.8717 5 13.9995 5Z" fill="#E30613"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d" x="0" y="0" width="28" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                                <feOffset/>
                                                <feGaussianBlur stdDeviation="2.5"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.0235294 0 0 0 0 0.0745098 0 0 0 0.35 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                                <div v-else-if="getType == 'megaphone'">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M9.69984 9.89434C8.87146 9.89434 8.19878 9.22262 8.19878 8.3953C8.19878 7.56614 8.87146 6.89453 9.69984 6.89453C10.5281 6.89453 11.1989 7.56614 11.1989 8.3953C11.1989 9.22262 10.5281 9.89434 9.69984 9.89434ZM12.0004 0C5.3711 0 0 5.37149 0 11.9991C0 17.7504 4.04803 22.5567 9.4487 23.7269V12.9589L9.44947 12.9582C9.46157 12.4384 9.87562 12.0197 10.3908 12.0003V11.9995H11.9066C11.9771 11.9995 12.0345 11.9439 12.0382 11.8744L12.0389 0.002112L12.0004 0V0ZM20.27 18.545C19.4426 18.545 18.7699 17.8733 18.7699 17.0441C18.7699 16.2178 19.4426 15.546 20.27 15.546C21.0973 15.546 21.77 16.2178 21.77 17.0441C21.77 17.8733 21.0973 18.545 20.27 18.545ZM16.7538 18.545C15.9264 18.545 15.2547 17.8733 15.2547 17.0441C15.2547 16.2178 15.9264 15.546 16.7538 15.546C17.5821 15.546 18.2538 16.2178 18.2538 17.0441C18.2538 17.8733 17.5821 18.545 16.7538 18.545ZM13.2358 18.545C12.4084 18.545 11.7348 17.8733 11.7348 17.0441C11.7348 16.2178 12.4084 15.546 13.2358 15.546C14.0651 15.546 14.7368 16.2178 14.7368 17.0441C14.7368 17.8733 14.0651 18.545 13.2358 18.545ZM13.4814 0.090432V12.4704L13.4784 12.4734C13.4739 13.0089 13.0374 13.4414 12.5 13.4414H11.0231C10.949 13.4414 10.8897 13.5008 10.8897 13.5739V23.9482C11.2556 23.9815 11.6244 24 11.9996 24C18.628 24 24 18.6267 24 11.999C24 5.87434 19.41 0.820704 13.4812 0.090624" fill="#00985F"/>
                                    </svg>
                                </div>
                                <div v-else-if="getType == 'bylayn'">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M0 12C0 18.6292 5.37079 24 12 24C18.6292 24 24 18.6292 24 12C24 5.37079 18.6292 0 12 0C5.37079 0 0 5.38202 0 12Z" fill="url(#paint0_linear)"/>
                                        <path d="M3.02148 4.04494C8.81924 3.55056 15.1788 3.53932 20.9765 4.04494C18.7743 1.5618 15.572 0 11.999 0C8.42598 0 5.22373 1.5618 3.02148 4.04494Z" fill="#231F20"/>
                                        <path d="M21.1007 19.8315C15.4715 20.2697 8.77484 20.3035 2.89844 19.8315C5.10068 22.3933 8.35911 24.0113 11.9996 24.0113C15.64 24.0113 18.8984 22.3821 21.1007 19.8315Z" fill="#231F20"/>
                                        <path d="M0.393258 8.95493C8.20225 8.8201 15.809 8.79762 23.6067 8.95493C23.8652 9.93246 24 10.9549 24 11.9999C24 12.91 23.8989 13.8089 23.7079 14.6628C15.809 14.8875 8.03371 14.8313 0.292136 14.6628C0.101124 13.8089 0 12.9212 0 11.9999C0 10.9549 0.134831 9.93246 0.393258 8.95493Z" fill="#231F20"/>
                                        <defs>
                                            <linearGradient id="paint0_linear" x1="0.000149382" y1="11.9989" x2="24.0011" y2="11.9989" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FAA61A"/>
                                                <stop offset="1" stop-color="#FFE100"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div v-else-if="getType == 'tele2'">
                                    <svg width="45" height="18" viewBox="0 0 45 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M0.633789 6.60152V9.01532L7.05371 8.29905V5.68648L0.633789 6.60152ZM2.68249 9.16215V17.4335H5.03289V8.9185L2.68249 9.16215ZM7.92075 5.56292V17.4335H10.3974V5.20973L7.92075 5.56292ZM10.8588 5.1439V7.87463L14.4351 7.47555V4.63425L10.8588 5.1439ZM10.8588 9.90709V12.6876L13.2064 12.5577V9.70215L10.8588 9.90709ZM10.8588 14.6917V17.4335H14.4351V14.5823L10.8588 14.6917ZM23.6838 3.31163V17.4335H26.9305V2.84878L23.6838 3.31163ZM27.5368 2.76225V6.0106L32.2683 5.48295V2.08763L27.5368 2.76225ZM27.5368 8.45359V11.7621L30.638 11.5903V8.18423L27.5368 8.45359ZM27.5368 14.1804V17.4335H32.2683V14.0355L27.5368 14.1804ZM15.3814 4.49912V17.4335H18.2026V4.09682L15.3814 4.49912ZM18.7291 14.4509V17.4334H22.8242V14.3256L18.7291 14.4509ZM42.876 1.92795C41.8499 0.944634 40.3453 0.541305 38.6997 0.781091V4.38392C39.3661 4.34638 39.9061 4.59722 40.1467 5.10225C40.5266 5.89849 40.1347 7.09318 39.2101 8.20005C37.783 9.90812 33.9882 13.4042 33.9882 13.4042L39.4358 13.2226C42.7644 9.92419 43.9598 7.92208 44.1743 5.42329C44.287 4.10132 43.8139 2.82756 42.876 1.92795ZM44.3662 17.4335V13.6637L33.3167 14.0013L44.3662 17.4335ZM33.3167 14.0012L33.3179 17.4334H44.3662L33.3167 14.0012ZM38.0645 0.861962C34.8546 1.55535 33.2783 3.95063 33.4602 7.85908L36.8827 7.55102C36.7268 5.34293 37.3927 4.81913 38.0662 4.53113L38.0645 0.861962Z" fill="#141414"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="info">
                                    <div class="info__name" v-if="getType == 'card'">Банковская карта</div>
                                    <div class="info__name" v-else-if="getType == 'yandex'">Яндекс карта</div>
                                    <div class="info__text" v-if="getType == 'card' || getType == 'yandex'">Карта</div>
                                    <div class="info__name" v-if="getType == 'qiwi'">Qiwi</div>
                                    <div class="info__text" v-if="getType == 'qiwi'">Кошелек</div>
                                    <div class="info__name" v-if="getType == 'mts'">МТС</div>
                                    <div class="info__name" v-if="getType == 'megaphone'">Мегафон</div>
                                    <div class="info__name" v-if="getType == 'bilayn'">Билайн</div>
                                    <div class="info__name" v-if="getType == 'tele2'">Tele2</div>
                                    <div class="info__text" 
                                        v-if="getType == 'tele2' || getType == 'mts' ||
                                        getType == 'megaphone' || getType == 'bilayn'">Телефон</div>
                            </div>
                        </div>
                        <a @click="$router.push({name: 'withdrawal'})">Изменить</a>
                    </div>
                </div>
                <div class="withdrawMoney__form">
                    <div>
                        <div class="form__group" style="margin-bottom: 10px">
                            <input type="text" inputmode="numeric" v-model="details" v-if="getType == 'card'" placeholder="Номер банковской карты"
                                   name="details">
                            <input type="text" inputmode="numeric" v-model="details" v-else-if="getType == 'yandex'" placeholder="Номер Яндекс карты"
                                   name="details">
                            <input type="text" inputmode="numeric" v-model="details" v-else-if="getType == 'qiwi'" placeholder="Номер кошелька"
                                   name="details">
                            <input type="text" inputmode="numeric" v-model="details" v-else name="details">
                        </div>
                        <div class="error" v-if="error">
                            Введена некорректная сумма
                        </div>
                        <div class="form__group">
                            <input type="number" inputmode="numeric" placeholder="100" v-model="amount" name="amount">
                            <input type="hidden" name="method" v-model="method">
                        </div>
                        <div class="withdrawMoney__form-info">
                            Комиссия: 5% (мин. комиссия 50.00)
                        </div>
                        <button @click="submit">Вывести</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import {SET_USER} from '../store/types'

const WithdrawCard = {
    data: () => ({
        expected: 0,
        method: 0,
        amount: 0,
        details: '',
        error: false
    }),
    computed:{
        ...mapGetters([
            'getUser'
        ]),

        getType(){
            return this.$router.currentRoute.params.type
        }
    },
    mounted() {
        this.getExpected()
    },
    methods:{
        ...mapMutations({
            setUser: SET_USER
        }),
        getExpected(){
            axios.get('/expected/profit')
                .then(resp => {
                    this.expected = resp.data.expected
                })
        },
        submit(){
            if(this.amount > this.getUser.balance){
                this.error = true
                return
            }
            let form = new FormData()
            form.append('method', this.getType)
            form.append('amount', this.amount)
            form.append('details', this.details)  
            axios.post('/withdraw/submit', form)
                .then( resp => {
                    if(resp.data.errors != null){
                        this.error = true
                    }else{
                        let user = this.getUser
                        user.balance -= this.amount
                        this.setUser(user)
                        this.$router.push({name:'account', params:{username: this.getUser.username}})
                    }
                })
        }
    }
}
export default WithdrawCard
</script>

<style lang="css">
    .error{
        color: #EA4E3D;
        padding: 0 0 5px 5px;
    }
</style>

