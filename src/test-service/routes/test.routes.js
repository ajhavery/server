const { testResponse } = require("../controllers/test.controllers");

const router = require("express").Router();

router.get("/", testResponse);

module.exports = router;
