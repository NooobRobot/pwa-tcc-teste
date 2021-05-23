<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title class="text-weight-bold">
          <q-icon
            class="header-icon q-pa-md lt-md"
            name="fas fa-venus-double"
            size="sm"
            color="red"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2">

        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list>
          <q-item to="/" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="login" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Login</q-item-label>
              <q-item-label caption>Faça seu login</q-item-label>
            </q-item-section>
          </q-item>

            <q-item to="/ferramentas" v-ripple clickable exact>
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Ferramentas</q-item-label>
            <q-item-label caption>Ferramentas de ajuda</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/Informacoes" v-ripple clickable exact>
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Informações</q-item-label>
            <q-item-label caption>Informações de ajuda</q-item-label>
          </q-item-section>
        </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://png.pngtree.com/thumb_back/fw800/back_pic/00/13/76/225651946b33c2b.jpg"
         style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://png.pngtree.com/png-clipart/20200401/original/pngtree-pop-art-woman-shouting-hand-drawn-vintage-illustration-element-png-image_5329423.jpg">
            </q-avatar>
            <div class="text-weight-bold">NOME DO APP</div>
            <div>@semnome</div>
          </div>
        </q-img>
      </q-drawer>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
</template>
<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
<style>

header {
  text-align: center;
}
button, input {
  margin-bottom: 10px;
}

</style>