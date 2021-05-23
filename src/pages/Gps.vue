<template>
  <q-page>
    <div class="row justify-center">
      <div class="row justify-center q-mt-lg">
      <!-- <q-btn
        :class="$q.screen.lt.sm ? 'col-8' : 'col-4'"
        color="indigo"
        label="Minha localizacao"
        push
        size="lg"
        @click="getGeolocation"
      /> -->
      <q-btn style="margin:30px"
        :class="$q.screen.lt.sm ? 'col-8' : 'col-4'"
        color="primary"
        label="Delegacias"
        push
        size="lg"
        to="/maps"
      />
       <q-banner inline-actions rounded class="bg-purple text-white">
         Clique no botão DELEGACIAS para visualizar as delegacias mais próximas de você.
       </q-banner>
    </div>
      <div
        class="text-center"
        :class="$q.screen.lt.sm ? 'col-8' : 'col-4'"
      >
      </div>
      <br>
        <iframe
          width="450"
          height="500"
          frameborder="0" style="border:0"
          src="https://www.google.com/maps/embed/v1/search
  ?key=AIzaSyCANKt-Q98ACm3jS2CQtvc4xZtqXmobwt8&q=delegacia" allowfullscreen>
        </iframe>


    </div>
    <!-- <div class="row justify-center">
      <div class="col-10 text-center">
        <p>
          Latitude: {{ latitude }}
        </p>
        <p>
          Longitude: {{ longitude }}
        </p>
      </div>
    </div> -->
    
  </q-page>
</template>

<script>
export default {
  name: 'Gps',
  data () {
    return {
      latitude: '',
      longitude: ''
    }
  },
  methods: {
    getGeolocation () {
      if (navigator.geolocation) {
        this.$q.loading.show()
        navigator.geolocation.getCurrentPosition(this.setPosition, this.errorPosition)
      } else {
        this.errorPosition()
      }
    },
    setPosition (position) {
      const coords = position.coords
      this.latitude = coords.latitude
      this.longitude = coords.longitude
      this.$q.loading.hide()
      this.successNotify()
    },
    errorPosition () {
      this.$q.notify({
        position: 'bottom',
        timeout: 3000,
        color: 'negative',
        textColor: 'white',
        actions: [{ icon: 'close', color: 'white' }],
        message: 'Não foi possível recupera sua posição!'
      })
      this.$q.loading.hide()
    },
    successNotify () {
      this.$q.notify({
        position: 'bottom',
        timeout: 3000,
        color: 'positive',
        textColor: 'white',
        actions: [{ icon: 'check', color: 'white' }],
        message: 'Posição recuperada com sucesso!'
      })
    }
  }
}
</script>
