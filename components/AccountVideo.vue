<template>
    <keep-alive>
        <li
            ref="list"
            :class="{'no-active': !item.available, loading:item.converted_for_streaming_at===null}"
            @click="clicked"
        >
            <div class="noInf" :class="{'sell':item.privacy == 3}" v-if="item.privacy != 0">
                <div class="noInf-follow" v-if="item.privacy == 1 && !item.available || item.privacy == 1 && user.id == item.user.id">Для друзей👋</div>
                <div class="noInf-follow" v-if="item.privacy == 1 && item.available && user.id != item.user.id">👋</div>
                <div class="noInf-price" v-if="(item.privacy == 2 && !item.available) && item.price || item.privacy == 2 &&  user.id == item.user.id && item.price">{{item.price}}₽🔒</div>
                <div class="noInf-priceSell" v-if="item.privacy == 2 && item.available && user.id != item.user.id">🔓</div>
            </div>
            <img ref="image" :src="item.thumbnail" alt="">
            <div class="desc">
                {{item.description}}
            </div>
        </li>
    </keep-alive>
</template>
<script>
const AccountVideo = {
    props: ['index', 'item', 'user', 'card_exist', 'account'],
    data: () => ({
        itemId: ''
    }),
    methods: {
        clicked: function() {
            console.log(this.item.src)
            console.log(this.index)
            this.$emit('video-clicked', [{index: this.index, src: this.item.src}]);
        }
    }
}
export default AccountVideo
</script>
