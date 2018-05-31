"use strict";

var sinon = require("sinon")
var chai = require("chai")
var sinonChai = require("sinon-chai")
var mochaSinon = require("mocha-sinon")
var expect = require("chai").expect
var metrics = require("../src/index")

chai.use(sinonChai)

describe("aws-datadog-metrics", function() {
  beforeEach(function() {
    // we freeze time and mock the console to make it easier to test
    var clock = sinon.useFakeTimers(new Date(2018, 4, 8).getTime())
    this.sinon.stub(console, "log")
  })

  describe("increment", function() {
    it("formats the message properly", function() {
      var result = metrics.increment("foo", 1, [])

      expect(console.log).to.have.been.calledWith("MONITORING|1525730400000|1|count|foo|#")
    })

    it("joins the tags", function() {
      var result = metrics.increment("foo.bar", 1, ["tag:value", "another:tag"])

      expect(console.log).to.have.been.calledWith("MONITORING|1525730400000|1|count|foo.bar|#tag:value,another:tag")
    })
  })
})
