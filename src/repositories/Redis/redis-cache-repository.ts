import {Redis} from "ioredis";
import type { CacheRepository } from "../cache-repository.js";
import type { Weather } from "../weather-repository.js";
import { env } from "../../env/env.js";

export class RedisCacheRepository implements CacheRepository{
  private redis: Redis

  constructor(){
    this.redis = new Redis(env.REDIS_URL)
  }

  async save(city: string, data: Weather): Promise<void> {
    const value = JSON.stringify(data)

    await this.redis.set(city,value, "EX", 3600)

    console.log(`The city ${city} is save`)
  }
  async find(city: string): Promise<Weather | null> {
   const cacheData = await this.redis.get(city)

   if(!cacheData){
    return null
   }

   console.log(`\x1b[36m[CACHE]\x1b[0m Data from ${city} found.`)
   return JSON.parse(cacheData)
  }
  
}