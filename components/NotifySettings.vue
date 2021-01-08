<template>
    <div class="page-notifySetting">
        <div class="page-notifySetting__title">
            <div class="page-notifySetting__title-box">
                <a  class="beck" @click="$router.go(-1)">
                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1708 2.03017L3.18474 9.5L11.1708 16.9698L11.366 17.1524L11.1708 17.335L10.2646 18.1826L10.0939 18.3423L9.92312 18.1826L0.829288 9.68264L0.633266 9.49942L0.829867 9.31682L1.74182 8.46983L1.74246 8.46922L9.92305 0.817421L10.0938 0.657683L10.2646 0.817421L11.1708 1.66502L11.366 1.8476L11.1708 2.03017Z" fill="#4892F3" stroke="#4892F3" stroke-width="0.5"/>
                    </svg>
                    Назад
                </a>
                <h2>Уведомления</h2>
            </div>
        </div>
        <div class="page-notifySetting__content">
            <div class="title">Куда отправлять?</div>
            <div class="list-radio">
                <div class="list-radio__item">
                    <div class="checkbox">
                        <input name="checkbox1" type="checkbox" id="checkbox1"
                            @click="saveSettings('email')"
                            :disabled="email.includes('friendsonly.me')"
                            :checked="push.email == 1"/>
                        <label for="checkbox1">На почту</label>
                        <label class="subdescr" style="color: #a3a3a3" v-if="email.includes('friendsonly.me')">Измените почту в
                            <a href="/settings">настройках</a>, чтобы иметь<br>возможность получать email уведомления</label>
                    </div>
                </div>
                <div class="list-radio__item">
                    <div class="checkbox">
                        <input name="checkbox2" type="checkbox" id="checkbox2"
                        v-model="push.tg"
                        @click="tgActive"
                        :checked="push.tg == 1"/>
                        <label for="checkbox2">В телеграм</label>
                    </div>
                </div>
                <div class="list-radio__item">
                    <div class="checkbox">
                        <input name="checkbox3" type="checkbox" id="checkbox3"
                        v-model="push.web"
                        @click="saveSettings('web')"
                        :checked="push.web == 1"/>
                        <label for="checkbox3">Push-уведомления</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        email: "",
        telegram_started: false,
        push:{
            email:0,
            tg: 0,
            web:0,
        }
    }),

    mounted() {
        this.getUser()
    },
    methods: {
        getUser(){
			axios.get("/webapi/user")
			.then( resp => {
                this.push.email = resp.data.push_email
                this.push.tg = resp.data.push_telegram
                this.push.web = resp.data.push_web
                this.email = resp.data.email
                this.telegram_started = resp.data.telegram_started

			})
			.catch(error => {
				console.log(error)
			})
		},
        saveSettings(type){
            if (type === 'email' && this.email.includes("friendsonly.me")) {
                return;
            }
            axios.get('/webapi/pushSettings/' + type)
                .then((resp) => {
                    this.push[type] = resp.data.value;
                })
                .catch(err => {
                    console.log(err)
                })
        },
        tgActive(){
            if(this.telegram_started == 0){
                window.open('/telegram/push', "_blank")
            }
            else{
                this.saveSettings('telegram')
            }
        }
    },
}
</script>

<style lang="css">
    .notify__on{
        /*display:flex;*/
        margin: 23px 67px 40px;
        font-family: Gilroy;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #1D1D1F
    }
</style>
