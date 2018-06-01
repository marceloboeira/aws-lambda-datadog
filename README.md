aws-lambda-datadog
=========

A small library to facilitate sending metrics from an aws lambda function to datadog.

## Installation

```
npm install aws-lambda-datadog
```

## Usage

```javascript
var metrics = require("aws-lambda-datadog");
var defaultTags = ["context:ingestion", "environment:production"]

...
push("new", function(err, data)){
  if (err !== null) {
    metrics.increment("aws.lambda.pusher.success", 1, defaultTags)
  } else {
    metrics.increment("aws.lambda.pusher.error", 1, defaultTags)
  }
})
...

```

## Api Reference

|  method   | type  | implemented |
| --------- | ----- | ----------- |
| increment | count | yes         |

## References

* https://www.datadoghq.com/blog/how-to-monitor-lambda-functions/
* https://docs.datadoghq.com/integrations/amazon_lambda/
* https://hackernoon.com/tips-and-tricks-for-logging-and-monitoring-aws-lambda-functions-885af6da29a5
* https://github.com/500px/lambda_dd_metrics/blob/master/lambda_dd_metrics.py

## Tests

`make test`
