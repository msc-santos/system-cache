import express from "express";
import { getCitysFromState, redisConfig } from "./services.js";

const router = express.Router();

router.get("/", async (_, response) => {
  response.status(200).json("Server is running");
});

router.get(`/citys/:uf`, async (request, response) => {
  const { uf } = request.params;
  const redis = await redisConfig();
  const dataRedis = await redis.get(uf);
  if (dataRedis) {
    console.log("Tem redis");
    return response.status(200).json(JSON.parse(dataRedis));
  }

  console.log("Não tem redis");
  return getCitysFromState(request, response);
});

export default router;
