import { Logger } from "../../configs/logger";
import type { CreateShortenedUrlDto } from "./dto";
import { createShortenedUrl } from "./shortener.service";

const logger = new Logger({ endpoint: "/v1/shortener" });

logger.info({ message: "/v1/shortener initialized" });
export const shortenerController = {
  "/v1/shortener": {
    POST: async (req: Request): Promise<Response> => {
      logger.debug({ message: "/v1/shortener POST endpoint initialized" });
      try {
        if (!req.body) {
          throw Error("Missing required body");
        }

        const { url }: CreateShortenedUrlDto = await req.body.json();
        return createShortenedUrl({ url });
      } catch (error) {
        return Response.json(
          { message: "Invalid request body" },
          { status: 400 },
        );
      }
    },
  },
};
