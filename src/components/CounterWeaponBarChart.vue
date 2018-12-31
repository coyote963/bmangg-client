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
          label: 'Top Counter Weapons',
          backgroundColor: 'rgba(1,87,155,0.6)',
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
        .get(process.env.ROOT_API + 'kills/weaponcounters/' + this.id)
        .then(response => {
          this.names = response.data.slice(0, 5).map(this.getWeapon)
          this.frequency = response.data.slice(0, 5).map(this.getFrequency)
          this.fillData()
        })
        .catch(error => console.log(error))
    }
  },
  watch: {
    'id' (to, from) {
      this.updateData()
    }
  }
}
</script>
