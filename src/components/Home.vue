<template>
<q-page class=" justify-center">
 <div class="q-pa-md q-lb-mg" >
    <div class = "section">
        <User v-slot:user="{user}">
            <div v-if="user">
                <h3>Bem vindo!</h3>
              <UserProfile :user= "user" />    
                <h3>Denúncias gravadas</h3>
              <ChatList :uid="user.uid" />
              <h3>Guardiões</h3>
              <Guardioes :uid="user.uid" />
            </div>
            <Login v-else />
        </User>   

    </div>
  </div>
</q-page>
</template>

<script>

import Login from "./Login"
import User from "./User"
import UserProfile from "./UserProfile"
import ChatList from './ChatList'
import Guardioes from './Guardioes'
export default {
    components:{
        Login,
        User,
        UserProfile,
        ChatList,
        Guardioes
    }

}
</script>
