import { Logger } from "../configs/logger";
import { rerouterController } from "./rerouter/rerouter.controller";
import { shortenerController } from "./shortener/shortener.controller";

const logger = new Logger({ endpoint: "/health" });

logger.info({ message: "/health" });

const server = Bun.serve({
  port: 4000,
  development: true,
  routes: {
    ...shortenerController,
    ...rerouterController,
    "/health": {
      GET: () => {
        logger.info({ message: "health ckeck" });
        return Response.json({
          status: "ok",
        });
      },
    },
    "/*": () =>
      Response.json({ message: "Not Found", status: 404 }, { status: 404 }),
  },

  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});

console.log(`Server running at ${server.url}`);
