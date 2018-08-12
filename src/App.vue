<template>
  <div>
    <h1>IS THERE A BEAN BOWL ON TODAY'S MENU?</h1>
    <h3>{{ date }}</h3>
    <button @click="scrapeMenu">Calculate</button>
    <Results :scrapedText=scrapedText></Results>
  </div>
</template>

<script>
import Results from './components/Results.vue'

export default {
  name: 'app',
  components: {
    Results,
  },
  data: function() {
    return {
      date: '--/--/----',
      scrapedText: '...',
    }
  },
  created: function() {
    this.date = this.printDate()
  },
  methods: {
    printDate: function() {
      return new Date().toISOString().slice(0, 10)
    },
    beanBowlDetector: function(text) {
      if (!text) return false
      return text.toLowerCase().includes('bean bowl')
    },
    scrapeMenu: function() {
      fetch('http://localhost:3000/api/menu', { mode: 'cors' })
        .then(res => {
          if (res.status < 400) return res.json()
          throw new Error(res.statusText)
        })
        .then(data => {
          const { menu } = data
          const beanStatus = this.beanBowlDetector(menu)
          this.scrapedText = beanStatus ? 'YES' : 'NOT TODAY'
        })
        .catch(err => console.log(err))
    },
  },
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
