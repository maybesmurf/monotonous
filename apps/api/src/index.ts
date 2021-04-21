import { config } from "@monotonous/conf";
import { prisma, redis, logger } from "@monotonous/sdk-server";
import { createServer } from "./server";

async function init() {
  try {
    const server = createServer({ prisma, logger });

    server.listen(config.api.port, config.api.host, (err, address) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }

      server.log.info("listening on " + address);
    });

    return server;
  } catch (error) {
    await prisma.$disconnect();
    await redis.quit();
    console.error("Error starting api: " + error);
    process.exit(1);
  }
}

init();
