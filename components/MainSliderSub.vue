    <template>
  <div class="main-slide home-slide">
    <div class="main-slide__tutorial" v-if="tutorial" @click="tutorialStart()">
      <img src="/image/tiktok.gif" alt="">
      <p>
        Свайпните вверх чтобы перейти к следующему видео
      </p>
    </div>
    <div class="main-slider__nav">
      <ul>
        <li class="btn-subscriptions  active" ><a href="/tape/fols">Мои подписки</a></li>
        <li class="btn-recommended"><a href="/tape">Рекомендуем</a></li>
      </ul>
    </div>
    <div class="main-sliderList">
      <div class="main-slider active">
        <div class="main-slider__recommended">
          <swiper v-if="listVideos.length>0" ref="swiper_box"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange"
                  @touchMove="touchStartIPhone"
                  @touchEnd="touchEndIPhone"
                  :options="swiperOption"
          >
            <swiper-slide ref="recommended_item" class="item" v-for="(item, index) in listVideos" :key="index">
                <div class="item-noTel" :style="`background-image: url(${item.thumbnail})`"></div>
              <div class="swipeBox" v-if="index == countSlider || index == countSlider-1|| index == countSlider+1" ref="recommended_video">
                <div class="video-player">
                  <!--  Android  -->
                  <video  loop="" :src="item.src" webkit-playsinline="true"  playsinline="" :poster="item.thumbnail" v-if="!useIPhone"></video>
                  <div class="video-player__box" v-if="!useIPhone" @click="startVideo($event)"></div>
                  <!--  iPhone   -->
                  <div class="video-player__boxIPhone" v-if="useIPhone" @click="startVideoIPhone($event)"  :style="`background-image: url(${item.thumbnail})`"></div>
                </div>
                <div class="item__content-desc">
                  <div class="inf">
                    <div class="inf-avatar">
                      <a :href="`/account/${item.user.username}/`">
                          <img v-if="item.user.avatar != '/avatar.jpg'"  :src="item.user.avatar"
                               :alt="item.user.username">
                          <span v-else class="avatar-none" :class="'bgColor-'+ item.user.id % 7">
                                                    {{item.user.name.slice(0,1)}}
                                                </span>
                      </a>
                    </div>

                  <div class="inf-text">
                      <a :href="`/account/${item.user.username}/`">{{ item.user.name }}</a>
                      <a :href="`/account/${item.user.username}/`" class="btn-add">
                          Перейти в профиль
                      </a>
                  </div>
                  </div>
                  <p ref="desc" >{{ item.description }} <span @click="descToggle($event)"></span></p>
                </div>
                <div class="item__content-nav">
                  <ul>
                    <li>
                      <div class="btn-muted active" @click="muted(index)">
                      </div>
                    </li>
                    <li>
                      <div @click="wishlistCheck(index,item.id,item.liked)" ref="wishlistCheck" class="wishlist" :class="{active: item.liked }">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.84 0.000301193C26.3375 0.0270479 29.9781 4.47392 30 9.96766C30 20.0326 15 30 15 30C15 30 0 19.8861 0 9.96766C0 4.46289 3.65333 0.000301193 8.16003 0.000301193C10.9187 -0.0259779 13.4978 1.66888 15 4.49534C16.5125 1.68263 19.085 -0.00783504 21.84 0.000301193Z" fill="white"/>
                        </svg>
                        <span>{{ item.likers_count }}</span>
                      </div>
                    </li>
                    <li>
                      <a href="#" data-href="#popups-tip" class="btn-popups"
                         :data-id="`${item.user.id}`"
                         :data-cloud-token="`${item.user.cloud_token}`"
                         :data-avatar="`${item.user.avatar}`"
                         :data-name="`${item.user.name}`"
                         :data-username="`${item.user.username}`"
                      >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.0082 9.90833H13.9248V16.0666H18.0082C19.706 16.0666 21.0874 14.6853 21.0874 12.9874C21.0873 11.265 19.6911 9.90833 18.0082 9.90833Z" fill="white"/>
                          <path d="M16 0C7.17756 0 0 7.17756 0 16C0 24.8224 7.17756 32 16 32C24.8224 32 32 24.8224 32 16C32 7.17756 24.8224 0 16 0ZM18.0084 17.9416H13.925V20.0833H18.0084C18.5261 20.0833 18.9459 20.5031 18.9459 21.0208C18.9459 21.5386 18.5261 21.9583 18.0084 21.9583H13.925V24.0333C13.925 24.5511 13.5053 24.9708 12.9875 24.9708C12.4698 24.9708 12.05 24.5511 12.05 24.0333V21.9583H10.9792C10.4614 21.9583 10.0417 21.5386 10.0417 21.0208C10.0417 20.5031 10.4614 20.0833 10.9792 20.0833H12.05V17.9416H10.9792C10.4614 17.9416 10.0417 17.5219 10.0417 17.0041C10.0417 16.4864 10.4614 16.0666 10.9792 16.0666H12.05V8.97081C12.05 8.45306 12.4698 8.03331 12.9875 8.03331H18.0084C20.6824 8.03331 22.9626 10.1883 22.9626 12.9875C22.9625 15.7193 20.7401 17.9416 18.0084 17.9416Z" fill="white"/>
                        </svg>
                        <span>Подарить</span>
                      </a>
                    </li>
                    <li v-if="shareStatus">
                      <a href="javascript:void(0)" @click="share(item.id,item.user.name,item.description,item.user.username)" class="shareBtn" :data-id-video="`${item.id}`" :data-share-title="`${item.user.name}`" :data-share-text="`${item.description}`" :data-share-link="`https://friendsonly.me/account/${item.user.username}?share=${item.id}`">
                        <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M31.6267 10.9137L20.071 0.358474C19.6941 0.0145919 19.1163 -0.0933544 18.6133 0.0847426C18.1084 0.264558 17.7777 0.694625 17.7777 1.17308V6.25543H17.3334C7.77606 6.25543 0 13.0953 0 21.5019V23.8475C0 24.3915 0.435548 24.8451 1.03809 24.9688C1.13607 24.9905 1.23373 25 1.33138 25C1.83464 25 2.31641 24.7403 2.54916 24.3323C5.04884 19.9334 10.0746 17.2015 15.6657 17.2015H17.7777V22.2836C17.7777 22.7623 18.1084 23.1924 18.6133 23.3705C19.113 23.5503 19.6941 23.4409 20.071 23.0968L31.6267 12.5415C32.1244 12.0865 32.1244 11.3704 31.6267 10.9137Z" fill="white"/>
                        </svg>
                        <span>{{item.shares_count}}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="video-playerIPhone" v-if="useIPhone && listVideos.length>0" >
            <video ref="videoIPhone" :src="videoIPhone"  loop="" webkit-playsinline="true"  playsinline="" ></video>
          </div>
          <div class="no-video" v-if="!auth">
            <p>Войдите, чтобы увидеть видео от авторов, на которых вы подписаны</p>
            <a @click="$router.push({name: 'auth', params:{login: 'login'}})">Вход</a>
          </div>
          <div class="no-video" v-if="listVideos.length<1 && auth">
            <p>Здесь будут появляться новые видео от профилей, на которые вы подписаны</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper.scss'
import 'swiper/swiper-bundle.css'
export default {
  props: ['videosx','auth','id'],
  data: () => ({
    tutorial:false,
    checkedMuted: true,
    swiperOption: {
      direction: 'vertical',
      pagination: false
    },
    listVideos:[],
    shareStatus:true,
    countSlider:0,
    useIPhone: false,
    startVideoCheckIPhone: false,
    videoIPhone:''
  }),
  created() {
    // this.listVideos = this.videosx
    // this.videoIPhone = this.listVideos[0].src
  },
  mounted()   {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))   {
      this.shareStatus = true
    } else {
      this.shareStatus = false
    }
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent))   {
      this.useIPhone = true
      //console.log('iPhone')
    } else {
      this.useIPhone = false
      //console.log('Android')
    }
    console.log(this.id)
      axios
          .post('/load/?recommended=false&ids[]='+this.id)
          .then(response => {
              //console.log(response)
              //console.log('axios')
              this.listVideos = response.data.videos
              //console.log(this.listVideos)
              this.videoIPhone = this.listVideos[0].src

              let thi = this;
              setTimeout(function () {
                  thi.onSwiper();
              }, 200)
          })
  },
  computed: {
    player() {
      return this.$refs.recommended_video.player
    }
  },
  methods:  {
    tutorialStart(){
      this.tutorial = false
    },

    share(id,name,desc,userName){
      let link = 'https://friendsonly.me/account/'+ userName +'?share=' + id
      if (navigator.share) {
        navigator.share({
          title: name, // Заголовок
          text: desc, // Текст
          url: link, // ссылка
        });
      }else{
        //console.log('navigator.share ---- false')
      }

      axios
          .get('/share/' + id)
          .then(response => {
            //console.log(response)
          });

    },
    paymentVideo(item){
      let user = this.user.id
      let email = this.user.email
      let video = item.id
      let amount = item.price
      var widget = new cp.CloudPayments();
      widget.charge({ // options
            publicId: 'pk_13b45dc1dec583490fe85c4ff353d',  //id из личного кабинета
            description: "Покупка видео", //назначение
            amount: parseFloat(amount), //сумма
            currency: 'RUB', //валюта
            invoiceId: 0, //номер заказа  (необязательно)
            accountId: email, //идентификатор плательщика (необязательно)
            skin: "mini", //дизайн виджета
            data: {
              'setup': true,
              'user': user,
              'video': video,
            }
          },
          function (options) { // success
            console.log('success')
            console.log(options)
          },
          function (reason, options) { // fail
            console.log('fail')
            console.log(options)
          });
    },
    onSwiper(){
        if (this.$refs.desc) {
            //console.log(this.$refs.desc)
            this.$refs.desc.forEach(function (value, key) {
                //console.log(value)
                //console.log(value.clientHeight)
                value.style.maxHeight = 'max-content'
                if (value.clientHeight <= 32) {
                    value.querySelector('span').classList.add('hide')
                    value.style.maxHeight = 'max-content'
                }else{
                    value.style.maxHeight = '32px'
                    value.querySelector('span').classList.remove('hide')
                    value.querySelector('span').classList.remove('hide')
                }
            });
        }
    },
    maxCountOn(index){
      this.countSlider = index
      //console.log('max-count: '+this.maxCountSlider)
    },
    startVideo(event){
      this.checkedMuted = false
      let video = event.target.parentElement.querySelector('video')
      setTimeout(function (){
        event.target.classList.toggle("active");
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      },100)
    },
    startVideoIPhone(event){
      let video = this.$refs.videoIPhone
      this.startVideoCheckIPhone = true
        if(event.target.classList[0] == 'video-player__boxIPhone'){
            setTimeout(function () {
                event.target.classList.toggle("play");
                if (video.paused) {
                    if (!event.target.classList.contains("active")) {
                        event.target.classList.add("load");
                    }
                    event.target.classList.add("active");
                    video.play();
                    video.oncanplay = () => {
                        //console.log('oncanplay - start')
                        event.target.classList.remove("load");
                    }
                    video.oncanplaythrough = () => {
                        event.target.classList.remove("load");
                    };
                } else {
                    video.pause();
                    if (event.target.classList.contains("load")) {
                        event.target.classList.remove("load");
                    }
                }

            }, 100)
        }else if(event.target.classList[0] == 'shadow'){
            setTimeout(function () {
                event.target.offsetParent.classList.toggle("play");
                if (video.paused) {
                    if (!event.target.offsetParent.classList.contains("active")) {
                        event.target.offsetParent.classList.add("load");
                    }
                    event.target.offsetParent.classList.add("active");
                    video.play();
                    video.oncanplay = () => {
                        //console.log('oncanplay - start')
                        event.target.offsetParent.classList.remove("load");
                    }
                    video.oncanplaythrough = () => {
                        event.target.offsetParent.classList.remove("load");
                    };
                } else {
                    video.pause();
                    if (event.target.offsetParent.classList.contains("load")) {
                        event.target.offsetParent.classList.remove("load");
                    }
                }

            }, 100)
        }
    },
    touchStartIPhone(swiper){
      if(this.useIPhone){
        let index = swiper.activeIndex
        if(this.startVideoCheckIPhone){
          this.$refs.recommended_item[index].$el.querySelector('.video-player__boxIPhone').classList.remove("active");
        }
      }
    },
    touchEndIPhone(swiper){
      if(this.useIPhone){
        let index = swiper.activeIndex
        if(this.startVideoCheckIPhone ){
          this.$refs.recommended_item[index].$el.querySelector('.video-player__boxIPhone').classList.add("active");
        }
      }
    },
    onSlideChange(swiper) {
      this.countSlider = swiper.activeIndex
      let index = swiper.activeIndex
      let $listItem = this.$refs.recommended_item
      setTimeout(this.maxCountOn(index) ,1000)
      if(!this.useIPhone){

        if(!this.checkedMuted){
          if (index != 0) {
            if($listItem[index-1].$el.querySelector('video')){
              if(!$listItem[index-1].$el.querySelector('video').paused){
                $listItem[index-1].$el.querySelector('.video-player__box').click()
              }
            }
          }
            if ($listItem[index].$el.querySelector('video')) {
                // $listItem[index].$el.querySelector('.video-player__box').click()
                this.checkedMuted = false
                let video = $listItem[index].$el.querySelector('.video-player__box').offsetParent.children[0]
                setTimeout(function () {
                    $listItem[index].$el.querySelector('.video-player__box').classList.add("active");
                    if (video.paused) {
                        video.play();
                    } else {
                        video.pause();
                    }
                }, 100)
            }
            if (index + 1 <= this.listVideos.length - 1) {
                if ($listItem[index + 1].$el.querySelector('video')) {
                    if (!$listItem[index + 1].$el.querySelector('video').paused) {
                        $listItem[index + 1].$el.querySelector('.video-player__box').click()
                    }
                }
            }
        }
      }else{
        //console.log('index: ' + index)
        if (index != 0) {
          if($listItem[index  -1].$el.querySelector('.video-player__boxIPhone')){
            //console.log("------------------------------")
            //console.log($listItem[index-1].$el.querySelector('.video-player__boxIPhone').classList.contains('active'))
            if($listItem[index-1].$el.querySelector('.video-player__boxIPhone').classList.contains('active')){
              $listItem[index-1].$el.querySelector('.video-player__boxIPhone').classList.remove("active");
              $listItem[index-1].$el.querySelector('.video-player__boxIPhone').classList.remove("play");
            }
          }
        }
        if (index+1 <= this.listVideos.length-1) {
          if($listItem[index+1].$el.querySelector('.video-player__boxIPhone')){
            if($listItem[index+1].$el.querySelector('.video-player__boxIPhone').classList.contains("active")){
              $listItem[index+1].$el.querySelector('.video-player__boxIPhone').classList.remove("active");
              $listItem[index+1].$el.querySelector('.video-player__boxIPhone').classList.remove("play");
            }
          }
        }


      this.videoIPhone = this.listVideos[index].src;
        if(this.startVideoCheckIPhone){
          if($listItem[index].$el.querySelector('.video-player__boxIPhone')){
            $listItem[index].$el.querySelector('.video-player__boxIPhone').click()
          }
        }
      }
        if (this.$refs.desc) {
            //console.log(this.$refs.desc)
            this.$refs.desc.forEach(function (value, key) {
                //console.log(value)
                //console.log(value.clientHeight)
                value.style.maxHeight = 'max-content'
                if (value.clientHeight <= 32) {
                    value.querySelector('span').classList.add('hide')
                    value.style.maxHeight = 'max-content'
                }else{
                    value.style.maxHeight = '32px'
                    value.querySelector('span').classList.remove('hide')
                    value.querySelector('span').classList.remove('hide')
                }
            });
        }
    },
    wishlistCheck(index,id,liked){
      if(this.auth){
        let axiosUrl
        if(liked == false){
          axiosUrl = 'like'
        }else{
          axiosUrl = 'unlike'
        }
        if (index == 0){
          index = 0
        }else{
          index = 1
        }
        axios
            .get('/'+ axiosUrl +'/' + id)
            .then(response => {
              //console.log(response)
              //console.log(this.$refs.wishlistCheck[index])
              this.$refs.wishlistCheck[index].classList.toggle("active");
              this.$refs.wishlistCheck[index].querySelector('span').innerText = response.data.count

            });

      }else{
        location = '/login'
      }
    },
    descToggle(e) {
      //console.log(e)
      e.target.parentElement.classList.toggle("active");
    },

  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>
