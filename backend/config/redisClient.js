import redis from "ioredis";
import { CACHE_PASSWORD } from "./env.js";

export const redisClient = new redis({
  host: "localhost",
  port: 6379,
  password: CACHE_PASSWORD,
  db: 0,
});
