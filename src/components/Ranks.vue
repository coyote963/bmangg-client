<template>
<layout-basic>
<v-container grid-list-lg text-xs-center>
  <v-layout>
    <v-flex xs12 sm4 md4>
    <v-card>
    <v-card-title primary-title>
      <h3 class="headline mb-0">What are the ranks?</h3>
    </v-card-title>
    <v-card-text>
      <table class="table">
        <tbody>
          <tr>
            <td><img src="../assets/badges/0.svg">Newbie</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/1.svg">Newbie II</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/2.svg">Newbie III</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/3.svg">Trainee I</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/4.svg">Trainee II</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/5.svg">Trainee III</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/6.svg">Trainee IIII</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/7.svg">Veteran I</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/8.svg">Veteran II</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/9.svg">Veteran III</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/10.svg">Elite</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/11.svg">Superstar</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/12.svg">Virtuoso</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/13.svg">Prodigy</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/14.svg">Genius</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/15.svg">Ace</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/16.svg">Champion</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/17.svg">Guru</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/18.svg">Sage</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/19.svg">Master</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/20.svg">Grandmaster</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/21.svg">Superhuman</td>
          </tr>
        </tbody>
      </table>
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
  components: {
    LayoutBasic: LayoutBasic
  }
}
</script>
