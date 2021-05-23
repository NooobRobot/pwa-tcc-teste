<template>
<div class="" style="max-width: 400px">   
  <template>
    <div class="collection with-header">
    <div class="collection-header">
        <div class="row">
            <div class="input-field col-12">
                <q-input placeholder="Nome" id="new_todo" type="text" class="validate" v-model="todo.title" />
                <q-input placeholder="Número" type="text" class="validate" v-model="todo.numero" />
            </div>
            <div style="margin-top:15px;" class="input-field col-12">
                <q-btn class="btn" @click="addTodo" label="Adicionar" color="primary"></q-btn>
            </div>
        </div>
    </div>
</div><br>
<q-item-section style=" margin-bottom:30px; box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);0 11px 15px -7px rgb(0 0 0 / 20%), 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%)" side class="collection-item" v-for="todo in todos" :key="todo.id">
   <!-- <span class="deleteIcon" @click="deleteToDo(todo.id)">✕</span> -->
   
    <q-icon name="delete" color="red" @click="deleteToDo(todo.id)" /><br>
    <h4>{{todo.title}}</h4>
     <h4 id="numero_guard">{{todo.numero}}</h4>
    <WhatsappForm/>
</q-item-section>
  </template>
</div >
</template>

<script>

import WhatsappForm from './WhatsappForm'
import firebase from "firebase";
export default {
  components: { WhatsappForm},
  name: 'Guardioes',
  props: ['id'],
  data () {
    return {
      todos: [],
      todo: {
            title: "",
            numero: "",
        }
    }
  },
  methods:{
      addTodo() {
    firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("todos")
        .add({
            title: this.todo.title,
            numero: this.todo.numero,
            createdAt: new Date(),
            isCompleted: false,
        })
        this.title = "";
        this.numero = "";
    },
    async getTodos() {
    var todosRef = await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("todos");

    todosRef.onSnapshot(snap => {
        this.todos = [];
        snap.forEach(doc => {
            var todo = doc.data();
            todo.id = doc.id;
            this.todos.push(todo);
        });
    });
    },
    deleteToDo(docId) {
    firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("todos")
        .doc(docId)
        .delete();
}
  },
  created() {
    this.getTodos();
},
}
</script>

<style scoped>
.collection.with-header {
    max-width: 500px;
    margin: 0 auto;
}
.deleteIcon {
    margin-right: 10px;
    cursor: pointer;
}
.deleteIcon:hover {
    opacity: 0.5;
}
</style>