<template>
<layout-basic>
  <v-flex xs12 sm12 md12>
    <paginate
      v-model="page"
      :page-count=pageCount
      :page-range="3"
      :margin-pages="2"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :click-handler="updateData">
    </paginate>
  </v-flex>
  <v-flex xs12 sm8 md8>
    <div v-for="(player, index) in data" :key="player._id">
      <v-card>
        <v-card-title>
          <h3 class="headline mb-0">
            #{{ ( page - 1 ) * 20 + index + 1 }} - {{player.name}}
            <a target="_blank" :href="'https://steamcommunity.com/profiles/'+player._id">
              <i class="fab fa-steam-square"
                v-if="player._id > 10000000">
              </i>
            </a>
          </h3>
        </v-card-title>
        <v-card-text>
          Current Rating: {{ player.elo }}
        </v-card-text>
      </v-card>
      <v-divider></v-divider>
    </div>
  </v-flex>
  <v-flex xs12 sm12 md12>
  <paginate
    v-model="page"
    :page-count=pageCount
    :page-range="3"
    :margin-pages="2"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
    :click-handler="updateData">
  </paginate>
</v-flex>
</layout-basic>
</template>
<script>
import Paginate from 'vuejs-paginate'
import axios from 'axios'
import LayoutBasic from '@/components/layouts/AppLayout'
export default {
  data () {
    return {
      data: [],
      page: 1,
      pageCount: null,
      resource_url: process.env.ROOT_API + 'players/page/'
    }
  },
  components: {
    LayoutBasic: LayoutBasic,
    Paginate: Paginate
  },
  methods: {
    updateData (pageNum) {
      axios
        .get(this.resource_url + pageNum)
        .then(response => {
          this.page = pageNum
          this.data = response.data.data
          this.pageCount = response.data.last_page
        })
        .catch(error => console.log(error))
    }
  },
  mounted () {
    axios
      .get(this.resource_url + this.page)
      .then(response => {
        this.data = response.data.data
        this.pageCount = response.data.last_page
      })
      .catch(error => console.log(error))
  }
}
</script>
<style>
</style>
