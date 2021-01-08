<template>
<div class="page-legalInformation">
    <div class="page-legalInformation__title">
        <div class="page-legalInformation__title-box">
            <a class="beck" @click="$router.go(-1)">
                <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1708 2.03017L3.18474 9.5L11.1708 16.9698L11.366 17.1524L11.1708 17.335L10.2646 18.1826L10.0939 18.3423L9.92312 18.1826L0.829288 9.68264L0.633266 9.49942L0.829867 9.31682L1.74182 8.46983L1.74246 8.46922L9.92305 0.817421L10.0938 0.657683L10.2646 0.817421L11.1708 1.66502L11.366 1.8476L11.1708 2.03017Z" fill="#4892F3" stroke="#4892F3" stroke-width="0.5"/>
                </svg>
                Назад
            </a>
            <h2>Помощь</h2>
        </div>
    </div>
    <div class="page-legalInformation__content">
        <div class="listHelp">
            <div class="listHelp__item" :class="{active: first}" @click="first =! first">
                <div class="title">Как оформить подписку?</div>
                <vue-slide-up-down :active="first" :duration="500">
                    <div class="text">
                        Перейдите на страницу профиля и нажмите на кнопку “Подписаться” далее вам перебросит на страницу где указана цена подписки и после повторно нажимая кнопку “Подписаться” и если ваша карта не привязана, то нужно будет привязать ее, после оплаты вас автоматически перебросит на страницу профиля с купленным уже контентом
                    </div>
                </vue-slide-up-down>
            </div>
            <div class="listHelp__item" :class="{active: second}" @click="second =! second">
                <div class="title">Как отписаться?</div>
                <vue-slide-up-down :active="second" :duration="500">
                    <div class="text">
                        Перейдите на страницу вашего профиля <a @click="$router.push({name:'account', params:{username: getUser.username}})">Я</a>, после  перейдите на страницу управление подписками, далее выберите профиль с которого хотите отписаться и нажмите кнопку “Отписаться”
                    </div>
                </vue-slide-up-down>
            </div>
            <div class="listHelp__item" :class="{active: third}" @click="third =! third">
                <div class="title">Как восстановить пароль</div>
                <vue-slide-up-down :active="third" :duration="500">
                    <div class="text">
                        Если вы забыли пароль, вы можете восстановить его с помощью Забыли?
                    </div>
                </vue-slide-up-down>
            </div>
            <div class="listHelp__item" :class="{active: fourth}" @click="fourth =! fourth">
                <div class="title">Как восстановить аккаунт в 1 клик</div>
                <vue-slide-up-down :active="fourth" :duration="500">
                    <div class="text">
                        
                        Если вы зарегистрировались в 1 клик, то мы к сожалению не можем восстановить пароль по причине того, что мы не имеем представления какой именно присвоился к вам email или пароль из-за безопасности наших пользователей
                    </div>
                </vue-slide-up-down>
            </div>
        </div>
        <div class="faq">Если в списке нету вашего вопроса, то пожалуйста отпишите нам на почту: <a href = "mailto: info@friendsonly.me" style="color:#4892F3">info@friendsonly.me</a></div>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import VueSlideUpDown from 'vue-slide-up-down-component'

const Law = {
    components: {
        VueSlideUpDown
    },
    data: ()=>({
        first: false,
        second: false,
        third: false,
        fourth: false
    }),
    computed: {
        ...mapGetters([
            'getCountryTime',
            'getUser'
        ])
    },
    
}

export default Law
</script>

<style lang="css">
.faq{
    width: 321px;
    height: 28px;
    left: 27px;
    margin-top: 33px;
    margin-left: auto;
    margin-right: auto;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;

    color: #1D1D1F;
}
.faq a{
    color: #4892F3;
}
</style>
