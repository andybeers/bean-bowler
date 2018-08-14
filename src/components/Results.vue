<template>
  <div class="results">
    {{ scrapedText }}
    <div class="bean-list">
      <p v-if=beanList.length>I have detected {{ beanList.length }} types of beans on the menu:</p>
      <ul v-if=beanList.length>
        <li v-for="bean in beanList" :key="bean">
          {{ bean.toUpperCase() }} BEAN
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: {
    scrapedText: String,
    beanList: Array,
  },
}
</script>

<style scoped>
div {
  font-size: 80px;
  margin-top: 1em;
}
ul {
  list-style-type: none;
}
.bean-list {
  font-size: 24px;
}
</style>
