<template>
    <div class="legacy">
        <header class="header">
            <div class="header-box">
                <a class="beck" @click="$router.go(-1);">
                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.1708 2.03017L3.18474 9.5L11.1708 16.9698L11.366 17.1524L11.1708 17.335L10.2646 18.1826L10.0939 18.3423L9.92312 18.1826L0.829288 9.68264L0.633266 9.49942L0.829867 9.31682L1.74182 8.46983L1.74246 8.46922L9.92305 0.817421L10.0938 0.657683L10.2646 0.817421L11.1708 1.66502L11.366 1.8476L11.1708 2.03017Z"
                            fill="#2F80ED" stroke="#2F80ED" stroke-width="0.5"/>
                    </svg>
                </a>
                <div class="heading">
                    <h2>Юридическая информация</h2>
                </div>
            </div>
        </header>

         <div class="legContent">

             <div class="default" v-if="!id">
                 <div class="text main">
                     <h2>Наша юридическая информация</h2>
                     <div class="underline"></div>
                     <p>Выберите нужный для вас раздел</p>
                     <div class="links">
                         <router-link class="link" :to="{name: 'legal_id', params: {id: 'conditions'}}">Условия</router-link>
                         <router-link class="link" :to="{name: 'legal_id', params: {id: 'confidentiality'}}">Конфиденциальность</router-link>
                         <router-link class="link" :to="{name: 'legal_id', params: {id: 'USC'}}">USC 2257</router-link>
                     </div>
                 </div>
             </div>

             <div class="conditions content" v-else-if="id === 'conditions'">
                 <div class="text">
                     <h2>Условия</h2>
                     <div class="underline"></div>
                         <p>Definitions</p>
                         <p>In these Terms and conditions, the following terms have the following
                         meanings:</p>
                         <p>"Refund of payment" is a bona fide claim by the credit card provider to
                         Looplab for damages incurred by the credit card provider because the User
                         unreasonably challenged a purchase that the User paid for using the user's
                         credit card;</p>
                         <p>"Creator" means a User who uploads Content to a Website for other Users to
                         view;</p>
                         <p>"Commission" is an amount calculated as a percentage of the revenue paid by
                         friends for viewing the Creator's user content or for using interaction with
                         friends;</p>
                         <p>"Incentive payment" - payments made by Looplab to Users who introduce new
                         Users only to friends, which are equal to 5% of the total Commission earned
                         by the mentioned User.</p>
                         <p>"Looplab" LTD, company registration number: Ne415324 and registered
                         address: BOUBOULINAS STREET 3rd floor, Flat/Office 31
                         "Subscribe" a User who follows another Creator and views the Creator's
                         Custom content;</p>
                         <p>"Friend interaction" means any features offered by a Creator as part of that
                         Creator's User content hosted on FriendsOnly that allow friends to interact
                         (rather than just view) with the User content and / or the Creator.
                         "FriendsOnly" is a social network of Users working on the Website that allows
                         Users to provide and view User-generated content and, if necessary, use
                         Interaction with Fans;</p>
                         <p>"Payment provider" means any third party approved by Looplab that allows the
                         User to make payments or the Creator to receive;</p>
                         <p>"Payment options" - instructions given by each Creator to the payment
                         Provider regarding how the payment Provider will transfer the Commission To
                         the Creator;</p>
                         <p>"Refund" means a refund to a fan after a bona fide dispute, often made before
                         the payment is withdrawn;</p>
                         <p>"Revenue" - money paid by Looplab friends for viewing user content or for
                         using interaction with friends;</p>
                         <p>"User" means any user of The website, whether it is the Creator or friends;</p>
                         <p>"User account" - a section on the Website that can only be accessed by
                         Looplab or the User, which, among other things, details the payment provider
                         and payment options;</p>
                         <p>"User content" means any photos, videos, and other materials or objects
                         (including the friend interaction feature) uploaded to The website by the
                         Creator;</p>
                         <p>"Wallet Credits" means a prepayment made by Looplab friends to facilitate
                         access to user content / interaction with friends in accordance with the terms
                         contained in this agreement.</p>
                         <p>"Website" means the website at www.FriendsOnly.me.</p>
                         <p>About</p>
                         <p>1. A website is a social network website and app service that allows users to
                         create a profile, upload photos and videos to their profile, set a monthly
                         subscription price to be paid by other users who want to view their user
                         content, and thereby earn revenue from friends. FriendsOnly is managed by
                         Looplab.</p>
                         <p>2. These Terms and conditions govern your use of the website, including any
                         content, features, and services offered on or through the website, whether or
                         not they are part of FriendsOnly. By registering and using FriendsOnly, You
                         accept and agree to be bound by these Terms. If you do not wish to agree to
                         these Terms of service, you must not access or use the website.</p>
                         <p>3. Any information provided on the Site, including answers to "frequently asked
                         questions", is not legally binding on Looplab, is only informative and is not part
                         of the Terms.</p>
                         <p>4. The website is offered and available only to Users aged 18 and over. By using
                         the website, you represent and warrant that you are at least 18 years of age
                         and of legal age to enter into a legally binding contract with Looplab. If you do
                         not comply with all these conditions, you must not access or use the Website.
                         The privacy Policy explains in more detail how Looplab uses third parties to
                         verify your eligibility.</p>
                         <p>5. Looplab reserves the right to make changes to these Terms at any time and at
                         its sole discretion. All changes take effect immediately from the moment they
                         are published by Looplab and apply to any access to the Website and its
                         subsequent use. By continuing to use FriendsOnly, you agree to the amended
                         Terms and conditions or as they currently appear. You are expected to check
                         this page from time to time to be aware of any changes, as they are
                         mandatory for you.</p>
                         <p>6. By using FriendsOnly, you consent to receive communications from Looplab
                         electronically, including emails and messages posted to your FriendsOnly
                         account, as described in more detail in the privacy Policy (available here)
                         (http://www.FriendsOnly.me/privacy). You acknowledge and agree that all
                         communications that Looplab sends to you electronically meet any legal
                         requirements that such communications must be in writing. If you would like
                         to withdraw your consent to receive messages from Looplab at any time,
                         please send an email to info@FriendsOnly.me by notifying Looplab of the
                         revocation of your consent.</p>
                         <p>7. Looplab does not own User content on FriendsOnly, and the opinions
                         expressed by users on FriendsOnly do not reflect the
                         How it works
                         FriendsOnly is a social media platform that allows you to create a user profile,
                         which in turn allows you to: upload User content for viewing by other users or
                         for interacting with friends for use by other friends ; and / or pay to view
                         another user's user content or use interaction with another user's friends.</p>
                         <p>Account registration</p>
                         <p>8. To become a user, you must register and create a user account on
                         FriendsOnly. You must provide a valid email address, username and
                         password,or a valid vk, facebook, and telegram account. It is a condition of
                         your use of The website that all information you provide on The website is
                         correct, up-to-date and complete.</p>
                         <p>9. You agree that all information that you provide as a User or otherwise,
                         including, but not limited to, information provided through the use of any
                         interactive features on The website, is governed by the Looplab privacy Policy
                         at https://FriendsOnly.me/privacy (/ privacy), and you act on the basis that
                         you know how and why Looplab processes your personal data, as set out in
                         the Looplab privacy Policy.</p>
                         <p>10.If you want to view User-generated content, you must provide your payment
                         card details to the payment provider. Your payment card information is stored
                         by the payment provider.</p>
                         <p>11.If you choose to enter the details of two or more payment cards into your user
                         account, if the payment of income from the first card is rejected because the
                         payment card is no longer valid, then the other payment card (s) will be used
                         to receive the full payment of Income.</p>
                         <p>12.If you are a Creator and want to receive commissions, you need to specify
                         payment Options in your account and upload a valid ID form. You may also
                         need to provide additional legal information, such as a W-9, if you reside in the
                         United States of America. The exact information required will depend on your
                         country of residence. Amounts due to you as a Creator from fans will be paid
                         to you by one of our payment providers according to your payment Options.
                         With the exception of Creators who wish to receive payment by direct Bank
                         transfer from Looplab, Looplab does not store any data that you disclosed
                         when registering your payment Options with a payment Provider. Section 4
                         describes the payment process in more detail.</p>
                         <p>13.By registering on FriendsOnly, you confirm that:</p>
                         <p>14.all registration and user account profile information is true and accurate, and
                         that any user content you provide is your own and does not infringe any
                         intellectual property rights or any other proprietary rights of third parties;</p>
                         <p>15.if you previously had a user account with FriendsOnly, your old account was
                         not terminated or suspended by Looplab for violating The Terms of service;</p>
                         <p>16.you are registering on FriendsOnly for your personal use, and you will not sell,
                         rent, or transfer your user Account to third parties; and</p>
                         <p>17.Looplab reserves the right to verify at any time the information you provide to
                         Looplab, as well as your compliance with the Terms. If Looplab cannot verify
                         this, Looplab reserves the right to suspend your account.</p>
                         <p>18.you will not use third-party payment systems to accept payments for
                         subscriptions or any other services through FriendsOnly.</p>
                         <p>19.You are fully responsible for all actions that occur with your account, as well
                         as for maintaining the confidentiality and security of your login data. You
                         agree not to disclose this data to any other individual or entity and
                         immediately notify Looplab at info@FriendsOnly.me if you believe that
                         someone has used or is using your account without your permission, or if your
                         account has been subject to any other security breach. . You also agree to log
                         out of your account at the end of each session. You should take special care
                         when accessing your account from a public or shared computer so that others
                         cannot access, view, or record your password or other personal information.</p>
                         <p>20.Looplab reserves the right to disable any username, password, or other
                         identifier chosen by you or provided by Looplab at any time and at Looplab's
                         sole discretion, for any reason or without any reason, including if, in the
                         opinion of Looplab, you have violated any provision of the Terms.
                         Subscriptions, purchases, and revenue payments</p>
                         <p>21.Looplab will ensure that payment providers ensure that creators receive
                         Commission from Looplab, with the difference between revenue and
                         Commission being the management fee (which will include incentive
                         payments) charged by Looplab and payments due to payment providers. The
                         management fee is intended for the provision, maintenance, and operation of
                         the Website. The Commission will be 80% of the revenue received by friends
                         who pay for viewing User-generated content that you upload or for using
                         interaction with friends.</p>
                         <p>22.To view User content or interact with friends on FriendsOnly, you must first
                         add a payment card to your account, and then click the "make Friends" button
                         in the profile of the corresponding Creator. Your payment card details will be
                         transferred to the payment provider, which will accept payments from your
                         payment card and transfer them to your Looplab account.</p>
                         <p>23.Depending on how you use only friends, the payment provider will accept
                         monthly payments or accept payments for special purchases, such as
                         interacting with friends. However, you can cancel monthly payments at any
                         time by disabling the "Auto-renewal" switch located under the corresponding
                         user content Creator profile, or by contacting Looplab at
                         info@FriendsOnly.me. If you cancel your monthly payments, you will still be
                         allowed to view the Creator's User content until the end of the existing billing
                         period, after which no further payments will be charged to your payment card
                         and you will no longer be able to view the corresponding Creator's User
                         content.</p>
                         <p>24.Looplab receives revenue and deducts Commission on behalf of the
                         respective Creator, not on your behalf as a fan. After Looplab has received a
                         payment from you as friends, you are no longer responsible to the
                         corresponding Creator, and the Creator must allow you as friends to view User
                         content or use interaction with friends.</p>
                         <p>25.Looplab will earn revenue from friends and keep a Commission as a Looplab
                         agent as a Creator agent.</p>
                         <p>26.All payments for viewing User content or using interaction with friends are
                         final and non-refundable. If Looplab receives a notification that a friend has
                         requested and received a refund or refund, Looplab will take additional action.
                         Any purchase of the right to view User content or use interaction with friends
                         that is subsequently subject to a refund or chargeback may result in the user's
                         account being immediately and permanently excluded from FriendsOnly. The
                         amount of compensation or charge back a payment can be excluded from the
                         income of the Creator. The Creator may be notified of refunds or refunds by
                         friends.</p>
                         <p>Кошелек</p>
                         <p>27.A fan can make a prepayment to Looplab, known as" wallet Credits", which
                         they can later use to view user content / access interaction with friends under
                         the terms contained in this agreement.</p>
                         <p>28.Wallet credits are non-transferable; any unused Wallet credits cannot be
                         withdrawn.</p>
                         <p>29.Once a friend has applied any Wallet Credits in accordance with clause 5.1
                         above, the Wallet Credits are non-refundable.</p>
                         <p>30.Purchases on the Site cannot be split; if a friend tries to make a purchase that
                         exceeds the remaining amount of Wallet Credits, the full amount will be
                         charged to the Friend's connected payment card.</p>
                         <p>31.Wallet credits may be limited to the maximum amount determined from time
                         to time by Looplab.</p>
                         <p>Deactivating your account</p>
                         <p>32.If you want to deactivate your FriendsOnly membership, you can do so in your
                         account section.</p>
                         <p>33.If you are a fan, your account will be deactivated as soon as possible. You will
                         no longer be charged and will no longer have access to user content or
                         interaction with fans. Any subscriptions will be deleted and cannot be
                         renewed later.</p>
                         <p>34.If you are a Creator, you can only deactivate your membership after your last
                         fan subscription expires and any remaining balance is withdrawn from your
                         account.</p>
                         <p>35.If the User is both a Creator and a Fan, the account will be deactivated in two
                         stages (the Fan and then the Creator).</p>
                         <p>36.You will receive a confirmation email after successfully deleting your account
                         Intellectual property right</p>
                         <p>37.With the exception of User-generated content, the Website and all its content,
                         features and functionality (including, but not limited to, all information,
                         software, text, displays, images, video and audio, as well as their design,
                         selection and layout) are owned by Looplab, the licensors of Looplab or other
                         suppliers of such materials and are protected by international copyright,
                         trademark, patent, trade secret and other intellectual property or proprietary
                         laws.</p>
                         <p>38.You must not reproduce, distribute, modify, create derivative works of, publicly
                         display, publicly perform, republish, download, store or transmit any material
                         on the website, except for the following:</p>
                         <p>39.you can store files that are automatically cached by your web browser for
                         display; and</p>
                         <p>40.you may print or download one copy of a reasonable number of pages of the
                         website for personal, noncommercial use and not for further reproduction,
                         publication, or distribution.</p>
                         <p>41.If you print, copy, modify, download or otherwise use or grant any other person
                         access to any part of the Website in violation of the Terms, your right to use
                         The website will immediately terminate and you must, at Looplab's option,
                         return or destroy any copies of the materials you have made.</p>
                         <p>42.With the exception of User content, no rights, titles or interests are transferred
                         to you in relation to the Website or any content on The website, and all rights
                         not expressly granted are reserved by Looplab. Any use of the Website not
                         expressly permitted by these Terms is a violation of these Terms and may
                         violate copyright, trademark, and other laws.</p>
                         <p>43.The FriendsOnly name, logo, and all related names, logos, product and service
                         names, designs, and slogans are trademarks of Looplab or Its affiliates or
                         licensors. You must not use such marks without the prior written permission
                         of Looplab. All other names, logos, product and service names, drawings and
                         slogans on the Site are trademarks of their respective owners.</p>
                         <p>License</p>
                         <p>44.Subject to all the terms, restrictions and limitations contained in these Terms,
                         we grant you a conditional, revocable, non-transferable, non-sublicensable,
                         non-exclusive and limited license to use The website for your own legitimate
                         and personal purposes. used only. You acknowledge and agree that the above
                         license may be revoked and terminated by Looplab at any time and for any
                         reason (including, but not limited to, your violation of these Terms or any
                         applicable law). Any use of FriendsOnly, except as expressly permitted by
                         these Terms, is strictly prohibited. All rights not expressly granted in this
                         document belong to Looplab.</p>
                         <p>45.Looplab does not guarantee that FriendsOnly is compatible with all devices
                         and operating systems. You are solely responsible for determining
                         FriendsOnly compatibility with your device.</p>
                         <p>Acceptable use</p>
                         <p>46.Looplab requires that all Users always respect and comply with the following
                         Conditions when using FriendsOnly.</p>
                         <p>47.You may not:</p>
                         <p>48.use FriendsOnly except for your own lawful and personal use in accordance
                         with these Terms;</p>
                         <p>49.impersonate Looplab, one of Looplab's employees, another user, or any other
                         individual or entity, or falsely claim, offer, or otherwise misrepresent any
                         affiliation, support, or sponsorship between you and Looplab and / or any
                         other individual or entity;</p>
                         <p>50.falsify account registration information or unauthorized use of other people's
                         information or content;</p>
                         <p>51.use FriendsOnly in any way and for any purpose that is illegal or unlawful,
                         including engaging in any activity that violates any rights of any individual or
                         entity;</p>
                         <p>52.copy, reproduce, distribute, modify, or create derivative works from any part of
                         FriendsOnly without the written permission of Looplab;</p>
                         <p>53.use FriendsOnly for the purpose of exploiting, harming, or attempting to
                         exploit or harm minors in any way by exposing them to inappropriate content,
                         requesting personal information, or otherwise;</p>
                         <p>54.transmit or ensure the sending of any advertising or promotional materials,
                         including any "junk mail", "happiness letter", "spam" or any other similar
                         requests;</p>
                         <p>55.engage in any other activity that restricts or prevents anyone from using or
                         enjoying the use of the Website, or that, as determined by Looplab, may harm
                         Looplab or the Users of the Website or expose Them to liability;</p>
                         <p>56.You may not create, upload, publish, display, publish, or distribute Usergenerated content that:</p>
                         <p>57.is obscene, illegal, fraudulent, defamatory, defamatory, hateful, discriminatory,
                         threatening or harassing in any way that incites violence or violates any of the
                         above prohibitions;</p>
                         <p>58.violates someone else's copyright, trademark, right to privacy, right to
                         publicity, or other proprietary or personal right (for example, using the name,
                         image, image, or other identity of another person without proper consent);</p>
                         <p>59.promotes or advertises escort services;</p>
                         <p>60.promotes or advertises firearms or other weapons, drugs, or their accessories;</p>
                         <p>61.promotes any illegal activity or protects, promotes or facilitates any illegal
                         activity;</p>
                         <p>62.causes annoyance, inconvenience, or unnecessary worry, or may upset,
                         confuse, alarm, or annoy any other person;</p>
                         <p>63.includes commercial activities or sales of third parties, such as contests,
                         sweepstakes and other promotions, barter or advertising;</p>
                         <p>64.gives the impression that it comes from Looplab or any other individual or
                         entity, or is approved by Them if it doesn't.</p>
                         <p>65.You may not delete, erase, modify, or interfere with any copyright, trademark,
                         or other proprietary notices contained in any User content that you do not
                         own.</p>
                         <p>66.You must not use the Website in any way that may disable, overload, damage
                         or damage the site or interfere with the use of The website by any other party,
                         including their ability to participate in real-time activities through the website.</p>
                         <p>67.You must not decompile, disassemble, reverse engineer, or otherwise attempt
                         to discover or obtain the source code of FriendsOnly.</p>
                         <p>68.You may not interfere in any way with the operation of FriendsOnly or any
                         server, network, or system associated with FriendsOnly, including, but not
                         limited to: hacking, email hacking, avalanche mailing, overloading, or
                         performing denial-of-service attacks; probing, scanning, or testing the
                         vulnerability of The site or any server, network, or system associated with The
                         site; violating or circumventing firewall, encryption, security, or authentication
                         procedures; access to information that is not intended for you, or access to
                         another user's account that you do not explicitly have access to.</p>
                         <p>69.You must not use FriendsOnly for any unauthorized purpose, including, but not
                         limited to, creating a competitive product or service, performance or
                         functionality, or for any other competitive purpose;</p>
                         <p>70.You must not use any automated programs, tools, or processes (including, but
                         not limited to, web crawlers, robots, spider robots, and automated scripts) to
                         access FriendsOnly or any server, network, or system associated with
                         FriendsOnly, or to extract, collect, collect, or collect content or information
                         from FriendsOnly.</p>
                         <p>71.You may not use FriendsOnly in any other way that violates these Terms or
                         applicable law.</p>
                         <p>72.Any posted content reported by another user or FriendsOnly that Looplab
                         deems unacceptable will be removed and the User will receive an email
                         notification. Users who repeatedly violate Looplab's acceptable use policy
                         may be disabled. If Looplab finds out that a user is underage, Looplab will
                         immediately deactivate that user's account and delete all of that user's
                         information and content from FriendsOnly. If you are a parent or legal
                         guardian and you become aware that your minor child is registered on
                         FriendsOnly, immediately notify Looplab at info@FriendsOnly.me.</p>
                         <p>73.By registering an account with FriendsOnly, you represent and warrant that:</p>
                         <p>74.you are 18 years old;</p>
                         <p>75.you will fully comply with these terms and Conditions;</p>
                         <p>76.you accept full responsibility for using FriendsOnly on any device, regardless
                         of whether it belongs to you;</p>
                         <p>77.you accept full responsibility for any User content created or provided by you;
                         and the</p>
                         <p>78.use of FriendsOnly does not violate these Terms or applicable law.</p>
                         <p>79.If you use FriendsOnly on behalf of a business or other entity, you warrant that
                         you have the right to grant all licenses provided for or arising from these
                         Terms and that you are authorized to associate the business or other entity
                         with these Terms.</p>
                         <p>User content</p>
                         <p>80.By creating and publishing User content on FriendsOnly, you allow your fans to
                         access and view (without downloading or copying) your User content on
                         FriendsOnly for their own legitimate and personal use. You also represent,
                         warrant, and undertake with respect to each application:</p>
                         <p>81.you own, have a valid license, or otherwise control all rights with respect to
                         your User content;</p>
                         <p>82.to the extent that your User content includes or uses any third-party property,
                         you have secured all rights, licenses, written consents, and permissions
                         necessary to use such third-party property in your User content;</p>
                         <p>83.you will not publish content depicting persons under the age of 18.</p>
                         <p>84.you have reviewed and maintain written documentation sufficient to confirm
                         that all subjects of your application are indeed 18 years of age; and</p>
                         <p>85.your User content is not confidential and will be available to your fans on
                         FriendsOnly.me.</p>
                         <p>86.You grant Looplab and Our licensees and assignees the right to use,
                         reproduce, modify, perform, display, distribute and otherwise disclose to third
                         parties any such material.</p>
                         <p>87.To clarify: this clause exists so that we can use your content by adding
                         stickers, text, and watermarks, and to make your content available to users, as
                         well as for other normal operations on our website. We will never sell your
                         content to other platforms.</p>
                         <p>88.You understand and acknowledge that you are responsible for any User
                         content that you submit or post, and you are solely responsible for such
                         content, including its legality, reliability, accuracy, and appropriateness.</p>
                         <p>89.You must reimburse Looplab, its licensees, successors and assigns For all
                         liabilities, costs, expenses, damages and damages (including any direct,
                         indirect or consequential damages, loss of profits, loss of reputation and all
                         interest, penalties and legal costs (calculated on a full refund basis) and all
                         other reasonable professional expenses and expenses incurred or incurred in
                         connection with your User content or in connection with it.</p>
                         <p>90.Looplab is not responsible to third parties for the content or accuracy of any
                         User content posted by you or any other user of The website.</p>
                         <p>91.By registering on FriendsOnly.me, you also agree to act as a record Keeper for
                         the content that you upload to FriendsOnly.me.</p>
                         <p>92.If you have any questions about User content, please contact us by email
                         info@FriendsOnly.me.</p>
                         <p>DMCA</p>
                         <p>93.FriendsOnly respects the intellectual property rights of third parties and
                         voluntarily complies with the digital age copyright Act (DMCA). With our full
                         Policy with respect to notification and removal of the DMCA is available here:
                         https://FriendsOnly.me/dmca. FriendsOnly has implemented a policy to
                         eliminate repeat copyright infringers. A copy of our repeat infringement policy
                         (RIP) is provided to our users upon request.</p>
                         <p>94.Please note that under the United States digital copyright Act (DMCA), any
                         person who knowingly misrepresents information in a notice of alleged
                         infringement or counter-notice may be liable for damages.</p>
                         <p>Links to the website and social media features</p>
                         <p>95.You may link to the Looplab home page, provided that you do so in a fair and
                         legal manner and do not harm the reputation of Looplab or use It, but you
                         must not set up the link in such a way as to suggest any form of Association,
                         approval or endorsement by Looplab.</p>
                         <p>96.The website may provide certain social media features that allow you to:</p>
                         <p>97.link from your own or certain third-party websites to certain content on The
                         website;</p>
                         <p>98.to send e-mails or other communications with certain content, or links to
                         certain content on the Website;</p>
                         <p>99.force limited parts of the content on this website to be displayed or displayed
                         on your own or certain third-party websites.</p>
                         <p>100. You may use these features solely as provided by Looplab, solely in
                         relation to the content with which They are displayed. However, you must not:</p>
                         <p>101. install a link from any website that does not belong to you;</p>
                         <p>102. 12.3.2. Make the website or parts of It appear or appear to be displayed
                         on any other site, for example, by using frames, direct links, or embedded
                         links;</p>
                         <p>103. link to any part of the Website other than the home page; or</p>
                         <p>104. otherwise take any action with respect to the materials on this website
                         that is inconsistent with any other provision of these Terms.</p>
                         <p>105. You agree to cooperate with Looplab in immediately stopping any
                         unauthorized framing or linking. Looplab reserves the right to revoke
                         permission to post links without prior notice.</p>
                         <p>106. Looplab may disable all or any social media features and any links at
                         any time without prior notice at Looplab's discretion.
                         Links from the website
                         If The website contains links to other sites and resources provided by third
                         parties, these links are provided only for your convenience. This includes links
                         contained in advertisements, including, but not limited to, banner ads and
                         sponsored links. Looplab does not control the content of these sites or
                         resources and is not responsible for them or for any loss or damage that may
                         result from your use of them. If you choose to access any of the third-party
                         websites linked to this website, you do so solely at your own risk and in
                         accordance with the terms of use of such websites.</p>
                         <p>Referral program</p>
                         <p>107. Looplab offers a referral program that encourages users to introduce
                         FriendsOnly to people who are interested in becoming users. This item
                         specifies when Looplab will pay the incentive payment. Looplab reserves the
                         right to change the method of payment of incentive payments, but no changes
                         will deprive users of incentive payments already earned before the changes
                         take effect:</p>
                         <p>108. Users with a valid FriendsOnly account can participate;</p>
                         <p>109. each user Account has a unique referral URL that allows Users to earn
                         incentive payments;</p>
                         <p>110. the specified User must use THE url of the referring user, and then
                         register with FriendsOnly using the same browser that they used to click on
                         the referral link;</p>
                         <p>111. the specified User must be someone who has never had a user
                         Account. If the specified User was or is an existing user, Looplab will not pay
                         incentive payments to the referring user;</p>
                         <p>112. Looplab will not pay incentive payments if the specified User does not
                         join FriendsOnly using the correct referral link;</p>
                         <p>113. if the specified User then creates more than one new user Account, the
                         obligation to pay incentive payments applies only to Commissions received
                         from the first user Account. The specified User will only be a new User for the
                         first user Account.</p>
                         <p>114. Users may not use misleading business practices to impersonate
                         Friendsonly with the intent to direct other users to receive incentive payments.</p>
                         <p>115. More information about how the referral program works can be found
                         at: https://FriendsOnly.me/help/3/22/90.</p>
                         <p>116. If it turns out that the incentive payments were made incorrectly,
                         Looplab reserves the right to collect this money from the sending user.</p>
                         <p>117. To ensure that the referral program is not subject to abuse, Looplab
                         reserves the right to verify the credentials and identity of the mentioned Users
                         and referring Users claiming to have submitted the mentioned Users.</p>
                         <p>118. The incentive payment will be processed on the first calendar business
                         day of each month and paid in accordance with the payment Provider's terms
                         and conditions.</p>
                         <p>119. The incentive payment is deducted from the money that Looplab will
                         withhold from the transaction, and not from the money earned by the
                         mentioned user.
                         Disclaimer of warranties; Limitation of liability</p>
                         <p>120. By using FriendsOnly, you acknowledge and agree to the following:</p>
                         <p>121. FriendsOnly and all its services and features are provided without
                         warranty of any kind, Express or implied. To the maximum extent permitted by
                         law, Looplab disclaims any and all warranties, Express or implied, with respect
                         to FriendsOnly and all Its services and features, including, but not limited to,
                         the implied warranties of MERCHANTABILITY and fitness for a particular
                         purpose. Looplab does not guarantee or warrant the accuracy, usefulness,
                         completeness, or reliability of FriendsOnly or the results of your use of
                         FriendsOnly. Looplab disclaims any responsibility or liability arising from the
                         fact that you or any other visitor to the website relied on such materials, or by
                         anyone who may be informed of its content. Looplab also does not warrant or
                         warrant that FriendsOnly and all its services and features will be available at
                         any time or place; that FriendsOnly and all Its services and features will be
                         safe, uninterrupted, and error-free; that any defect or error will be corrected; or
                         that FriendsOnly and all Its services and features will be free of viruses and
                         other malicious components. You are responsible for implementing sufficient
                         procedures and checkpoints to meet your specific requirements for anti-virus
                         protection and accuracy of data entry and output, and for maintaining external
                         means to the Website to recover any lost data. To the maximum extent
                         permitted by law, Looplab is not responsible for any loss or damage caused by
                         a distributed denial-of-service attack, viruses, or other technologically harmful
                         materials that may infect your computer hardware, computer programs, data,
                         or other proprietary materials due to your use of the Website or any services
                         or items obtained through The website, or due to your downloading of any
                         materials posted on it or on any website linked to it. Your use of FriendsOnly
                         and its services and features is solely at Your own risk.</p>
                         <p>122. Looplab does not guarantee or warrant that use of the Website will be
                         uninterrupted or error-free around the clock, seven days a week, as Looplab
                         may perform maintenance of The website from time to time. However,
                         Looplab will make all reasonable efforts to perform any such maintenance of
                         the Website during non-business hours (09: 00 to 17: 00 UK time), and
                         Looplab will try to provide reasonable notice, but this is not always possible;</p>
                         <p>123. Friendsonly.me and Looplab will seek to prevent the continuation of
                         such distribution if Looplab has sufficient capacity to do so; and</p>
                         <p>124. in no event will Looplab's total and aggregate liability to you and / or
                         others for any claims arising out of or related to the use (or inability to use) of
                         FriendsOnly or any of Its services or features exceed one hundred pounds
                         sterling. (100 pounds). This does not affect liability, which cannot be excluded
                         or limited under applicable law.</p>
                         <p>125. Because some jurisdictions do not allow the exclusion or limitation of
                         liability for indirect or incidental damages or full liability, the above limitation
                         may not apply to you. In such a case, our total and aggregate liability to you
                         arising out of or related to your use (or your inability to use) of FriendsOnly or
                         any of Its services or features shall be limited to the maximum extent
                         permitted by law or, if no amount is specified, one hundred pounds sterling
                         (100 pounds sterling).</p>
                         <p>Compensation to the user</p>
                         <p>126. Using FriendsOnly, you agree to protect Looplab and our employees,
                         agents, representatives, successors and assigns, from any claims, demands,
                         causes of claims, actions, lawsuits, litigation, judgments, orders, damages,
                         liability , losses, costs and expenses (including, without limitation, reasonable
                         attorneys ' fees and court costs) arising from or related to any of the
                         following:</p>
                         <p>127. your use FriendsOnly or any of its services or functions;</p>
                         <p>128. any User content created, published, or otherwise made by you on
                         FriendsOnly;</p>
                         <p>129. any transaction or interaction between you and any other FriendsOnly
                         user; and / or your</p>
                         <p>130. violation of the Terms or any applicable law.</p>
                         <p>131. Despite the designation of Looplab as the Creator's agent to pay the
                         Creator's Commission, Looplab, friend, and Creator are independent
                         contractors and are responsible for fulfilling all of their respective legal or
                         statutory obligations. This applies to the payment of any taxes or other
                         payments duly required by the regulatory authority. If the User fails to meet
                         these obligations, the User must reimburse Looplab for any losses or
                         expenses, including management time, incurred by Looplab as a result.</p>
                         <p>Applicable law and dispute resolution</p>
                         <p>132. You and Looplab agree that these Terms are governed by and
                         construed in accordance with the laws of England and Wales (without regard
                         to their conflict of laws rules) and that any dispute between you and Looplab
                         regarding FriendsOnly or arising out of or related to these Terms shall be
                         resolved exclusively in the courts of England and Wales.</p>
                         <p>133. Except to the extent prohibited by applicable law, any claim or cause of
                         action on your part against FriendsOnly or arising out of or related to these
                         Terms and conditions must be filed within one year of the occurrence of such
                         claim or cause of action, or may be permanently blocked.</p>
                         <p>Waiver and divisibility</p>
                         <p>134. No waiver of any term or condition set forth in these Terms will be
                         considered a further or continuing waiver of such term or waiver of any other
                         term or condition, and any waiver of any right or provision under these Terms
                         does not constitute a waiver of such right or provision.</p>
                         <p>135. If any provision of these Terms is found by a court or other Tribunal of
                         competent jurisdiction to be invalid, illegal, or unenforceable for any reason,
                         such provision shall be eliminated or limited to the minimum extent so that
                         the remaining provisions of the Terms continue in full force and effect.</p>
                         <p>General</p>
                         <p>136. The terms and conditions constitute the sole and complete agreement
                         between you and Looplab with respect to The website and supersede all prior
                         and contemporaneous understandings, agreements, representations and
                         warranties, whether written or oral, with respect to the website.</p>
                         <p>137. The contracts (rights of third parties) act 1999 was deleted.
                         Cancellation of the balance</p>
                         <p>Looplab has the right to cancel the entire balance, provided that there were no
                         new videos for 1 month, namely at least 2 videos per month, and then there
                         will be no automatic cancellation of the balance.</p>
                         <p>Contact us</p>
                         <p>If you have any questions, comments, complaints, or concerns about
                         FriendsOnly, please contact our support team at info@FriendsOnly.me.</p>
                 </div>
                 <button @click="$router.go(-1);">
                     <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M4.06494 10.1917L11.7306 17.7772C11.9416 17.9856 12.0583 18.2647 12.0592 18.5627C12.0602 18.8609 11.9453 19.1406 11.7356 19.3506L11.0681 20.0192C10.8587 20.2296 10.5783 20.3459 10.279 20.3468C9.97976 20.3478 9.6989 20.2333 9.48799 20.0242L0.360862 10.993C0.149123 10.7837 0.0326463 10.5034 0.032526 10.2051C0.0307408 9.90542 0.145264 9.62475 0.35583 9.41388L9.41678 0.333495C9.62635 0.12313 9.90647 0.00680611 10.2059 0.00585204C10.5051 0.00489849 10.786 0.119435 10.9971 0.328459L11.6686 0.992785C12.1056 1.42517 12.1078 2.13132 11.6736 2.56632L4.06494 10.1917Z" fill="#4892F3"/>
                     </svg>
                     Назад к разделам
                 </button>
             </div>

             <div class="confidentiality content" v-else-if="id === 'confidentiality'">
                 <div class="text">
                     <h2>Конфиденциальность</h2>
                     <div class="underline"></div>
                         <p>1. TIME YOUR PERSONAL DATA MAY BE TRANSFERRED TO THIRD PARTIES FOR
                             VERIFICATION.</p>
                         <p>Our services are not intended for persons under the age of 18. We conduct checks to
                             make sure that we do not knowingly offer our services or collect personal
                             information from anyone under the age of 18 or from anyone using an assumed
                             identity. These checks include transmitting the following information to a third party
                             that verifies the information. If you start the registration process, you do so with the
                             clear understanding that your personal data will be transferred to this third party and
                             processed accordingly. We reserve the right to change third parties as necessary
                             without reference to you.
                             The data that we share with third parties for verification purposes is ( Verification
                             data ):</p>
                         <p>your full name;</p>
                         <p>your date of birth;</p>
                         <p>your (passport or other identity document number);</p>
                         <p>your address;</p>
                         <p>your selfie photo.</p>
                         <p>2. WE HAVE CUSTOMER SERVICE OPERATIONS, PAYMENT DEFINITIONS AND
                             OTHER ADDITIONAL SERVICES OUTSIDE THE EUROPEAN UNION.
                             When your personal data is transferred outside the EU, you lose GDPR protection. By
                             registering, you consent to the transfer of your personal data to North America and
                             Europe - these operations offer customer service using an online portal, and they will
                             respond to your requests. This way, you will by definition know what personal data
                             they process because you have contacted them with specific requests. They will not
                             receive personal data as such, but will gain remote access to our systems. Although
                             your personal data will not leave the UK, the fact that it can be accessed and
                             processed remotely from outside the EEA constitutes a data transfer. We conducted
                             a comprehensive review of their operations and
                             make sure that their processing of your personal data complies with the GDPR
                             requirements.
                             The portal provider meets the GDPR requirements.
                             Please contact us if you need more information.</p>
                         <p>3. IMPROVING or RECEIVING PAYMENTS in CONJUNCTION WITH the use of THIRD
                             PARTIES that MAKE up the PAYMENTS.
                             See Section 4 of our Terms and conditions. ( www.Friendsonly.com/terms ). Friends
                             only involves making payments for viewing User content; receiving payments from
                             Friends who view User content, or both. For this purpose, you will deal with thirdparty payment systems, but you will do so regardless of your membership in OF.</p>
                         <p>4. ALL CONTENT IS MONITORED BY THIRD PARTIES TO ENSURE THAT THE
                             NETWORK IS LEGAL AND LEGITIMATE AND IS NOT BROUGHT TO DEPOSIT.
                             We are happy to share information about these service providers with you. We will
                             always conduct a comprehensive review, because we will share your personal data
                             with them.</p>
                         <p>5. WE WILL NOT PROFILE OR MAKE AUTOMATIC DECISIONS CONCERNING YOU.
                             PRIVACY POLICY</p>
                         <p>Introduction</p>
                         <p>Friendsonly is a social network that allows users to share their content; other users
                             like the content, and others like both. We refer to those users who share content as
                             "Creators", and those users who pay to view Creators 'content as "Friends". Most of
                             this policy applies to all users, but if necessary, we distinguish between Friends and
                             authors.</p>
                         <p>FriendsOnly is the trade name of Looplab LTD (company number 415324).</p>
                         <p>When people are Friendsonly, they share some information with us. This policy sets
                             out the information we collect, how we use it, and with whom we share it.</p>
                         <p>We confirm that the legal basis for processing your data is that by participating in
                             our social network, you have entered into a contract with us, and the processing of
                             the data specified here is part of this contract. A contract is a Terms of use that all
                             users are members of. To the extent that we are required to monitor and control the
                             use of our site, including the posted content, the Creator who posted it, and the Fan
                             who accessed the content, the basis for such processing is the fulfillment of a legal
                             obligation.</p>
                         <p>If you have any questions about our privacy Policy or would like to complain, please
                             contact us at info@Friendsonly.me. We hope that we can resolve any question or
                             problem you raise about our use of your information. If not, contact the information
                             Commissioner at https://ico.org.uk/concerns/</p>
                         <p>Information we collect</p>
                         <p>Whether you are a Creator, friend, or both, we collect information in three categories:</p>
                         <p>Information that you want to provide to us.</p>
                         <p>Information that we receive when you use our services.</p>
                         <p>Information we receive from third parties.</p>
                         <p>Information you want to provide to us</p>
                         <p>To open an account and use our services, you must inform us:</p>
                         <p>1. Your name;</p>
                         <p>2. home address;</p>
                         <p>3. e-mail address;</p>
                         <p>4. your date of birth;</p>
                         <p>5. a valid copy of your passport or other government-issued identity card that has not
                             expired;</p>
                         <p>We may also ask you to provide us with some additional information that will be
                             publicly available on our services, such as profile images, profile name, or other
                             useful identifying information.</p>
                         <p>If you have a reason to contact us separately, such as to discuss issues with
                             customer support, we will collect information that you voluntarily provide.</p>
                         <p>Information we receive when you use our services
                             When you use our services, we collect information about content that you have
                             viewed or shared.</p>
                         <p>Information about the use . We collect information about the content that your
                             friends have accessed. We can allocate similar content to this user;</p>
                         <p>Information about the content . We collect content that you create on our services,
                             such as custom stickers, photos, videos, text, and information about content that you
                             create or provide, such as if the recipient viewed the content and metadata that is
                             provided with the content.</p>
                         <p>Information about the device . We collect IP addresses or other identifying data from
                             the devices you use. For example, we collect:
                             information about your hardware and software, such as the hardware model,
                             operating system version, device memory, advertising IDs, unique app IDs, installed
                             apps, unique device IDs, browser type, language, battery level, and time zone. ;</p>
                         <p>Information about the location . When you use our services, we may collect
                             information about your location. With your consent, we may also collect information
                             about your exact location using methods such as GPS, wireless networks, cell
                             towers, Wi-Fi access points, and other sensors such as gyroscopes, accelerometers,
                             and compasses.</p>
                         <p>Information collected through cookies and other technologies . Like most online
                             services, we use cookies. The cookies we use are normal analytical and session
                             cookies
                             (for your information: most web browsers are configured to accept cookies by
                             default. If you wish, you can usually delete or reject browser cookies in your browser
                             or device settings. However, please note that deleting or rejecting cookies may
                             affect the availability and functionality of our services.) log
                             Information . We also collect log information when you use our website. This
                             information includes:</p>
                         <p>1. details about how you used our services;</p>
                         <p>2. device information, such as the type and language of your web browser;</p>
                         <p>3. access time;</p>
                         <p>4. pages viewed;</p>
                         <p>5. IP address;</p>
                         <p>6. identifiers associated with cookies or other technologies that can uniquely identify
                             your device or browser.</p>
                         <p>How we use information</p>
                         <p>We use this information to make the content available to everyone. Our goal is to
                             ensure that the content is appropriate, delicious, and legal. Here are a few ways to do
                             this:</p>
                         <p>develop, operate, improve, deliver, maintain, and protect our products and services.
                             to send you communications, including by e-mail. We may use email to respond to
                             support requests or share information about our site.
                             track and analyze trends and usage.
                             verify your identity and prevent fraud or other unauthorized or illegal activities.
                             use the information we collect from cookies and other technologies to improve the
                             services and your experience with them. This includes using our referral scheme and
                             various custom visual settings.
                             ensure compliance with our Terms of service and other usage policies.</p>
                         <p>We may also store or use information locally on your device.</p>
                         <p>How we share information</p>
                         <p>We may share information about you in the following ways:</p>
                         <p>With other users . We may share the following information with other users:
                             information
                             you enter, such as your username, profile name, and profile bio.
                             any additional information that you have given us consent to.
                             the content you post or submit will be available to your Friends and / or the authors
                             you follow.</p>
                         <p>With all users . We may share the following information with all users:
                             publicly available information such as your profile name, username, and profile
                             images.</p>
                         <p>With third parties . We may share your information with the following third parties:
                             With service providers. We may share information about you with service providers
                             who provide services on our behalf. This includes the Sight Engine which detects
                             videos when posted for violations of our terms of use
                             With third parties for legal reasons. We may share information about you if we have
                             reasonable grounds to believe that disclosure is necessary to:
                             to comply with any valid legal process, governmental request or applicable law, rule
                             or regulation, to investigate, to correct or to enforce potential violations of the terms
                             of service; to protect our rights, the rights, property or safety of our users and other
                             individuals; to detect and eliminate any risk of fraud or security.</p>
                         <p>With third parties in a merger or acquisition. If we are involved in a merger, sale of
                             assets, financing, or acquisition of all or part of our business to another company, we
                             may share your information with that company before and after the transaction is
                             closed.</p>
                         <p>Payment providers</p>
                         <p>The volume of payments made by fans for access to content, payments to creators
                             for their content, and the location of users means that we use the services of thirdparty payment service providers. This includes the transfer of personal data,
                             including names and Bank details.</p>
                         <p>When fans make payments, they are processed by third-party handlers. You will enter
                             into a contract with those third parties who will control this data.</p>
                         <p>When we receive money, we transfer the balance to the Creators minus the
                             management fee. The Creator ether:</p>
                         <p>1. contract with a third-party processor. We use a number of third-party processors;
                             or</p>
                         <p>2. be paid by us - if this happens, the Creator enters their banking information - each
                             Bank and jurisdiction has its own requirements for our platform. Then we will
                             arrange the payment.</p>
                         <p>Third-party content and integrations
                             We do not currently offer them.</p>
                         <p>Analytics and advertising services</p>
                         <p>We do not allow other companies to collect information about how you use our
                             services.</p>
                         <p>How long do we store your content</p>
                         <p>The Creator Of The Content</p>
                         <p>We want you to be in control of your information. The Creator can delete any content
                             they choose at any time. If the content contains your images or videos, this is
                             personal data.</p>
                         <p>Other personal data</p>
                         <p>If any User closes the account, the personal data associated with your use of fans
                             Only and the Bank details that we store about you will be deleted after six months.</p>
                         <p>Looplab must store financial information for 7 years. This is a legal requirement, as
                             HMRC can examine our financial records for this period, and we need to keep
                             detailed information about payments made by you and yourself.</p>
                         <p>This paragraph complies with the provisions of article 13 (2) (b and c) of the GDPR.</p>
                 </div>
                 <button @click="$router.go(-1);">
                     <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M4.06494 10.1917L11.7306 17.7772C11.9416 17.9856 12.0583 18.2647 12.0592 18.5627C12.0602 18.8609 11.9453 19.1406 11.7356 19.3506L11.0681 20.0192C10.8587 20.2296 10.5783 20.3459 10.279 20.3468C9.97976 20.3478 9.6989 20.2333 9.48799 20.0242L0.360862 10.993C0.149123 10.7837 0.0326463 10.5034 0.032526 10.2051C0.0307408 9.90542 0.145264 9.62475 0.35583 9.41388L9.41678 0.333495C9.62635 0.12313 9.90647 0.00680611 10.2059 0.00585204C10.5051 0.00489849 10.786 0.119435 10.9971 0.328459L11.6686 0.992785C12.1056 1.42517 12.1078 2.13132 11.6736 2.56632L4.06494 10.1917Z" fill="#4892F3"/>
                     </svg>
                     Назад к разделам
                 </button>
             </div>

             <div class="usc content" v-else-if="id === 'USC'">
                 <div class="text">
                     <h2>USC 2257</h2>
                     <div class="underline"></div>
                     <p>
                        All persons that appear in any visual portrayal of actual sexually explicit conduct appearing or otherwise contained within friendsonly.me were over the age of eighteen (18) years at the time the visual image was created.
                     </p>
                     <br>
                     <p>
                     Exemption Statement -- Content Produced by Third Parties:
                     </p>
                     <br>
                     <p>
                     The owners and operators of friendsonly.me are not the "producers," as such term is defined in 18 U.S.C. 2257 or subsequent case law, of any of the visual content contained in this website. All Third Parties that upload content on to this website must adhere to, and comply with USC 2257. Pursuant to Title 18 U.S.C. §2257(h)(2)(B)(v) and 47 U.S.C. §230(c), the operators of this website reserve the right to delete content posted by Third Parties which operators deem to be indecent, obscene, defamatory or inconsistent with their policies and terms of service.
                     </p>
                     <br>
                     <p>
                     Questions or comments regarding this Exemption Statement should be addressed to: info@friendsonly.me
                     </p>
                 </div>
                 <button @click="$router.go(-1);">
                     <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M4.06494 10.1917L11.7306 17.7772C11.9416 17.9856 12.0583 18.2647 12.0592 18.5627C12.0602 18.8609 11.9453 19.1406 11.7356 19.3506L11.0681 20.0192C10.8587 20.2296 10.5783 20.3459 10.279 20.3468C9.97976 20.3478 9.6989 20.2333 9.48799 20.0242L0.360862 10.993C0.149123 10.7837 0.0326463 10.5034 0.032526 10.2051C0.0307408 9.90542 0.145264 9.62475 0.35583 9.41388L9.41678 0.333495C9.62635 0.12313 9.90647 0.00680611 10.2059 0.00585204C10.5051 0.00489849 10.786 0.119435 10.9971 0.328459L11.6686 0.992785C12.1056 1.42517 12.1078 2.13132 11.6736 2.56632L4.06494 10.1917Z" fill="#4892F3"/>
                     </svg>
                     Назад к разделам
                 </button>
             </div>
         </div>
    </div>
</template>

<script>
const Legal = {
    props: ["id"]
}

export default Legal;
</script>

<style scoped>
.legacy{
    padding-top: 51px;
    padding-bottom: 51px;
}
.legacy .header-box{
    padding: 14px 40px 17px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    text-align: center;
}
.legacy .header{
    background: #FAFAFA;
    z-index: 11;
    border-bottom: 1px solid #ECECEC;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 51px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.legacy .header h2{
    font-size: 17px;
    font-weight: 500;
    color: #1D1D1F;
}
.legacy .header a.beck {
    position: absolute;
    color: #4892F3;
    width: 90px;
    height: 51px;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
}
.legacy .header a.beck img {
    height: 16px;
    width: 9px;
    margin-left: 14px;
}
.legacy .legContent{
    padding-left: 17px;
    padding-right: 17px;
}
.legacy .legContent .underline{
    background: #4892F3;
    border-radius: 2.5px;
    width: 115px;
    height: 2px;
    margin-top: 8px;
    margin-bottom: 9px;
}
.legacy .legContent .text{
    margin-top: 16px;
}
.legacy .legContent .text.main{
    margin-top: 20px;
}
.legacy .legContent h2{
    color: #1D1D1F;
    font-size: 18px;
    font-weight: 600;
}
.legacy .legContent h2.main{
    font-size: 30px;
    line-height: 36px;
}
.legacy .legContent p{
    font-size: 16px;
    color: #000;
    font-weight: 500;
}
.legacy .legContent .links{
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.legacy .legContent .links .link{
    color: #1D1D1F;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 15px;
    text-decoration: none;
}
.legacy .legContent .content{
    position: relative;
}
.legacy .legContent .text{
    height: calc(88vh - 102px);
    padding-bottom: 20px;
    overflow: -moz-scrollbars-none;
    overflow-y: auto;
    position: relative;
    -ms-overflow-style: none;
}
.legacy .legContent .text p{
    margin-bottom: 10px;
}
.legacy .legContent .text::-webkit-scrollbar{
    width: 0;
    background: transparent;
}
.legacy .legContent .content:after{
    content: '';
    position: absolute;
    bottom: 50px;
    left: 0;
    width: 100%;
    height: 30px;
    background: linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0));
}
.legacy .legContent button{
    width: 100%;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
    border: 2px solid #469BFC;
    margin-top: 10px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #469BFC;
    font-family: Gilroy;
}
.legacy .legContent button > svg{
    margin-right: 10px;
}
</style>
