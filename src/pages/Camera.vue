import camera from '../assets/camera.png';
<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 text-center">
        <video autoplay width="250rem" ref="videoplay"></video>
      </div>
      <div class="col-12 text-center">
        <q-btn
          v-if="!cameraStart"
          label="Acessar Camera"
          color="primary"
          icon="camera"
          :disable="!enableCamera"
          @click="useCamera"
        />
        <q-btn
          v-else
          label="Tirar Foto"
          color="primary"
          icon="camera"
          @click="takePhoto"
          class="takePhoto"
        />
      </div>

      <div class="col-12 text-center">
        <img src="" ref="imgTakePhoto" width="250rem" />
      </div>
    </div>

    <q-dialog v-model="showAddTask">
      <q-card>
        <q-card-section>
          <div class="text-h6">Acesso a câmera</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Você estará permitindo o acesso do aplicativo a sua camera para tirar fotos e gravar vídeos.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-btn
    color="primary"
    icon="arrow_back"
    label="Voltar"
    to= /About
    />
  </q-page>
</template>


<script>
export default {
  name: 'PageCamera',
  data () {
    return {
      enableCamera: false,
      cameraStart: false,
      imageCapture: null,
      track: null,
      showAddTask: true,

      address: ''

    }
  },
  mounted () {
    if (navigator.mediaDevices.getUserMedia) {
      this.enableCamera = true
    }
  },
  methods: {
    useCamera () {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
          this.cameraStart = true
          this.$refs.videoplay.srcObject = mediaStream
          this.track = mediaStream.getVideoTracks()[0]
          this.imageCapture = new ImageCapture(this.track)
        })
    },
    takePhoto () {
      this.imageCapture.takePhoto()
        .then(blob => {
          createImageBitmap(blob)
          const reader = new FileReader()
          reader.readAsDataURL(blob)
          reader.onloadend = () => {
            this.$refs.imgTakePhoto.src = reader.result
            console.log(reader.result)
          }
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
