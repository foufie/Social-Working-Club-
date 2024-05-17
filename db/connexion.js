require("dotenv").config();
const mongoose = require("mongoose");
const { log } = require("mercedlogger");

const { DATABASE_URL } = process.env;

const connectDB = () => {
  try {
     mongoose.connect(DATABASE_URL);
    log.green("DATABASE STATE", "Connection Open");
  } catch (error) {
    log.red("DATABASE STATE", error);
    process.exit(1);
  }
};

mongoose.connection
  .on("close", () => log.magenta("DATABASE STATE", "Connection Closed"))
  .on("error", (error) => log.red("DATABASE STATE", error));

module.exports = connectDB;