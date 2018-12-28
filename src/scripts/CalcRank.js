var nr = require('./NormalizeRank')
export default function (rank) {
  var ranknames = ['Newbie I', 'Newbie II', 'Newbie III', 'Trainee I', 'Trainee II', 'Trainee III', 'Trainee IIII', 'Veteran I', 'Veteran II', 'Veteran III', 'Elite', 'Superstar', 'Virtuoso', 'Prodigy', 'Genius', 'Ace', 'Champion', 'Guru', 'Sage', 'Master', 'Grandmaster', 'Superhuman']
  if (rank > 0 && rank < process.env.TOTAL_PLAYERS) {
    return ranknames[nr.normalizerank(rank)]
  } else {
    return ''
  }
}
