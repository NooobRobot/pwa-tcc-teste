<template>
  <q-page class="q-pa-md">
    <div class="column items-center">
      <div class="col-3 q-gutter-xs">
        <q-btn
          color="primary"
          push
          size="lg"
          icon="mic"
          @click="record()">
            Gravar
          </q-btn>
        <!-- <q-btn color="primary" push size="lg" icon="stop" @click="stop()">Stop</q-btn> -->
      </div>
    </div>

    <div class="column items-center q-pt-md">
      <div class="col">
        <div v-for="(audio, index) in audios" :key="index">
          <audio controls :src="audio">
          </audio>
        </div>
      </div>
    </div>
    <q-page-sticky
      v-if="btnStop"
      position="bottom-right"
      :offset="[15, 18]"
      style="z-index: 10000">
      <q-btn
        fab
        icon="stop"
        color="negative"
        @click="stop()" />
    </q-page-sticky>
    <q-dialog v-model="showAddTask">
      <q-card>
        <q-card-section>
          <div class="text-h6">Acesso ao microfone</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Você estará permitindo o acesso do aplicativo ao seu microfone para gravar áudios.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

<q-btn color="primary" icon="arrow_back" label="Voltar" to= /About />
  </q-page>

</template>

<script>
import { QSpinnerBars } from 'quasar'
export default {
  name: 'Gravacao',
  data () {
    return {
      mediaRecorder: null,
      chunks: [],
      audios: [],
      btnStop: false,
      showAddTask: true,
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then((stream) => {
            this.mediaRecorder = new MediaRecorder(stream)

            this.mediaRecorder.ondataavailable = (e) => {
              this.chunks.push(e.data)
            }

            this.mediaRecorder.onstop = (e) => {
              const blob = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' })
              const audioURL = window.URL.createObjectURL(blob)
              this.chunks = []
              this.audios.push(audioURL)
              console.log(audioURL)
            }
          })
          .catch(function (err) {
            console.log('The following getUserMedia error occured: ' + err)
          })
      } else {
        alert('getUserMedia not supported on your browser!')
      }
    },
    record () {
      this.mediaRecorder.start()
      this.$q.loading.show({
        spinner: QSpinnerBars,
        spinnerColor: 'white',
        backgroundColor: 'primary'
      })
      this.btnStop = true
    },
    stop () {
      this.mediaRecorder.stop()
      this.$q.loading.hide()
      this.btnStop = false
    }
  }
}
</script>
