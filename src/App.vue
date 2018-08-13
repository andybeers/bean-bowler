<template>
  <div>
    <h1>IS THERE A BEAN BOWL ON TODAY'S MENU?</h1>
    <h3>{{ date }}</h3>
    <button @click="scrapeMenu" :disabled="loading">
      <ScaleLoader
        :loading="loading"
        :height="height" 
        :color="color">
      </ScaleLoader>
      <span v-if="!loading">Calculate</span>
    </button>

    <Results v-if="!loading" :scrapedText=scrapedText></Results>
  </div>
</template>

<script>
import Results from './components/Results.vue'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

export default {
  name: 'app',
  components: {
    Results,
    ScaleLoader,
  },
  data: function() {
    return {
      date: '--/--/----',
      scrapedText: '',
      loading: false,
      height: '1em',
      color: '#ffaf54',
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
      this.loading = true
      fetch('http://localhost:3000/api/menu', { mode: 'cors' })
        .then(res => {
          if (res.status < 400) return res.json()
          throw new Error(res.statusText)
        })
        .then(data => {
          const { menu } = data
          // const beanStatus = this.beanBowlDetector(menu)
          // this.scrapedText = beanStatus ? 'YES' : 'NOT TODAY'
          this.scrapedText = menu
          this.loading = false
        })
        .catch(err => {
          console.log(err)
          this.loading = false
        })
    },
  },
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: whitesmoke;
  color: #2c3e50;
  width: 80vw;
  margin: 0 auto;
  max-width: 950px;
}

button {
  padding: 0.65em 1.25em;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  font-size: 16px;
  color: #2c3e50;
  background-color: white;
  cursor: pointer;
}

button:disabled {
  pointer-events: none;
}
</style>
