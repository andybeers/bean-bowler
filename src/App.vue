<template>
  <div>
    <video playsinline autoplay muted loop poster="./assets/beansoak.png" id="bg-video">
      <source src="./assets/beansoak.mp4" type="video/mp4">
    </video>
    <div class="scrim"></div>
    <header>BEAN 🥣 BOWLER</header>
    <div class="content">
      <h2>IS THERE A BEAN BOWL ON TODAY'S MENU?</h2>
      <p>{{ date }}</p>
      <button @click="scrapeMenu" :disabled="loading">
        <ScaleLoader
          :loading="loading"
          :height="height" 
          :color="color">
        </ScaleLoader>
        <b v-if="!loading">Calculate</b>
      </button>
    </div>

    <Results v-if="!loading" :scrapedText=scrapedText :beanList=beanList></Results>

    <div v-if="error">
      Ho boy you broke the crap out of this app. GO HOME.
    </div>
  </div>
</template>

<script>
import Results from './components/Results.vue'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

const apiUrl = process.env.VUE_APP_ROOT_API

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
      beanList: [],
      loading: false,
      height: '1em',
      color: '#ffaf54',
      error: null,
    }
  },
  created: function() {
    this.date = this.printDate()
  },
  methods: {
    printDate: function() {
      return new Date().toISOString().slice(0, 10)
    },
    scrapeMenu: function() {
      this.scrapedText = ''
      this.error = null
      this.loading = true

      fetch(`${apiUrl}/api/menu`)
        .then(res => {
          if (res.status < 400) return res.json()
          throw new Error(res.statusText)
        })
        .then(data => {
          const { beanBowls, fullMenuText } = data
          this.beanList = fullMenuText ? fullMenuText.match(/\S+(?= bean)/gim) : []
          this.scrapedText = beanBowls ? beanBowls.toUpperCase() : 'NOPE'
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          this.error = err
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
  color: whitesmoke;
  margin: 0;
  padding: 0;
}

header {
  font-size: 35px;
  background: rgba(0, 0, 0, 0.8);
  padding: 0.1em;
  font-family: 'Amatic SC', cursive;
  margin-bottom: 1em;
}

button {
  padding: 0.65em 1.25em;
  margin-top: 1em;
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

video#bg-video {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  background: url(./assets/beansoak.png) no-repeat;
  background-size: cover;
}

.scrim {
  z-index: -10;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7));
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
}

.content {
  width: 80vw;
  max-width: 950px;
  margin: 0 auto;
  padding: 1em 0;
}

h2 {
  margin-top: 0;
}
</style>
