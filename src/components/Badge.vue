<template>
<div>
  <v-img class="badge" :src="getUrl(normalizedRank)"></v-img>
  {{boi}}
</div>
</template>
<script>
export default {
  props: {rank: Number},
  data: function () {
    return {
      normalizedRank: null,
      boi: null
    }
  },
  created () {
    this.normalizedRank = 21 - Math.floor((this.rank / process.env.TOTAL_PLAYERS) * 22)
  },
  methods: {
    getUrl (nrank) {
      var images = require.context('../assets/badges', false, /\.svg$/)
      return images('./' + nrank + '.svg')
    }
  },
  watch: {
    'rank' (to, from) {
      this.normalizedRank = 21 - Math.floor((this.rank / process.env.TOTAL_PLAYERS) * 22)
    }
  }
}
</script>
