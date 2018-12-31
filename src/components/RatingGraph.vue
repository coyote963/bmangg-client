<template>
  <div>
    <v-radio-group center light v-model="zoomSelect" row>
      <v-radio
        :value="25"
        label="Last 25"
        :key="1"
      ></v-radio>
      <v-radio
        :value="50"
        label="Last 50"
        :key="2"
      ></v-radio>
      <v-radio
        :value="100"
        label="Last 100"
        :key="3"
      ></v-radio>
      <v-radio
        :value="150"
        label="Last 150"
        :key="4"
      ></v-radio>
    </v-radio-group>
    <line-chart responsive :chart-data="datacollection"></line-chart>
  </div>
</template>
<script>
import axios from 'axios'
import LineChart from '@/scripts/LineChart.js'
import moment from 'moment'
export default {
  props: {id: String},
  data () {
    return {
      ratingHistory: null,
      dates: null,
      datacollection: null,
      zoomSelect: 25
    }
  },
  components: {
    LineChart
  },
  mounted () {
    this.updateData()
  },
  methods: {
    getRanks: function (currentItem) {
      if (currentItem.killer === this.id) {
        return currentItem.killerRating
      } else {
        return currentItem.victimRating
      }
    },
    getDates: function (currentItem) {
      return moment(String(currentItem.timeStamp)).format('MM/DD/YYYY hh:mm')
    },
    fillData () {
      this.datacollection = {
        labels: this.dates,
        datasets: [{
          label: 'Rating History',
          backgroundColor: 'rgba(1,87,155,0.6)',
          data: this.ratingHistory
        }]
      }
    },
    updateData () {
      axios
        .get(process.env.ROOT_API + 'kills/' + this.id + '/limit/' + this.zoomSelect)
        .then(response => {
          this.ratingHistory = response.data.reverse().map(this.getRanks)
          this.dates = response.data.map(this.getDates)
          this.fillData()
        })
        .catch(error => console.log(error))
    }
  },
  watch: {
    'id' (to, from) {
      this.updateData()
    },
    zoomSelect (to, from) {
      this.updateData()
    }
  }
}
</script>
