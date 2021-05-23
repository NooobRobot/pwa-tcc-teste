import {
    overrideButton
} from '../../src-cordova/platforms/android/platform_www/cordova-js-src/plugin/android/app';
<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="mails" label="O que é?" />
        <q-tab name="alarms" label="Perfil dele" />
        <q-tab name="movies" label="Ajuda" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="mails" class="q-pa-none">

          <q-splitter
            v-model="splitterModel"
          >

            <template v-slot:after>
              <q-tab-panels
                v-model="innerTab"
                animated
                transition-prev="slide-down"
                transition-next="slide-up"
              >
                <q-tab-panel name="innerMails">
                  <div class="text-h6 q-mb-md">Violencia doméstica</div>
                  <p>De acordo com o art. 5º da Lei Maria da Penha, violência doméstica e familiar contra a mulher é “qualquer ação ou omissão baseada no gênero que lhe cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial”.</p>
                </q-tab-panel>
              </q-tab-panels>
            </template>
          </q-splitter>
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">Perfil do agressor</div>
          <p>O perfil psicológico destas pessoas mostra que eles tem dificuldades para resolver 
                      os problemas e desafios da vida, tem baixa autoestima e pouca tolerância à frustração.
                       Não suportam a rejeição, demonstram  ciúmes patológico e necessidade de controlar a parceira. 
                       São muito sensíveis às críticas, tem um humor muito variável  e se irritam com facilidade. 
                       Tem dificuldades para controlar a raiva e são mais impulsivos. Não costumam ter habilidades 
                       sociais muito desenvolvidas, tem dificuldades para comunicar seus sentimentos e resolver problemas
                     conversando. 
                    </p>
                  <p>Alguns fatores que precipitam a violência são o stress, o uso de substâncias químicas, como álcool e drogas, e a percepção da vulnerabilidade da vítima. </p>
                
        </q-tab-panel>

        <q-tab-panel name="movies">
          <div class="text-h6">Como pedir ajuda?</div>
          <p>Você não está sozinha: como pedir ajuda em caso de violência doméstica.</p>
          <p>De acordo com a Lei Maria da Penha, violência contra mulher é qualquer ação ou omissão baseada no gênero [mulher] que lhe cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial. </p>
          <p>Em situações de risco, você deve pedir ajuda, ligando para o 180 ou 190. Procure
              também por uma delegacia da Mulher, e peça segurança.
          </p>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    <q-btn color="primary" icon="arrow_back" label="Voltar" to= /About /> 
</div>
</template>
<script>
export default {
  data () {
    return {
      tab: 'mails',
      innerTab: 'innerMails',
      splitterModel: 20
    }
  }
}
</script>
