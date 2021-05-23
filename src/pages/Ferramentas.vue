import { GeoJSON } from 'leaflet';
<template>
  <q-page class="q-pa-lg" style="">
    <div class="row items-start q-gutter-md container-fluid">
      <q-card style="margin:0;;box-shadow:none;text-align: center;" class="my-card col-6">
      <a href="/#/questionario">
        <img style="height: 100px;" src="../assets/questionario.png">
      </a>
      <q-card-section style="text-align:center;">
        <div class="text-h6">Questionario</div>
      </q-card-section>
    </q-card>
    <q-card style="margin:0;;box-shadow:none;text-align: center;" class="my-card col-6">
      <a href="/#/contactform">
        <img style="height: 100px;" src="../assets/contato.png">
      </a>
      <q-card-section style="text-align:center;">
        <div class="text-h6">Contatos</div>
      </q-card-section>
    </q-card>
    <q-card style="margin:0;;box-shadow:none;text-align: center;" class="my-card col-6">
      <a href="/#/panico">
        <img style="height: 100px;" src="../assets/panico.png">
      </a>
      <q-card-section style="text-align:center;">
        <div class="text-h6">Pânico</div>
      </q-card-section>
      
    </q-card>
      <q-card style="margin:0;;box-shadow:none;text-align: center;" class="my-card col-6">
        <a href="/#/gps">
      <img style="height: 100px;" src="../assets/gps.png">
        </a>
      <q-card-section style="text-align:center;">
        <div class="text-h6">GPS</div>
      </q-card-section>
    </q-card>

    <q-card style="margin:0;;box-shadow:none;text-align: center;" class="my-card col-6">
        <a href="/#/camera">
      <img style="height: 100px;" src="../assets/camera.png">
        </a>
      <q-card-section style="text-align:center;">
        <div class="text-h6">Camera</div>
      </q-card-section>
    </q-card>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageAbout'
}
</script>
