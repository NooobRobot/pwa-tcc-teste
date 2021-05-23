<template>

  <q-page class="container" padding>
    <p class="text-center q-pa-md text-h4">Amigo Fiel</p>
    <q-banner class="bg-grey-3"  >
      <template v-slot:avatar>
        <q-icon name="info" color="primary" />
      </template>
      Botão Amigo Fiel, seu contato de confiança para disparar pedidos de socorro.
      </q-banner>
      
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="row q-col-gutter-md"
        ref="myForm"
      >
        <q-input
          outlined
          v-model="form.nome"
          color="deep-purple"
          label="Nome"
          class="col-md-12 col-sm-12 col-xs-12"
          :rules="[
            val => val && val.length > 0 ||  'Nome obrigatório'
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>

        <q-input
          v-model="form.telefone"
          label="Telefone"
          outlined
          class="col-md-12 col-sm-12 col-xs-12"
          mask="(##) #####-####"
          unmasked-value
          :rules="[
            val => val && val.length > 0 || 'Telefone obrigatório',
            val => val.length === 11 || 'Coloque um telefone real'
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="call" />
          </template>
        </q-input>

        <q-input
          v-model="form.email"
          label="Email"
          suffix="@gmail.com"
          outlined
          class="col-md-12 col-sm-12 col-xs-12"
          :rules="[
            val => val && val.length > 0 ||  'Email obrigatório'
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="mails" />
          </template>
        </q-input>

        <q-toggle
          v-model="form.notificacoes"
          color="primary"
          icon="mail"
          label="Receber notificações?"
          size="lg"
        />

        <div class="col-12">
          <q-btn
            label="Cadastrar"
            type="submit"
            color="primary"
            class="float-right"
          />
          <q-btn
            label="Limpar"
            type="reset"
            color="default"
            class="float-right text-grey-10 q-mr-md"
          />
          <q-btn
            label="Voltar"
            type="back"
            color="primary"
            class="float-right"
            to=/Panico
          />
        </div>
      </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      form: {
        nome: '',
        telefone: '',
        notificacoes: false
      },
    }
  },
  methods: {
    onSubmit () {
      this.$q.notify({
        message: 'Cadastro realizado com sucesso',
        color: 'positive',
        icon: 'check_circle_outline'
      })
      this.onReset()
    },
    async onReset () {
      await this.resetForm()
      this.$refs.myForm.resetValidation()
    },
    async resetForm () {
      this.form = {
        nome: '',
        telefone: '',
        notificacoes: false
      }
    }
  }
}
</script>
