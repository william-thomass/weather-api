import type { CacheRepository } from "../repositories/cache-repository.js";
import type { Weather, WeatherRepository } from "../repositories/weather-repository.js";

interface FetchWeatherRequest{
  city:string
}

interface FetchWeatherResponse{
  weather: Weather
}


export class FetchWeatherUseCase{
  constructor(
    private weatherRepository:WeatherRepository, 
    private cacheRepository:CacheRepository
  ){}

  async execute({
    city,
  }:FetchWeatherRequest):Promise<FetchWeatherResponse>{

    const cacheWeather = await this.cacheRepository.find(city)

    if(cacheWeather){
      return {
        weather: cacheWeather
      }
    }

    const weather = await this.weatherRepository.findByCity(city)

    await this.cacheRepository.save(city, weather)

    return {weather}

  }
}