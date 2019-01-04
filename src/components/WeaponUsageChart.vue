<template>
  <div class="bar-chart">
    <donut-chart responsive :chart-data="datacollection" :options="options"></donut-chart>
  </div>
</template>
<script>
import axios from 'axios'
import DonutChart from '@/scripts/DonutChart.js'
export default {
  data () {
    return {
      datacollection: null,
      options: null
    }
  },
  components: {
    DonutChart
  },
  mounted () {
    this.updateData()
  },
  methods: {
    getCount (currentItem) {
      return currentItem.count
    },
    getLabel (currentItem) {
      return currentItem._id
    },
    applyColor (length) {
      var i
      var colorarray = []
      for (i = 0; i < length; i++) {
        var c = 'rgb(' + Math.floor(Math.random() * 200) +
          ', ' + Math.floor(Math.random() * 200) +
          ', ' + Math.floor(Math.random() * 200) + ')'
        colorarray.push(c)
      }
      return colorarray
    },
    updateData () {
      this.options = { legend: {
        position: 'bottom'
      }}
      axios
        .get(process.env.ROOT_API + 'kills/weapons')
        .then(response => {
          this.datacollection = {
            labels: response.data.map(this.getLabel),
            datasets: [{
              label: 'Weapon Usage',
              backgroundColor: this.applyColor(response.data.length),
              data: response.data.map(this.getCount)
            }]
          }
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
