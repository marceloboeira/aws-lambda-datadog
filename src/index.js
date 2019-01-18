"use strict";

var logger = require("./logger")

module.exports = {
  TYPE_COUNT: "count",
  TYPE_GAUGE: "gauge",
  TYPE_HISTOGRAM: "histogram",

  increment: function(metric, count = 1, tags = []) {
    logger.log(this.TYPE_COUNT, metric, count, tags)
  },

  gauge: function(metric, value, tags = []) {
    logger.log(this.TYPE_GAUGE, metric, value, tags)
  },

  histogram: function(metric, value, tags = []) {
    logger.log(this.TYPE_HISTOGRAM, metric, value, tags)
  },
}
