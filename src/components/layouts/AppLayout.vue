<template>
  <v-app :dark="goDark">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile
          :to="{
            name: 'Simple',
          }">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          :to="{
            name: 'Leaderboards',
            }">
            <v-list-tile-action>
              <v-icon>format_list_numbered</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Leaderboards</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          :to="{
            name: 'Search',
            }">
            <v-list-tile-action>
              <v-icon>search</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Search</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          :to="{
            name: 'About',
            }">
            <v-list-tile-action>
              <v-icon>info</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>About</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>BMAN.GG</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container grid-list-md>
        <v-layout align-center justify-center column/>
          <slot />
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <v-switch
            justify-right
            v-model="goDark"
          ></v-switch>
      <span class="white--text">&copy; 2018 Coyote and Bird </span>
      <v-layout align-end justify-end>
    </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    goDark: false
  }),
  props: {
    source: String
  }
}
</script>
