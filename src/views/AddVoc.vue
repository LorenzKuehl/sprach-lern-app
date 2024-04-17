<template>
  <div>
    <h1 class="flex">Füge eine neue Vokabel in die Sprach-Lern-App ein!</h1>
  </div>
  <div class="space-x-8 flex m-5">
    <div>
      <label for="verbs">Verb</label>
      <input type="radio" name="verbs" id="verbs" value="verbs" v-model="wordType" />
    </div>
    <div>
      <label for="nouns">Nomen</label>
      <input type="radio" name="nouns" id="nouns" value="nouns" v-model="wordType" />
    </div>
    <div>
      <label for="attributes">Adverb / Adjektiv</label>
      <input type="radio" name="attributes" id="attributes" value="attributes" v-model="wordType" />
    </div>
  </div>
  <form v-if="wordType === 'verbs'" @submit.prevent="pushNewVerbs()">
    <div class="space-x-8 flex m-5">
      <div>
        <label for="port">portugiesisch</label>
        <input type="text" name="port" id="port" v-model="wordPort" />
      </div>
      <div>{{ wordPort }}</div>
    </div>
    <div class="space-x-8 flex m-5">
      <div>
        <label for="ger">deutsch</label>
        <input type="text" name="ger" id="ger" v-model="wordGer" />
      </div>
      <div>{{ wordGer }}</div>
    </div>
    <button
      class="rounded bg-red-100 m-10 p-5 hover:bg-red-300 hover:animate-pulse active:animate-spin"
      type="submit"
    >
      Hinzufügen
    </button>
  </form>
</template>

<script>
import { apiPost } from '../services/api.js' // Import the Axios service

export default {
  name: 'AddVoc',
  data() {
    return {
      wordType: '',
      wordPort: '',
      wordGer: ''
    }
  },
  methods: {
    async pushNewVerbs() {
      try {
        const response = await apiPost('/verbs', {
          // Data to be sent in the request body
          portuguese: this.wordPort,
          german: this.wordGer,
          falseCount: 0,
          correctCount: 0
        })
        console.log('Response:', response.data)
        // Handle response data or update component state
      } catch (error) {
        console.error('Error:', error)
        // Handle error
      }
      ;(this.wordGer = ''), (this.wordPort = '')
    }
  }
}
</script>

<style scoped></style>
