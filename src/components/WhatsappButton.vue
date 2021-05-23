<template>
  <a
    class="whatsappButton"
    :class="{ isInvalid: !isValid }"
    :href="url"
    target="_blank"
  >
    <whatsapp-icon/>
    {{ text }}
  </a>
</template>

<script>
import WhatsappIcon from '@/components/WhatsappIcon.vue'

export default {
  name: 'WhatsappButton',
  props: {
    'isValid': {
      type: Boolean,
      default: false
    },
    'url': {
      type: String,
      require: true
    },
    'text': {
      type: String,
      default: 'Talk to me on WhatsApp'
    }
  },
  components: {
    WhatsappIcon
  }
}
</script>

<style scoped>

.whatsappButton{
  background: red;
  background: red;
  border: none;
  color: #fff;
  border-radius: .25em;
  padding: 0.9rem; /* 20/16 */
  text-align: center;
  float: right;
  cursor: pointer;
  appearance: none;
  line-height: 1.3;
  display: inline-block;
  width: 100%;
  font-weight: 700;
  text-decoration: none;
  font-size: inherit;}
</style>
