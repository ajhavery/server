const testResponse = (req, res) => {
  res.json({ message: "Test route working OK!" });
};

module.exports = {
  testResponse,
};
