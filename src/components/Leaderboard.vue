<template>
<layout-basic>
  <v-container grid-list-lg>
    <paginate
      v-model="page"
      :page-count=pageCount
      :page-range="3"
      :margin-pages="2"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination justify-content-center'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :next-class="'page-item'"
      :prev-class="'page-item'"
      :next-link-class="'page-link'"
      :prev-link-class="'page-link'"
      :click-handler="updateData">
    </paginate>
    <v-layout justify-center column>
      <div v-for="(player, index) in data" :key="player._id">
        <v-flex xs12 md9>
          <v-card color="blue darken-3">
            <v-layout row>
              <v-flex xs2 md2>
                <div id="badgediv">
                  <badge v-bind:rank="( page - 1 ) * 20 + index + 1" ></badge>
                </div>
              </v-flex>
              <v-flex xs10 md10>
                <v-card-title>
                  <div class="headline">
                    #{{ ( page - 1 ) * 20 + index + 1 }}
                    <v-btn flat :to="{ name: 'Profile', params: { id : player._id }}" target="_blank"> {{player.name}} </v-btn>
                  </div>
                </v-card-title>
                <v-card-text>
                  Current Rating: {{ player.elo }}
                  <a target="_blank" :href="'https://steamcommunity.com/profiles/'+player._id">
                    <i class="fab fa-steam-square"
                      v-if="player._id > 10000000">
                    </i>
                  </a>
                </v-card-text>
              </v-flex>
            </v-layout>
            <v-card-text>
            </v-card-text>
          </v-card>
        </v-flex>
      </div>
    </v-layout>
    <paginate
      v-model="page"
      :page-count=pageCount
      :page-range="3"
      :margin-pages="2"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination justify-content-center'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :next-class="'page-item'"
      :prev-class="'page-item'"
      :next-link-class="'page-link'"
      :prev-link-class="'page-link'"
      :click-handler="updateData">
    </paginate>
  </v-container>
</layout-basic>
</template>
<script>
import Paginate from 'vuejs-paginate'
import axios from 'axios'
import LayoutBasic from '@/components/layouts/AppLayout'
import Badge from '@/components/Badge'
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
    Paginate: Paginate,
    Badge: Badge
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
.badge {
  width: 100%;
}
</style>
