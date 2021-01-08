<template>
    <div class="noPush-messages" :class="{active:dialog}">
        <div class="title">
            <div class="avatar">
                <img v-if="user.avatar && user.avatar != '/avatar.jpg'" ref="avatar" :class="{'noLoad':user.avatar == '/avatar.jpg'}" :src="user.avatar" alt="">
                <div v-else class="avatar-none" :class="'bgColor-'+ user.id % 7" >
                    {{user.name.slice(0,1)}}
                </div>
            </div>
            {{ user.name }}
        </div>
        <div class="date">сегодня</div>
        <div class="desc">
            {{user.desc}}
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: "notify-messages",
    props:['userid'],
    data: () => ({
        dialog:false,
        user:{
            name: '',
            desc: '',
            date: '',
            avatar: '',
            id: '',
        }
    }),

}
</script>

<style lang="css">

</style>
