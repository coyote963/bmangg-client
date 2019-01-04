<template>
  <div class="bar-chart">
    <vert-bar-chart responsive :chart-data="datacollection"></vert-bar-chart>
  </div>
</template>
<script>
import axios from 'axios'
import VertBarChart from '@/scripts/VertBarChart.js'
var bin = require('../scripts/CreateBin')
export default {
  data () {
    return {
      datacollection: null
    }
  },
  components: {
    VertBarChart
  },
  mounted () {
    this.updateData()
  },
  methods: {
    getRating (currentItem) {
      return currentItem.elo
    },
    updateData () {
      axios
        .get(process.env.ROOT_API + 'players/ratings')
        .then(response => {
          this.datacollection = {
            labels: bin.createbins(response.data.map(this.getRating)).labels,
            datasets: [{
              label: 'Rating Distribution',
              backgroundColor: 'rgba(1,87,155,0.6)',
              data: bin.createbins(response.data.map(this.getRating)).data
            }]
          }
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
