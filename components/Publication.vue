<template>
    <div class="page-publication">
        <div class="page-publication__title">
            <div class="page-publication__title-box">
                <a @click="$router.go(-1)" class="beck">
                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1708 2.03017L3.18474 9.5L11.1708 16.9698L11.366 17.1524L11.1708 17.335L10.2646 18.1826L10.0939 18.3423L9.92312 18.1826L0.829288 9.68264L0.633266 9.49942L0.829867 9.31682L1.74182 8.46983L1.74246 8.46922L9.92305 0.817421L10.0938 0.657683L10.2646 0.817421L11.1708 1.66502L11.366 1.8476L11.1708 2.03017Z" fill="#2F80ED" stroke="#2F80ED" stroke-width="0.5"/>
                    </svg>
                    Назад
                </a>
                <h2>Новая публикация</h2>
            </div>
        </div>
        <div class="page-publication__content" v-if="getUser && getUser.verified">
            <h3>Выберите формат публикации</h3>
            <div class="tabs">
                <div class="tabs__nav">
                    <div class="item" :class="{active: open}"
                        @click="switchOn('open')">Открытый</div>
                    <div class="item" :class="{active: forFriends}"
                        @click="switchOn('forFriends')">Для друзей👋</div>
                    <div class="item" :class="{active: withPrice}"
                        @click="switchOn('withPrice')">С ценой🔒</div>
                </div>
                <div>
                    <!-- ^ action="{{ route('publication') }}"-->
                    <!--@csrf-->
                    <input type="radio" name="privacy" checked value="0" id="inputPrivacy" style="display: none">
                    <div class="form__publication">
                        <div class="form__publication-file">
                            <label for="file1" >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0006 13.6667C9.82973 13.6667 9.6664 13.5967 9.5489 13.4733L5.1739 8.89C4.79473 8.49333 5.0764 7.83333 5.62556 7.83333H7.91723V3.04167C7.91723 2.4675 8.38473 2 8.9589 2H11.0422C11.6164 2 12.0839 2.4675 12.0839 3.04167V7.83333H14.3756C14.9247 7.83333 15.2064 8.49333 14.8272 8.89L10.4522 13.4733C10.3347 13.5967 10.1714 13.6667 10.0006 13.6667Z" fill="white"/>
                                    <rect y="16" width="20" height="2" rx="1" fill="white"/>
                                </svg>
                                <p>Загрузить</p>
                                <video >
                                    <source :src="src" id="video_here">
                                </video>
                                <div class="load" id="video_load">
                                    <img src="/image/spinner.gif" alt="">
                                </div>
                            </label>
                            <input type="file" name="video" @change="onFileChange()" ref="file" id="file1" accept="video/*">
                            <p id="status"></p>
                        </div>
                        <div class="form__publication-textarea">
                            <textarea id="desc__textarea2" v-model="message" name="description" placeholder="Опишите свою публикацию"></textarea>
                            <div class="max-num"><span>0</span>/250</div>
                        </div>
                        <div class="error-video">Ошибка: видео должно быть не больше 100Mb</div>
                    </div>
                    <div class="tabs__content" >
                        <div class="tabs__box " :class="{active: open}">
                            <div class="box-info">
                                <p>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0C3.5888 0 0 3.58885 0 8.00005C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8.00005C16 3.58885 12.4112 0 8 0ZM8 14.5455C4.39079 14.5455 1.45455 11.6092 1.45455 8.00005C1.45455 4.39088 4.39079 1.45455 8 1.45455C11.6092 1.45455 14.5455 4.39088 14.5455 8.00005C14.5455 11.6092 11.6092 14.5455 8 14.5455Z" fill="#1D1D1F"/>
                                        <path d="M7.99978 3.39392C7.46518 3.39392 7.03027 3.82912 7.03027 4.36405C7.03027 4.8985 7.46518 5.33331 7.99978 5.33331C8.53437 5.33331 8.96928 4.8985 8.96928 4.36405C8.96928 3.82912 8.53437 3.39392 7.99978 3.39392Z" fill="#1D1D1F"/>
                                        <path d="M7.99973 6.78787C7.59809 6.78787 7.27246 7.1135 7.27246 7.51515V11.8788C7.27246 12.2804 7.59809 12.6061 7.99973 12.6061C8.40138 12.6061 8.72701 12.2804 8.72701 11.8788V7.51515C8.72701 7.1135 8.40138 6.78787 7.99973 6.78787Z" fill="#1D1D1F"/>
                                    </svg>
                                    Открытый контент: это ваши открытые фото и видео которые могут посмотреть все пользователи. Это позволит им частично увидеть ваш контент в профиле, прежде чем оформить подписку. Мы рекомендуем делать 20% контента открытым. Так же мы будем продвигать ваши ролики в рекомендованных 😊                                </p>
                                <button type="submit" class="btn-public" disabled="disabled" @click="publish()">Опубликовать</button>
                            </div>
                        </div>
                        <div class="tabs__box " :class="{active: forFriends}">
                            <div class="box-info">
                                <p>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0C3.5888 0 0 3.58885 0 8.00005C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8.00005C16 3.58885 12.4112 0 8 0ZM8 14.5455C4.39079 14.5455 1.45455 11.6092 1.45455 8.00005C1.45455 4.39088 4.39079 1.45455 8 1.45455C11.6092 1.45455 14.5455 4.39088 14.5455 8.00005C14.5455 11.6092 11.6092 14.5455 8 14.5455Z" fill="#4B4B4B"/>
                                        <path d="M7.99978 3.39392C7.46518 3.39392 7.03027 3.82912 7.03027 4.36405C7.03027 4.8985 7.46518 5.33331 7.99978 5.33331C8.53437 5.33331 8.96928 4.8985 8.96928 4.36405C8.96928 3.82912 8.53437 3.39392 7.99978 3.39392Z" fill="#4B4B4B"/>
                                        <path d="M7.99973 6.78787C7.59809 6.78787 7.27246 7.1135 7.27246 7.51515V11.8788C7.27246 12.2804 7.59809 12.6061 7.99973 12.6061C8.40138 12.6061 8.72701 12.2804 8.72701 11.8788V7.51515C8.72701 7.1135 8.40138 6.78787 7.99973 6.78787Z" fill="#4B4B4B"/>
                                    </svg>
                                    Для друзей: эти фото и видео увидят только ваши друзья, кто оплатил подписку
                                </p>
                                <button type="submit" class="btn-public" disabled="disabled" @click="publish()">Опубликовать</button>
                            </div>
                        </div>
                        <div class="tabs__box" :class="{active: withPrice}">
                            <div class="box-pricePost">
                                <label>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0C3.5888 0 0 3.58885 0 8.00005C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8.00005C16 3.58885 12.4112 0 8 0ZM8 14.5455C4.39079 14.5455 1.45455 11.6092 1.45455 8.00005C1.45455 4.39088 4.39079 1.45455 8 1.45455C11.6092 1.45455 14.5455 4.39088 14.5455 8.00005C14.5455 11.6092 11.6092 14.5455 8 14.5455Z" fill="#4B4B4B"/>
                                        <path d="M7.99978 3.39392C7.46518 3.39392 7.03027 3.82912 7.03027 4.36405C7.03027 4.8985 7.46518 5.33331 7.99978 5.33331C8.53437 5.33331 8.96928 4.8985 8.96928 4.36405C8.96928 3.82912 8.53437 3.39392 7.99978 3.39392Z" fill="#4B4B4B"/>
                                        <path d="M7.99973 6.78787C7.59809 6.78787 7.27246 7.1135 7.27246 7.51515V11.8788C7.27246 12.2804 7.59809 12.6061 7.99973 12.6061C8.40138 12.6061 8.72701 12.2804 8.72701 11.8788V7.51515C8.72701 7.1135 8.40138 6.78787 7.99973 6.78787Z" fill="#4B4B4B"/>
                                    </svg>
                                    Установите цену на этот пост
                                </label>
                                <input type="number" name="price" placeholder="0.00" v-model="price" inputmode="numeric">
                            </div>
                            <div class="box-info">
                                <p>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0C3.5888 0 0 3.58885 0 8.00005C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8.00005C16 3.58885 12.4112 0 8 0ZM8 14.5455C4.39079 14.5455 1.45455 11.6092 1.45455 8.00005C1.45455 4.39088 4.39079 1.45455 8 1.45455C11.6092 1.45455 14.5455 4.39088 14.5455 8.00005C14.5455 11.6092 11.6092 14.5455 8 14.5455Z" fill="#4B4B4B"/>
                                        <path d="M7.99978 3.39392C7.46518 3.39392 7.03027 3.82912 7.03027 4.36405C7.03027 4.8985 7.46518 5.33331 7.99978 5.33331C8.53437 5.33331 8.96928 4.8985 8.96928 4.36405C8.96928 3.82912 8.53437 3.39392 7.99978 3.39392Z" fill="#4B4B4B"/>
                                        <path d="M7.99973 6.78787C7.59809 6.78787 7.27246 7.1135 7.27246 7.51515V11.8788C7.27246 12.2804 7.59809 12.6061 7.99973 12.6061C8.40138 12.6061 8.72701 12.2804 8.72701 11.8788V7.51515C8.72701 7.1135 8.40138 6.78787 7.99973 6.78787Z" fill="#4B4B4B"/>
                                    </svg>
                                    С ценой: это пост смогут увидеть только те люди кто оплатит введенную вами сумму выше на этом посте
                                </p>
                                <button type="submit" class="btn-public" disabled="disabled" @click="publish()">Опубликовать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-notifications__none" v-else>
            <h4>
                Сперва необходимо <a style="color: #4892F3;" @click="$router.push({name: 'verification'})">верифицировать аккаунт</a>
            </h4>
        </div>
    </div>
</template>

<script>

import {mapGetters, mapMutations, mapActions} from 'vuex'
import { SET_LOAD, SET_USER, SET_MENU } from '../store/types'
const Publication = {
    data: () => ({
        open: true,
        forFriends: false,
        withPrice: false,
        file: null,
        price: 0,
        src: '',
        message: "",
        type: 0
    }),
    computed:{
        ...mapGetters([
            'getUser'
        ]),
    },
    mounted() {
    },
    methods: {
        ...mapMutations({
            setLoad: SET_LOAD
        }),
        ...mapActions({
            setUser: 'loadAuthUser'
        }),
        publish(type){
            this.setLoad(true)
            let form = new FormData()
            form.append('privacy', this.type)
            form.append('video', this.file)
            form.append('price', this.price)
            form.append('description', this.message)
            axios.post('/publication', form, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }})
                .then(resp => {
                    this.setUser()
                    this.setLoad(false)

                    this.$router.push({name: 'account', params:{username: this.getUser.username}});
                })

        },
        onFileChange() {
            let file = this.$refs.file.files[0];
            if (file) {
                this.file = file;
                this.src = URL.createObjectURL(file);
            }
        },
        switchOn(name){
            if(name == 'withPrice'){
                this.type = 2;
                this.open = this.forFriends = false;
                this.withPrice = true;
            }else if(name == 'forFriends'){
                this.type = 1;
                this.open = this.withPrice = false;
                this.forFriends = true;
            }else{
                this.type = 0;
                this.forFriends = this.withPrice = false;
                this.open = true;
            }
        },
    },
}

export default Publication
</script>

<style lang="css">

</style>
