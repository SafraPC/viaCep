const Redis = require("ioredis");

class cache {
  constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST ||"localhost",
      port:  process.env.REDIS_PORT||6379,
      keyPrefix: process.env.REDIS_KEY || "cache",
      
    });
  }

  async get(key) {
    const value = await this.redis.get(key);
    return value ? JSON.parse(value) : null;
  }

  async set(key, value, timeExp) {
    return await this.redis.set(key, JSON.stringify(value), "EX", timeExp);
  }

  del(key) {
    return this.redis.del(key);
  }

}

module.exports = new cache();
