<template>
  <div class="bar-chart">
    <bar-chart responsive :chart-data="datacollection"></bar-chart>
  </div>
</template>
<script>
import axios from 'axios'
import BarChart from '@/scripts/BarChart.js'
export default {
  props: {id: String},
  data () {
    return {
      frequency: null,
      names: null,
      datacollection: null
    }
  },
  components: {
    BarChart
  },
  mounted () {
    this.updateData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: this.names,
        datasets: [{
          label: 'Top Weapons',
          backgroundColor: 'rgba(255,99,132,0.5)',
          data: this.frequency
        }]
      }
    },
    getWeapon (currentItem) {
      return currentItem._id
    },
    getFrequency (currentItem) {
      return currentItem.count
    },
    updateData () {
      axios
        .get(process.env.ROOT_API + 'kills/weapons/' + this.id)
        .then(response => {
          this.names = response.data.map(this.getWeapon)
          this.frequency = response.data.map(this.getFrequency)
          this.fillData()
        })
        .catch(error => console.log(error))
      this.names = process.env.ROOT_API + 'kills/weapons/' + this.id
    }
  },
  watch: {
    'id' (to, from) {
      this.updateData()
    }
  }
}
</script>
<style>
.bar-chart {
  max-width: 800px;
}
</style>
