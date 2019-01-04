<template>
<layout-basic>
<v-container grid-list-lg text-xs-center>
  <v-layout row wrap>
    <v-flex md4 xs12>
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline mb-0">What are the ranks?</h3>
        </v-card-title>
        <v-card-text>
          <table class="table">
            <tbody>
              <tr>
                <td><img src="../assets/badges/0.svg">Earth I (Below 600)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/1.svg">Earth II (600-650)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/2.svg">Earth III (650-700)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/3.svg">Grass I (700-725)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/4.svg">Grass II (725-750)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/5.svg">Grass III (750-775)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/6.svg">Grass IIII (775-800)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/7.svg">Water I (800-833)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/8.svg">Water II (833-866)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/9.svg">Water III (866-900)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/10.svg">Fire I (900-933)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/11.svg">Fire II (933-966)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/12.svg">Fire III (966-1000)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/13.svg">Gold I (1000-1033)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/14.svg">Gold II (1033-1066)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/15.svg">Gold III (1066-1100)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/16.svg">Platinum I (1100-1133)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/17.svg">Platinum II (1133-1166)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/18.svg">Platinum III (1166-1200)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/19.svg">Elite (1200-1250)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/20.svg">Master (1250-1300)</td>
              </tr>
              <tr>
                <td><img src="../assets/badges/21.svg">Grandmaster (1300+)</td>
              </tr>
            </tbody>
          </table>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex md8 xs12>
      <v-layout row wrap>
        <v-flex d-flex>
          <v-card>
            <h2 class="chart-title">Playerbase Elo Distribution</h2>
            <rating-distribution></rating-distribution>
            <p>Note: there is a high peak around 1000, this is because that is the starting elo</p>
          </v-card>
        </v-flex>
        <v-flex d-flex>
          <v-card>
            <h2 class="chart-title">Playerbase Weapon Usage</h2>
            <weapon-usage-chart></weapon-usage-chart>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</v-container>
</layout-basic>
</template>
<script>
import LayoutBasic from '@/components/layouts/AppLayout'
import RatingDistribution from '@/components/RatingDistribution'
import WeaponUsageChart from '@/components/WeaponUsageChart'
export default {
  components: {
    LayoutBasic: LayoutBasic,
    RatingDistribution: RatingDistribution,
    WeaponUsageChart: WeaponUsageChart
  }
}
</script>
<style scoped>
.chart-title {
  padding-bottom: 50px;
  padding-top: 50px
}
</style>
