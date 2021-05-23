<template>
  <main class="section">
    <!-- <h3>Bem vindo à sua nova denúncia<br/><br/>{{ chatId }}</h3> -->
    <h3>Bem vindo à sua nova denúncia<br/><br/></h3>
    <p>
    Envie o link abaixo para quem você deseja que acompanhe esta denúncia:<br/><br/>
      <code id="cod_chat">https://url.com/#/chats/{{ chatId }}</code><br>
      <q-btn @click="copyText">copiar</q-btn>
    </p>

    <User #user="{ user }">
      <div v-if="user">
        <ul>
          <li v-for="message of messages" :key="message.id">
            <ChatMessage :message="message" :owner="user.uid === message.sender" />
          </li>
        </ul>

        <hr />
        <h5>Gravar Áudio</h5>

        <button v-if="!recorder" @click="record()" class="button is-info">Gravar Voz</button>
        <button v-else @click="stop()" class="button is-danger">Parar</button>
        <br />
        <audio v-if="newAudio" :src="newAudioURL" controls></audio>
        <hr />
        <textarea v-model="newMessageText" placeholder="Descrição"></textarea>
        
        <br/><br/>
        <button
          :disabled="(!newMessageText && !newAudio) || loading"
          class="button is-success"
          type="text"
          @click="addMessage(user.uid)"
        >Salvar</button>

        <!-- video -->
          <div>
          <br /><br />
          <h5>Gravar Vídeo</h5>

          <button v-if="!recorderV" @click="recordV()" class="button is-info" style="margin-bottom:15px;">Gravar Vídeo</button>
          <button v-else @click="stopr()" class="button is-danger">teste</button>
          <br />
          <video v-if="newVideo" :src="newVideoURL" controls></video>          
          <hr />          

          <button
            :disabled="(!newVideo) || loading"
            class="button is-success"
            type="text"
            @click="addMessageV(user.uid)"
          >Salvar</button>
          <q-btn to="/">Voltar</q-btn>
        </div>
        <hr />
      </div>

      <Login v-else />
    </User>
  </main>
</template>

<script>
import User from './User.vue';
import ChatMessage from './ChatMessage.vue';
import Login from './Login.vue';
import { db, storage } from '../firebase';
export default {
  components: {
    User,
    Login,
    ChatMessage,
  },
  data() {
      return {
          newMessageText: '',
          loading: false,
          messages: [],
          newAudio: null,
          newVideo: null,
          recorder: null,
          recorderV: null,
      }
  },
  computed: {
    chatId() {
      return this.$route.params.id;
    },
    messagesCollection() {
      return db.doc(`chats/${this.chatId}`).collection('messages');
    },
    newAudioURL() {
      return URL.createObjectURL(this.newAudio);
    },
    newVideoURL() {
      return URL.createObjectURL(this.newVideo);
    }
  },
  firestore() {
    return {
      messages: this.messagesCollection.orderBy('createdAt').limitToLast(10)
    };
  },
  methods: {
    async addMessage(uid) {
        this.loading = true;
        let audioURL = null;
        const { id: messageId } = this.messagesCollection.doc();
        if (this.newAudio) {
          const storageRef = storage
            .ref('chats')
            .child(this.chatId)
            .child(`${messageId}.wav`);
            await storageRef.put(this.newAudio);
          audioURL = await storageRef.getDownloadURL();
        }
         await this.messagesCollection.doc(messageId).set({
            text: this.newMessageText,
            sender: uid,
            createdAt: Date.now(),
            audioURL
        });
        this.loading = false;
        this.newMessageText = '';
        this.newAudio = null;
    },
    async record() {
      this.newAudio = null;
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      });
      const options = { mimeType: "audio/webm" };
      const recordedChunks = [];
      this.recorder = new MediaRecorder(stream, options);
      this.recorder.addEventListener("dataavailable", e => {
        if (e.data.size > 0) {
          recordedChunks.push(e.data);
        }
      });
      this.recorder.addEventListener("stop", () => {
        this.newAudio = new Blob(recordedChunks);
        console.log(this.newAudio);
      });
      this.recorder.start();
    },
    async stop() {
      this.recorder.stop();
      this.recorder = null;
    },
    // video
    async addMessageV(uid) {
        this.loading = true;
        let videoURL = null;
        const { id: messageId } = this.messagesCollection.doc();
        if (this.newVideo) {
          const storageRef = storage
            .ref('chats')
            .child(this.chatId)
            .child(`${messageId}.mp4`);
            await storageRef.put(this.newVideo);
          videoURL = await storageRef.getDownloadURL();
        }
         await this.messagesCollection.doc(messageId).set({
            sender: uid,
            createdAt: Date.now(),
            videoURL
        });
        this.loading = false;
        this.newVideo = null;
    },
    async recordV() {
      this.newVideo = null;
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      });
      const options = { mimeType: "video/webm" };
      const recordedChunks = [];
      this.recorder = new MediaRecorder(stream, options);
      this.recorder.addEventListener("dataavailable", e => {
        if (e.data.size > 0) {
          recordedChunks.push(e.data);
        }
      });
      this.recorder.addEventListener("stop", () => {
        this.newVideo = new Blob(recordedChunks);
        console.log(this.newVideo);
      });
      this.recorder.start();
    },
    async stopr() {
      this.recorder.stop();
      this.recorder = null;
    },
    copyText(){
    let cops=document.getElementById("cod_chat");
    cops.select();
         document.execCommand("copy");
    }
  },
};
</script>


<style scoped>
a{
  color:#88129c;
  font-weight: bold;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-width: 500px;
  background: #efefef;
  padding: 10px;
  border-radius: 0;
}
li {
  display: flex;
}
</style>
