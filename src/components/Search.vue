<template>
<layout-basic>
  <v-form>
    <v-text-field outline v-model="query" label="Input your in game name, sensitive to spelling"></v-text-field>
    <v-btn v-on:click="updateData">Search</v-btn>
  </v-form>
  <v-flex xs12 sm8 md8>
    <div v-for="(player, index) in results" :key="player._id">
      <v-card>
        <v-card-title>
          <h3 class="headline mb-0">
            {{ index + 1 }} - In Game Name: {{player.name}}
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
