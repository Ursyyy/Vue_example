<template>
	<div class="page-verification">
        <div class="page-verification__title">
            <div class="page-verification__title-box">
                <a class="beck" @click="$router.go(-1)">
                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.36037 8.50359L9.7282 2.14366C9.90354 1.96896 10 1.73538 10 1.48633C10 1.23713 9.90354 1.00369 9.7282 0.828715L9.17022 0.271724C8.99516 0.0964715 8.76114 0 8.51176 0C8.26239 0 8.02865 0.0964715 7.85345 0.271724L0.271523 7.84377C0.0956306 8.0193 -0.000688238 8.25385 3.70763e-06 8.50318C-0.000688238 8.75362 0.0954922 8.98789 0.271523 9.16355L7.84639 16.7283C8.02159 16.9035 8.25533 17 8.50484 17C8.75422 17 8.98796 16.9035 9.1633 16.7283L9.72115 16.1713C10.0841 15.8088 10.0841 15.2186 9.72115 14.8562L3.36037 8.50359Z" fill="#4892F3"/>
                    </svg>
                    Назад
                </a>
                <h2>Верификация</h2>
            </div>
        </div>
        <div class="page-verification__content">
                <div class="verification__nav" v-if="user.verified == 0">
                    <h1>Верифицировать мой профиль</h1>
                    <div class="desc">
                        При успешной верификации, ваш профиль будет выделен бейжем
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.2194 0.262695L10.386 2.72308L13.8243 2.38171L13.4502 5.51981L16.1458 7.49735L13.4502 9.47489L13.8243 12.6131L10.386 12.2716L8.2194 14.732L6.05277 12.2716L2.61453 12.6131L2.98862 9.47489L0.292969 7.49735L2.98862 5.51981L2.61453 2.38171L6.05277 2.72308L8.2194 0.262695Z" fill="#469BFC"/>
                            <g clip-path="url(#clip0)">
                                <path d="M4.8418 8.31731L7.35509 11.3339L12.1811 5.55827L11.4882 4.73975L7.35509 9.68531L5.52505 7.49302L4.8418 8.31731Z" fill="white"/>
                            </g>
                            <path d="M8.22 15C8.13112 15 8.04687 14.9631 7.99123 14.8998L5.92537 12.5539L2.64706 12.8794C2.55965 12.888 2.47077 12.86 2.40765 12.8025C2.3449 12.7452 2.31364 12.6648 2.3234 12.584L2.68001 9.59176L0.109796 7.7062C0.0404393 7.65542 0 7.57852 0 7.4974C0 7.41627 0.0404393 7.33937 0.109796 7.2886L2.68001 5.40303L2.3234 2.41083C2.31364 2.32998 2.3449 2.24966 2.40765 2.19232C2.4704 2.13478 2.55928 2.10678 2.64706 2.11542L5.92537 2.44091L7.99123 0.0950051C8.1025 -0.0316684 8.33758 -0.0316684 8.44877 0.0950051L10.5146 2.44091L13.7929 2.11542C13.8812 2.10704 13.9695 2.13504 14.0323 2.19232C14.0952 2.24959 14.1264 2.32998 14.1166 2.41083L13.76 5.40303L16.3302 7.2886C16.3996 7.33937 16.44 7.41627 16.44 7.4974C16.44 7.57852 16.3996 7.65542 16.3302 7.7062L13.76 9.59176L14.1166 12.584C14.1264 12.6648 14.0951 12.7451 14.0323 12.8025C13.9696 12.86 13.881 12.8875 13.7929 12.8794L10.5146 12.5539L8.44877 14.8998C8.39313 14.9631 8.30888 15 8.22 15ZM6.05344 12.0036C6.14174 12.0036 6.22628 12.04 6.28221 12.1039L8.22 14.3042L10.1577 12.1038C10.2202 12.0324 10.3191 11.9949 10.4183 12.0051L13.4934 12.3105L13.1588 9.50387C13.1479 9.41284 13.1885 9.32334 13.2669 9.266L15.6777 7.4974L13.2669 5.72879C13.1886 5.67152 13.1479 5.58202 13.1588 5.49092L13.4934 2.68427L10.4183 2.98967C10.3203 3.00012 10.2205 2.96274 10.1577 2.891L8.22 0.690591L6.28228 2.891C6.21953 2.96241 6.11972 2.99905 6.02166 2.98967L2.94665 2.68427L3.28125 5.49092C3.29211 5.58195 3.25145 5.67145 3.17314 5.72879L0.762332 7.4974L3.17314 9.266C3.25138 9.32328 3.29211 9.41277 3.28125 9.50387L2.94665 12.3105L6.02166 12.0051C6.03223 12.0042 6.04287 12.0036 6.05344 12.0036Z" fill="#469BFC"/>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="7.33929" height="8.79211" fill="white" transform="translate(4.8418 3.64062)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <br><br>
                        Это даст вашим друзьям уверенность, что вы не фейк и тем самым кол-во вашего заработка увеличится.
                    </div>
                    <form action="/verification" method="POST" enctype="multipart/form-data">
                        <div class="verification__form">
                            <div class="form">
                                <div class="form__file">
                                    <input name="doc" type="file" id="file_verification1" ref="doc"  @change="onFileChange('doc')" accept="image/*" />
                                    <label for="file_verification1">
                                        {{text['doc']}} <span v-if="files['doc'] == null">Выбрать файл</span>
                                        <svg v-else width="19" height="19" viewBox="0 0 19 19" style="opacity: 1;" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.50045 18.2641C14.3407 18.2641 18.2646 14.3403 18.2646 9.49996C18.2646 4.65967 14.3407 0.73584 9.50045 0.73584C4.66016 0.73584 0.736328 4.65967 0.736328 9.49996C0.736328 14.3403 4.66016 18.2641 9.50045 18.2641Z" fill="#2F80ED"/>
                                            <path d="M9.5 19C4.26212 19 0 14.7386 0 9.5C0 4.26212 4.26212 0 9.5 0C14.7386 0 19 4.26212 19 9.5C19 14.7386 14.7386 19 9.5 19ZM9.5 1.47172C5.07304 1.47172 1.47172 5.07304 1.47172 9.5C1.47172 13.927 5.07304 17.5283 9.5 17.5283C13.927 17.5283 17.5283 13.9262 17.5283 9.5C17.5283 5.07304 13.927 1.47172 9.5 1.47172Z" fill="#2F80ED"/>
                                            <path d="M8.35154 12.9955C8.15434 12.9955 7.96593 12.9168 7.82685 12.7755L5.11152 10.016C4.82674 9.72607 4.83041 9.26101 5.12035 8.97549C5.41029 8.69146 5.87608 8.69439 6.16086 8.98433L8.3302 11.189L12.8182 6.24618C13.0927 5.94522 13.5578 5.92388 13.8573 6.19615C14.1582 6.46917 14.1803 6.93422 13.9073 7.23592L8.89608 12.7549C8.75996 12.905 8.56863 12.9918 8.36627 12.9962C8.36111 12.9955 8.35669 12.9955 8.35154 12.9955Z" fill="white"/>
                                        </svg>
                                    </label>
                                </div>
                                <div class="success">Ваши данные проверяются 🚀</div>
                            </div>
                            <div class="desc">
                                Необходимо загрузить лицевую и обратную сторону вашего паспорта
                            </div>
                        </div>
                        <div class="verification__form">
                        <div class="form">
                            <div class="form__file">
                                <input type="file" name="selfie" ref="selfie" @change="onFileChange('selfie')" id="file_verification2" accept="image/*"/>
                                <label for="file_verification2">
                                    {{text['selfie']}} <span v-if="files['selfie'] == null">Выбрать файл</span>
                                    <svg v-else width="19" height="19" style="opacity: 1" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.50045 18.2641C14.3407 18.2641 18.2646 14.3403 18.2646 9.49996C18.2646 4.65967 14.3407 0.73584 9.50045 0.73584C4.66016 0.73584 0.736328 4.65967 0.736328 9.49996C0.736328 14.3403 4.66016 18.2641 9.50045 18.2641Z" fill="#2F80ED"/>
                                        <path d="M9.5 19C4.26212 19 0 14.7386 0 9.5C0 4.26212 4.26212 0 9.5 0C14.7386 0 19 4.26212 19 9.5C19 14.7386 14.7386 19 9.5 19ZM9.5 1.47172C5.07304 1.47172 1.47172 5.07304 1.47172 9.5C1.47172 13.927 5.07304 17.5283 9.5 17.5283C13.927 17.5283 17.5283 13.9262 17.5283 9.5C17.5283 5.07304 13.927 1.47172 9.5 1.47172Z" fill="#2F80ED"/>
                                        <path d="M8.35154 12.9955C8.15434 12.9955 7.96593 12.9168 7.82685 12.7755L5.11152 10.016C4.82674 9.72607 4.83041 9.26101 5.12035 8.97549C5.41029 8.69146 5.87608 8.69439 6.16086 8.98433L8.3302 11.189L12.8182 6.24618C13.0927 5.94522 13.5578 5.92388 13.8573 6.19615C14.1582 6.46917 14.1803 6.93422 13.9073 7.23592L8.89608 12.7549C8.75996 12.905 8.56863 12.9918 8.36627 12.9962C8.36111 12.9955 8.35669 12.9955 8.35154 12.9955Z" fill="white"/>
                                    </svg>
                                </label>
                            </div>
                            <div class="success">Ваши данные проверяются 🚀</div>
                        </div>
                        <div class="desc">
                            Сделайте селфи держа в руке паспорт в развернутом виде (главная страница)
                        </div>
                    </div>
                    </form>
                   <button type="submit" disabled v-if="!allFiles">Загрузить фотографии</button>
                   <button type="submit" @click="verify()" v-else-if="allFiles && !sendFiles">Загрузить фотографии</button>
                    <div id="success" v-else>Ваши данные проверяются 🚀</div>
                </div>
                <div class="verification__success" v-else>
                    <p>
                        Вы успешно <br> верифицированы👍
                    </p>
                </div>
        </div>
    </div>
</template>

<script>
const Verification = {
	name: "page-paymentCart",
	//props:["user"],
	components:{},
	data: () => ({
        user:{
            verified: 0,
        },
        files: {
            selfie: null,
            doc: null,
        },
        text: {
            'doc': "Главная страница паспорта",
            'selfie': "Фото селфи"
        },
        sendFiles: false,
    }),
	mounted() {
        this.getUser()
        this.getVerify()
    },
	computed: {
        allFiles(){
            return this.files["selfie"] != null && this.files['doc'] != null
        }
    },
	methods: {
        getUser(){
            axios.get("/webapi/user")
            .then( resp => {
                this.user = resp.data
            })
            .catch(error => {
                    console.log(error)
            })
        },
        getVerify(){
            axios.get('/verification/check')
                .then( resp => {
                    if(resp.data == 1){
                        this.files["selfie"] = "123" 
                        this.files['doc'] = "123"
                        this.sendFiles =true
                    }
                })
        },
        onFileChange(type) {
			let file = type == 'selfie' ? this.$refs.selfie.files[0] : this.$refs.doc.files[0];
			if (file && file.type.split("/")[0] == 'image') {
				this.files[type] = file;
                this.text[type] = file.name.length > 20 ? file.name.slice(0,20) + "..." : file.name;
			}
		},
        verify(){
            if(this.allFiles){
                let form = new FormData()
                form.append('doc', this.files['doc'])
                form.append('selfie', this.files['selfie'])
                axios.post("/verification", form)
                .then(resp => {
                    this.sendFiles = true
                })
                .catch(error => {
                    console.log(error)
                })
            }
        }
    },
}

export default Verification
</script>

<style scoped>
#success{
    display: block;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    font-feature-settings: 'liga' off;
    color: #1D1D1F;
    padding-top: 5px;
}
</style>
