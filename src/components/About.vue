<template>
<layout-basic>
  <v-flex xs12 sm8 md8>
    <v-card>
      <v-card-title primary-title>
        <h3 class="headline mb-0">About BMAN.GG</h3>
      </v-card-title>
      <v-card-text>
        <p>
          BMAN.GG tracks your stats when you are in game. So whether you are playing deathmatch or team deathmatch, BMAN.GG will be able to record your match-history, weapons used and more. You can also see rankings of other players in order to compare yourself to others to see how you stack up. Site is still under construction so check back often!
          I am still waiting on Spasman to finish his rewrite, so I am hesitant to add more features to the site. However, I wrote a very simple elo tracker which is running right now. Click the Navigation links below to see the current standings
          This website is a fan made ratings aggregator for the game <a href="https://store.steampowered.com/app/346120/Boring_Man__Online_Tactical_Stickman_Combat/">Boring Man: Online Tactical Stickman Combat (BMAN:OTSC)</a>. There is soon going to be a rewrite for this cult classic game. If you would like to follow development news, follow <a href="https://twitter.com/spasmangames">Spasman's twitter</a>
        </p>
        <p>
          Ratings are calculated according to <a href="https://www.wikiwand.com/en/Elo_rating_system">Elo rating system</a>. These are based off Spasman's Team Deathmatch kills and deaths
          Whenever you are killed or get a kill, both you and your opponent's rating will adjust. The adjustment level will depend on your relative ratings before the kill occurred. For example, if you are highly rated prior to the kill, and you kill a low rated player, your gain in rating will be small compared to you killing a higher rated player. That being said, the maximum that a rating can change based off a single interaction is 32
          If you would like to help me with my website, (I would love a spanish/english speaker, coder, or graphic designer) please do not hesitate to email me at coyoteandbird@gmail.com
          The website is open source and is located <a href="https://github.com/coyote963/bmangg">here</a>, if you would like to follow updates follow my <a href="http://tumblr.bman.gg/rss">tumblr RSS feed </a>
        </p>
      </v-card-text>
    </v-card>
    <v-divider light></v-divider>
    <v-card >
      <v-card-title primary-title>
        <h3 class="headline mb-0">ELO Calculator</h3>
      </v-card-title>
      <v-card-text>
        This calculator tells you exactly how much your Elo will change depending on the outcome of the matchup and relative Elos before the matchup. Please enter an Elo between 500 and 2500.
        <elo-calc></elo-calc>
      </v-card-text>
    </v-card>
  </v-flex>
</layout-basic>
</template>

<script>
import LayoutBasic from '@/components/layouts/AppLayout'
import EloCalc from '@/components/EloCalc'
export default {
  components: {
    LayoutBasic,
    EloCalc
  }
}
</script>
<style scoped>

</style>
