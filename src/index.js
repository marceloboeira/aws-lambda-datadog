"use strict";

module.exports = {
  increment: function(metric, count, tags) {
    var epochtimes = Date.now()
    var type = "count"
    console.log(`MONITORING|${epochtimes}|${count}|${type}|${metric}|#${tags.join(",")}`)
  }
}
