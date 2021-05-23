import {
    overrideButton
} from '../../src-cordova/platforms/android/platform_www/cordova-js-src/plugin/android/app';
<template>
  <div class="q-pa-md row items-start q-gutter-md">
<q-banner class="bg-grey-3"  >
      <template v-slot:avatar>
        <q-icon name="info" color="primary" />
      </template>
      Botão Amigo Fiel, seu contato de confiança para disparar pedidos de socorro.
</q-banner>

<q-btn color="primary" icon="favorite_border" label="Amigo Fiel" to= /AmigoFiel />
<q-btn color="primary" icon="arrow_back" label="Voltar" to= /Ferramentas />
</div>
</template>
