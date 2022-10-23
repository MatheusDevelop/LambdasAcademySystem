const db = require("../db");
const crud = require("../utils/crud");
const response = require("../utils/response");

const getMethod = (TableName) => {
  try {
    return response(crud.read(TableName, db), 200);
  } catch (err) {
    throw err;
  }
};
const postMethod = (TableName, model) => {
  try {
    return response(crud.insert(TableName, db, model), 201);
  } catch (err) {
    throw err;
  }
};
const controllers = {
  GET: getMethod,
  POST: postMethod,
};
exports.controllers = controllers;
