<template>
<v-container grid-list-lg text-xs-center>
  <v-layout row wrap>
    <v-flex xs12 md3>
      <v-card color="blue darken-3">
        <v-card-title>
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
          <badge v-bind:rating="player.user.elo"></badge>
          {{ player.user.elo | RankName }}
        </v-card-media>
        <v-card-actions>
          <v-btn v-if="player.user._id > 10000000" flat color="deep-orange lighten-2"
            :href="'https://steamcommunity.com/profiles/'+player.user._id"
            target="_blank">Steam</v-btn>
          <v-btn flat color="deep-orange lighten-2" :to="{ name: 'Ranks' }">Ranks</v-btn>
        </v-card-actions>
      </v-card>
      <v-btn block outline color="primary" v-on:click="updateData">Update</v-btn>
    </v-flex>
    <v-flex xs12 md9>
        <v-tabs v-model="active"
          color="light-blue lighten-1"
          slider-color="pink accent-3"
        >
          <v-tab>
            History
          </v-tab>
          <v-tab-item>
            <v-card color="blue darken-3">
              <matchups v-bind:id="player.user._id"></matchups>
            </v-card>
          </v-tab-item>
          <v-tab>
            Rating Graph
          </v-tab>
          <v-tab-item>
            <v-card color="deep-orange lighten-5">
              <h1 class="graph-title">Rating Graph</h1>
              <rating-graph v-bind:id="player.user._id"></rating-graph>
            </v-card>
          </v-tab-item>
          <v-tab>
            Weapon Picks
          </v-tab>
          <v-tab-item>
            <v-card color="deep-orange lighten-5">
              <h1 class="graph-title">Favorite Weapons</h1>
              <fav-weapon-bar-chart v-bind:id="player.user._id"></fav-weapon-bar-chart>
            </v-card>
          </v-tab-item>
          <v-tab>
            Weapon Counters
          </v-tab>
          <v-tab-item>
            <v-card color="deep-orange lighten-5">
              <h1 class="graph-title">Weapons that counter this player</h1>
              <counter-weapon-bar-chart v-bind:id="player.user._id"></counter-weapon-bar-chart>
            </v-card>
          </v-tab-item>
        </v-tabs>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import Badge from '@/components/Badge'
import Matchups from '@/components/Matchups'
import axios from 'axios'
import RankName from '@/scripts/CalcRank'
import RatingGraph from '@/components/RatingGraph'
import FavWeaponBarChart from '@/components/FavWeaponBarChart'
import CounterWeaponBarChart from '@/components/CounterWeaponBarChart'
export default {
  data () {
    return {
      player: null
    }
  },
  components: {
    Badge: Badge,
    Matchups: Matchups,
    RatingGraph: RatingGraph,
    FavWeaponBarChart: FavWeaponBarChart,
    CounterWeaponBarChart: CounterWeaponBarChart
  },
  created () {
    this.updateData()
  },
  watch: {
    '$route' (to, from) {
      this.updateData()
    }
  },
  filters: {
    round: function (value) {
      return Math.ceil(value * 100) / 100
    },
    RankName: RankName
  },
  methods: {
    updateData: function () {
      axios
        .get(process.env.ROOT_API + 'players/rank/' + this.$route.params.id)
        .then(response => {
          this.player = response.data
        })
        .catch(error => console.log(error))
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
.graph-title {
  color: rgb(1,87,155)
}
</style>
