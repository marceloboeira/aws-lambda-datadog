"use strict";

var sinon = require("sinon")
var chai = require("chai")
var mochaSinon = require("mocha-sinon")
var expect = require("chai").expect
var metrics = require("../src/index")

chai.use(require("sinon-chai"))
chai.use(require("chai-match"))

describe("aws-datadog-metrics", function() {
  beforeEach(function() {
    // we freeze time and spy the console to make it easier to test
    this.clock = sinon.useFakeTimers(new Date(2018, 4, 8).getTime())
    this.sinon.spy(console, "log")
  })

  describe("increment", function() {
    it("formats the message properly", function() {
      metrics.increment("foo")

      expect(console.log.getCall(0).args[0]).to.match(/MONITORING\|\d+\|1\|count\|foo\|#/)
    })

    it("joins the tags", function() {
      metrics.increment("foo.bar", 1, ["tag:value", "another:tag"])

      expect(console.log.getCall(0).args[0]).to.match(/MONITORING\|\d+\|1\|count\|foo\.bar\|#tag:value,another:tag/)
    })
  })

  describe("gauge", function() {
    it("uses the gauge keyword as the name", function() {
      metrics.gauge("foo", 23, ["a:b"])

      expect(console.log.getCall(0).args[0]).to.match(/MONITORING\|\d+\|23\|gauge\|foo\|#a:b/)
    })
  })
})
