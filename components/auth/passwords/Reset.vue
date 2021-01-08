<template>
   <div class="page-forgot">
        <div class="page-forgot__title">
            <a @click="$router.go(-1)" class="beck">
                <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 21.0005L2.99969 11.5002L12.5 1.99986" stroke="#4892F3" stroke-width="3" stroke-miterlimit="10"/>
                </svg>
            </a>
            <div class="name">Сбросить пароль</div>
        </div>
        <div class="page-forgot__form">
            <h3>Забыли пароль? </h3>
            <p>Мы вышлем вам новый пароль на вашу почту или на телефон</p>
            <div>
                <div class="form-group">
                    <p style="color: red" v-if="error">Почта не найдена</p>
                    <input name="email" type="text" placeholder="Почта или номер телефона" :model="email">
                </div>
                <button @click="send()">Отправить</button>
            </div>
        </div>
    </div>
</template>

<script>
const Reset = {
    data: () => ({
        email:'',
        error: false
    }),
    methods: {
        send(){
            axios.post('/new/password', this.email)
                .then( resp => {
                    console.log(resp)
                })
        }
    },
}
export default Reset
</script>

<style lang="css">
    
</style>