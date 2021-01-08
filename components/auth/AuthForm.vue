<template>
    <div class="page-register">
        <div class="page-register__title">
            <a class="beck" @click="$router.go(-1)">
                <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 21.0005L2.99969 11.5002L12.5 1.99986" stroke="#4892F3" stroke-width="3" stroke-miterlimit="10"/>
                </svg>
            </a>
            <div class="name" v-if="login">Авторизация</div>
            <div class="name" v-else>Регистрация</div>
        </div>
        <div class="page-login__form" style="padding: 0px 28px 30px;" v-if="login">
            <login :redirect='true'></login>
            <div class="page-login__footer">
                <p>Еще нет аккаунта?</p>
                <a class="link" @click="login = false">Зарегистрироваться</a>
            </div>
		</div>
        <div class="page-register__form" v-else>
            <h2>Зарегистрироваться в FriendsOnly</h2>
            <div class="text">
                Зарегистрируйтесь, чтобы подписываться на другие аккаунты, выкладывать собственные видео, набирать друзей и зарабатывать деньги
            </div>
            <register :redirect='true'></register>
            <div class="box-log">
                Уже есть аккаунт? <a @click="login = true">Войти</a>
            </div>
        </div>
        <div style="margin: 30px; left: 50%; bottom:70px;">
            <div style="font-family: Gilroy;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 12px;
                        line-height: 14px;
                        text-align: center;
                        position: relative;
                        /* left: -50%; */
                        color: #818181;">
                LOOPLAB LTD, Reg. Number: HE 415324<br>
                        <a href = "mailto: info@friendsonly.me" style="color:#4892F3">info@friendsonly.me</a>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
const AuthForm = {
    data: () => ({
        login: true
    }),
    mounted(){
        //this.login = this.$router.currentRoute.params.login == "login"
    }
}

export default AuthForm
</script>
