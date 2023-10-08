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
// imports
// import OpenAI from "openai";
import { ref } from "vue";
import messageView from "./messageView.vue";
import axios from "axios";

// variables

const chats = ref([]);
const inputText = ref("");

// functions

// const prompt = ref("Hello");
// const response = ref("");

// async function generateResponse() {
//   const response = await OpenAI.complete(prompt.value, {
//     model: "chatgpt",
//     temperature: 0.7,
//     max_tokens: 1024,
//   });

//   response.value = response.choices[0].text;
//   console.log(response.value);
// }
const messageSent = () => {
  if (inputText.value !== "") {
    chats.value.push(inputText.value);
    inputText.value = "";
    console.log(chats.value);
    // generateResponse();
    // sendPromptToChatGPT();
    fetchResponse();
  }
};

// const response = ref("");

// const sendPromptToChatGPT = async () => {
//   const apiKey = "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";
//   const apiUrl = "https://api.openai.com/v1/chat/completions";

//   try {
//     const result = await axios.post(
//       apiUrl,
//       {
//         prompt: "hey", // Replace with your prompt
//         max_tokens: 500, // You can adjust the response length
//         model: "gpt-3.5-turbo",
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${apiKey}`,
//         },
//       }
//     );

//     response.value = result.data.choices[0].text;
//     console.log(response.value);
//   } catch (error) {
//     console.error("Error sending prompt to ChatGPT:", error);
//     response.value = "An error occurred while processing your request.";
//   }
// };

const responses = ref("");

const fetchResponse = async () => {
  try {
    const apiKey = "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";
    const prompt = "What is the weather like today?";
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions ",
      {
        prompt,
        max_tokens: 50, // Adjust this as needed
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey} `,
        },
      }
    );

    if (response.data.choices.length > 0) {
      responses.value = response.data.choices[0].text;
      console.log(responses.value);
    }
  } catch (error) {
    console.error("Error fetching ChatGPT response:", error);
  }
};

// Automatically send the prompt when the component is mounted
// onMounted(sendPromptToChatGPT);
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
