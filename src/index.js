"use strict";

module.exports = {
  increment: function(metric, count = 1, tags = []) {
    var epochtimes = Date.now()
    var type = "count"
    console.log(`MONITORING|${epochtimes}|${count}|${type}|${metric}|#${tags.join(",")}`)
  },

  gauge: function(metric, value, tags = []) {
    var epochtimes = Date.now()
    var type = "gauge"
    console.log(`MONITORING|${epochtimes}|${value}|${type}|${metric}|#${tags.join(",")}`)
  },

  histogram: function(metric, value, tags = []) {
    var epochtimes = Date.now()
    var type = "histogram"
    console.log(`MONITORING|${epochtimes}|${value}|${type}|${metric}|#${tags.join(",")}`)
  }
}
