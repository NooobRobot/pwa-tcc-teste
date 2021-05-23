import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)
Vue.use(VueRouter)
Vue.use(firestorePlugin)


Vue.config.productionTip = false
import Home from './components/Home'
import ChatRoom from './components/ChatRoom'
import Ferramentas from './pages/Ferramentas'
import Questionario from './pages/Questionario'
import AmigoFiel from './pages/AmigoFiel'
import Gps from './pages/Gps'
import Panico from './pages/Panico'
import Camera from './pages/Camera'
import Contato from './pages/Contato'
import Informacoes from './pages/Informacoes'
import Video from './pages/Video'
import Guardioes from './pages/Guardioes'
import Tutorial from './pages/Tutorial'
import SaibaMais from './pages/SaibaMais'

import './quasar'
const router = new VueRouter({
  routes: [{path:'/', component:Home},

  {path:'/ferramentas', component:Ferramentas, name:'Ferramentas'},
  {path:'/questionario', component:Questionario, name:'Questionario'},
  {path:'/amigofiel', component:AmigoFiel, name:'AmigoFiel'},
  {path:'/gps', component:Gps, name:'Gps'},
  {path:'/panico', component:Panico, name:'Panico'},
  {path:'/camera', component:Camera, name:'Camera'},
  {path:'/contato', component:Contato, name:'Contato'},
  {path:'/informacoes', component:Informacoes, name:'Informacoes'},
  {path:'/video', component:Video, name:'Video'},
  {path:'/guardioes', component:Guardioes, name:'Guardioes'},
  {path:'/tutorial', component:Tutorial, name:'Tutorial'},
  {path:'/saibamais', component:SaibaMais, name:'SaibaMais'},
  {path: '/chats/:id',component:ChatRoom, name:'chat'}]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
