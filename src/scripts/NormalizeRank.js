module.exports.normalizerank = function (rating) {
  if (rating < 600) {
    return 0
  }
  if (rating < 650) {
    return 1
  }
  if (rating < 700) {
    return 2
  }
  if (rating < 725) {
    return 3
  }
  if (rating < 750) {
    return 4
  }
  if (rating < 775) {
    return 5
  }
  if (rating < 800) {
    return 6
  }
  if (rating < 833) {
    return 7
  }
  if (rating < 866) {
    return 8
  }
  if (rating < 900) {
    return 9
  }
  if (rating < 933) {
    return 10
  }
  if (rating < 966) {
    return 11
  }
  if (rating < 1000) {
    return 12
  }
  if (rating < 1033) {
    return 13
  }
  if (rating < 1066) {
    return 14
  }
  if (rating < 1100) {
    return 15
  }
  if (rating < 1133) {
    return 16
  }
  if (rating < 1166) {
    return 17
  }
  if (rating < 1200) {
    return 18
  }
  if (rating < 1250) {
    return 19
  }
  if (rating < 1300) {
    return 20
  } else {
    return 21
  }
}
