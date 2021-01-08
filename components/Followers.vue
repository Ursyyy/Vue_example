<template>     
    <div class="page-followers">
        <div class="page-followers__title">
            <div class="page-followers__title-box">
                <a @click="$router.go(-1);" class="beck">
                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1708 2.03017L3.18474 9.5L11.1708 16.9698L11.366 17.1524L11.1708 17.335L10.2646 18.1826L10.0939 18.3423L9.92312 18.1826L0.829288 9.68264L0.633266 9.49942L0.829867 9.31682L1.74182 8.46983L1.74246 8.46922L9.92305 0.817421L10.0938 0.657683L10.2646 0.817421L11.1708 1.66502L11.366 1.8476L11.1708 2.03017Z" fill="#2F80ED" stroke="#2F80ED" stroke-width="0.5"/>
                    </svg>
                    Назад
                </a>
                <div class="name">Мои Друзья и подписки</div>
            </div>
        </div>
        <div class="page-followers__tabs">
            <div class="page-followers__tabs-nav">
                <div class="item" 
                            :class="{active: isFollowers}"
                            @click="isFollowers = true; fList = followers">Друзья <span>{{ getUser.followers_count }}</span></div>
                <div class="item" 
                            :class="{active: !isFollowers}"
                            @click="isFollowers = false; fList = followings">Подписки <span>{{ getUser.followings_count }}</span></div>
            </div>
            <div class="page-followers__tabs-content">
                <div class="item active" id="page-followers1">
                    <ul>
                        <li v-for="follow in fList" v-if="fList.length > 0">
                            <a @click="$router.push({name: 'account', params:{username: follow.username}})" style="text-decoration: none">
                                <div class="avatar">
                                        <img :src="follow.avatar" v-if="follow.avatar && follow.avatar != '/avatar.jpg'" alt="">
                                        <div class="avatar-none" :class="getAvatar(follow.id)" v-else>
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
                                    <div class="btn btn-startMessages" v-if="isFollowers" @click="startMessages(follow.id)">Написать</div>
                                    <a @click="$router.push({name: 'account', params:{username: follow.username}})" v-if="!isFollowers" class="btn-ope">Перейти</a>
                                </div>
                            </div>
                        </li>

                        <h4 v-if="isFollowers && fList.length == 0">У вас к сожалению еще <br> нет друзей 😭</h4>
                        <h4 v-else-if="!isFollowers && fList.length == 0">Вы еще не подписаны <br> ни на кого, поэтому тут <br> ничего нет 😢</h4>
                    </ul>
                </div>
                <!--<div class="item" id="page-followers2">
                    <ul>
                        @forelse($followings as $follower)

                        <li>
                            <a href="{{ route('account', $follower->username) }}">
                                <div class="avatar">
                                    <img src="{{ $follower->avatar }}" alt="">
                                </div>
                            </a>
                            <div class="desc">
                                <div class="desc__left">
                                    @if($follower->name)
                                        <div class="name">{{ $follower->name }}</div>
                                    @endif
                                    @if($follower->username)
                                        <div class="nik">{{ $follower->username }}</div>
                                    @endif
                                </div>
                                <div class="desc__right">
                                    <a href="{{ route('account', $follower->username) }}" class="btn-ope">Перейти</a>
                                </div>
                            </div>
                        </li>
                        @empty
                            
                        @endforelse
                    </ul>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import {SET_LOAD} from '../store/types'

const Follower = {
    data: () => ({
        isFollowers: true,
        fList: [],
        followers: [],
        followings: []
    }),
    computed:{
        ...mapGetters([
            'getUser'
        ]),
        
    },
    mounted() {
        this.getFollow()
    },
    methods: {
        getFollow(){
            this.setLoad(true)
            axios.get('/followers')
                .then( resp => {
                    this.followers = resp.data.data.followers
                    this.followings = resp.data.data.followings
                    this.fList = this.followers
                    this.setLoad(false)
                })
        },
        getAvatar(id){
            return 'bgColor-' + id % 7
        },
        startMessages(id){
            axios.get('/messages/find/chat?receiver_id='+id)
                    .then( resp => {
                        this.$router.push({name: 'messages', params:{id: resp.data.chat_id}})
                        //window.location.href = '/messages/chat/' + resp.data.chat_id;
                    })
                    .catch(function (error) {
                    console.log('error - openChat')
                    console.log(error)
                })
        },
        ...mapMutations({
            setLoad: SET_LOAD
        })
    },
}

export default Follower
</script>

<style lang="css">
    
</style>