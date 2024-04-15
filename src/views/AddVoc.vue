<template>
  <div>
    <h1>Füge eine neue Vokabel in die Sprach-Lern-App ein!</h1>
  </div>
  <form @submit.prevent="pushNewWords()">
    <div>
      <label for="port">portugiesisch</label>
      <input type="text" name="port" id="port" v-model="wordPort" />
      <div>{{ wordPort }}</div>
    </div>
    <div>
      <label for="ger">deutsch</label>
      <input type="text" name="ger" id="ger" />
    </div>
  </form>
  <button type="submit">Hinzufügen</button>
</template>

<script>
export default {
  name: 'AddVoc',
  data() {
    return {
      wordPort: 'Test'
    }
  },
  methods: {
    pushNewWords() {}
  }
}
</script>

<style scoped></style>
