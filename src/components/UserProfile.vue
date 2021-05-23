<template>
    <div>
        Você está logado como <p>{{user.email}} </p>
       <button @click="auth.signOut()" class = "button">Sair</button> 
    </div>
</template>

<script>
import {auth} from '../firebase';
export default {
    data(){
        return {
            auth
        }
    },
    props: ['user']

}
</script>

<style scoped>
p{
  color:#88129c;
  font-weight: bold;
}
</style>
