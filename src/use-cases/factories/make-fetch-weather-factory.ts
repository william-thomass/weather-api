import { FetchWeatherUseCase } from "../fetch-weather-use-case.js"
import { AxiosWeatherRepository } from "../../repositories/axios/axios-weather-respository.js"
import { RedisCacheRepository } from "../../repositories/Redis/redis-cache-repository.js"


export function MakeFetchWeatherUseCase(){
  const weatherRepository = new AxiosWeatherRepository()
  const cacheRepository = new RedisCacheRepository()
  const useCase = new FetchWeatherUseCase(weatherRepository, cacheRepository)

  return useCase

} 