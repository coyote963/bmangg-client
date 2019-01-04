const step = 8
module.exports.createbins = function (ratingarray) {
  var i
  var count = 0
  var upperbound = ratingarray[0] + step
  var data = []
  var labels = []
  for (i = 0; i < ratingarray.length; i++) {
    if (ratingarray[i] < upperbound) {
      count++
    } else {
      data.push(count)
      labels.push(upperbound)
      upperbound += step
      count = 0
    }
  }
  return {
    data: data,
    labels: labels
  }
}
