"use strict";

var sinon = require("sinon")
var chai = require("chai")
var mochaSinon = require("mocha-sinon")
var expect = require("chai").expect
var logger = require("../src/logger")

chai.use(require("sinon-chai"))
chai.use(require("chai-match"))

describe("aws-datadog-metrics", function() {
  describe("logger", function() {
    beforeEach(function() {
      this.sinon.spy(console, "log")
    })

    it("formats the message properly", function() {
      logger.log("type", "name", 7)

      expect(console.log.getCall(0).args[0]).to.match(/MONITORING\|\d+\|7\|type\|name\|#/)
    })

    it("sends the time as now", function() {
      // we freeze time and spy the console to make it easier to test
      this.clock = sinon.useFakeTimers(new Date(2018, 4, 8).getTime())
      logger.log("type", "name", 23)

      expect(console.log.getCall(0).args[0]).to.match(/MONITORING\|1525730400000|23\|type\|name\|#/)
    })

    it("joins the tags", function() {
      logger.log("type", "namespaced.name", 21, ["tag:value", "another:tag"])

      expect(console.log.getCall(0).args[0]).to.match(/MONITORING\|\d+\|21\|type\|namespaced\.name\|#tag:value,another:tag/)
    })
  })
})
