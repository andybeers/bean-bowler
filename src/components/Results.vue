<template>
  <div class="results">
    {{ scrapedText }}
    <div class="bean-list">
      <p v-if=beanSet.length>I have detected {{ beanSet.length }} types of beans on the menu:</p>
      <ul v-if=beanSet.length>
        <li v-for="bean in beanSet" :key="bean">
          {{ bean.toUpperCase() }} BEAN
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Results',
  data: () => ({
    beanSet: [],
  }),
  props: {
    scrapedText: String,
    beanList: Array,
  },
  beforeMount() {
    this.beanSet = [...new Set(this.beanList)]
  },
}
</script>

<style scoped>
div {
  font-size: 80px;
  margin-top: 0.25em;
}
ul {
  list-style-type: none;
  margin: auto;
}
li {
  text-align: left;
  font-weight: bold;
  letter-spacing: 3px;
}
.bean-list {
  font-size: 24px;
  display: flex;
  flex-direction: column;
}
</style>
