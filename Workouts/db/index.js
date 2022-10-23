const AWS = require("aws-sdk");
AWS.config.update({
  region: "sa-east-1",
});
const db = new AWS.DynamoDB.DocumentClient();
exports.db = db