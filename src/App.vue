<template>
  <div>
    <h1>IS THERE A BEAN BOWL ON TODAY'S MENU?</h1>
    <h3 id="date"></h3>
    <button onClick="scrapeMenu()">Calculate</button>
    <div id="results">...</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
}

function beanBowlDetector(text) {
  if (!text) return false
  return text.toLowerCase().includes('bean bowl')
}

function scrapeMenu() {
  fetch('/api/menu')
    .then(res => {
      if (res.status < 400) return res.json()
      throw new Error(res.statusText)
    })
    .then(data => {
      const { menu } = data
      const beanStatus = beanBowlDetector(menu)
      document.querySelector('#results').innerText = beanStatus
        ? 'YES'
        : 'NOT TODAY'
    })
    .catch(err => console.log(err))
}

function printDate() {
  const dateString = new Date().toISOString().slice(0, 10)
  document.querySelector('#date').innerText = dateString
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
