const server = Bun.serve({
  routes: {
    "/health": {
      GET: () =>
        Response.json({
          status: "ok",
        }),
    },
  },
});

console.log(`Server running at ${server.url}`);
