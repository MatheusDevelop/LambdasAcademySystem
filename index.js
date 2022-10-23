const baseController = require("./controllers/baseController");
const response = require("./utils/response");

exports.handler = async function (event) {
  try {
    switch (event.path) {
      case "/workouts":
        return executeMethods(event, "Workouts");
      case "/exercises":
        return executeMethods(event, "Exercises");
      case "/leaners":
        return executeMethods(event, "Leaners");
      default:
        return response({ message: "Endpoint not founded" }, 404);
    }
  } catch (err) {
    return response({ error: err.message }, 500);
  }
};
const executeMethods = (event, TableName) => {
  try {
    switch (event.httpMethod) {
      case "GET":
        return baseController.GET(TableName);
      case "POST":
        return baseController.POST(TableName, JSON.parse(event.body));
      default:
        return response({ message: "Method not founded" }, 404);
    }
  } catch (err) {
    throw err;
  }
};
