require("dotenv").config();
const { Redis } = require("redis");

const redisClient = () => {
  if (process.env.REDIS_URL) {
    console.log("Redis Connected");
    return process.env.REDIS_URL;
  }
  throw new Error("Redis Connect failed");
};
const redis = new Redis(redisClient());
module.exports = redis;
