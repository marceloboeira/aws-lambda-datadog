"use strict";

var sinon = require("sinon")
var chai = require("chai")
var mochaSinon = require("mocha-sinon")
var expect = require("chai").expect
var metrics = require("../src/index")
var logger = require("../src/logger")

chai.use(require("sinon-chai"))
chai.use(require("chai-match"))

describe("aws-datadog-metrics", function() {
  beforeEach(function() {
    // we freeze time and spy the console to make it easier to test
    this.clock = sinon.useFakeTimers(new Date(2018, 4, 8).getTime())
    this.sinon.spy(logger, "log")
  })

  describe("increment", function() {
    it("uses the count keyword as the type", function() {
      metrics.increment("foo", 23, ["m:a"])

      expect(logger.log.getCall(0).args).to.eql(["count", "foo", 23, ["m:a"]])
    })
  })

  describe("gauge", function() {
    it("uses the gauge keyword as the type", function() {
      metrics.gauge("foo", 23, ["a:b"])

      expect(logger.log.getCall(0).args).to.eql(["gauge", "foo", 23, ["a:b"]])
    })
  })

  describe("histogram", function() {
    it("uses the histogram keyword as the type", function() {
      metrics.histogram("foo", 29, ["d:e"])

      expect(logger.log.getCall(0).args).to.eql(["histogram", "foo", 29, ["d:e"]])
    })
  })

  describe("check", function() {
    it("uses the check keyword as the type", function() {
      metrics.check("foo", 3, ["d:ef"])

      expect(logger.log.getCall(0).args).to.eql(["check", "foo", 3, ["d:ef"]])
    })
  })
})
