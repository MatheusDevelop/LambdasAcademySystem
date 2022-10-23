const insert = async (TableName, db, model) => {
  const Id = uuid.v1();
  const params = {
    TableName,
    Item: { ...model, Id },
  };
  try {
    await db.put(params).promise();
    return model;
  } catch (err) {
    throw err;
  }
};
const read = async (TableName, db) => {
  try {
    const data = await db.get({ TableName }).promise();
    return data;
  } catch (err) {
    throw err;
  }
};
exports.crud = {
  read,
  insert,
};
