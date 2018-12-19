
<template>
<v-content>
    <v-toolbar class="white">
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <section>
        <v-parallax :src="require('@/assets/hero.png')" height="600">
            <v-layout
                column
                align-center
                justify-center
                class="white--text"
            >
                <img src="@/assets/logo.png" height="200">
                <h1 class="white--text mb-2 display-1 text-xs-center">BMAN.GG</h1>
                <div class="subheading mb-3 text-xs-center">Boring Man Leaderboards and Stats</div>
                <v-btn
                class="deep-purple accent-4 mt-5"
                dark
                large
                :to="{ name: 'Leaderboards' }"
                >
                View Leaderboard
                </v-btn>
            </v-layout>
        </v-parallax>
    </section>

    <section>
        <v-layout
            column
            wrap
            class="my-5"
            align-center
            >
            <v-flex xs12 sm4 class="my-3">
                <div class="text-xs-center">
                <h2 class="headline">The best way to step up your Boring Man skills</h2>
                <span class="subheading">
                    Tools to track your improvement
                </span>
                </div>
            </v-flex>
            <v-flex xs12>
                <v-container grid-list-xl>
                    <v-layout row wrap align-center>
                        <v-flex xs12 md4>
                        <v-card class="elevation-0 transparent">
                            <v-card-text class="text-xs-center">
                            <v-icon x-large class="blue--text text--lighten-2">dashboard</v-icon>
                            </v-card-text>
                            <v-card-title primary-title class="layout justify-center">
                            <div class="headline text-xs-center">Player Dashboard</div>
                            </v-card-title>
                            <v-card-text>
                                Each player will have a publicly visible dashboard. Use this information to see what
                                what everyone else is using. Every dashboard is personalized and gives you insight
                                into what kind of player everyone is.
                            </v-card-text>
                        </v-card>
                        </v-flex>
                        <v-flex xs12 md4>
                        <v-card class="elevation-0 transparent">
                            <v-card-text class="text-xs-center">
                                <v-icon x-large class="blue--text text--lighten-2">stars</v-icon>
                            </v-card-text>
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Earn Your Rank</div>
                            </v-card-title>
                            <v-card-text>
                                Earn your rank by challenging yourself ingame. Wear your rank like a badge of honor.
                                Ranking will be determined by your Elo ranking score which you can gain by improving
                                in game.
                            </v-card-text>
                        </v-card>
                        </v-flex>
                        <v-flex xs12 md4>
                            <v-card class="elevation-0 transparent">
                                <v-card-text class="text-xs-center">
                                <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                                </v-card-text>
                                <v-card-title primary-title class="layout justify-center">
                                <div class="headline text-xs-center">Completely Open Sourced</div>
                                </v-card-title>
                                <v-card-text>
                                Developers: Everything here is open source. Simply download a copy of the app to your
                                own computer and you can change how this site develops!
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </section>

    <section>
        <v-parallax :src="require('@/assets/section.jpeg')" height="380">
        <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Getting Stats Has Never Been Easier</div>
            <em>With Powerful Data Visualization</em>
            <v-btn
            class="deep-purple accent-4 mt-5"
            dark
            large
            :to="{ name: 'About' }"
            >
            Learn More
            </v-btn>
        </v-layout>
        </v-parallax>
    </section>

    <section>
        <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact Me</div>
                </v-card-title>
                <v-card-text>
                If you have any suggestions for features, problems with the site or would just like
                to help out, don't hesitate to contact me! I am always excited to add new features
                </v-card-text>
            </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                <div class="headline">Follow Me</div>
                </v-card-title>
                <v-card-text>
                    Come hang out! I usually check here often.
                </v-card-text>
                <v-list class="transparent">
                <v-list-tile>
                    <v-list-tile-action>
                    <span style="color: BlueViolet;">
                        <i class="fab fa-discord"></i>
                    </span>
                    </v-list-tile-action>
                    <v-list-tile-content>
                    <a href="https://discord.gg/AsZ5FpY"><v-list-tile-title>Discord</v-list-tile-title></a>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-action>
                    <span style="color: BlueViolet;">
                        <i class="fab fa-tumblr"></i>
                    </span>
                    </v-list-tile-action>
                    <v-list-tile-content>
                    <a href="http://tumblr.bman.gg/"><v-list-tile-title>Tumblr - Development News</v-list-tile-title></a>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-action>
                    <span style="color: BlueViolet;">
                        <i class="fas fa-envelope"></i>
                    </span>
                    </v-list-tile-action>
                    <v-list-tile-content>
                    <a href="mailto:coyoteandbird@gmail.com"><v-list-tile-title deep-purple accent-4>Email</v-list-tile-title></a>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-action>
                    <span style="color: BlueViolet;">
                        <i class="fab fa-github-alt"></i>
                    </span>
                    </v-list-tile-action>
                    <v-list-tile-content>
                    <a href="https://github.com/coyote963/bmangg"><v-list-tile-title deep-purple accent-4>Github</v-list-tile-title></a>
                    </v-list-tile-content>
                </v-list-tile>
                </v-list>
            </v-card>
            </v-flex>
        </v-layout>
        </v-container>
    </section>
    <v-footer class="deep-purple accent-4">
        <v-layout row wrap align-center>
            <v-flex xs12>
            <div class="white--text ml-3">
                Made with
                <v-icon class="red--text">favorite</v-icon>
                by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
                and <a class="white--text" href="https://github.com/coyote963">Coyote</a>
            </div>
            </v-flex>
        </v-layout>
    </v-footer>
</v-content>
</template>

<script>
export default {
  data () {
    return {
      title: 'BMAN.GG'
    }
  }
}
</script>
