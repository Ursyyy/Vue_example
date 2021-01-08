<template>
    <div>
        <div class="page-subscriptionManagement">
            <div class="page-subscriptionManagement__title">
                <div class="page-subscriptionManagement__title-box">
                    <a @click="$router.go(-1)" class="beck">
                        <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1708 2.03017L3.18474 9.5L11.1708 16.9698L11.366 17.1524L11.1708 17.335L10.2646 18.1826L10.0939 18.3423L9.92312 18.1826L0.829288 9.68264L0.633266 9.49942L0.829867 9.31682L1.74182 8.46983L1.74246 8.46922L9.92305 0.817421L10.0938 0.657683L10.2646 0.817421L11.1708 1.66502L11.366 1.8476L11.1708 2.03017Z" fill="#2F80ED" stroke="#2F80ED" stroke-width="0.5"/>
                        </svg>
                        Назад
                    </a>
                    <div class="name">Управление подписками</div>
                </div>
            </div>
            <div class="page-subscriptionManagement__content">
                <ul v-if="fList.length > 0">
                    <li v-for="(follow, index) in fList" >
                        <a @click="$router.push({name: 'account', params:{username: follow.username}})" style="text-decoration: none">
                            <div class="avatar">
                                <img :src="follow.avatar" v-if="follow.avatar && follow.avatar != '/avatar.jpg'" alt="">
                                <div class="avatar-none" :class="getAvatar(follow.id)"  v-if="follow.avatar == null || follow.avatar == '/avatar.jpg'">
                                    {{follow.username[0]}}
                                </div>
                            </div>
                        </a>
                        <div class="desc">
                            <div class="desc__left">

                                <div class="name" v-if="follow.name != null">{{ follow.name }}</div>
                                <div class="nik" v-else>{{ follow.username }}</div>
                            </div>
                            <div class="desc__right">
                                <a href="javascript:void(0)" @click="unfollow(follow.id, index)" class="btn-ope">Отписаться</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="noneList" v-else>
                    <h4>Вы еще не подписаны <br> ни на кого, поэтому тут <br> ничего нет 😢</h4>
                </div>
            </div>
        </div>
        <div class="popups popupsBottom popupsCartRemove popupsAnim" id="popupsManagement">
            <div class="popups__bgClose"></div>
            <div class="popupsAnim__content">
                <div class="popups__content">
                    <p>Вы уверены, что хотите отписаться и больше не оплачивать деньги за подписку у этого пользователя? </p>
                    <div class="popups__content-buttons">
                        <a href="" class="btn">Да</a>
                    </div>
                </div>
                <div class="popups__footer">
                    <div class="btn close">Отмена</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import {SET_LOAD} from '../store/types'

const Management = {
    data: () => ({
        fList: []
    }),
    mounted() {
        this.getFollow()
    },
    methods: {
        getFollow(){
            this.setLoad(true)
            axios.get('/followers')
                .then( resp => {
                    //this.followers = resp.data.data.followers
                    //this.followings = resp.data.data.followings
                    this.fList = resp.data.data.followings
                    this.setLoad(false)
                })
        },
        getAvatar(id){
            return 'bgColor-' + id % 7
        },
        ...mapMutations({
            setLoad: SET_LOAD
        }),
        unfollow(id, index){
            this.setLoad(true)
            axios.get('/unfollow/' + id).then((resp) => {
                this.fList.splice(index, 1);
                this.setLoad(false)
            })
        }
    },


}

export default Management
</script>
