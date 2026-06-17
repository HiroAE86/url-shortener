import { Logger } from "../../configs/logger";
import { rerouteFromShortUrl } from "./rerouter.service";

const logger = new Logger({ endpoint: "/v1/rerouter" });

logger.info({ message: "/v1/rerouter initialized" });
export const rerouterController = {
  "/v1/:urlHash": {
    GET: async (req: any): Promise<Response> => {
      logger.debug({ message: "/v1/rerouter endpoint received" });
      try {
        const urlHash = req?.params?.urlHash;
        if (!urlHash) {
          return Response.json({ message: "Missing urlHash" }, { status: 400 });
        }
        return rerouteFromShortUrl({ urlHash });
      } catch (error) {
        return Response.json(
          { message: "Error occurred while processing request" },
          { status: 400 },
        );
      }
    },
  },
};
