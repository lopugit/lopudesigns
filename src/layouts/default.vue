<template lang="pug">
  q-layout(
    view="lHh Lpr lFf"
    )
    q-layout(
      view="HHH Lpr fff"
      )
      q-layout-drawer(
        side="left"
        v-model="mainDrawer"
        :overlay="true"
        color="primary"
        ).z-top
        //- q-toolbar(
        //-   color="primary"
        //-   )
          //- q-btn(
          //-   icon="close"
          //-   @click="mainDrawer = !mainDrawer"
          //-   ).shadow-0
        q-list
          q-item(
            )
            //- q-item-side
              q-item-tile(
                avatar
                sparse
                @click="mainDrawer = !mainDrawer"
                ).q-item-tile-profile-picture
                //- :style=`{
                //-   height: '50px',
                //-   width: 'auto'
                //- }`
                img(
                  src="~assets/img/l.png"
                  )
            q-item-main(
            )
              q-item-tile(
                label
              )
                a(href="/").brand-title.col-6.q-pa-sm.text-center
                  | Lopu Designs
              //- q-item-tile(
                sublabel
                size=".5rem"
                ) Star Man
            q-item-side(
              )
              q-btn(
                icon="close"
                @click="mainDrawer = !mainDrawer"
              ).shadow-0
          //- q-item.q-mt-xl.q-mb-sm(
            ).text-white
            q-btn(
              @click="mainDrawer = !mainDrawer; $router.push('/services')"
              label="Services"
              color="secondary"
            ).full-width
          q-item.q-mt-xl(
            ).text-white
            q-btn(
              @click="mainDrawer = !mainDrawer; $router.push('/portfolio')"
              label="Portfolio"
              color="secondary"
            ).full-width
          q-item.q-mt-sm(
            ).text-white
            //- icon="tv"
            q-btn(
              @click="changeContact(true)"
              label="Contact"
              color="secondary"
            ).full-width
          
      q-page-container.q-pt-none
        router-view
        q-modal(
          v-model="contactModal"
          @hide="changeContact(false)"
          minimized
        ).contact-modal-container
          .q-pa-lg.contact-modal-positioner
            h2(style="margin-bottom: 0px") Contact
            .contacts(style="display: flex;")
              a(style="margin-top: -5px;" href="mailto:friends@lopudesigns.com")
                h5.q-pb-md friends@lopudesigns.com
              a(style="margin-top: -5px; padding-left: 10px" href="tel:+61422016261")
                h5.q-pb-md +614 2201 6261
            form(
              v-on:submit.prevent=""
              ).q-form
              q-input(
                color="white"
                value=""
                stack-label="Name"
                inverted-light
                v-model="contact.name"
                placeholder="Your name?"
              ).q-mb-sm
                q-chip(
                  v-if="$v.contact.$dirty && !$v.contact.name.required"
                  color="warning"
                  round
                  floating
                ) required
              q-input(
                color="white"
                value=""
                stack-label="Company Name"
                inverted-light
                v-model="contact.companyname"
                placeholder="Your company's name?"
              ).q-mb-sm
                //- q-chip(
                  v-if="$v.contact.$dirty && !$v.contact.companyname.required"
                  color="warning"
                  round
                  floating
                  ) required
              q-input(
                color="white"
                type="email"
                stack-label="Email"
                inverted-light
                v-model="contact.email"
                placeholder="What's your best email?"
              ).q-mb-sm
                .chips.absolute-top-right
                  q-chip(
                    v-if="$v.contact.$dirty && !$v.contact.email.required"
                    color="warning"
                    square
                    dense
                  ).q-mr-xs required
                  q-chip(
                    v-if="$v.contact.email.$error"
                    color="negative"
                    square
                    dense
                  ) invalid email!
              q-input(
                color="white"
                type="text"
                name="telephone"
                stack-label="Contact"
                inverted-light
                v-model="contact.number"
                placeholder="What's your best number?"
              ).q-mb-sm
                .chips.absolute-top-right
                  q-chip(
                    v-if="$v.contact.$dirty && !$v.contact.number.required"
                    color="warning"
                    square
                    dense
                  ).q-mr-xs required
                  //- q-chip(
                    v-if="$v.contact.number.$error"
                    color="negative"
                    square
                    dense
                    ) numbers only

              //- tel-input
              .contact-price-slider.q-mt-md
                h5 What's your budget?
                .price
                  h4.dollar $
                  h4 {{ formatPrice(transformPrice(contact.price)) }}
                  //- h3(v-if="contact.price > 59")
                //- h3 {{ contact.price }}
                  //- q-input(
                    color="secondary"
                    :value="formatPrice(contact.price)"
                    )
                q-slider(
                  v-model="contact.price"
                  color="secondary"
                  :min="20"
                  :max="59"
                  :step=".25"
                )
                //- q-btn(
                //-   v-if="contact.price > 5000"
                //-   color="secondary"
                //-   @click="contact.price = 50000"
                //- ) $50,000 ~ $1,000,000
              .platforms-select.q-mt-sm.q-pb-sm
                h5 Which platforms do you need supported?
                q-checkbox(
                  v-model="contact.platforms"
                  val="Website"
                  label="Website"
                  color="secondary"
                  :dark="true"
                  keep-color
                ) 
                q-checkbox(
                  v-model="contact.platforms"
                  val="iOS"
                  label="iOS"
                  color="secondary"
                  :dark="true"
                  keep-color
                ) 
                q-checkbox(
                  v-model="contact.platforms"
                  val="Android"
                  label="Android"
                  color="secondary"
                  :dark="true"
                  keep-color
                ) 
                q-checkbox(
                  v-model="contact.platforms"
                  val="Windows"
                  label="Windows"
                  color="secondary"
                  :dark="true"
                  keep-color
                ) 
                q-checkbox(
                  v-model="contact.platforms"
                  val="Mac"
                  label="Mac"
                  color="secondary"
                  :dark="true"
                  keep-color
                ) 
                q-checkbox(
                  v-model="contact.platforms"
                  val="Linux"
                  label="Linux"
                  color="secondary"
                  :dark="true"
                  keep-color
                ) 
              q-input.q-mt-lg(
                v-model="contact.message"
                stack-label="Please enter any other details"
                color="white"
                inverted-light
                rows="3"
                type="textarea"
              )
              .q-pt-sm.q-btns
                //- q-btn(
                  @click="changeContact(false)"
                  color="secondary"
                  ) close
                q-btn.q-ml-sm.q-send-btn(
                  color="secondary"
                  icon-right="send"
                  @click="submitContact"
                  ) send
      q-toolbar.row.no-wrap.justify-start.fixed-top.q-nav-toolbar(
        color="tertiary"
        text-color="secondary"
        :overlay="true"
        )
        q-item.col-3(

        )
          //- toggle drawer
          //- @click="mainDrawer = !mainDrawer"
          q-btn(
            icon="menu"
            size="1.2rem"
            @click="mainDrawer = !mainDrawer"
            ).shadow-0
        a(href="/").brand-title.col-6.q-pa-sm.text-center
          | Lopu Designs
        q-item.col-3.justify-end()
          //- q-list()
          q-btn(
            icon="mail"
            @click="changeContact(true)"
          ).shadow-0
</template>

<script>
import { openURL } from 'quasar'
import { required, between, email, numeric } from 'vuelidate/lib/validators'
// import TelInput from 'vue-tel-input'
export default {
  name: 'LayoutDefault',
  // components: {
  //   TelInput
  // },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      contactModal: this.$store.state.ld.contactModal,
      contact: {
        price: 34,
        realprice: this.normalizedPrice,
        priceType: undefined,
        email: undefined,
        name: undefined,
        companyname: undefined,
        number: undefined,
        platforms: [
        ]
      },
      cTrue: true,
      mainDrawer: false
    }
  },
  validations: {
    contact: {
      name: { required },
      email: { required, email },
      number: { required },
      companyname: { }
    }
  },
  methods: {
    openURL,
    changeContact(change){
      this.$store.commit('contactModal', change)
    },
    specialRound(value){
      var round
      if(value < 1500){
        round = 5
      } else if(1500 < value && value < 50000){
        round = 500
      } else if (50000 < value && value < 250000){
        round = 25000
      } else if (250000 < value){
        round = 50000
      } else {
        round = 500
      }
      return Math.round(value/round)*round
    },
    transformPrice(value){
      // let base = 5
      // let power = 5
      // return this.specialRound(hyperbola)
      return this.specialRound(this.hyperyan(value))
    },
    hyperyan(x){
      // return x+(2000000/(102-x))+4
      return 10**(Math.floor(x/10))*(1+x-10*(Math.floor(x/10)))
    },
    formatPrice(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    submitContact(){
      console.log('submitting contact form')
      this.$v.contact.$touch()
      if(this.$v.contact.$error){
        this.$q.notify('Please double check your details')
        return
      } else {
        this.contact.realPrice = this.transformPrice(this.contact.price)
        this.$q.notify({message: 'sending..', color: 'info'})
        this.$axios({
          method: 'post',
          url: 'http://api.lopudesigns.src/api/email/json',
          data: {
            json: this.contact,
            email: 'nikolaj@lopudesigns.com'
          }
        })
        .then(res=>{
          if(res){
            // this.contactSuccess = true
            this.$q.notify({
              message: 'Contact made! Talk soon :)',
              color: 'positive',
              icon: 'wifi'
              })
          }
        })
        .catch(err=>{
          console.error(err)
          this.$q.notify('something went wrong')
        })
      }
    }
  },
  watch: {
    '$store.state.ld.contactModal'(){
      this.contactModal = this.$store.state.ld.contactModal
    }
  },
  computed: {
    normalizedPrice: {
      get(){
        return this.transformPrice(this.contact.price)
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'
.btn

.brand-title
  font-size 1.99rem !important
  font-family adip
  color $secondary
  text-decoration none
  // src url(/fonts/astro.ttl)
.contact-modal-container
  // padding: 40px 0px
  .modal-content
    background $tertiary
    max-height: 85vh !important
  .contact-modal-positioner
    background $tertiary
    width: 600px
    max-width: 100%
    .q-form
      display flex
      flex-direction column
    .chips
      top -3.6px
      right -3.6px
      display flex
      align-items flex-start
    .q-btns
      width: 100%
      display: flex
      align-items flex-start
    .q-send-btn
      // right 0
      margin-left auto
      // margin-right 0px
      // left auto
    h5
      margin-top 0px
      margin-bottom: 0px
      color $secondary
      font-size: 1rem !important
    h2
      color $secondary
      font-family adip
    .platforms-select
      .q-option-label
        color $white
        margin-right 9px
    .contact-price-slider
      color: $secondary
      .q-slider-handle-container
        margin-left: 0px
      h5
        margin-bottom: 0px
      .price
        display: inline-block
        h4
          margin-top: 0px
          display: inline-block
          margin-bottom: 0px
          &.dollar
            // font-size 1.6rem
            margin-right: 2px
            font-weight 700
            // font-family astro
.q-layout-drawer
  background $primary
  .q-list
    border-color $primary
  .q-item-separator-component
    background-color $tertiary
</style>
