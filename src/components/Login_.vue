<template>
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Company Woman</h4>
          </q-card-section>
          <q-card-section>
            <q-form ref="formularioLogin" class="q-px-sm q-pt-xl">
              <q-input square clearable v-model="email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="password" type="password" label="Senha">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>  

    <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
    </q-form>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pa-md q-gutter-md">
              <q-btn round color="indigo-7">
                <q-icon name="fab fa-facebook-f" size="1.2rem" />
              </q-btn>
              <q-btn round color="red-8">
                <q-icon name="fab fa-google-plus-g" size="1.2rem" />
              </q-btn>
              <q-btn round color="light-blue-5">
                <q-icon name="fab fa-twitter" size="1.2rem" />
              </q-btn>
            </div>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" 
            label="Entrar" @click="signInOrCreateUser()" 
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
             <a href="#" @click="newUser = true">Criar uma nova conta  </a>
            <div v-if="newUser" class="form-group">
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
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
