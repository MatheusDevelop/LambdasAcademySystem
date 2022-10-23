const {db} = require("../db");
const {crud} = require("../utils/crud");

const getMethod = (TableName) => {
  try {
    return crud.read(TableName, db);
  } catch (err) {
    throw err;
  }
};
const postMethod = (TableName, model) => {
  try {
    return crud.insert(TableName, db, model);
  } catch (err) {
    return response(err,500)
  }
};
const controllers = {
  GET: getMethod,
  POST: postMethod,
};
exports.controllers = controllers;
