<template>
<form class="form-inline">
    <input id="myElo" class="form-control" type="number" v-model="myelo" placeholder="Enter your Elo"><br>
    <input id ="enemyElo" class="form-control" type="number" v-model="enemyelo" placeholder="Enter enemy's Elo"><br>
    <button class="btn btn-primary" v-on:click="calculateElo">Calculate Elo Change</button>

    <div v-if="message" class="alert alert-info" role="alert">{{message}}</div>
</form>
</template>

<script>
export default {
  data () {
    return {
      message: null,
      myelo: null,
      enemyelo: null
    }
  },
  methods: {
    calculateElo () {
      if (this.myelo < 500 || this.myelo > 2500 || this.enemyelo < 500 || this.enemyelo > 2500) {
        this.message = 'Please enter values between 500 and 2500'
      } else {
        var r1 = Math.pow(10, Number(this.myelo) / 400)
        var r2 = Math.pow(10, Number(this.enemyelo) / 400)
        var e1 = r1 / (r1 + r2)
        var e2 = r2 / (r1 + r2)
        var mywinelo = Number(this.myelo) + 32 * (1 - Number(e1))
        var enemywinelo = this.enemyelo - 32 * e2
        var myloseelo = this.myelo - 32 * e1
        var enemyloseelo = Number(this.enemyelo) + 32 * (1 - Number(e2))
        this.message = 'If you win your elo will be: ' + mywinelo.toPrecision(5) + ' and enemy\'s elo will be ' + enemywinelo.toPrecision(5) +
        '.\n But if you lose, your elo will be ' + myloseelo.toPrecision(5) + ' and enemy\'s elo will climb to ' + enemyloseelo.toPrecision(5)
      }
    }
  }
}
</script>
