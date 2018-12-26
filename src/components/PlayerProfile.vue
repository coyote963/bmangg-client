<template>
<v-container grid-list-lg text-xs-center>
  <v-layout>
    <v-flex xs12 sm3>
      <v-card color="blue darken-3">
        <v-card-title overflow-hidden>
          <h1 class="player-rank">
            #{{ player.rank }}
          </h1>
        </v-card-title>
        <v-card-text>
          <h5>{{ player.user.name }}</h5>
          <h4 class="font-weight-light">
            {{player.user.elo | round}} Elo
          </h4>
        </v-card-text>
        <v-card-media class="rank-badge">
          <badge v-bind:rank="player.rank"></badge>
        </v-card-media>
        <v-card-actions>
          <v-btn v-if="player.user._id > 10000000" flat color="deep-orange lighten-2"
            :href="'https://steamcommunity.com/profiles/'+player.user._id"
            target="_blank">Steam</v-btn>
          <v-btn flat color="deep-orange lighten-2" :to="{ name: 'Ranks' }">Ranks</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm9>
      <v-card color="blue darken-3">
        <matchups v-bind:id="player.user._id"></matchups>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import Badge from '@/components/Badge'
import Matchups from '@/components/Matchups'
import axios from 'axios'
export default {
  data () {
    return {
      player: null
    }
  },
  components: {
    Badge: Badge,
    Matchups: Matchups
  },
  created () {
    axios
      .get(process.env.ROOT_API + 'players/rank/' + this.$route.params.id)
      .then(response => {
        this.player = response.data
      })
      .catch(error => console.log(error))
  },
  watch: {
    '$route' (to, from) {
      axios
        .get(process.env.ROOT_API + 'players/rank/' + this.$route.params.id)
        .then(response => {
          this.player = response.data
        })
        .catch(error => console.log(error))
    }
  },
  filters: {
    round: function (value) {
      return Math.ceil(value * 100) / 100
    }
  }
}
</script>
<style scoped>
.player-rank {
  font-size: 60px;
}
.player-name {
  font-size: 15px;
}
.rank-badge {
  padding: 16px;
}
</style>
