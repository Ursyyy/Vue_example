<template>
	<div>
		<div class="page-paymentCart">
			<div class="page-paymentCart__title" style="z-index:2;">
                <div class="page-paymentCart__title-box">
                    <span class="beck" @click="$router.go(-1)">
                        <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1708 2.03017L3.18474 9.5L11.1708 16.9698L11.366 17.1524L11.1708 17.335L10.2646 18.1826L10.0939 18.3423L9.92312 18.1826L0.829288 9.68264L0.633266 9.49942L0.829867 9.31682L1.74182 8.46983L1.74246 8.46922L9.92305 0.817421L10.0938 0.657683L10.2646 0.817421L11.1708 1.66502L11.366 1.8476L11.1708 2.03017Z" fill="#2F80ED" stroke="#2F80ED" stroke-width="0.5"/>
                        </svg>
                    </span>
                    <h1>Привязанные платежные карты</h1>
                </div>
			</div>
			<div class="page-paymentCart__content">
				<ul style="z-index:1;" :class="{active: classes.paymentContent.ul}">
					<li class="cardWrappCheckbox" v-for="(item, index) in cards" @click="checkBoxToggle(index)">
						<div class="cart">
							<div class="checkBox" :class="{active: classes.paymentContent.checkBox}">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.99998 0C4.47715 0 0 4.47715 0 9.99998C0 15.5228 4.47715 20 9.99998 20C15.5228 20 20 15.5228 20 9.99998C19.9941 4.47961 15.5204 0.00590122 9.99998 0ZM15.505 6.93356L8.36212 14.0764C8.08317 14.3553 7.63104 14.3553 7.35213 14.0764L4.49497 11.2193C4.21121 10.9452 4.20335 10.493 4.4774 10.2093C4.75145 9.92552 5.20362 9.91765 5.48738 10.1917C5.49333 10.1975 5.49919 10.2033 5.50496 10.2093L7.85712 12.5614L14.495 5.92357C14.7788 5.64952 15.2309 5.65739 15.505 5.94111C15.7723 6.21792 15.7723 6.65675 15.505 6.93356Z" fill="#4892F3"/>
								</svg>
							</div>
							<div class="cart__visual">
								<div class="icon">
									<svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="item.card_type == 'MasterCard'">
										<path d="M10.0586 1.71387H16.9409V14.2853H10.0586V1.71387Z" fill="#C73734"/>
										<path d="M10.5244 7.99999C10.5244 5.44444 11.8016 3.17778 13.7645 1.71111C12.3219 0.644447 10.5008 0 8.51413 0C3.80775 0 0 3.57776 0 7.99999C0 12.4222 3.80772 16 8.51413 16C10.5008 16 12.3219 15.3556 13.7645 14.2889C11.8016 12.8444 10.5244 10.5556 10.5244 8.00001V7.99999Z" fill="#C73734"/>
										<path d="M27.0007 7.99999C27.0007 12.4222 23.3395 16 18.8141 16C16.9039 16 15.1528 15.3556 13.7656 14.2889C15.6759 12.8222 16.8811 10.5556 16.8811 8.00001C16.8811 5.44444 15.6531 3.17778 13.7656 1.71111C15.1528 0.644447 16.9039 0 18.8141 0C23.3395 0 27.0007 3.6 27.0007 7.99999Z" fill="#E2A247"/>
										<path d="M6.26147 9.10125V7.84076C6.26147 7.35756 5.9791 7.04242 5.49507 7.04242C5.25307 7.04242 4.99089 7.12647 4.80939 7.39958C4.6682 7.16849 4.46652 7.04242 4.16402 7.04242C3.96233 7.04242 3.76065 7.10545 3.59931 7.33656V7.08447H3.17578V9.10125H3.59931V7.9878C3.59931 7.63067 3.78081 7.46258 4.06318 7.46258C4.34552 7.46258 4.4867 7.65167 4.4867 7.9878V9.10125H4.91023V7.9878C4.91023 7.63067 5.11189 7.46258 5.37407 7.46258C5.65641 7.46258 5.7976 7.65167 5.7976 7.9878V9.10125H6.26147V9.10125ZM12.5337 7.08445H11.8479V6.4752H11.4244V7.08445H11.0412V7.48363H11.4244V8.40799C11.4244 8.87016 11.6059 9.14328 12.0899 9.14328C12.2715 9.14328 12.4732 9.08025 12.6143 8.99621L12.4933 8.61808C12.3723 8.7021 12.2311 8.7231 12.1303 8.7231C11.9286 8.7231 11.8479 8.59705 11.8479 8.38696V7.4836H12.5337V7.08445V7.08445ZM16.1235 7.04242C15.8815 7.04242 15.7202 7.16847 15.6193 7.33656V7.08447H15.1958V9.10125H15.6193V7.96681C15.6193 7.63067 15.7605 7.44158 16.0227 7.44158C16.1033 7.44158 16.2042 7.4626 16.2849 7.4836L16.4059 7.06345C16.3252 7.04242 16.2042 7.04242 16.1235 7.04242H16.1235ZM10.6984 7.25251C10.4967 7.10545 10.2144 7.04242 9.91184 7.04242C9.42781 7.04242 9.10512 7.29451 9.10512 7.69369C9.10512 8.02983 9.34713 8.21892 9.77065 8.28194L9.97234 8.30294C10.1942 8.34496 10.3152 8.40799 10.3152 8.51303C10.3152 8.66007 10.1538 8.76512 9.87149 8.76512C9.58915 8.76512 9.36729 8.66007 9.22613 8.55503L9.02444 8.89116C9.24628 9.05923 9.54881 9.14325 9.85133 9.14325C10.416 9.14325 10.7387 8.87016 10.7387 8.49201C10.7387 8.13487 10.4765 7.94578 10.0732 7.88276L9.87149 7.86176C9.68999 7.84076 9.54881 7.79874 9.54881 7.67269C9.54881 7.52563 9.68999 7.44158 9.91181 7.44158C10.1538 7.44158 10.3959 7.54663 10.5169 7.60965L10.6984 7.25251V7.25251ZM21.952 7.04242C21.71 7.04242 21.5487 7.16847 21.4478 7.33656V7.08447H21.0243V9.10125H21.4478V7.96681C21.4478 7.63067 21.589 7.44158 21.8512 7.44158C21.9318 7.44158 22.0327 7.4626 22.1134 7.4836L22.2344 7.06345C22.1537 7.04242 22.0327 7.04242 21.952 7.04242V7.04242ZM16.547 8.09287C16.547 8.7021 16.9504 9.14328 17.5756 9.14328C17.8579 9.14328 18.0596 9.08025 18.2613 8.91219L18.0596 8.55503C17.8983 8.68107 17.7369 8.74412 17.5554 8.74412C17.2126 8.74412 16.9706 8.49203 16.9706 8.09285C16.9706 7.71472 17.2126 7.4626 17.5554 7.44158C17.7369 7.44158 17.8983 7.50463 18.0596 7.63067L18.2613 7.27351C18.0596 7.10545 17.8579 7.04242 17.5756 7.04242C16.9504 7.04242 16.547 7.4836 16.547 8.09287ZM20.4596 8.09287V7.08442H20.0361V7.33651C19.8949 7.14744 19.6932 7.0424 19.431 7.0424C18.8865 7.0424 18.463 7.48358 18.463 8.09285C18.463 8.70207 18.8865 9.14325 19.431 9.14325C19.7134 9.14325 19.9151 9.03821 20.0361 8.84914V9.10123H20.4596V8.09283V8.09287ZM18.9067 8.09287C18.9067 7.73572 19.1285 7.4416 19.4915 7.4416C19.8344 7.4416 20.0764 7.71469 20.0764 8.09287C20.0764 8.45001 19.8344 8.74412 19.4915 8.74412C19.1285 8.7231 18.9067 8.45001 18.9067 8.09285V8.09287ZM13.8445 7.04242C13.2799 7.04242 12.8765 7.4626 12.8765 8.09287C12.8765 8.7231 13.2799 9.14328 13.8647 9.14328C14.1471 9.14328 14.4294 9.05923 14.6513 8.87016L14.4496 8.55503C14.2882 8.68107 14.0866 8.76512 13.8849 8.76512C13.6227 8.76512 13.3605 8.63907 13.3 8.28194H14.7319V8.11385C14.7521 7.46258 14.3891 7.04242 13.8445 7.04242V7.04242ZM13.8445 7.42058C14.1067 7.42058 14.2882 7.58865 14.3286 7.90378H13.3202C13.3605 7.63065 13.542 7.42058 13.8445 7.42058ZM24.352 8.09285V6.28613H23.9284V7.33656C23.7873 7.14747 23.5856 7.04242 23.3234 7.04242C22.7789 7.04242 22.3554 7.4836 22.3554 8.09287C22.3554 8.7021 22.7789 9.14328 23.3234 9.14328C23.6058 9.14328 23.8074 9.03823 23.9284 8.84916V9.10125H24.352V8.09285V8.09285ZM22.7991 8.09285C22.7991 7.73572 23.0209 7.44158 23.3839 7.44158C23.7268 7.44158 23.9688 7.71472 23.9688 8.09285C23.9688 8.45001 23.7268 8.74412 23.3839 8.74412C23.0209 8.7231 22.7991 8.45001 22.7991 8.09285ZM8.64126 8.09285V7.08445H8.21773V7.33654C8.07657 7.14747 7.87489 7.04242 7.6127 7.04242C7.06818 7.04242 6.64465 7.4836 6.64465 8.09287C6.64465 8.7021 7.06818 9.14328 7.6127 9.14328C7.89505 9.14328 8.09673 9.03823 8.21773 8.84916V9.10125H8.64126V8.09285V8.09285ZM7.06818 8.09285C7.06818 7.73572 7.29002 7.44158 7.65304 7.44158C7.99589 7.44158 8.23791 7.71472 8.23791 8.09285C8.23791 8.45001 7.99591 8.74412 7.65304 8.74412C7.29002 8.7231 7.06818 8.45001 7.06818 8.09285V8.09285Z" fill="white"/>
									</svg>
									<svg width="31" height="11" viewBox="0 0 31 11" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
										<g clip-path="url(#clip0)">
										<path d="M13.4336 10.8413H10.9224L12.4931 0.193046H15.0042L13.4336 10.8413ZM22.537 0.453387C22.0417 0.237909 21.2561 0 20.2847 0C17.8048 0 16.0584 1.44992 16.0477 3.52286C16.0271 5.05227 17.2981 5.90174 18.2486 6.41168C19.2201 6.93277 19.5504 7.27292 19.5504 7.73738C19.5405 8.45074 18.7653 8.77956 18.0423 8.77956C17.0397 8.77956 16.5025 8.61003 15.6862 8.21313L15.3555 8.04303L15.0041 10.4333C15.593 10.7275 16.6782 10.9886 17.8048 11C20.4397 11 22.1551 9.57258 22.1755 7.36353C22.1855 6.15134 21.5144 5.22255 20.0676 4.46358C19.1892 3.97634 18.6514 3.64783 18.6514 3.1493C18.6616 2.69612 19.1063 2.23196 20.0978 2.23196C20.9142 2.20919 21.514 2.42436 21.9684 2.63967L22.1955 2.75274L22.537 0.453387ZM25.8747 7.06903C26.0815 6.45729 26.8773 4.08973 26.8773 4.08973C26.8668 4.11246 27.0836 3.46671 27.2076 3.07028L27.3832 3.9878C27.3832 3.9878 27.8587 6.53665 27.962 7.06906H25.8747V7.06903ZM28.9744 0.19308H27.032C26.4331 0.19308 25.978 0.385515 25.7195 1.07657L21.9894 10.8412H24.6243C24.6243 10.8412 25.0581 9.52697 25.1514 9.24393H28.3756C28.4477 9.61778 28.6752 10.8412 28.6752 10.8412H31.0003L28.9744 0.19308H28.9744ZM8.82496 0.19308L6.36566 7.45417L6.0969 5.98151C5.64228 4.2823 4.21631 2.43612 2.625 1.51813L4.87764 10.8301H7.53319L11.4804 0.193046H8.82496V0.19308Z" fill="#00579F"/>
										<path d="M13.4336 10.8413H10.9224L12.4931 0.193046H15.0042L13.4336 10.8413ZM22.537 0.453387C22.0417 0.237909 21.2561 0 20.2847 0C17.8048 0 16.0584 1.44992 16.0477 3.52286C16.0271 5.05227 17.2981 5.90174 18.2486 6.41168C19.2201 6.93277 19.5504 7.27292 19.5504 7.73738C19.5405 8.45074 18.7653 8.77956 18.0423 8.77956C17.0397 8.77956 16.5025 8.61003 15.6862 8.21313L15.3555 8.04303L15.0041 10.4333C15.593 10.7275 16.6782 10.9886 17.8048 11C20.4397 11 22.1551 9.57258 22.1755 7.36353C22.1855 6.15134 21.5144 5.22255 20.0676 4.46358C19.1892 3.97634 18.6514 3.64783 18.6514 3.1493C18.6616 2.69612 19.1063 2.23196 20.0978 2.23196C20.9142 2.20919 21.514 2.42436 21.9684 2.63967L22.1955 2.75274L22.537 0.453387ZM25.8747 7.06903C26.0815 6.45729 26.8773 4.08973 26.8773 4.08973C26.8668 4.11246 27.0836 3.46671 27.2076 3.07028L27.3832 3.9878C27.3832 3.9878 27.8587 6.53665 27.962 7.06906H25.8747V7.06903ZM28.9744 0.19308H27.032C26.4331 0.19308 25.978 0.385515 25.7195 1.07657L21.9894 10.8412H24.6243C24.6243 10.8412 25.0581 9.52697 25.1514 9.24393H28.3756C28.4477 9.61778 28.6752 10.8412 28.6752 10.8412H31.0003L28.9744 0.19308H28.9744ZM8.82496 0.19308L6.36566 7.45417L6.0969 5.98151C5.64228 4.2823 4.21631 2.43612 2.625 1.51813L4.87764 10.8301H7.53319L11.4804 0.193046H8.82496V0.19308Z" fill="url(#paint0_linear)"/>
										<path d="M4.08164 0.192905H0.0413211L0 0.408043C3.15169 1.29167 5.23901 3.42167 6.09658 5.98181L5.21827 1.08795C5.07366 0.407873 4.6293 0.215303 4.08164 0.192871V0.192905Z" fill="#222357"/>
										</g>
										<defs>
										<linearGradient id="paint0_linear" x1="3" y1="6" x2="31" y2="6" gradientUnits="userSpaceOnUse">
										<stop stop-color="#222357"/>
										<stop offset="1" stop-color="#254AA5"/>
										</linearGradient>
										<clipPath id="clip0">
										<rect width="31" height="11" fill="white"/>
										</clipPath>
										</defs>
									</svg>
								</div>
								{{item.first6}}** ****{{item.last4}}
							</div>
							<div class="cart__desc">
								<div class="name">{{item.card_type}}</div>
								<div class="numb">{{item.first6}}** ****{{item.last4}}</div>
							</div>
						</div>
					</li>
				</ul>
				<div class="page-paymentCart__content-normal" v-bind:class="{active: classes.paymentContent.normal}">
					<div class="btn-untie" id="cart-edit" @click="cartEdit();" v-show="cardsEmpty">Изменить</div>
					<div onclick="window.location.href='/yakassa/card/bank_card'" class="btn-addCart">Привязать новую карту</div>
				</div>
				<div class="page-paymentCart__content-edit" v-bind:class="{active: classes.paymentContent.edit}">
					<div class="btn-untie" @click="openModal('delete')" style="color: #EA4E3D!important;" v-show="cardsToDel.length != 0">Удалить</div>
					<div class="btn-untie disable" v-show="cardsToDel.length == 0">Удалить</div>
					<div class="btn-untie" id="cart-editEnd" style="color: #2F80ED!important;" @click="cardEditEnd()">Готово</div>
				</div>
			</div>
		</div>
		<div class="popups popupsBottom popupsCartRemove popupsAnim" :class="{active: classes.modals.deleteSuccess.status}"> <!--id="popupsCardSuccess"-->
			<div class="bgClose" @click="removeModal()" :class="{active: classes.modals.deleteSuccess.status}"></div>
			<div class="popContent" :class="{active: classes.modals.deleteSuccess.content}">
				<div class="popups__content">
					<div class="boxSuccess">
						<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M29.9984 57.6754C45.2836 57.6754 57.6746 45.2843 57.6746 29.9992C57.6746 14.714 45.2836 2.323 29.9984 2.323C14.7133 2.323 2.32227 14.714 2.32227 29.9992C2.32227 45.2843 14.7133 57.6754 29.9984 57.6754Z" fill="#2F80ED"/>
							<path d="M30 60C13.4593 60 0 46.543 0 30C0 13.4593 13.4593 0 30 0C46.543 0 60 13.4593 60 30C60 46.543 46.543 60 30 60ZM30 4.64754C16.0201 4.64754 4.64754 16.0201 4.64754 30C4.64754 43.9799 16.0201 55.3525 30 55.3525C43.9799 55.3525 55.3525 43.9775 55.3525 30C55.3525 16.0201 43.9799 4.64754 30 4.64754Z" fill="#2F80ED"/>
							<path d="M26.3769 41.0377C25.7541 41.0377 25.1592 40.7891 24.72 40.3429L16.1452 31.6288C15.2459 30.7132 15.2575 29.2446 16.1731 28.343C17.0887 27.446 18.5596 27.4553 19.4589 28.3708L26.3095 35.3328L40.4823 19.7241C41.349 18.7737 42.8177 18.7063 43.7634 19.5661C44.7138 20.4282 44.7835 21.8968 43.9214 22.8496L28.0965 40.2778C27.6666 40.7518 27.0624 41.026 26.4234 41.04C26.4071 41.0377 26.3932 41.0377 26.3769 41.0377Z" fill="white"/>
						</svg>
						Карта успешно удалена 🤝
					</div>
				</div>
				<div class="popups__footer">
					<div class="btn" @click="removeModal()">Закрыть</div>
				</div>
			</div>
		</div>
		<div class="popups popupsBottom popupsCartRemove popupsAnim" :class="{active: classes.modals.deleteError.status}">
			<div class="bgClose" @click="removeModal()" :class="{active: classes.modals.deleteError.status}"></div>
			<div class="popContent" :class="{active: classes.modals.deleteError.content}">
				<div class="popups__content">
					<div class="boxError">
						<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.4703 60H53.5298C58.4934 60 61.603 54.0391 59.1359 49.2532L35.6061 3.61055C33.1244 -1.20352 26.8757 -1.20352 24.394 3.61055L0.86422 49.2532C-1.6031 54.0388 1.50668 60 6.4703 60Z" fill="#FCC601"/>
							<path d="M59.1707 49.2531L36.5907 3.60868C34.5331 -0.550675 29.7788 -1.11328 26.9869 1.91463L35.3025 18.7242C43.4742 35.2428 33.1746 55.8182 16.734 55.8182H3C3.95681 58.2161 6.02655 60 8.63102 60H53.7909C58.5541 60.0003 61.5384 54.0389 59.1707 49.2531Z" fill="#FCC601"/>
							<path d="M29.9988 39.8421C28.9594 39.8421 28.1172 38.911 28.1172 37.7625V18.3912C28.1172 17.2426 28.9596 16.3115 29.9988 16.3115C31.038 16.3115 31.8804 17.2426 31.8804 18.3912V37.7625C31.8804 38.9108 31.0382 39.8421 29.9988 39.8421Z" fill="white"/>
							<path d="M30.0012 50.0613C31.2046 50.0613 32.1802 48.983 32.1802 47.653C32.1802 46.3229 31.2046 45.2446 30.0012 45.2446C28.7978 45.2446 27.8223 46.3229 27.8223 47.653C27.8223 48.983 28.7978 50.0613 30.0012 50.0613Z" fill="white"/>
							<path d="M32.1796 47.6534C32.1796 47.3196 32.118 47.002 32.0071 46.7129C31.1467 47.8545 30.1932 48.9142 29.1543 49.8733C29.4144 49.9947 29.7003 50.0617 30.0006 50.0617C31.2042 50.0617 32.1796 48.9834 32.1796 47.6534Z" fill="#EEF5F6"/>
						</svg>
						Отвязать карту пока нельзя, т.к вы подписались на профиль с 3-х дневной бесплатной подпиской. 😟 Возвращайтесь через 72 часа.
					</div>
				</div>
				<div class="popups__footer">
					<div class="btn" @click="removeModal()">Закрыть</div>
				</div>
			</div>
		</div>
		<div class="popups popupsBottom popupsCartRemove" :class="{active: classes.modals.cardDelete.status}">
			<div class="bgClose" @click="removeModal()" :class="{active: classes.modals.cardDelete.status}"></div>
			<div class="popContent" :class="{active: classes.modals.cardDelete.content}">
				<div class="popups__content" :class="{active: classes.modals.cardDelete}">
					<p v-if="cardsToDel.length == 1">Вы уверены, что хотите удалить банковскую карту ****{{cardsToDel[0].last4}}?</p>
					<p v-else>Вы уверены, что хотите удалить выбранные банковские карты?</p>
					<div class="popups__content-buttons">
						<div class="btn" @click="delCards(); removeModal()">Да</div>
					</div>
				</div>
				<div class="popups__footer">
					<div class="btn" @click="removeModal()">Отмена</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

const PaymentCards = {
	name: "page-paymentCart",
	components:{},
	data: () => ({
		cards:[],
		cardsToDel: [],
		editCardsStatus: false,
        classes: {
            paymentContent: {
                ul: false,
                normal: true,
                edit: false,
                checkBox: false
            },
            modals: {
                cardDelete: {
                    status: false,
                    content: false
                },
                deleteError: {
                    status: false,
                    content: false
                },
                deleteSuccess: {
                    status: false,
                    content: false
                }
            }
        }
	}),
	mounted() {
		this.getCards()
	},
	computed: {
		cardsEmpty(){
			return this.cards.length > 0
		}
	},
	methods: {
		delCards(){
			let status = false
			for(let card of this.cardsToDel){
				axios.get(`card/delete/${card.id}`)
					.then(resp => {
						if(resp.data.status_code == 200){
							this.cards = this.cards.reduce(function(res, arr){
							if(arr.id != card.id){
								res.push(arr)
							}
							return res
						}, [])
						} else {
							status = true
						}
					})
					.catch(error => {
						console.log(error, 'cardss')
					})
                console.log(card)
			}
			setTimeout(()=> {
				if(status){
                    this.openModal('error');
				}
				else {
					this.openModal('success');
				}
				this.cardEditEnd();
			}, 250)
            this.cardsToDel = [];
		},
		getCards(){
			axios.get("/webapi/user")
			.then( resp => {
				this.cards = resp.data.cards
			})
			.catch(error => {
					console.log(error)
			})
		},
        // new code
        cartEdit() {
		    this.editCardsStatus = true;
		    this.classes.paymentContent.ul = true;
		    this.classes.paymentContent.normal = false;
		    this.classes.paymentContent.edit = true;
        },
        cardEditEnd() {
            this.editCardsStatus = false;
            this.classes.paymentContent.ul = false;
            this.classes.paymentContent.normal = true;
            this.classes.paymentContent.edit = false;
            this.checkBoxReset();
        },
        checkBoxToggle(index) {
		    if (this.classes.paymentContent.ul) {
                if(this.editCardsStatus){
                    if(this.cardsToDel.includes(this.cards[index])){
                        this.cardsToDel.splice(this.cardsToDel.indexOf(this.cards[index]), 1)
                    }else{
                        this.cardsToDel.push(this.cards[index])
                    }
                }
                this.$el.querySelectorAll('.cardWrappCheckbox')[index].querySelector('.checkBox').classList.toggle('active');
            }
        },
        checkBoxReset() {
            this.$el.querySelectorAll('.cardWrappCheckbox').forEach(el => el.querySelector('.checkBox').classList.remove('active'));
        },
        openModal(modal) {
		    // this.removeModal();
		    if (modal === 'delete') {
                this.classes.modals.cardDelete.status = true;
                setTimeout(() => {
                    this.classes.modals.cardDelete.content = true;
                }, 100)
            } else if (modal === 'error') {
                this.classes.modals.deleteError.status = true;
                setTimeout(() => {
                    this.classes.modals.deleteError.content = true;
                }, 100)
            } else if (modal === 'success') {
                this.classes.modals.deleteSuccess.status = true;
                setTimeout(() => {
                    this.classes.modals.deleteSuccess.content = true;
                }, 100)
            }
        },
        removeModal() {
            for (let mod in this.classes.modals) {
                this.classes.modals[mod].content = false;
                setTimeout(() => {
                    this.classes.modals[mod].status = false;
                }, 100)
            }
		    // if (modal === 'delete') {
            //     this.classes.modals.cardDelete.content = false;
            //     setTimeout(() => {
            //         this.classes.modals.cardDelete.status = false;
            //     }, 100)
            // }
        }
	},
}

export default PaymentCards
</script>

<style scoped>
.popups .bgClose{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 1;
}
.popups .popContent{
    transform: translateY(150%);
    position: relative;
    transition: all .2s ease;
    z-index: 2;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}
.popups .popContent.active{
    transform: translateY(0);
}
</style>
