/***** Node packages import *****/
require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.SERVER_PORT;

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

startServer();
