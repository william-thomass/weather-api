import axios from "axios";
import type { Weather, WeatherRepository } from "../weather-repository.js";
import { env } from "../../env/env.js";

export class AxiosWeatherRepository implements WeatherRepository{
  
  
  async findByCity(city: string): Promise<Weather> {

    const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&lang=pt&&key=${env.KEY}&contentType=json`)

    const { temp, conditions } = response.data.currentConditions

    return {
      city:response.data.resolvedAddress,
      condition:conditions,
      temperature:temp,
    }
  }
  
}