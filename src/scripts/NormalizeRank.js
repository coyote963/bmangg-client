module.exports.normalizerank = function (rank) {
  if (rank < process.env.TOTAL_PLAYERS) {
    return 21 - Math.floor((rank / process.env.TOTAL_PLAYERS) * 22)
  } else {
    return 0
  }
}
