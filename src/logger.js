"use strict";

module.exports = {
  log: function(type, metric, value, tags = []) {
    var epochtimes = Date.now()
    console.log(`MONITORING|${epochtimes}|${value}|${type}|${metric}|#${tags.join(",")}`)
  },
}
