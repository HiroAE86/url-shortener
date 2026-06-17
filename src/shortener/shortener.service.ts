import { redis } from "bun";
import { miniHash } from "./shortener.utils";

export const createShortenedUrl = async ({ url }: { url: string }) => {
  const urlHash = await miniHash(url, 10);

  // TODO: Save the short URL to a database or cache
  redis.set(`url:${urlHash}`, url);

  return Response.json({
    message: "Success",
    shortUrl: `http://localhost:4000/${urlHash}`,
  });
};
