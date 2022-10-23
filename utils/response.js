const response = (data, status) => ({
  status,
  data: JSON.stringify(data),
});
exports.response = response;
