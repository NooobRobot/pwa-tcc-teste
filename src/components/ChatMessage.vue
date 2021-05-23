<template>
<div class="message" :class="{ 'from-user': owner }">
    {{ message.text }}
    <br />

    <audio v-if="message.audioURL" :src="message.audioURL" controls></audio>
    <video v-if="message.videoURL" :src="message.videoURL" controls></video>


    <br />

    <span class="sender">Data: {{ message.createdAt }}</span>
</div>
</template>
<script>
export default {
    props: ['message', 'owner']
};
</script>
<style>
.message {
  background: #dddddd;
  color: black;
  margin-left: 10px;
  margin-right: auto;
  border-radius: 5px;
  padding: 12px;
  display: inline-block;
}
.from-user {
  margin-right: 10px;
  margin-left: auto;
  background: #91bbff;
}
.sender {
  font-size: 0.5rem;
}
</style>
