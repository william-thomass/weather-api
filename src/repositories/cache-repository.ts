import type { Weather } from "./weather-repository.js"

export interface CacheRepository{
  save(city: string, data: Weather):Promise<void>
  find(city: string):Promise<Weather | null>
} 