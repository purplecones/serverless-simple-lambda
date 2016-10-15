'use strict';

module.exports.hello2 = (event, context, cb) => {
  cb(null, { message: 'hello2!', event });
};

module.exports.hello3 = (event, context, cb) => {
  cb(null, { message: 'hello3!', event });
};
// You can add more handlers here, and reference them in serverless.yml
