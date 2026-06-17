import { redis } from "bun";

export const rerouteFromShortUrl = async ({ urlHash }: { urlHash: string }) => {
  const originalUrl = await redis.get(`url:${urlHash}`);

  return Response.json({
    message: "Success",
    originalUrl,
  });
};
