<template>
    <div>
        <div >
            <div class="reg-list" :class="{none: byEmail}">
                <div class="reg-list__item" @click="oneReg()">
                    <img src="/image/icon-rak.png" alt="">
                    В 1 клик
                </div>
                <div class="reg-list__item" onclick="window.location.href = 'tg://resolve?domain=Friendsonly_mebot'">
                    <img src="/image/icon-teleg.svg" alt="">
                    С помощью Telegram
                </div>
                <div class="reg-list__item" id="next-from" @click="byEmail = true">
                    <img src="/image/icon-emal.svg" alt="">
                    Ввести телефон или Email
                </div>
                <div class="reg-list__item" onclick="$('#facebook_auth').submit()">
                    <img src="/image/icon-fb.svg" alt="">
                    С помощью Facebook
                </div>
                <form action="/login/facebook" id="facebook_auth">
                    <input hidden v-if="$router.currentRoute.params.id" type="text" name="payment" :value="$router.currentRoute.params.id">
                </form>
                <div class="reg-list__item" onclick="$('#vk_auth').submit()">
                    <img src="/image/icon-vka.svg" alt="">
                    С помощью Vk
                </div>
                <form action="/login/vkontakte" id="vk_auth">
                    <input hidden v-if="$router.currentRoute.params.id" type="text" name="payment" :value="$router.currentRoute.params.id">
                </form>

                <div class="text2">
                    Нажав Любой способ регистрации или авторизации, Вы подтверждаете
                    согласие с <a href="./file/OFERTA.pdf" download="download">договором оферты</a>, а также подтверждаете, что Вам есть 18 полных лет.
                </div>
            </div>
            <div id="reg-form" class="reg-form" :class="{active: byEmail}">
                <div>
                    <div class="form-group" :class="{has_error: email_error}">
                        <input id="regContacts" @input="inputEmail()" v-model="email" type="text" name="contacts" placeholder="Телефон или email" autocomplete="off">
                        <span class="invalid-feedback" v-if="email_error" role="alert" style="margin: 0 0 6px 5px;">
                            <strong>{{ email_msg }}</strong>
                        </span>
                    </div>
                    <div class="block-email" :class="{active: BoxEmail}">
                        <div class="form-group" >
                            <input type="password" v-model="pass" name="password" placeholder="Пароль">

                        </div>
                        <div class="form-group" :class="{has_error: pass_error}">
                            <input type="password" v-model="confirm" name="password_confirmation" placeholder="Повторите Пароль">
                            <span class="invalid-feedback" v-if="pass_error" role="alert" style="    margin: 0 0 6px 5px;">
                                <strong>{{ pass_msg }}</strong>
                            </span>
                        </div>
                    </div>
                    <div class="buttons">
                        <div class="buttons__back" @click="byEmail = false">
                            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.9483 11.0047L11.4302 2.77415C11.6363 2.54806 11.7496 2.24579 11.7496 1.92348C11.7496 1.60099 11.6363 1.29889 11.4302 1.07246L10.7746 0.351642C10.5689 0.124846 10.294 0 10.001 0C9.70797 0 9.43334 0.124846 9.22748 0.351642L0.319029 10.1508C0.112362 10.3779 -0.000808652 10.6814 4.35631e-06 11.0041C-0.000808652 11.3282 0.112199 11.6314 0.319029 11.8587L9.21919 21.6484C9.42505 21.8752 9.69968 22 9.99285 22C10.2859 22 10.5605 21.8752 10.7665 21.6484L11.422 20.9275C11.8485 20.4584 11.8485 19.6946 11.422 19.2257L3.9483 11.0047Z" fill="#4892F3"/>
                            </svg>
                        </div>
                        <button @click="register()" >Зарегистрироваться</button>
                    </div>
                </div>
                <div class="text2">
                    Нажав кнопку “Зарегистрироваться”, Вы подтверждаете
                    согласие с <a href="./file/OFERTA.pdf" download="download">договором оферты</a>, а также подтверждаете, что Вам есть 18 полных лет.
                </div>
            </div>
        </div>
        <div class="popups popups-registerOneClick popupsAnim" :class="{active: oneRegData.active}">
            <div class="popups__bgClose" @click="goMain()" :class="{active: oneRegData.active}"></div>
            <div class="popups__content" :class="{active: oneRegData.active_content}">
                <h2>Поздравляем 👍</h2>
                <p>Регистрация прошла успешно! <br>
                    Не забудьте сохранить логин и пароль, чтобы не потерять доступ к сайту.
                </p>
                <div class="info">
                    <div class="info__log">
                        <div class="name">Логин</div>
                        <div id="registered_email" class="value">{{oneRegData.email}}</div>
                    </div>
                    <div class="info__pass">
                        <div class="name">Пароль</div>
                        <div id="registered_password" class="value">{{oneRegData.pass}}</div>
                    </div>
                </div>
                <div class="act">
                    <div class="act__buttons" :class="{active: oneRegData.buttons}">
                        <div class="btn-copy" @click="copy()">Скопировать
                            <input type="text" style="position: absolute;z-index: -1;opacity: 0">
                        </div>
                        <div class="btn-email" id="btn-email" @click="changeToEmail()">Отправить</div>
                    </div>
                    <div class="act__email" :class="{active: !oneRegData.buttons}">
                        <div>
                            <input name="to" type="email" placeholder="Введите email" v-model="oneRegData.sendTo">
                            <input name="email" type="email" hidden>
                            <input name="password" type="text" hidden>
                            <div class="buttons">
                                <div class="btn-back" id="btn-back" @click="oneRegData.buttons = true">
                                    <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.9483 11.0047L11.4302 2.77415C11.6363 2.54806 11.7496 2.24579 11.7496 1.92348C11.7496 1.60099 11.6363 1.29889 11.4302 1.07246L10.7746 0.351642C10.5689 0.124846 10.294 0 10.001 0C9.70797 0 9.43334 0.124846 9.22748 0.351642L0.319029 10.1508C0.112362 10.3779 -0.000808652 10.6814 4.35631e-06 11.0041C-0.000808652 11.3282 0.112199 11.6314 0.319029 11.8587L9.21919 21.6484C9.42505 21.8752 9.69968 22 9.99285 22C10.2859 22 10.5605 21.8752 10.7665 21.6484L11.422 20.9275C11.8485 20.4584 11.8485 19.6946 11.422 19.2257L3.9483 11.0047Z" fill="#4892F3"/>
                                    </svg>
                                </div>
                                <div class="btn-send" @click="sendEmail()" >Отправить</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="popups__footer">
                <div class="btn close" @click="goMain()" :key="oneRegData.i">Продолжить <span v-if="!oneRegData.pressToSend">({{oneRegData.i}} сек)</span></div>
            </div>
        </div>
        <div class="infoLabels" :class="{active:oneRegData.copy}">
            <div class="infoLabels__box " :class="{active:oneRegData.copy_content}">
                <p>Скопировано</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

const Register = {
    props:['redirect'],
    data: () => ({
        email: '',
        type: 'email',
        pass_error: false,
        pass_msg: '',
        email_error: false,
        email_msg: '',
        pass: '',
        confirm: '',
        byEmail: false,
        usr_for_reg: '',
        BoxEmail: false,
        oneRegData:{
            active: false,
            active_content: false,
            email: '',
            pass: '',
            i: 10,
            buttons: true,
            sendTo: '',
            intervalId: null,
            pressToSend: false,

            copy: false,
            copy_content: false
        }

    }),
    computed:{
        inputPass(){
            return this.email !== ''
        },
        canPress(){
            return this.email !== '' && this.pass !== '' && this.confirm !== ''
        }
    },
    methods: {
        register(){
            if(this.pass.length < 8 && this.usr_for_reg === '/register'){
                this.pass_error = true
                this.pass_msg = 'Пароль должен состоять минимум из 8-ми символов'
            }else if(this.pass === this.confirm || this.usr_for_reg !== '/register'){
                this.pass_error = false
                let form = new FormData()
                form.append(this.type, this.email)
                form.append('password', this.pass)
                form.append('password_confirmation', this.confirm)
                axios.post(this.usr_for_reg, form)
                    .then(async resp => {
                        if(resp.data.errors && resp.data.errors.validation.phone == 'Phone already exists'){
                            this.email_error = true
                            this.email_msg = 'На этот телефон уже зарегестрирован аккаунт'
                        }else{
                            if(resp.data !== ''){
                                await this.setUser()
                                if (this.$route.name !== 'payment') {
                                    await this.$router.push({name: 'index'})
                                }
                            }
                            this.email_error = false
                        }
                    })
                    .catch( error => {
                        this.email_error = true
                        this.email_msg = 'На этeу почту уже зарегестрирован аккаунт'
                    })
            }else{
                this.pass_error = true
                this.pass_msg = 'Пароли не совпадают'
            }
        },
        inputEmail(){
            let testTel = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
            let emailPattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            let test = this.email.slice(0,1)
            if(this.email != '') {
                if(emailPattern.test(this.email) && test!='+'){
                    this.usr_for_reg = '/register'
                    this.type = 'email'
                    this.BoxEmail = true
                } else if(testTel.test(this.email)) {
                    this.usr_for_reg = '/registerSms'
                    this.type = 'phone'
                }
            } else {
                this.usr_for_reg = ''
                this.BoxEmail = false
            }
        },
        oneReg() {
            this.oneRegData.active = true;
           axios.post('/registerClick').then(async (resp) => {
                console.log(resp);
                this.oneRegData.intervalId = setInterval(() => {
                    if (this.oneRegData.i >= 1) {
                        this.oneRegData.i--
                    } else {
                        clearInterval(this.oneRegData.intervalId)
                        this.oneRegData.active = false;
                        this.goMain()
                    }
                }, 1000)
                this.oneRegData.email = resp.data.email
                this.oneRegData.pass = resp.data.password
                });
        },
        changeToEmail(){
            this.oneRegData.buttons = false;
            clearInterval(this.oneRegData.intervalId)
            this.oneRegData.pressToSend = true
        },
        sendEmail(){
            let emailPattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(!emailPattern.test(this.oneRegData.sendTo)) return
            let form = new FormData()
            form.append('to', this.oneRegData.sendTo)
            form.append('email', this.oneRegData.email)
            form.append('password', this.oneRegData.pass)
            axios.post('/credentials', form)
                .then( async resp => {
                    await this.goMain()
                })
        },
        async goMain(){
            await this.setUser()
            if(this.redirect) this.$router.push({name:'index'})
        },
        copy(){
            this.oneRegData.copy = true
            setTimeout(()=> {
                this.oneRegData.copy_content = true
            }, 300)
            const el = document.createElement('textarea');
            el.value = `Login: ${this.oneRegData.email}  Password: ${this.oneRegData.pass}`;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            const selected =  document.getSelection().rangeCount > 0  ? document.getSelection().getRangeAt(0) : false;
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            if (selected) {
                document.getSelection().removeAllRanges();
                document.getSelection().addRange(selected);
            }
            setTimeout(() => {
                 this.oneRegData.copy_content = false
                setTimeout(()=>{
                    this.oneRegData.copy = false
                },300);
            },4000);
        },
        ...mapActions({
                setUser: 'loadAuthUser'
            }),
    },
}

export default Register
</script>

<style lang="css">

</style>
