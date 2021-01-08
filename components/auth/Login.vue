<template>
	<div>
		<div>
			<div class="form-group" :class="{has_error: error_email}">
				<input name="email" type="text" v-model="email" :class="{is_invalid: error_email}" placeholder="Телефон или email">

				<span class="invalid-feedback" role="alert" v-if="error_email">
					<strong>{{ message_email }}</strong>
				</span>
			</div>
			<div class="form-group" :class="{has_error: error_pass}">
				<input name="password" type="password" v-model="pass" placeholder="Пароль">
				<span class="invalid-feedback" v-if="error_pass" role="alert">
					<strong>{{ message_pass }}</strong>
				</span>
				<a class="linkForgot" @click="$router.push({name: 'forgot_password'})">Забыли?</a>
			</div>
			<button @click="login()">Войти</button>
		</div>
		<div class="page-login__footer">
			<ul>
				<li>
					<a :href="socLogin('vkontakte')">
						<svg width="29" height="29" viewBox="0 0 29 29" fill="none"
								xmlns="http://www.w3.org/2000/svg">
							<rect width="29" height="29" rx="14.5" fill="#5181B8"/>
							<path fill-rule="evenodd" clip-rule="evenodd"
									d="M24.2665 10.0754C24.4089 9.67592 24.2665 9.38232 23.5893 9.38232H21.3498C20.7803 9.38232 20.518 9.63592 20.3756 9.91564C20.3756 9.91564 19.2366 12.2527 17.6232 13.7707C17.1013 14.2102 16.8641 14.3499 16.5793 14.3499C16.437 14.3499 16.2309 14.2102 16.2309 13.8107V10.0754C16.2309 9.59592 16.0657 9.38232 15.5911 9.38232H12.0719C11.7161 9.38232 11.5021 9.60481 11.5021 9.81571C11.5021 10.2702 12.3086 10.375 12.3918 11.6533V14.4299C12.3918 15.0387 12.2613 15.1491 11.9765 15.1491C11.2173 15.1491 9.37071 12.8015 8.27528 10.1154C8.06061 9.59323 7.8453 9.38232 7.27294 9.38232H5.03345C4.3936 9.38232 4.26562 9.63592 4.26562 9.91564C4.26562 10.415 5.02497 12.892 7.80083 16.1678C9.65145 18.4049 12.2587 19.6176 14.6313 19.6176C16.055 19.6176 16.2309 19.3483 16.2309 18.8843V17.1935C16.2309 16.6548 16.3658 16.5473 16.8165 16.5473C17.1488 16.5473 17.7181 16.6871 19.0469 17.7657C20.5653 19.0442 20.8155 19.6176 21.6697 19.6176H23.9092C24.549 19.6176 24.869 19.3483 24.6844 18.8167C24.4825 18.2869 23.7575 17.5184 22.7955 16.6072C22.2736 16.0878 21.4905 15.5285 21.2535 15.2489C20.9212 14.8893 21.0161 14.7295 21.2535 14.4099C21.2535 14.4099 23.9818 11.174 24.2665 10.0754Z"
									fill="white"/>
						</svg>
					</a>
				</li>
				<li>
					<a :href="socLogin('facebook')">
						<svg width="29" height="29" viewBox="0 0 29 29" fill="none"
								xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clips0)">
								<rect width="29" height="29" rx="14.5" fill="#157DC3"/>
								<path
									d="M16.5296 29.853V18.5706H20.554L21.1547 14.173H16.5296V11.3693C16.5296 10.0919 16.902 9.23269 18.8481 9.23269H21.3228V5.28725C20.8904 5.23073 19.4247 5.11768 17.7189 5.11768C14.1509 5.11768 11.7122 7.16388 11.7122 10.9284V14.173H7.67578V18.5706H11.7122V29.853H16.5296Z"
									fill="white"/>
							</g>
							<defs>
								<clipPath id="clips0">
									<rect width="29" height="29" rx="14.5" fill="white"/>
								</clipPath>
							</defs>
						</svg>
					</a>
				</li>
				<li>
					<a href="tg://resolve?domain=Friendsonly_mebot">
						<img src="/image/icon-teleg.svg" alt="">
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import {mapActions} from 'vuex'

const Login = {
	props:['redirect'],
	data: () => ({
		error_email: false,
		error_message: false,
		error_pass: false,
		message_email: '',
		message_pass: '',
		email: '',
		pass: '',
	}),
	methods: {
		login(){
			this.error_email = this.error_pass = false
		    let emailPattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			let testTel = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
			if(this.pass.length < 4){
				this.error_pass = true
				this.message_pass = "Пароль должен состоять минимум из 4 символов"
				return
			}
			if(!emailPattern.test(this.email) && !testTel.test(this.email)){
				this.error_email = true
				this.message_email = "Почта или телефон введен неверно"
				return
			}
			let form = new FormData()
			form.append('email', this.email)
			form.append('password', this.pass)
			axios.post('/login', form)
				.then(resp => {
					this.setUser()
					if(this.redirect) this.$router.go(-1)
				})
				.catch(error => {
					this.error_email = this.error_pass = true
					this.message_email = "Почта или пароль введены неверно"
				})
		},
        socLogin(provider) {
		    if (this.$router.currentRoute.params.id) {
		        return '/login/'+provider+'?payment='+this.$router.currentRoute.params.id;
            }
		    return '/login/'+provider;
        },
		...mapActions({
			setUser: "loadAuthUser"
		})
	},
}

export default Login
</script>

<style lang="css">

</style>


