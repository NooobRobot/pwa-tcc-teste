<template>
  <div style="width:100%;">
    
    <div class="form-group">
      <label for="WhatsappText"></label>
      <textarea id="WhatsappText" v-model="text" @input="changeUrl"/>
    </div>
    <hr/>
    <div class="form-group">
      <whatsapp-button
        :url="url"
        text="Panico"
        :isValid="isValid"
      />
    </div>
  </div>
</template>

<script>
const x = `48996038908`;

import WhatsappButton from '@/components/WhatsappButton.vue'

const whatsappUrl = require('whatsapp-url')

export default {
  data () {
    return {
      isValid: false,
      code: `55`,
      phone: x,
      urlPhone: `5541984401163`,
      text: `Socorro me ajuda`,
      url: ``
    }
  },
  components: {
    WhatsappButton
  },
  mounted () {
    this.changeUrl()
  },
  methods: {
    changeWhatsappUrl (phoneNumber) {
      const phone = phoneNumber.replace(/\D+/g, ``)
      this.isValid = true
      this.url = whatsappUrl({ phone, text: this.text, isWeb: false })
    },
    onInput ({ number, isValid }) {
      this.isValid = isValid

      if (isValid) {
        if (typeof number === 'object')
          this.phone = number.input !== '' ? number.national : this.phone
        else
          this.phone = number

        return number.input.trim() ? this.changeWhatsappUrl(number.international) : null
      }
    },
    changeUrl () {
      let hasCode = this.phone.length > 11
      let phone = `${ (!hasCode) ? this.code : '' }${this.phone.replace('+', '')}`
      this.changeWhatsappUrl(phone)
    }
  }
}
</script>

<style scoped>

.form-group{
  margin-bottom: .9375rem; /* 15/16 */
  label{
    display: block;
    margin-bottom: .3125rem; /* 5/16 */
  }
}

textarea{
  border-radius: 3px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border: 1px solid #bbb;
  text-align: left;
  width: 100%;
  outline: none;
  padding: .4375rem;
  resize: none;
  height: 6.25rem;
}
</style>