<template>
<div>
  <paginate
    v-model="page"
    :page-count=pageCount
    :page-range="3"
    :margin-pages="2"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
    :page-link-class="'page-link'"
    :next-class="'page-item'"
    :prev-class="'page-item'"
    :next-link-class="'page-link'"
    :prev-link-class="'page-link'"
    :click-handler="updateData">
  </paginate>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Date</th>
        <th scope="col">Victim</th>
        <th scope="col">Killer</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(matchup, index) in data" :key="matchup._id">
        <th scope="row">{{ ( page - 1 ) * 20 + index + 1 }}</th>
        <td>{{matchup.timeStamp | formatDate}}</td>
        <td>
          <v-btn flat
            :to="{ name: 'Profile', params: { id: matchup.victim._id}}">
            {{matchup.victim.name}}
          </v-btn>
        </td>
        <td>
          <v-btn flat
            :to="{ name: 'Profile', params: { id: matchup.killer._id}}">
            {{matchup.killer.name}}
          </v-btn>
        </td>
      </tr>
    </tbody>
  </table>
  <paginate
    v-model="page"
    :page-count=pageCount
    :page-range="3"
    :margin-pages="2"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
    :page-link-class="'page-link'"
    :next-class="'page-item'"
    :prev-class="'page-item'"
    :next-link-class="'page-link'"
    :prev-link-class="'page-link'"
    :click-handler="updateData">
  </paginate>
</div>
</template>
<script>
import Paginate from 'vuejs-paginate'
import axios from 'axios'
import moment from 'moment'
export default {
  props: {id: String},
  data () {
    return {
      page: 1,
      data: [],
      pageCount: null,
      response: null,
      ranApi: null
    }
  },
  components: {
    Paginate: Paginate
  },
  methods: {
    updateData (pageNum) {
      axios
        .get(process.env.ROOT_API + 'kills/' + this.id + '/' + pageNum)
        .then(response => {
          this.page = response.data.current_page
          this.data = response.data.data
          this.pageCount = response.data.last_page
        })
        .catch(error => console.log(error))
    }
  },
  created () {
    axios
      .get(process.env.ROOT_API + 'kills/' + this.id + '/' + this.page)
      .then(response => {
        this.data = response.data.data
        this.pageCount = response.data.last_page
        this.response = response
      })
      .catch(error => console.log(error))
  },
  filters: {
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
      } else {
        return ''
      }
    }
  },
  watch: {
    '$route' (to, from) {
      axios
        .get(process.env.ROOT_API + 'kills/' + this.$route.params.id + '/' + 1)
        .then(response => {
          this.page = 1
          this.data = response.data.data
          this.pageCount = response.data.last_page
          this.ranApi = this.$route.params.id
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
