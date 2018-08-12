<template>
  <div class="results">
    {{ scrapedText }}
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: {
    scrapedText: String,
  },
}
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
