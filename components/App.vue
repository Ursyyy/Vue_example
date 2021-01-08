<template>
    <div>
        <div class="preloader" v-if="getLoad" :style="getStyle()"></div>
        <div class="container">
            <router-view :key="$route.fullPath"></router-view>
            <menu-block v-if="getMenu"></menu-block>
        </div>
    </div>
</template>
<script>
import {SET_USER, SET_LOAD, SET_ISIPHONE, SET_SOCKETCONNECTION} from '../store/types'
    import {mapMutations, mapGetters, mapActions} from 'vuex'
    export default {
        computed: {
           ...mapGetters([
               'getLoad',
               'getMenu'
           ])
        },
         async beforeMount() {
             await this.setSocket()
             this.load(true)
             // await this.loadChats()
             this.setUser()
             this.checkIphone()
             this.load(false)
         },
        methods:{
             ...mapMutations({
                load: SET_LOAD,
                isIphone: SET_ISIPHONE,
                 setSocket: SET_SOCKETCONNECTION
            }),
            ...mapActions({
                loadChats: 'LoadChats',
                setUser: 'loadAuthUser'

            }),
            checkIphone(){
                if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                    this.isIphone(true)
                    window.addEventListener("load",function() {
                    setTimeout(function() {
                        window.scrollTo(0, 1);
                    }, 1000);
                });
                if (document.webkitFullscreenElement) {
                    document.webkitCancelFullScreen();
                } else {
                    const el = document.documentElement;
                    el.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                    }
                }
            },
            clck(name){
                this.$router.push({name: name})
            },
            getStyle(){
                if(this.$router.currentRoute.path == '/'){
                    return 'background-color: #000;'
                }
            }
        },
        beforeRouteUpdate(to, from, next){
            next(vm => {
            this.prevRoute = from
        })
    },
    }
</script>

<style lang="css">

</style>
