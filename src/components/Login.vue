<template>
  <q-page class=" justify-center">
  <aside class="section">
  <div class="text-center">
  <img src="../assets/logo.png" width="130em"/>
  <!-- <div class="text-h5 q-mb-md text-weight-bolder">Bem vinda!</div> -->
     <q-form ref="formularioLogin" class="q-gutter-md">
      <q-input filled color="purple-12" square clearable v-model="email" label="Email" 
       type="email">
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>
      <q-input filled color="purple-12" square clearable v-model="password" label="Senha" 
      type="password">
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>

    <div v-if="newUser" class="form-group">
      <h7>Criar uma nova conta</h7>
    </div>
    <div v-else >
      <a href="#" @click="newUser = true">Não tem conta?  </a>
    </div>

    <button 
      class="button is-info"
      :class="{ 'is-loading': loading }"
      @click="signInOrCreateUser()"
    >{{ newUser ? 'Criar Conta' : 'Entrar'}}</button>

    <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
    </q-form>
  </div>
  </aside>
  </q-page>
</template>

<script>
import { auth } from '../firebase';


export default {
  data() {
    return {
      auth,
      newUser: false,
      email: '',
      password: '',
      errorMessage: '',
      loading: false
    }
  },

  methods: {
      async signInOrCreateUser() {

        this.loading = true;
        this.errorMessage = '';
        try {
          if (this.newUser) {
            await auth.createUserWithEmailAndPassword(this.email, this.password)
          } else {
            await auth.signInWithEmailAndPassword(this.email, this.password)
          }
        } catch (error) {
            this.errorMessage = error.message;
        }

        this.loading = false;
      }

  },
}

</script>
