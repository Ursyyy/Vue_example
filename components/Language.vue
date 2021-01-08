<template>
    <div class="page-language">
        <div class="page-language__title">
            <div class="page-language__title-box">
                <a @click="$router.go(-1)" class="beck">
                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1708 2.03017L3.18474 9.5L11.1708 16.9698L11.366 17.1524L11.1708 17.335L10.2646 18.1826L10.0939 18.3423L9.92312 18.1826L0.829288 9.68264L0.633266 9.49942L0.829867 9.31682L1.74182 8.46983L1.74246 8.46922L9.92305 0.817421L10.0938 0.657683L10.2646 0.817421L11.1708 1.66502L11.366 1.8476L11.1708 2.03017Z" fill="#4892F3" stroke="#4892F3" stroke-width="0.5"/>
                    </svg>
                    Назад
                </a>
                <h2>Язык</h2>
            </div>
        </div>
        <div class="page-language__search">
            <input type="text" placeholder="Поиск">
        </div>
        <div class="page-language__list">
            <!--<div class="item">
                <input type="radio" class="radio" id="radio1" checked name="language"/>
                <label for="radio1">English <br> <span>English</span></label>
            </div>-->
            <div class="item">
                <input type="radio" class="radio" id="radio2" name="language" checked/>
                <label for="radio2">Russian <br> <span>Русский</span></label>
            </div>
        </div>
    </div>
</template>

<script>
const Language = {
    data: ()=>({

    }),
    mounted() {

    },
    methods: {

    },
}
export default Language
</script>

<style lang="css">

</style>
