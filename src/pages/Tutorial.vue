<template>
  <div>
    <q-splitter
      v-model="splitterModel"
      style="height: 650px"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab name="mails" icon="account_circle" label="Login" />
          <q-tab name="alarms" icon="room" label="GPS" />
          <q-tab name="movies" icon="description" label="Questionário" />
          <q-tab name="violencia" icon="female" label="Violência" />
          <q-tab name="saibamais" icon="help" label="Saiba mais" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="mails">
            <div class="text-h4 q-mb-md">Menu login</div>
            <img src="../assets/menu-questionario.jpg">
            <br><br>
            <p>O menu Login, será para você realizar a criação de suas denúncias com áudios, videos.</p>
            <p>Nele também será possível, gravar áudios ou videos e também cadastrar contatos como Guardiões
              para que você possa enviar mensagens de pânicos para eles via WhatsApp.</p>
            
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h4 q-mb-md">Menu GPS</div>
            <img src="../assets/menu-gps.jpg">
            <br><br>
            <p>Neste local, será possível visualizar as delegacias mais próximas da sua localização.</p>
            <q-btn color="primary" icon="room" label="Ir para pagina" to= /Gps />         
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h4 q-mb-md">Menu questionário</div>
            <img src="../assets/menu-questionario.jpg">
            <br><br>
            <p>Neste local, será possível responder a um formulário para ajudar a detectar se você sofre algum tipo de violência no seu lar </p>
            <q-btn color="primary" icon="description" label="Ir para pagina" to= /Questionario />         
          </q-tab-panel>

          <q-tab-panel name="violencia">
            <div class="text-h4 q-mb-md">Movies</div>
            <img src="../assets/menu-violencia.jpg">
            <p>Nesse menu, será possível verificar informações referente á:</p>
            <p>O que é Violência Doméstica;</p>
            <p>Como é o perfil de um agressor;</p>
            <p>Canais de ajuda para vitimas;</p>
            <q-btn color="primary" icon="female" label="Ir para pagina" to= /Informacoes /> 
          </q-tab-panel>

          <q-tab-panel name="saibamais">
            <div class="text-h4 q-mb-md">Menu Saiba mais</div>
            <img src="../assets/menu-sobre.jpg">
            <p>Uma breve história de como tudo começo nessa aplicação.</p>
            <q-btn color="primary" icon="help" label="Ir para pagina" to= /SaibaMais /> 
            </q-tab-panel>

        </q-tab-panels>

        
      </template>

    </q-splitter>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tab: 'mails',
      splitterModel: 30
    }
  }
}
</script>