import type { FastifyInstance } from "fastify";
import { fetchWeatherController } from "./controllers/fetch-weather-controller.js";

export function appRoutes(app: FastifyInstance){
  app.get('/', fetchWeatherController)
}