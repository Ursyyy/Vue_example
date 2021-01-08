<template>
    <div class="FAQContent">
        <header class="header">
            <div class="header-box">
                <a class="beck" @click="$router.go(-1);">
                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.1708 2.03017L3.18474 9.5L11.1708 16.9698L11.366 17.1524L11.1708 17.335L10.2646 18.1826L10.0939 18.3423L9.92312 18.1826L0.829288 9.68264L0.633266 9.49942L0.829867 9.31682L1.74182 8.46983L1.74246 8.46922L9.92305 0.817421L10.0938 0.657683L10.2646 0.817421L11.1708 1.66502L11.366 1.8476L11.1708 2.03017Z"
                            fill="#2F80ED" stroke="#2F80ED" stroke-width="0.5"/>
                    </svg>
                    Назад
                </a>
                <div class="heading">
                    <h2>Помощь и поддержка</h2>
                </div>
            </div>
        </header>

        <div v-if="!itemName">
            <div class="tabsHeading">
                <h2>Нужна помощь?</h2>
                <div class="underline"></div>
                <p>Выберите нужный для вас раздел, чтобы получить немедленную помощь.</p>
            </div>

            <div class="content">
                <Tabs
                    v-bind:tabsData="faq"
                    v-if="tabLoad"
                ></Tabs>
            </div>

            <div class="tgBlock">
                <p>Не нашли ответ? Напишите <br> нам и мы ответим!</p>
                <a target="_blank" href="https://t.me/friendsonly_me">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="url(#paint0_linear)"/>
                        <path d="M9.8002 17.5C9.4114 17.5 9.4775 17.3532 9.3434 16.983L8.2002 13.2207L17.0002 8" fill="#C8DAEA"/>
                        <path d="M9.7998 17.5C10.0998 17.5 10.2323 17.3628 10.3998 17.2L11.9998 15.6442L10.004 14.4407" fill="#A9C9DD"/>
                        <path d="M10.0042 14.441L14.8402 18.0139C15.3921 18.3184 15.7903 18.1607 15.9278 17.5016L17.8963 8.22526C18.0978 7.41726 17.5883 7.05066 17.0603 7.29036L5.50132 11.7475C4.71232 12.064 4.71702 12.5042 5.35752 12.7003L8.32382 13.6262L15.1911 9.29366C15.5153 9.09706 15.8129 9.20266 15.5687 9.41946" fill="url(#paint1_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="16.008" y1="4.008" x2="10.008" y2="18" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#37AEE2"/>
                                <stop offset="1" stop-color="#1E96C8"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="13.5046" y1="12.0009" x2="15.3774" y2="16.2678" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#EFF7FC"/>
                                <stop offset="1" stop-color="white"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <span>Написать</span>
                </a>
            </div>
        </div>

        <div class="openLink" v-else>
            <div class="text">
                <h2 class="linkName">{{itemName}}</h2>
                <div class="underline"></div>
                <p class="textContent">{{itemText}}</p>
            </div>
            <button @click="$router.go(-1);">
                <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.06494 10.1917L11.7306 17.7772C11.9416 17.9856 12.0583 18.2647 12.0592 18.5627C12.0602 18.8609 11.9453 19.1406 11.7356 19.3506L11.0681 20.0192C10.8587 20.2296 10.5783 20.3459 10.279 20.3468C9.97976 20.3478 9.6989 20.2333 9.48799 20.0242L0.360862 10.993C0.149123 10.7837 0.0326463 10.5034 0.032526 10.2051C0.0307408 9.90542 0.145264 9.62475 0.35583 9.41388L9.41678 0.333495C9.62635 0.12313 9.90647 0.00680611 10.2059 0.00585204C10.5051 0.00489849 10.786 0.119435 10.9971 0.328459L11.6686 0.992785C12.1056 1.42517 12.1078 2.13132 11.6736 2.56632L4.06494 10.1917Z" fill="#4892F3"/>
                </svg>
                Назад к разделам
            </button>
        </div>
    </div>
</template>

<script>
import Tabs from "./Tabs";
const FAQPage = {
    props: ['itemName', 'itemText'],
    data: () => ({
        faq: [
            // {
            //     id: 0,
            //     name: 'Общие настройки',
            //     items: [
            //         {
            //             id: 1,
            //             name: 'Для друзей',
            //             links: [
            //                 {id: 2, name: 'Пожаловаться на аккаунт', text: 'Чтобы пожаловаться на аккаунт, перейдите на страницу его профиля, нажмите на три точки в правом верхнем углу и выберите «Пожаловаться (пользователь)».Чтобы пожаловаться на отдельное сообщение, нажмите на три точки в правом верхнем углу сообщения и выберите «Пожаловаться».'},
            //                 {id: 3, name: 'Удаление вашей учетной записи', text: 'Удаление вашей учетной записи тестовый контент который будет с админки'}
            //             ]
            //         },
            //         {
            //             id: 4,
            //             name: 'Для друзей2',
            //             hasChild: true,
            //             links: [
            //                 {id: 5, name: 'Пожаловаться на аккаунт2', text: 'Удаление вашей учетной записи тестовый контент который будет с админки'},
            //                 {id: 6, name: 'Удаление вашей учетной записи2', text: 'Удаление вашей учетной записи тестовый контент который будет с админки'}
            //             ]
            //         }
            //     ]
            // },
            // {
            //     id: 7,
            //     name: 'Тестовая информация',
            //     items: [
            //         {
            //             id: 8,
            //             name: 'Для друзей3',
            //             hasChild: true,
            //             links: [
            //                 {id: 9, name: 'Пожаловаться на аккаунт', text: 'Удаление вашей учетной записи тестовый контент который будет с админки123123'},
            //                 {id: 10, name: 'Удаление вашей учетной записи', text: 'Удаление вашей учетной записи тестовый контент который будет с админки123123'}
            //             ]
            //         },
            //         {
            //             id: 11,
            //             name: 'Для друзей4',
            //             links: [
            //                 {id: 12, name: 'Пожаловаться на аккаунт2', text: 'some text'},
            //                 {id: 13, name: 'Удаление вашей учетной записи2', text: 'some text'},
            //                 {id: 14, name: 'Пожаловаться на аккаунт2', text: 'some text'},
            //                 {id: 15, name: 'Удаление вашей учетной записи2', text: 'some text'},
            //                 {id: 16, name: 'Пожаловаться на аккаунт2', text: 'some text'},
            //                 {id: 17, name: 'Удаление вашей учетной записи2', text: 'some text'}
            //             ]
            //         }
            //     ]
            // },
            // {
            //     id: 18,
            //     name: 'Раздел информации',
            //     items: [
            //         {
            //             id: 19,
            //             name: 'Для друзей3',
            //             links: [
            //                 {id: 20, name: 'Пожаловаться на аккаунт', text: 'Длинный текст какой-то, который будет в админке'},
            //                 {id: 21, name: 'Удаление вашей учетной записи', text: 'Длинный текст какой-то, который будет в админке'},
            //                 {id: 22, name: 'Удаление вашей учетной записи', text: 'Длинный текст какой-то, который будет в админке'},
            //                 {id: 23, name: 'Удаление вашей учетной записи', text: 'Длинный текст какой-то, который будет в админке'}
            //             ]
            //         },
            //         {
            //             id: 24,
            //             name: 'Для друзей4',
            //             links: [
            //                 {id: 25, name: 'Пожаловаться на аккаунт2', text: 'Какой-то текст'},
            //                 {id: 26, name: 'Удаление вашей учетной записи2', text: 'Какой-то текст'},
            //                 {id: 27, name: 'Пожаловаться на аккаунт2', text: 'Какой-то текст'},
            //                 {id: 28, name: 'Удаление вашей учетной записи2', text: 'Какой-то текст'},
            //                 {id: 29, name: 'Пожаловаться на аккаунт2', text: 'Какой-то текст'},
            //                 {id: 30, name: 'Удаление вашей учетной записи2', text: 'Какой-то текст'}
            //             ]
            //         },
            //         {
            //             id: 31,
            //             name: 'Для друзей4',
            //             links: [
            //                 {id: 32, name: 'Пожаловаться на аккаунт2', text: 'Текст который будет с админки, отступы так же будут с админки'},
            //                 {id: 33, name: 'Удаление вашей учетной записи2', text: 'Текст который будет с админки, отступы так же будут с админки'},
            //                 {id: 34, name: 'Пожаловаться на аккаунт2', text: 'Текст который будет с админки, отступы так же будут с админки'},
            //                 {id: 35, name: 'Удаление вашей учетной записи2', text: 'Текст который будет с админки, отступы так же будут с админки'},
            //                 {id: 36, name: 'Пожаловаться на аккаунт2', text: 'Текст который будет с админки, отступы так же будут с админки'},
            //                 {id: 37, name: 'Удаление вашей учетной записи2', text: 'Текст который будет с админки, отступы так же будут с админки'}
            //             ]
            //         }
            //     ]
            // }
        ],
        tabLoad: false
    }),
    mounted() {
        axios
            .get('/webapi/faq')
            .then((response) => {
                this.faq = response.data.data;
                this.tabLoad = true;
            })
    },
    components: {
        Tabs
    }
}
export default FAQPage
</script>

<style>
/* openLink */
.openLink{
    position: relative;
}
.openLink h2{
    font-size: 18px;
    font-weight: 600;
    color: #1D1D1F;
}
.openLink .underline{
    margin-top: 12px;
    margin-bottom: 9px;
    height: 2px;
    width: 115px;
    background: #4892F3;
}
.openLink p.textContent{
    font-size: 16px;
    font-weight: 500;
    color: #000;
}
.openLink .text{
    height: calc(88vh - 102px);
    padding-top: 16px;
    padding-bottom: 20px;
    overflow-y: auto;
    position: relative;
}
.openLink:after{
    content: '';
    position: absolute;
    bottom: 50px;
    left: 0;
    width: 100%;
    height: 30px;
    background: linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0));
}
.openLink button{
    width: 100%;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
    border: 2px solid #469BFC;
    margin-top: 10px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #469BFC;
    font-family: Gilroy;
}
.openLink button > svg{
    margin-right: 10px;
}
/* openList */
.FAQContent{
    padding: 51px 17px;
}
.FAQContent .header-box{
    padding: 14px 40px 17px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    text-align: center;
}
.FAQContent .header{
    background: #FAFAFA;
    z-index: 11;
    border-bottom: 1px solid #ECECEC;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 51px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.FAQContent .header h2{
    font-size: 17px;
    font-weight: 500;
    color: #1D1D1F;
}
.FAQContent .header a.beck {
    position: absolute;
    color: #4892F3;
    width: 90px;
    height: 51px;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
}
.FAQContent .header a.beck img {
    height: 16px;
    width: 9px;
    margin-left: 14px;
}
.FAQContent .content{
    margin-top: 21px;
}
.tabsHeading h2{
    margin-top: 21px;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 30px;
}
.tabsHeading .underline{
    background: #4892F3;
    border-radius: 2.5px;
    width: 115px;
    height: 2px;
    margin-top: 8px;
    margin-bottom: 9px;
}
.tabsHeading p{
    font-family: 'Gilroy';
    font-size: 16px;
    font-weight: 500;
}
/* tabs */
.tabs{
    margin-bottom: 50px;
}
.tabs *{
    font-family: 'Gilroy';
    transition: .5s;
}
.tabWrapp{
    display: flex;
    flex-direction: column;
    position: relative;
}
.tabWrapp.first{
    margin-left: 34px;
}
.tabWrapp.first > .tabBtn{
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
}
.tabWrapp > .tabBtn.first{
    margin-bottom: 10px;
}
.tabWrapp.first > .tabBtn > .btnIcon{
    position: absolute;
    left: -34px;
}
.tabWrapp.first > .tabBtn > .tabHeading{
    font-family: Gilroy;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
}
.tabWrapp.first > .tabBtn > .btnState{
    margin-left: auto;
    background: #EBECEF;
    border-radius: 9px;
    width: 33px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tabWrapp.first > .tabBtn.active > .btnState > svg{
    transform: rotate(180deg);
}
.tabWrapp.second > .tabBtn{
    font-family: Gilroy;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 13px;
}
.tabWrapp > .tabContent > a{
    font-family: Gilroy;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #4892F3;
    text-decoration: none;
    margin-bottom: 13px;
}
/*  */
.tgBlock{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Gilroy';
    text-align: center;
    margin-bottom: 30px;
}
.tgBlock p{
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
}
.tgBlock a{
    margin-top: 7px;
    display: flex;
    align-items: center;
    text-decoration: none;
}
.tgBlock a > span{
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    border-bottom: 1px solid #30A7DB;
    color: #30A7DB;
    padding-bottom: 1px;
    display: block;
}
.tgBlock a > svg{
    margin-right: 4px;
}
</style>
