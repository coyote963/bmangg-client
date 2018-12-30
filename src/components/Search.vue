<template>
<layout-basic>
  <v-container grid-list-lg>
    <v-layout>
      <v-flex>
        <v-text-field v-on:keyup.enter="updateData" id="new query" outline v-model="query" label="Input your in game name, sensitive to spelling"></v-text-field>
        <v-btn @click="updateData">Submit</v-btn>
      </v-flex>
      <v-flex>
        <div v-for="(player) in results" :key="player._id">
          <v-card>
            <v-card-title>
              <h3 class="headline mb-0">
                <v-btn flat :to="{ name: 'Profile', params: { id : player._id }}" target="_blank"> {{player.name}} </v-btn>
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
    </v-layout>
  </v-container>
</layout-basic>
</template>
<script>
import axios from 'axios'
import LayoutBasic from '@/components/layouts/AppLayout'
export default {
  data () {
    return {
      query: '',
      results: []
    }
  },
  methods: {
    updateData () {
      axios
        .get(process.env.ROOT_API + 'players/search/' + this.query)
        .then(response => { this.results = response.data })
    }
  },
  components: {
    LayoutBasic: LayoutBasic
  }
}
</script>
