<template>
  <div>
    <div class="container">
      <div class="messages">
        <messageView message="hello" />
      </div>
      <div class="search-bar">
        <div class="search-inner">
          <input type="text" v-model="inputText" />
          <ph-microphone :size="32" class="icons" />
          <ph-arrow-circle-right
            :size="32"
            class="icons tick"
            @click="messageSent()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import messageView from "./messageView.vue";

// variables

const chats = ref([]);
const inputText = ref("");

// functions

const messageSent = () => {
  if (inputText.value !== "") {
    chats.value.push(inputText.value);
    inputText.value = "";
    console.log(chats.value);
  }
};
</script>

<style scoped>
.messages {
  margin: 1rem;
  border-radius: 15px;
}
.container {
  position: relative;
}

.search-inner {
  display: flex;
  position: absolute;
  bottom: 0px;
  width: calc(100vw - 4rem);
  height: 3rem;
  border-radius: 25px;
  margin: 1rem 0.75rem;
  background-color: var(--background);
}
.search-bar input {
  width: calc(100vw - 2rem);
  height: 3rem;
  border: 0px;
  border-radius: 25px;
  color: var(--text);
  caret-color: var(--text);
  padding: 0px 1rem;
}
.search-bar input[type="text"] {
  font-size: 1.5rem;
}
.search-bar input[type="text"]:focus {
  outline: none !important;
}
.icons {
  margin: 7px 10px 0px 0px;
  border-radius: 25px;
}
</style>
