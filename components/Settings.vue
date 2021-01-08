<template>
    <div class="page-setting">
        <div class="page-setting__title">
            <div class="page-setting__title-box">
                <a @click="$router.go(-1)" class="beck">
                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.36037 8.50359L9.7282 2.14366C9.90354 1.96896 10 1.73538 10 1.48633C10 1.23713 9.90354 1.00369 9.7282 0.828715L9.17022 0.271724C8.99516 0.0964715 8.76114 0 8.51176 0C8.26239 0 8.02865 0.0964715 7.85345 0.271724L0.271523 7.84377C0.0956306 8.0193 -0.000688238 8.25385 3.70763e-06 8.50318C-0.000688238 8.75362 0.0954922 8.98789 0.271523 9.16355L7.84639 16.7283C8.02159 16.9035 8.25533 17 8.50484 17C8.75422 17 8.98796 16.9035 9.1633 16.7283L9.72115 16.1713C10.0841 15.8088 10.0841 15.2186 9.72115 14.8562L3.36037 8.50359Z" fill="#4892F3"/>
                    </svg>
                    Назад
                </a>
                <h2>Настройки</h2>
            </div>
        </div>
        <div class="page-setting__content">
            <div class="setting">
                <div>
                    <div class="setting__poster">
                        <div class="form__poster">
                            <div class="form__poster-img">
                                <img :src="src.cover" v-if="src.cover" alt="">
                                <img src="/image/poster-default.png" v-else alt="">
                            </div>
                            <span>Мин. 800х300</span>
                            <div class="form__poster-btn">
                                <label for="poster">
                                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.53811 6.61196C8.29697 6.61196 8.91215 6.04054 8.91215 5.33564C8.91215 4.63075 8.29697 4.05933 7.53811 4.05933C6.77924 4.05933 6.16406 4.63075 6.16406 5.33564C6.16406 6.04054 6.77924 6.61196 7.53811 6.61196Z" fill="white"/>
                                        <path d="M18.8168 10.0333C18.1679 9.46606 17.3473 9.0938 16.4504 8.98744V2.49947C16.4504 1.80812 16.145 1.18769 15.6679 0.726795C15.1718 0.265901 14.5038 0 13.7595 0H2.69084C1.94656 0 1.27863 0.283627 0.782443 0.726795C0.28626 1.18769 0 1.80812 0 2.49947V10.6715V11.4337V13.0823C0 13.7736 0.305343 14.3941 0.782443 14.855C1.27863 15.3159 1.94656 15.5818 2.69084 15.5818H13.3969C14.1031 16.1136 14.9809 16.4504 15.9542 16.4504C17.0802 16.4504 18.0916 16.0249 18.8168 15.3513C19.542 14.6777 20 13.7382 20 12.6923C20 11.6464 19.542 10.7069 18.8168 10.0333ZM1.01145 2.49947C1.01145 2.07402 1.20229 1.68404 1.50763 1.40041C1.81298 1.11678 2.23282 0.939515 2.69084 0.939515H13.7595C14.2176 0.939515 14.6374 1.11678 14.9427 1.40041C15.2481 1.68404 15.4389 2.07402 15.4389 2.49947V8.0302L12.6145 5.42437C12.4237 5.2471 12.0992 5.22938 11.8893 5.42437L7.63359 9.39515L4.75191 6.70069C4.56107 6.52343 4.23664 6.5057 4.02672 6.70069L1.01145 9.53697V2.49947ZM2.67176 14.66V14.6423C2.21374 14.6423 1.79389 14.465 1.48855 14.1814C1.20229 13.8977 1.01145 13.5077 1.01145 13.0823V11.4337V10.8665L4.4084 7.71112L7.29008 10.3878C7.48092 10.5651 7.80534 10.5651 8.01527 10.3878L12.271 6.41707L15.0573 9.02289C15 9.04062 14.9427 9.05835 14.8855 9.07607C14.8092 9.0938 14.7328 9.11153 14.6374 9.14698C14.5611 9.16471 14.4847 9.20016 14.4084 9.21789C14.3511 9.23561 14.313 9.25334 14.2557 9.28879C14.1794 9.32425 14.1221 9.34197 14.0649 9.37743C13.9695 9.43061 13.874 9.48379 13.7786 9.53697C13.7214 9.57242 13.6832 9.59015 13.626 9.6256C13.5878 9.64333 13.5687 9.66105 13.5305 9.67878C13.3588 9.78514 13.2061 9.90923 13.0725 10.051C12.3473 10.7247 11.8893 11.6642 11.8893 12.71C11.8893 12.9759 11.9275 13.2241 11.9847 13.49C12.0038 13.5609 12.0229 13.6141 12.042 13.685C12.0992 13.8623 12.1565 14.0395 12.2328 14.2168V14.2345C12.3092 14.3764 12.3855 14.5359 12.4809 14.66H2.67176ZM18.0725 14.6777C17.5191 15.1918 16.7748 15.4931 15.9351 15.4931C15.1336 15.4931 14.3893 15.1918 13.855 14.7132C13.7786 14.6423 13.7023 14.5536 13.626 14.4827C13.5687 14.4295 13.5114 14.3586 13.4542 14.3054C13.3779 14.2168 13.3206 14.1105 13.2634 14.0041C13.2252 13.9332 13.187 13.88 13.1489 13.8091C13.1107 13.7205 13.0725 13.6141 13.0534 13.5077C13.0344 13.4368 12.9962 13.3482 12.9771 13.2773C12.9389 13.1 12.9198 12.905 12.9198 12.71C12.9198 11.9301 13.2634 11.2387 13.7977 10.7247C14.3511 10.2106 15.0954 9.90923 15.9351 9.90923C16.7748 9.90923 17.5191 10.2283 18.0725 10.7247C18.626 11.221 18.9504 11.9301 18.9504 12.71C18.9504 13.4723 18.6069 14.1636 18.0725 14.6777Z" fill="white"/>
                                        <path d="M17.5947 12.2138H16.4306V11.1324C16.4306 10.8665 16.2016 10.6538 15.9154 10.6538C15.6291 10.6538 15.4001 10.8665 15.4001 11.1324V12.2138H14.236C13.9497 12.2138 13.7207 12.4265 13.7207 12.6924C13.7207 12.9583 13.9497 13.171 14.236 13.171H15.4001V14.2523C15.4001 14.5182 15.6291 14.7309 15.9154 14.7309C16.2016 14.7309 16.4306 14.5182 16.4306 14.2523V13.171H17.5947C17.881 13.171 18.11 12.9583 18.11 12.6924C18.11 12.4265 17.881 12.2138 17.5947 12.2138Z" fill="white"/>
                                    </svg>
                                </label>
                                <input type="file" ref="cover" accept="image/*" name="cover" id="poster" @change="onFileChange('cover')">
                            </div>
                        </div>
                    </div>
                    <div class="setting__avatar">
                        <div class="form__avatar">
                            <div class="form__avatar-img">
                                <img :src="src.avatar" alt="">
                            </div>
                            <div class="form__avatar-btn">
                                <label for="avatar">
                                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.53811 6.61196C8.29697 6.61196 8.91215 6.04054 8.91215 5.33564C8.91215 4.63075 8.29697 4.05933 7.53811 4.05933C6.77924 4.05933 6.16406 4.63075 6.16406 5.33564C6.16406 6.04054 6.77924 6.61196 7.53811 6.61196Z" fill="white"/>
                                        <path d="M18.8168 10.0333C18.1679 9.46606 17.3473 9.0938 16.4504 8.98744V2.49947C16.4504 1.80812 16.145 1.18769 15.6679 0.726795C15.1718 0.265901 14.5038 0 13.7595 0H2.69084C1.94656 0 1.27863 0.283627 0.782443 0.726795C0.28626 1.18769 0 1.80812 0 2.49947V10.6715V11.4337V13.0823C0 13.7736 0.305343 14.3941 0.782443 14.855C1.27863 15.3159 1.94656 15.5818 2.69084 15.5818H13.3969C14.1031 16.1136 14.9809 16.4504 15.9542 16.4504C17.0802 16.4504 18.0916 16.0249 18.8168 15.3513C19.542 14.6777 20 13.7382 20 12.6923C20 11.6464 19.542 10.7069 18.8168 10.0333ZM1.01145 2.49947C1.01145 2.07402 1.20229 1.68404 1.50763 1.40041C1.81298 1.11678 2.23282 0.939515 2.69084 0.939515H13.7595C14.2176 0.939515 14.6374 1.11678 14.9427 1.40041C15.2481 1.68404 15.4389 2.07402 15.4389 2.49947V8.0302L12.6145 5.42437C12.4237 5.2471 12.0992 5.22938 11.8893 5.42437L7.63359 9.39515L4.75191 6.70069C4.56107 6.52343 4.23664 6.5057 4.02672 6.70069L1.01145 9.53697V2.49947ZM2.67176 14.66V14.6423C2.21374 14.6423 1.79389 14.465 1.48855 14.1814C1.20229 13.8977 1.01145 13.5077 1.01145 13.0823V11.4337V10.8665L4.4084 7.71112L7.29008 10.3878C7.48092 10.5651 7.80534 10.5651 8.01527 10.3878L12.271 6.41707L15.0573 9.02289C15 9.04062 14.9427 9.05835 14.8855 9.07607C14.8092 9.0938 14.7328 9.11153 14.6374 9.14698C14.5611 9.16471 14.4847 9.20016 14.4084 9.21789C14.3511 9.23561 14.313 9.25334 14.2557 9.28879C14.1794 9.32425 14.1221 9.34197 14.0649 9.37743C13.9695 9.43061 13.874 9.48379 13.7786 9.53697C13.7214 9.57242 13.6832 9.59015 13.626 9.6256C13.5878 9.64333 13.5687 9.66105 13.5305 9.67878C13.3588 9.78514 13.2061 9.90923 13.0725 10.051C12.3473 10.7247 11.8893 11.6642 11.8893 12.71C11.8893 12.9759 11.9275 13.2241 11.9847 13.49C12.0038 13.5609 12.0229 13.6141 12.042 13.685C12.0992 13.8623 12.1565 14.0395 12.2328 14.2168V14.2345C12.3092 14.3764 12.3855 14.5359 12.4809 14.66H2.67176ZM18.0725 14.6777C17.5191 15.1918 16.7748 15.4931 15.9351 15.4931C15.1336 15.4931 14.3893 15.1918 13.855 14.7132C13.7786 14.6423 13.7023 14.5536 13.626 14.4827C13.5687 14.4295 13.5114 14.3586 13.4542 14.3054C13.3779 14.2168 13.3206 14.1105 13.2634 14.0041C13.2252 13.9332 13.187 13.88 13.1489 13.8091C13.1107 13.7205 13.0725 13.6141 13.0534 13.5077C13.0344 13.4368 12.9962 13.3482 12.9771 13.2773C12.9389 13.1 12.9198 12.905 12.9198 12.71C12.9198 11.9301 13.2634 11.2387 13.7977 10.7247C14.3511 10.2106 15.0954 9.90923 15.9351 9.90923C16.7748 9.90923 17.5191 10.2283 18.0725 10.7247C18.626 11.221 18.9504 11.9301 18.9504 12.71C18.9504 13.4723 18.6069 14.1636 18.0725 14.6777Z" fill="white"/>
                                        <path d="M17.5947 12.2138H16.4306V11.1324C16.4306 10.8665 16.2016 10.6538 15.9154 10.6538C15.6291 10.6538 15.4001 10.8665 15.4001 11.1324V12.2138H14.236C13.9497 12.2138 13.7207 12.4265 13.7207 12.6924C13.7207 12.9583 13.9497 13.171 14.236 13.171H15.4001V14.2523C15.4001 14.5182 15.6291 14.7309 15.9154 14.7309C16.2016 14.7309 16.4306 14.5182 16.4306 14.2523V13.171H17.5947C17.881 13.171 18.11 12.9583 18.11 12.6924C18.11 12.4265 17.881 12.2138 17.5947 12.2138Z" fill="white"/>
                                    </svg>
                                </label>
                                <input type="file" ref="avatar" accept="image/*" name="avatar" @change="onFileChange('avatar')" id="avatar">
                            </div>
                        </div>

                    </div>
                    <!--@if(session()->has("email_exist")) <h4 style="color: red; padding-left: 20px; background-color: white">Данная почта уже занятa</h4> @endif
                    @if(session()->has("username_exist")) <h4 style="color: red; padding-left: 20px; background-color: white">Данный Никнейм уже занят</h4> @endif-->

                    <div class="setting__box">
                        <div class="setting__box-item">
                            <div class="form__group">
                                <label for="nameSetting">Имя</label>
                                <input placeholder="Имя" :class="{save: name }" id="nameSetting" type="text" name="name" v-model="name">

                            </div>
                        </div>
                        <div class="setting__box-item">
                            <div class="form__group" :class="{error: error_username}">
                                <label for="usernameSetting">Никнейм</label>
                                <input placeholder="Никнейм" class="save nik" id="usernameSetting" name="username" type="text" v-model="username">

                            </div>
                            <h4 style="color: red; padding-left: 20px; background-color: white" v-if="error_username">Данный Никнейм уже занят</h4>
                        </div>
                        <div class="setting__box-item">
                            <div class="form__group">
                                <label>Категория</label>
                                <div class="">
                                    <select name="profile_type" id="" class="save">
                                        <option :selected="getUser.profile_type == 0" @click="profile_type = 0">Модель</option>
                                        <option :selected="getUser.profile_type == 1" @click="profile_type = 1">Блоггер</option>
                                        <option :selected="getUser.profile_type == 2" @click="profile_type = 2">Эксперт</option>
                                    </select>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.918 1L5.95881 5.95916L0.999649 1" stroke="#8A8A8D" stroke-width="1.5" stroke-miterlimit="10"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="setting__box-item">
                            <div class="form__group">
                                <label>Контент 18+</label>
                                <div class="">
                                    <select name="adult" id="" class="save">
                                        <option :selected="getUser.adult == 0" @click="adult = 0">Нет</option>
                                        <option :selected="getUser.adult == 1" @click="adult = 1">Да</option>
                                    </select>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.918 1L5.95881 5.95916L0.999649 1" stroke="#8A8A8D" stroke-width="1.5" stroke-miterlimit="10"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="setting__box-item">
                            <div class="form__textarea">
                                <label for="desc__textarea">Описание</label>
                                <textarea class="save" ref="descr" @input="resize('descr',19,1)" @keyup.enter="nextLine('descr', 19)" id="desc__textarea" type="text" name="about" placeholder="О себе" v-model="about">{{about}}</textarea>
                                <div id="desc__textarea_div" ref="descr_div" class="copp">{{about}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="setting__box">
                        <div class="setting__box-item">
                            <div class="form__group" :class="{error: error_email}">
                                <label for="emailSetting">Почта</label>
                                <input id="emailSetting" class="save" name="email" type="text" v-model="email" placeholder="E-mail">
                                <!--<h4 style="color: red; padding-left: 20px; background-color: white" v-if=" error_email">Данная почта уже занятa</h4>-->
                            </div>
                        </div>
                        <div class="setting__box-item">
                            <div class="form__group">
                                <label for="phoneSetting">Телефон</label>
                                <input id="phoneSetting" class="save" name="phone" type="number" v-model="phone" inputmode="numeric"  placeholder="Телефон">
                            </div>
                        </div>
                    </div>
                    <div class="setting__box">
                        <div class="setting__box-item">
                            <div class="form__group">
                                <label for="follow_priceSetting">Стоимость подписки</label>
                                <input class="save price" id="follow_priceSetting" name="follow_price" type="number" inputmode="numeric" v-model="follow_price" placeholder="">
                            </div>
                        </div>
                        <div class="setting__box-item">
                            <div class="checkbox">
                                <input name="first_free" type="checkbox" id="checkbox" @click="first_free = !first_free" :checked="first_free == 1"/>
                                <label for="checkbox">Первые 3 дня бесплатно</label>
                            </div>
                        </div>
                        <div class="setting__box-item">
                            <div class="checkbox">
                                <input name="hide_fols" type="checkbox" id="checkbox2" @click="hide_fols = !hide_fols" :checked="hide_fols == 1"/>
                                <label for="checkbox2">Скрыть кол-во друзей</label>
                            </div>
                        </div>
                        <div class="setting__box-item" v-if="getUser.allow_greeting == 1">
                            <div class="form__textarea">
                                <label for="greeting__textarea">Приветственное <br> сообщение новым друзьям</label>
                                <textarea class="save" ref="greeting" @input="resize('greeting',19,1)" @keyup.enter="nextLine('greeting', 19)" id="greeting__textarea" v-model="greeting_text" type="text" name="greeting_text" placeholder="Сообщение">{{greeting_text}}</textarea>
                                <div id="greeting__textarea_div" ref="greeting_div" class="copp">{{greeting_text}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="setting__button">
                        <button @click="saveSettings()">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import {SET_USER} from '../store/types'

const Settings = {
    data: () => ({
        email_exist: false,
        username_exist: false,
        name: '',
        username: '',
        src:{
            avatar: '',
            cover: '',
        },
        img:{
            avatar: '',
            cover: '',
        },
        profile_type: 0,
        adult: false,
        about: '',
        email: '',
        phone: '',
        follow_price: 0,
        first_free: true,
        hide_fols: true,
        allow_greeting: false,
        greeting_text: '',

        error_email: false,
        error_username: false
    }),
    computed:{
        ...mapGetters([
            'getUser'
        ]),
    },
    methods: {
        ...mapMutations({
            updateUser: SET_USER
        }),
        saveSettings(){
            let form = new FormData()
            form.append('name', this.name)
            form.append('username', this.username)
            if(this.img.avatar)
                form.append('avatar', this.img.avatar)
            if(this.img.cover)
                form.append('cover', this.img.cover)
            form.append('profile_type', this.profile_type)
            form.append('about', this.about)
            form.append('email', this.email)
            form.append('phone', this.phone)
            form.append('greeting_text', this.greeting_text)
            form.append('follow_price', this.follow_price)

            if (this.adult) {
                form.append('adult', this.adult)
            }
            if (this.first_free) {
                form.append('first_free', this.first_free)
            }
            if (this.hide_fols) {
                form.append('hide_fols', this.hide_fols)
            }
            if (this.allow_greeting) {
                form.append('allow_greeting', this.allow_greeting)
            }

            axios.post('/settings', form, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }})
                    .then( async resp => {
                        console.log(resp)
                        if(resp.data.data){
                            this.updateUser(resp.data.data.user)
                            //await this.setUser()
                            this.$router.push({name: 'account', params:{username: resp.data.data.user.username}})
                        }else{
                            console.log('122')
                            this.error_username = resp.data.errors.validation.username
                            this.error_email = resp.data.errors.validation.email
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
        },
        resize(ref, line_height, min_line){
            //this.$refs[ref].
            let min_line_height = min_line * line_height;
            let obj = this.$refs[ref];
            let div = this.$refs[ref + "_div"]
            let obj_height = div.offsetHeight;
            if( obj.value.length>200){
                obj.value = obj.value.slice(0,200)
            }else{
                let obj_height = div.offsetHeight;
                 if (obj_height < min_line_height) {
                    obj_height = min_line_height;
                }
                obj.style.height = obj_height + 2 + 'px';
            }

            },
        nextLine(ref, line_height){
            let obj = this.$refs[ref];
            let div = this.$refs[ref + "_div"]
            let obj_height = div.offsetHeight;
            obj_height += line_height;
        },
        onFileChange(name) {
            let file = this.$refs[name].files[0];
            if (file) {
                this.img[name] = file
                this.src[name] = URL.createObjectURL(file)
            }
        },
        updateUserInfo(){
            this.name = this.getUser.name
            this.username = this.getUser.username
            this.category = this.getUser.profile_type
            this.src.avatar = this.getUser.avatar
            this.src.cover = this.getUser.cover
            this.adult = this.getUser.adult
            this.about = this.getUser.about != null && this.getUser.about != 'null' ?this.getUser.about : ""
            this.email = this.getUser.email
            this.phone = this.getUser.phone
            this.follow_price = this.getUser.follow_price
            this.first_free = this.getUser.first_free
            this.hide_fols = this.getUser.hide_fols
            this.allow_greeting = this.getUser.allow_greeting
            this.greeting_text = this.getUser.greeting_text ? this.getUser.greeting_text : "Привет"
        },
        ...mapActions({
            setUser: 'loadAuthUser'
        })
    },
    mounted() {
        this.updateUserInfo()
    },
}

export default Settings
</script>

<style lang="css">

</style>
