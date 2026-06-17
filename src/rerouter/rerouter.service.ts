import { redis } from "bun";

export const rerouteFromShortUrl = async ({ urlHash }: { urlHash: string }) => {
  const originalUrl = await redis.get(`url:${urlHash}`);

  if (!originalUrl) {
    return Response.json({ message: "URL not found" }, { status: 404 });
  }

  return Response.redirect(originalUrl, 301);
};
