import https from "node:https";
import { createClient } from "redis";

export const redisConfig = async () => {
  const client = await createClient({
    socket: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
  })
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();

  return client;
};

export const getCitysFromState = async (req, res) => {
  const { uf } = req.params;

  const redis = await redisConfig();

  console.log("Vai fazer a request...");

  https
    .get(
      `${process.env.API_BRAZIL_URL}/ibge/municipios/v1/${uf}`,
      (response) => {
        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", async () => {
          try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);

            await redis.set(`${uf}`, JSON.stringify(jsonData));
          } catch (error) {
            console.error(error);
            res
              .status(500)
              .json({ error: "Erro ao processar a resposta da API externa" });
          }
        });
      }
    )
    .on("error", (e) => {
      res.status(500).json({ error: e });
    });
};
