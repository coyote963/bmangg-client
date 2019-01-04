<template>
<layout-basic>
  <v-container grid-list-lg text-xs-center>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-card>
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        <v-card-text>
          <h3 class="title">BMAN.GG Community Made Maps</h3>
          <p>
            Featuring the works of our creative and brilliant map creators! These maps were made by fans for fans. Download them all and you can play on custom servers such as Neko's Custom Servers (Asia).
            If you like these maps and would like to contribute your own, post them to Spasman Games Discord and they might be added into the map pack for everyone to enjoy!
          </p>
          <h5 class="title">How do I install?</h5>
          <p>First click on the mediafire link below to download the files. Unzip them after downloading</p>
          <v-btn block color="success" href="https://bit.ly/2EHlTAV">Download Maps</v-btn>
          <P>
            After downloading: copy map files into: SteamLibrary\steamapps\common\Boring Man - Online Tactical Stickman Combat\Maps
          </p>
        </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</layout-basic>
</template>
<script>
import LayoutBasic from '@/components/layouts/AppLayout'
export default {
  data () {
    return {
      items: [
        {
          src: require('@/assets/maps/1.png')
        },
        {
          src: require('@/assets/maps/2.png')
        },
        {
          src: require('@/assets/maps/3.png')
        },
        {
          src: require('@/assets/maps/4.png')
        }
      ]
    }
  },
  components: {
    LayoutBasic
  }
}
</script>
<style scoped>
.title {
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>
