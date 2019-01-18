"use strict";

module.exports = {
  TYPE_COUNT: "count",
  TYPE_GAUGE: "gauge",
  TYPE_HISTOGRAM: "histogram",

  increment: function(metric, count = 1, tags = []) {
    this.log(this.TYPE_COUNT, metric, count, tags)
  },

  gauge: function(metric, value, tags = []) {
    this.log(this.TYPE_GAUGE, metric, value, tags)
  },

  histogram: function(metric, value, tags = []) {
    this.log(this.TYPE_HISTOGRAM, metric, value, tags)
  },

  log: function(type, metric, value, tags = []) {
    var epochtimes = Date.now()
    console.log(`MONITORING|${epochtimes}|${value}|${type}|${metric}|#${tags.join(",")}`)
  },
}
