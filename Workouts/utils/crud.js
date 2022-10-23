const uuid = require("uuid");
const { response } = require("./response");

const insert = async (TableName, db, model) => {
  const Id = uuid.v1();
  const params = {
    TableName,
    Item: { ...model, Id },
  };
  try {
    await db.put(params).promise();
    return response({ Id }, 201);
  } catch (err) {
    return response(err, 500);
  }
};
const read = async (TableName, db) => {
  try {
    const { Items } = await db.scan({ TableName }).promise();
    return response({ Items }, 200);
  } catch (err) {
    return response(err, 500);
  }
};
exports.crud = {
  read,
  insert,
};
