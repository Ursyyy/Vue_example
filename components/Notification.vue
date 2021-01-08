<template>
    <div class="page-notifications">
        <!--<div class="preloader" :class="{none:preloader==1,none2:preloader==2}"></div>-->
        <div class="page-notifications__title">
            <div class="page-notifications__title-box"  @click="filterNotification">
                {{title}}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7772 2.84763C11.6289 2.69917 11.4531 2.625 11.2499 2.625H0.750056C0.546802 2.625 0.371088 2.69917 0.222628 2.84763C0.0741683 2.99625 0 3.17197 0 3.3751C0 3.57819 0.0741683 3.7539 0.222628 3.9024L5.47257 9.15235C5.6212 9.30081 5.79691 9.37514 6 9.37514C6.20309 9.37514 6.37897 9.30081 6.52731 9.15235L11.7772 3.90236C11.9255 3.7539 12 3.57819 12 3.37506C12 3.17197 11.9255 2.99625 11.7772 2.84763Z" fill="#4892F3"/>
                </svg>
            </div>

        </div>
        <div ref="listBox" v-on:scroll="loadMore($event)" class="page-notifications__listBox" v-if="user" >
            <div class="page-notifications__list" v-if="notification.data.length>0"
                 v-for="notification in listNotifications">
                <div class="name">{{notification.name}}</div>
                <ul>
                    <li v-for="item in notification.data">
                        <a @click="$router.push({name: 'account', params:{username: item.data.username}})">
                            <div class="avatar">
                                <img v-if="item.data.avatar != '/avatar.jpg'" :src="item.data.avatar" alt="">
                                <div v-else class="avatar-none" :class="'bgColor-'+ Math.floor(Math.random(1, 7) * 6 + 1)">
                                    {{item.data.username.slice(0,1)}}
                                </div>
                            </div>
                        </a>
                        <div class="desc">
                            <a @click="$router.push({name: 'account', params:{username: item.data.username}})" class="desc__left">
                                <div class="name">{{ item.data.username }}</div>
                                <div class="inf" v-html="item.data.text"></div>
                            </a>
                            <div class="desc__right" v-if="item.type == 'App\\Notifications\\LikedVideo'">
                                <a href="#" v-html="item.data.desc"></a>
                            </div>
                            <div class="desc__right" v-html="item.data.desc" v-else></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="page-notifications__none" v-else>
            <h4>Здесь будут показаны <br>ваши уведомления 🚀 </h4>
        </div>

        <div class="popups popupsBottom popupsAnim " id="popupsFilterNotification" ref="popupsFilterNotification">
            <div class="popups__bgClose "></div>
            <div class="popupsAnim__content ">
                <div class="popups__content list-filterNotification">
                    <a href="#" class="refs" @click="title = 'Все уведомления', filter = '',filterStart()">Все уведомления</a>
                    <a href="#" class="refs" @click="title = 'Друзья', filter = 'App\\Notifications\\NewFollower',filterStart()">Друзья</a>
                    <a href="#" class="refs" @click="title = 'Лайки', filter = 'App\\Notifications\\LikedVideo',filterStart()">Лайки</a>
                    <a href="#" class="refs" @click="title = 'Подарки', filter = 'App\\Notifications\\SendTips',filterStart()">Подарки</a>
                </div>
                <div class="popups__footer">
                    <div class="btn close">Отмена</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

const Notification = {
    data: () => ({
        user: false,
        total: 0,
        count: 0,
        //preloader: 0,
        load:true,
        busy: false,
        filter:'',
        title:'Все уведомления',
        listNotifications: [
            {
                name: 'Сегодня',
                data: []
            },
            {
                name: 'Ранее',
                data: []
            },
        ]
    }),
    mounted() {
        // .get('/notifs?size=20&type=App\\Notifications\\NewFollower')
        // .get('/notifs?size=20&type=App\\Notifications\\SendTips')
        // .get('/notifs?size=20&type=App\\Notifications\\LikedVideo')
        this.loadNotification()
    },
    methods: { 
        loadNotification(){
            axios
                .get('/notifs?size=20&type=' + this.filter)
                .then(response => {
                
                    this.total = response.data.total;
                    this.user = response.data.total;
                    this.count = response.data.notifications.length;
                    this.pushList(response.data.notifications)
                    setTimeout(() => {
                        //this.preloader = 1
                    }, 300)
                    this.ReadNotify()
                }).catch(function (error) {
                console.log(error)
                //this.preloader = 0
            })

        },
        ReadNotify(){
			axios
				.get('/notifications/mark-read')
				.then( resp => {
					//console.log(resp.data.data.length)
				})
		},
        filterStart(){
            this.listNotifications[0].data = []
            this.listNotifications[1].data = []
            this.loadNotification()
            let item = this.$refs.popupsFilterNotification
            item.querySelector('.popupsAnim__content').classList.remove('active')
            item.querySelector('.popups__bgClose').classList.remove('active')
            setTimeout(function (){
                item.classList.remove('active')
            },350)
        },
        filterNotification(){
            let item = this.$refs.popupsFilterNotification
            item.classList.add('active')
            item.querySelector('.popups__bgClose').classList.add('active')
            setTimeout(function (){
                item.querySelector('.popupsAnim__content').classList.add('active')
            },100)
        },
        pushList(list) {
            var now=new Date();                         // Sun Apr 02 2017 2:00:00 GMT+1000 (AEST)
            var gmtRe = /GMT([\-\+]?\d{4})/;
            var tz = gmtRe.exec(now)[1];
            let dateToDay = new Date().getDate()
            let dateToMonth = new Date().getMonth() + 1
            let dateToYear = new Date().getFullYear()
            list.forEach((item) => {
                let itemYear = parseInt(item.created_at.slice(0, 4))
                let itemMonth = parseInt(item.created_at.slice(5, 7))
                let itemDay = parseInt(item.created_at.slice(8, 10))
                let hoursToDay   = parseInt(item.created_at.slice(11, 13)) + parseInt(tz.slice(0, 3))
                let minutesToDay = parseInt(item.created_at.slice(14, 16))
                let secondsToDay = parseInt(item.created_at.slice(17, 19))
                // console.log(hoursToDay,minutesToDay,secondsToDay)
                if (dateToDay == itemDay && dateToMonth == itemMonth && dateToYear == itemYear) {
                    item.data.text = item.data.text + ' <span>' + this.dateTime(hoursToDay,minutesToDay,secondsToDay) + '</span>'
                    this.listNotifications[0].data.push(item)
                } else {
                    item.data.text = item.data.text + ' <span>' + this.dateInfo(itemDay,itemMonth,itemYear) + '</span>'
                    this.listNotifications[1].data.push(item)
                }
            })
            // console.log(this.listNotifications)
        },
        dateTime(h,m,s){
            let today = new Date;
            // console.log(today)
            let hours  = 0
            let minutes = 0
            let seconds = 0
            let hoursToDay2 = today.getHours();
            let minutesToDay2 = today.getMinutes();
            let secondsToDay2 = today.getSeconds();
            // console.log(hoursToDay2)
            if(h<hoursToDay2){
                // console.log('--------------')
                // console.log(hoursToDay2)
                // console.log(h)
                hours = hoursToDay2 - h
                // console.log(hours)
                return hours+'ч.';
            } else if(m<minutesToDay2){
                minutes = minutesToDay2 - m
                return minutes+'м.';
            } else{
                seconds = secondsToDay2 - s
                return seconds+'с.';
            }
        },
        dateInfo(d,m,y){
            let t=new Date();
            let day = t.setDate(t.getDate()-d+1)&&(t.getDate()-1)
            let mount = t.setMonth(t.getMonth()-m+1)&&t.getMonth()
            let year = t.getFullYear()-y
            if(year>0){
                return year+'г.';
            }else if(mount>0){
                return mount+'мес.';
            }else if(day>0){
                return day+'д.';
            }
        },
        loadMore(event){
            if(this.$refs.listBox.scrollTop + this.$refs.listBox.offsetHeight > this.$refs.listBox.scrollHeight - 100 && this.load){
                this.load = false
                if(this.count < this.total ){
                    let count = this.count
                    // if(count > this.total){
                    //     count = count - (count - this.total)
                    // }else{
                    //     indexReplace = count - this.count
                    // }
                    axios
                        .get('/notifs?size=' + parseInt(count + 20) +'&type=' + this.filter )
                        .then(response => {

                                //this.preloader = 2;
                                setTimeout(() => {
                                    let date = response.data.notifications
                                    this.pushList(date.slice(count,date.length))
                                    //this.preloader = 1;
                                    this.load = true
                                }, 1000);
                                this.count = count + 20

                        })
                        .catch(function (error) {
                            // console.log(error)
                            //this.preloader = 2
                        })

                }
            }
        },
    },
}

export default Notification
</script>
