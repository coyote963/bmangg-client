var nr = require('./NormalizeRank')
export default function (rating) {
  var ranknames = ['Earth I', 'Earth II', 'Earth III', 'Grass I', 'Grass II', 'Grass III', 'Grass IV', 'Water I', 'Water II', 'Water III', 'Fire I', 'Fire II', 'Fire III', 'Gold I', 'Gold II', 'Gold III', 'Platinum I', 'Platinum II', 'Platinum III', 'Elite', 'Master', 'Grandmaster']
  return ranknames[nr.normalizerank(rating)]
}
