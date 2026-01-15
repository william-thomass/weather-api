import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { MakeFetchWeatherUseCase } from "../../use-cases/factories/make-fetch-weather-factory.js";

export async function fetchWeatherController(req: FastifyRequest, rep: FastifyReply){
  const querySchema = z.object({
    city: z.string().trim()
  })

  const { city } = querySchema.parse(req.query)

  try {
    const makeFetchWeatherUseCase = MakeFetchWeatherUseCase() 
    const { weather} = await makeFetchWeatherUseCase.execute({
      city
    })



    rep.status(200).send({weather})

  } catch (error) {
    rep.status(500).send({message: 'Internal server error.'})
  }
} 