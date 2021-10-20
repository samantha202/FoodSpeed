var express = require('express');
//stripe key
var stripe = require('stripe')('sk_test_51IbmXgDHFVIVSFomAaXfbLiNm7d645xuVgi02lJI5dV2rG0vbWcSLSEUBFMWrnJVeQXBfcOH6Dk0eyApQrrK8nIT00kCd3cCG1');
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
