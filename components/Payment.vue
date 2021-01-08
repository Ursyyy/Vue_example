<template>
     <div class="page-payment">
        <div class="page-payment__title">
            <a @click="setMenu(true); $router.go(-1)" class="beck">
                <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2637 20.314L2.76336 10.8136L12.2637 1.31333" stroke="#4892F3" stroke-width="3" stroke-miterlimit="10"/>
                </svg>
                Назад
            </a>
            <div class="name">{{ owner.username }}</div>
            <div class="text">Выбор тарифа</div>
        </div>
        <div class="page-payment__info">
            <div class="avatar">
                <img style="border-radius: 50%"  :src="owner.avatar" alt="" v-if="owner.avatar && owner.avatar != '/avatar.jpg'">
                <div class="avatar-none" :class='getAvatar' v-if="owner.avatar == null || owner.avatar == '/avatar.jpg'">
                    {{owner.username[0]}}
                </div>
                <div v-if="owner != null">
                    <svg class="veriti" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.31532 0.298096L11.7708 3.08653L15.6675 2.69965L15.2435 6.25616L18.2986 8.49737L15.2435 10.7386L15.6675 14.2952L11.7708 13.9082L9.31532 16.6966L6.8598 13.9082L2.96314 14.2952L3.3871 10.7386L0.332031 8.49737L3.3871 6.25616L2.96314 2.69965L6.8598 3.08653L9.31532 0.298096Z" fill="#469BFC"/>
                        <g clip-path="url(#clip220)">
                            <path d="M5.48828 9.4264L8.33668 12.8452L13.8061 6.29949L13.0209 5.37183L8.33668 10.9768L6.26264 8.49221L5.48828 9.4264Z" fill="white"/>
                        </g>
                        <path d="M9.316 17.0002C9.21527 17.0002 9.11978 16.9584 9.05673 16.8867L6.71542 14.228L3 14.5969C2.90094 14.6067 2.80021 14.5749 2.72867 14.5097C2.65756 14.4448 2.62212 14.3537 2.63318 14.2621L3.03735 10.8709L0.124435 8.73393C0.0458313 8.67639 0 8.58923 0 8.49729C0 8.40536 0.0458313 8.3182 0.124435 8.26065L3.03735 6.12368L2.63318 2.73252C2.62212 2.64089 2.65756 2.54986 2.72867 2.48487C2.79979 2.41966 2.90052 2.38792 3 2.39772L6.71542 2.76661L9.05673 0.107917C9.18283 -0.0356467 9.44925 -0.0356467 9.57527 0.107917L11.9166 2.76661L15.632 2.39772C15.7321 2.38823 15.8321 2.41996 15.9033 2.48487C15.9745 2.54978 16.0099 2.64089 15.9988 2.73252L15.5947 6.12368L18.5076 8.26065C18.5862 8.3182 18.632 8.40536 18.632 8.49729C18.632 8.58923 18.5862 8.67639 18.5076 8.73393L15.5947 10.8709L15.9988 14.2621C16.0099 14.3537 15.9744 14.4447 15.9033 14.5097C15.8322 14.5749 15.7318 14.6061 15.632 14.5969L11.9166 14.228L9.57527 16.8867C9.51222 16.9584 9.41673 17.0002 9.316 17.0002ZM6.86057 13.6044C6.96063 13.6044 7.05645 13.6456 7.11984 13.718L9.316 16.2117L11.5121 13.7179C11.5829 13.6369 11.695 13.5945 11.8074 13.606L15.2925 13.9522L14.9133 10.7713C14.9009 10.6681 14.947 10.5667 15.0358 10.5017L17.768 8.49729L15.0358 6.49287C14.9471 6.42796 14.9009 6.32654 14.9133 6.22329L15.2925 3.04242L11.8074 3.38854C11.6963 3.40038 11.5833 3.35802 11.5121 3.27671L9.316 0.782914L7.11992 3.27671C7.0488 3.35764 6.93568 3.39917 6.82455 3.38854L3.33954 3.04242L3.71875 6.22329C3.73106 6.32646 3.68498 6.42789 3.59623 6.49287L0.863976 8.49729L3.59623 10.5017C3.68489 10.5666 3.73106 10.6681 3.71875 10.7713L3.33954 13.9522L6.82455 13.606C6.83653 13.605 6.84859 13.6044 6.86057 13.6044Z" fill="#469BFC"/>
                        <defs>
                            <clipPath id="clip220">
                                <rect width="8.31786" height="9.9644" fill="white" transform="translate(5.48828 4.12622)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class="name_nik">
                <div class="name">{{ owner.name }}</div>
                <div class="nik">
                    <span>{{ owner.username }}</span>
                </div>
            </div>
        </div>
        <div class="page-payment__desc">
            <div class="title">Что дает дружба?</div>
            <ul>
                <li>
                    Доступ ко всем постам для <br> друзей, кроме платных
                </li>
                <li>
                    Чат для общения с автором
                </li>
                <li>
                    Персональный контент
                </li>
            </ul>
        </div>

        <div class="page-payment__register" v-if="!isUserAuth">
            <div class="reg-title">Зарегистрируйтесь или авторизуйтесь</div>
            <div class="page-payment__register-reg " :class="{active: !isLogin}">
                <register :redirect='false'></register>
                <div class="box-log">
                    Уже есть аккаунт? <a href="javascript:void(0)" @click="isLogin = true" id="payment_log">Войти</a>
                </div>
            </div>
            <div class="page-payment__register-log" :class="{active: isLogin}">
                <div class="page-login__form">
                    <login :redirect='false'></login>
                    <div class="page-login__footer">
                        <p>Еще нет аккаунта?</p>
                        <a class="link" href="javascript:void(0)" @click="isLogin = false" id="payment_reg">Зарегистрироваться</a>
                    </div>
                </div>
            </div>
            <!--<register></register>-->
        </div>
        <div v-else>
            <div>
                <div class="page-payment__form" v-if="!owner.first_free">
                    <div class="box-info">
                        <div class="box-info__content">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.7313 15.8011H20.1442L25.9214 0L8.27051 24.1989H19.8575L14.0804 40L31.7313 15.8011Z"
                                        fill="#FFD83B"/>
                            </svg>
                            <div class="sum">{{ owner.follow_price }}₽</div>
                            <div class="time">В месяц</div>
                        </div>
                    </div>
                    <div class="btn-success" @click="pay()">{{ owner.button_text == null ?'Подружиться' : owner.button_text }}</div>
                    <p>
                        Нажимая на кнопку "{{ owner.button_text == null ?'Подружиться' : owner.button_text }}"
                        вы соглашаетесь с
                        <a href="/OFERTA.pdf" target="_blank">условиями использования</a>
                        и <a href="/PRIVACY.pdf" target="_blank">политикой конфиденциальности</a>.
                    </p>
                </div>
                <div class="page-payment__form" v-else>
                    <div class="box-info">
                        <div class="box-info__content">
                            <svg width="46" height="43" viewBox="0 0 46 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                    <path d="M8.23288 31H37.7681L40.961 14.6884C41.0319 14.3265 41.0057 13.9489 40.8858 13.6041C40.766 13.2592 40.5579 12.963 40.2885 12.7535C40.019 12.544 39.7005 12.4308 39.3739 12.4285C39.0473 12.4262 38.7275 12.5348 38.4558 12.7405L30.1795 19.0019L24.4635 6.02641C24.3276 5.71798 24.1187 5.45859 23.8602 5.27731C23.6017 5.09602 23.3038 5 23 5C22.6961 5 22.3983 5.09602 22.1398 5.27731C21.8813 5.45859 21.6724 5.71798 21.5365 6.02641L15.8205 19.0019L7.54398 12.7405C7.27224 12.5349 6.95251 12.4263 6.62594 12.4287C6.29936 12.431 5.98088 12.5442 5.71147 12.7537C5.44206 12.9632 5.23404 13.2594 5.11419 13.6042C4.99433 13.949 4.96812 14.3266 5.03892 14.6884L8.23288 31Z"
                                            fill="url(#paint0_linear)"/>
                                </g>
                                <g filter="url(#filter1_d)">
                                    <path d="M8 33V36.3333C8 36.7754 8.17559 37.1993 8.48816 37.5118C8.80072 37.8244 9.22464 38 9.66667 38H36.3333C36.7754 38 37.1993 37.8244 37.5118 37.5118C37.8244 37.1993 38 36.7754 38 36.3333V33H8Z"
                                            fill="url(#paint1_linear)"/>
                                </g>
                                <defs>
                                    <filter id="filter0_d" x="0" y="0" width="46" height="36" filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="2.5"/>
                                        <feColorMatrix type="matrix"
                                                        values="0 0 0 0 0.870588 0 0 0 0 0.745098 0 0 0 0 0.337255 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                    </filter>
                                    <filter id="filter1_d" x="3" y="28" width="40" height="15" filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="2.5"/>
                                        <feColorMatrix type="matrix"
                                                        values="0 0 0 0 0.870588 0 0 0 0 0.745098 0 0 0 0 0.337255 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                    </filter>
                                    <linearGradient id="paint0_linear" x1="5" y1="18" x2="41" y2="18"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#C29219"/>
                                        <stop offset="1" stop-color="#FAEB93"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear" x1="8" y1="35" x2="38" y2="35"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#C19117"/>
                                        <stop offset="1" stop-color="#F6E48A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div class="sum">Бесплатно</div>
                            <div class="time" style="text-align: center">Бесплатный период 3 дня. <br> Далее {{ owner.follow_price }} руб/мес</div>
                        </div>
                    </div>
                        <div class="btn-success" @click="pay()">{{ owner.button_text == null ?'Подружиться' : owner.button_text }}</div>
                        <p>
                            Нажимая на кнопку "{{ owner.button_text == null ?'Подружиться' : owner.button_text }}"
                            вы соглашаетесь с
                            <a href="/OFERTA.pdf" target="_blank">условиями использования</a>
                            и <a href="/PRIVACY.pdf" target="_blank">политикой конфиденциальности</a>.
                        </p>
                   <!-- @if(0)
                        <div class="btn-success">Оплата картой</div>
                        <div class="btn-apply">
                            <svg width="56" height="22" viewBox="0 0 56 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip110)">
                                    <path d="M10.2379 2.83635C9.58167 3.57945 8.53167 4.16556 7.48167 4.08183C7.35042 3.07707 7.86448 2.00951 8.46605 1.35014C9.1223 0.586108 10.2707 0.0418649 11.2004 0C11.3098 1.04662 10.8832 2.07231 10.2379 2.83635ZM11.1895 4.28068C9.66917 4.19696 8.36761 5.10752 7.64573 5.10752C6.91292 5.10752 5.80823 4.32255 4.60511 4.34348C3.04105 4.36441 1.58636 5.21218 0.787921 6.56232C-0.852704 9.26261 0.361358 13.2607 1.9473 15.4586C2.72386 16.5471 3.65355 17.7402 4.87855 17.6984C6.03792 17.6565 6.4973 16.9762 7.89729 16.9762C9.30823 16.9762 9.71292 17.6984 10.9379 17.6774C12.2067 17.6565 13.0051 16.589 13.7817 15.5005C14.6676 14.2655 15.0285 13.0618 15.0504 12.999C15.0285 12.9781 12.6004 12.0885 12.5785 9.40913C12.5567 7.16936 14.4926 6.10181 14.5801 6.03901C13.4864 4.49001 11.7801 4.32255 11.1895 4.28068ZM19.9723 1.24548V17.5623H22.6192V11.9838H26.2832C29.6301 11.9838 31.9817 9.78592 31.9817 6.60419C31.9817 3.42245 29.6739 1.24548 26.3707 1.24548H19.9723ZM22.6192 3.38059H25.6707C27.9676 3.38059 29.2801 4.55281 29.2801 6.61465C29.2801 8.6765 27.9676 9.85918 25.6598 9.85918H22.6192V3.38059ZM36.816 17.6879C38.4785 17.6879 40.0207 16.882 40.7207 15.6051H40.7754V17.5623H43.2254V9.44053C43.2254 7.08563 41.2567 5.56803 38.227 5.56803C35.416 5.56803 33.3379 7.10656 33.2614 9.22074H35.6457C35.8426 8.21598 36.816 7.55661 38.1504 7.55661C39.7692 7.55661 40.677 8.27878 40.677 9.60799V10.5081L37.3739 10.6965C34.3004 10.8744 32.6379 12.078 32.6379 14.1713C32.6379 16.2854 34.3551 17.6879 36.816 17.6879ZM37.527 15.7517C36.116 15.7517 35.2192 15.1028 35.2192 14.1085C35.2192 13.0828 36.0832 12.4862 37.7348 12.392L40.677 12.2141V13.1351C40.677 14.6632 39.3207 15.7517 37.527 15.7517ZM46.4957 22C49.077 22 50.291 21.058 51.352 18.2008L56.0004 5.72502H53.3098L50.1926 15.3644H50.1379L47.0207 5.72502H44.2535L48.7379 17.6042L48.4973 18.3264C48.0926 19.5509 47.4364 20.0219 46.266 20.0219C46.0582 20.0219 45.6535 20.0009 45.4895 19.98V21.9372C45.6426 21.9791 46.2989 22 46.4957 22Z" fill="black"/>
                                </g>
                                <defs>
                                    <clipPath id="clip110">
                                        <rect width="56" height="22" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="btn-google">
                            <svg width="59" height="24" viewBox="0 0 59 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip220)">
                                    <path d="M27.9054 11.7248V18.7599H25.7266V1.38618H31.5052C32.1949 1.37142 32.8807 1.49673 33.523 1.75488C34.1652 2.01303 34.7512 2.39891 35.2471 2.89025C35.7479 3.35176 36.1466 3.91775 36.4162 4.55018C36.6858 5.18261 36.8201 5.86683 36.8101 6.55686C36.8245 7.25057 36.6922 7.93926 36.4224 8.57572C36.1526 9.21219 35.7517 9.78137 35.2471 10.2443C34.2366 11.2313 32.9893 11.7243 31.5052 11.7234H27.9054V11.7248ZM27.9054 3.52515V9.58995H31.5593C31.9599 9.60212 32.3585 9.5285 32.7297 9.37383C33.101 9.21915 33.4366 8.98681 33.7151 8.69167C33.9922 8.41572 34.2125 8.08566 34.3629 7.721C34.5133 7.35635 34.5908 6.9645 34.5908 6.56864C34.5908 6.17278 34.5133 5.78093 34.3629 5.41628C34.2125 5.05162 33.9922 4.72156 33.7151 4.44561C33.4401 4.14425 33.1056 3.90622 32.734 3.74729C32.3623 3.58836 31.9619 3.51217 31.5593 3.52376H27.9054V3.52515ZM41.8309 6.48477C43.4413 6.48477 44.7125 6.9256 45.6445 7.80725C46.5765 8.6889 47.042 9.8977 47.0411 11.4337V18.7599H44.957V17.1103H44.8623C43.9601 18.4688 42.7601 19.1481 41.2625 19.1481C39.9841 19.1481 38.9145 18.7599 38.0538 17.9836C37.6407 17.6273 37.3105 17.1811 37.0872 16.6775C36.8638 16.1739 36.753 15.6256 36.7627 15.0725C36.7627 13.8425 37.2166 12.8643 38.1242 12.1379C39.0318 11.4115 40.2434 11.0474 41.7591 11.0455C43.0529 11.0455 44.1184 11.2881 44.9556 11.7733V11.2631C44.9581 10.8861 44.8786 10.5132 44.723 10.1716C44.5673 9.8299 44.3394 9.528 44.0557 9.28775C43.4795 8.75527 42.7286 8.46472 41.9527 8.47403C40.7356 8.47403 39.7725 8.99988 39.0634 10.0516L37.1444 8.81366C38.2 7.26107 39.7621 6.48477 41.8309 6.48477ZM39.0119 15.1211C39.0105 15.4051 39.0753 15.6854 39.201 15.9386C39.3267 16.1918 39.5097 16.4105 39.7346 16.5766C40.2165 16.9649 40.8146 17.1706 41.4276 17.1588C42.347 17.1573 43.2283 16.7824 43.8784 16.1164C44.6002 15.4205 44.9611 14.604 44.9611 13.6669C44.2817 13.1124 43.3344 12.8351 42.1191 12.8351C41.2341 12.8351 40.4961 13.0537 39.9051 13.4908C39.3083 13.9344 39.0119 14.4737 39.0119 15.1211ZM59.0043 6.87292L51.7289 23.9999H49.4797L52.1796 18.0072L47.3957 6.87292H49.7639L53.2216 15.4122H53.269L56.632 6.87292H59.0043Z" fill="white"/>
                                    <path d="M19.0999 10.2082C19.1007 9.52801 19.0446 8.84904 18.9321 8.17871H9.74316V12.0228H15.0062C14.8985 12.6367 14.6705 13.222 14.3361 13.7432C14.0016 14.2645 13.5676 14.711 13.0601 15.0559V17.5511H16.2011C18.0403 15.8141 19.0999 13.2454 19.0999 10.2082Z" fill="#4285F4"/>
                                    <path d="M9.74389 19.9618C12.3734 19.9618 14.5874 19.0774 16.2019 17.5525L13.0608 15.0573C12.1866 15.6645 11.0607 16.011 9.74389 16.011C7.20239 16.011 5.04522 14.256 4.27384 11.8911H1.03809V14.4626C1.84908 16.1157 3.09264 17.5053 4.62995 18.4764C6.16725 19.4474 7.93779 19.9617 9.74389 19.9618Z" fill="#34A853"/>
                                    <path d="M4.27427 11.8912C3.86646 10.652 3.86646 9.30998 4.27427 8.07075V5.49927H1.03852C0.356283 6.88988 0.000976562 8.42465 0.000976562 9.98099C0.000976562 11.5373 0.356283 13.0721 1.03852 14.4627L4.27427 11.8912Z" fill="#FBBC04"/>
                                    <path d="M9.74389 3.95071C11.1334 3.92746 12.4761 4.46525 13.4817 5.44785L16.2628 2.59913C14.4993 0.902471 12.1631 -0.029021 9.74389 -7.75789e-05C7.93779 6.7394e-06 6.16725 0.514294 4.62995 1.48537C3.09264 2.45644 1.84908 3.84608 1.03809 5.49914L4.27384 8.07062C5.04522 5.70569 7.20239 3.95071 9.74389 3.95071Z" fill="#EA4335"/>
                                </g>
                                <defs>
                                    <clipPath id="clip220">
                                        <rect width="59" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p>
                            При подписке вы соглашаетесь с <a href="../video/OFERTA.pdf" download="download">договором оферты</a>
                            Первые 3 дня бесплатно и после стоимость подписки составит 499руб в месяц
                        </p>
                    @endif-->
                </div>
            </div>
            <!--<div v-else>
                <payment-form></payment-form>
            </div>-->
        </div>
        <div style="margin: auto; margin-top: 30px;left: 50%; bottom:70px;">
            <div style="font-family: Gilroy;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 12px;
                        line-height: 14px;
                        text-align: center;
                        position: relative;
                        /* left: -50%; */
                        color: #818181;
                        /*margin-bottom: 25px;*/">
                LOOPLAB LTD, Reg. Number: HE 415324<br>
                <a href = "mailto: info@friendsonly.me" style="color:#4892F3">info@friendsonly.me</a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import { SET_LOAD, SET_MENU } from '../store/types'
const Payment = {
    data: () => ({
        tg_bot_name: 'Friendsonly_mebot',
        owner: {
            first_free: false,
            username: "friendsonly"
        },
        country: "",
        email: '',
        payment: '',
        isLogin: false,
    }),
    computed:{
        ...mapGetters([
            'getUser'
        ]),
        getAvatar(){
            return 'bgColor-' + this.owner.id % 7
        },
        isUserAuth(){
            return this.getUser !== ''
        }
    },
    mounted() {
        this.setLoad(true)
        this.getCountryName()
        this.getOwner(this.$router.currentRoute.params.id)
    },
    destroyed () {
        this.setMenu(true)
    },
    methods: {
        getOwner(id){
            axios
                .get(`/webapi/account/${id}`)
                .then(response => {
                    this.owner = response.data.user
                    this.setLoad(false)
                }).catch(function (error) {
                this.loadVideo = false
                console.log(error)
            })
        },
        pay(){
            if(this.country == 'Ukraine'){
                this.CloudPay()
            }
            else{
                if(this.getUser.cards.length > 0){
                    this.follow()
                }else{
                    this.setupFollow()
                }
            }
            this.setMenu(true)
        },
        tgLogin(){
            window.location.href = 'tg://resolve?domain='+ this.tg_bot_name +'&start=link_payment_' + this.getUser.id
        },
        setupFollow() {
            this.preloader = true;
            this.no_money = false;
            window.open('/yakassa/card/follow/bank_card/'+this.owner.id, "_blank");
        },
        follow() {
            this.preloader = true;
            axios.get('/yakassa/follow/'+this.owner.id).then((resp) => {
                const status = parseInt(resp.data.status_code);
                if (status === 200) {
                    window.location.href = '/account/'+this.owner.username;
                } else if(status === 204) {
                    this.no_money = true;
                }
                this.preloader = false;
            });
        },
        async CloudPay() {
            //let user = @json($user);
            await axios.post('/create/payment', {user: this.owner.id}).then((response) => {
                this.payment = response.data.payment
                this.email = response.data.email
            });

            var widget = new cp.CloudPayments();
            var receipt = {
                Items: [//товарные позиции
                    {
                        label: 'Подписка', //наименование товара
                        price: parseFloat( this.owner.follow_price ? this.owner.follow_price : 499), //цена
                        quantity: 1.00, //количество
                        amount: parseFloat(  this.owner.follow_price ? this.owner.follow_price : 499), //сумма
                        vat: 20, //ставка НДС
                        method: 0, // тег-1214 признак способа расчета - признак способа расчета
                        object: 0, // тег-1212 признак предмета расчета - признак предмета товара, работы, услуги, платежа, выплаты, иного предмета расчета
                    }
                ],
                taxationSystem: 0, //система налогообложения; необязательный, если у вас одна система налогообложения
                email: this.email, //e-mail покупателя, если нужно отправить письмо с чеком
                phone: '', //телефон покупателя в любом формате, если нужно отправить сообщение со ссылкой на чек
                isBso: false, //чек является бланком строгой отчётности
                amounts:
                    {
                        electronic: parseFloat( this.owner.follow_price ? this.owner.follow_price : 499), // Сумма оплаты электронными деньгами
                        advancePayment: 0.00, // Сумма из предоплаты (зачетом аванса) (2 знака после запятой)
                        credit: 0.00, // Сумма постоплатой(в кредит) (2 знака после запятой)
                        provision: 0.00 // Сумма оплаты встречным предоставлением (сертификаты, др. мат.ценности) (2 знака после запятой)
                    }
                };

            var data = {};
            let date = new Date()
            if(this.owner.first_free){
                date.setDate(date.getDate() + 3); //минус один день
            }else{
                date.setDate(date.getDate() + 30)
            }
            data.cloudPayments = {recurrent: { interval: 'Month', period: 1, customerReceipt: receipt, startDate: date, amount: parseFloat(this.owner.follow_price ? this.owner.follow_price : 499) }}; //создание ежемесячной подписки
            console.log()
            widget.charge({ // options
                    publicId: 'pk_13b45dc1dec583490fe85c4ff353d', //id из личного кабинета
                    description: 'Подписка на доступ к материалам FriendsOnly', //назначение
                    amount: parseFloat(this.owner.first_free ? 1 : (this.owner.follow_price ? this.owner.follow_price : 499)), //сумма
                    currency: 'RUB', //валюта
                    invoiceId: ""+this.payment.id, //номер заказа  (необязательно)
                    accountId: this.email, //идентификатор плательщика (обязательно для создания подписки)
                    data: data
                },
                function (options) { // success
                    setTimeout(() => {
                        window.location.href = `/account/${this.owner.username}`
                    }, 2000);
                },
                function (reason, options) { // fail
                    //действие при неуспешной оплате
            });
        },
        getCountryName(){
            axios.get('/countryName')
                .then( resp => {
                    this.country = resp.data
                })
        },
        ...mapMutations({
            setLoad: SET_LOAD,
            setMenu: SET_MENU
        }),
        ...mapActions({
                setUser: 'loadAuthUser'
            }),
    },
}

export default Payment
</script>

<style lang="css">

</style>
