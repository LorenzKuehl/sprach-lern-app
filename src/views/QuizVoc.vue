<template>
  <div class="space-x-8">
    <button @click="toggleLanguage">{{ currentLanguage }}</button>
    <button @click="fetchData">Verben anzeigen</button>
    <div v-if="data">
      <div v-for="(item, index) in data" :key="index">
        <p v-if="currentLanguage === 'Portugiesisch'">Portugiesisch: {{ item.portuguese }}</p>
        <p v-if="currentLanguage === 'Deutsch'">Deutsch: {{ item.german }}</p>
        <div v-if="currentLanguage === 'Portugiesisch'">
          <input type="text" v-model="inputValue[index]" @input="checkInput(item.german)" />
        </div>
        <div v-if="currentLanguage === 'Deutsch'">
          <input type="text" v-model="inputValue[index]" @input="checkInput(item.portuguese)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiGet } from '../services/api.js' // Import the Axios service

export default {
  data() {
    return {
      data: null,
      currentLanguage: 'Portugiesisch',
      inputValue: []
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await apiGet('/verbs') // Make a GET request to '/data'
        this.data = response.data // Update the component data with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'Portugiesisch' ? 'Deutsch' : 'Portugiesisch'
      this.inputValues = new Array(this.data.length).fill('')
    },
    checkInput(inputValue, hiddenString) {
      if (inputValue === hiddenString) {
        alert('Correct!') // Display an alert if the input matches the hidden string
      }
    }
  }
}
</script>

<style scoped></style>
