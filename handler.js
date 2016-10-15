'use strict';

require('dotenv').config();

var aws = require('aws-sdk');

// Your first function handler
module.exports.hello = (event, context, cb) => {
  var lambda = new aws.Lambda({
    region: 'us-east-1', //change to your region
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });

  lambda.invoke({
    FunctionName: 'mySlsService-dev-hello3',
    Payload: JSON.stringify(event, null, 2),
  }, function(error, data) {
    cb(null, { message: 'hello', data: data, error: error });
  });
};

// You can add more handlers here, and reference them in serverless.yml
