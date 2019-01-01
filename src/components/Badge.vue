<template>
<div>
  <v-img class="badge" :src="getUrl(normalizedRank)"></v-img>
</div>
</template>
<script>
var nr = require('../scripts/NormalizeRank')
export default {
  props: {rating: Number},
  data: function () {
    return {
      normalizedRank: null
    }
  },
  created () {
    this.normalizedRank = nr.normalizerank(this.rating)
  },
  methods: {
    getUrl (nrank) {
      var images = require.context('../assets/badges', false, /\.svg$/)
      return images('./' + nrank + '.svg')
    }
  },
  watch: {
    'rating' (to, from) {
      this.normalizedRank = 21 - Math.floor((this.rating / process.env.TOTAL_PLAYERS) * 22)
    }
  }
}
</script>
