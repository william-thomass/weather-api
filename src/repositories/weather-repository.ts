export interface Weather {
  temperature: number
  condition: string
  city: string
}


export interface WeatherRepository{
  findByCity(city: string):Promise<Weather>
} 