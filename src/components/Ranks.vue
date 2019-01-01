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
            <td><img src="../assets/badges/0.svg">Earth I</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/1.svg">Earth II</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/2.svg">Earth III</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/3.svg">Grass I</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/4.svg">Grass II</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/5.svg">Grass III</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/6.svg">Grass IIII</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/7.svg">Water I</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/8.svg">Water II</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/9.svg">Water III</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/10.svg">Fire I</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/11.svg">Fire II</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/12.svg">Fire III</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/13.svg">Gold I</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/14.svg">Gold II</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/15.svg">Gold III</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/16.svg">Platinum I</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/17.svg">Platinum II</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/18.svg">Platinum III</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/19.svg">Elite</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/20.svg">Master</td>
          </tr>
          <tr>
            <td><img src="../assets/badges/21.svg">Grandmaster</td>
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
