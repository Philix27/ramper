import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

// export const runtime = "edge"

const app = new Hono();

app.use("*", cors({ origin: ["http://localhost:5500"] }));
app.use("*", logger());
// app.use(
//   "/auth/*",
//   jwt({
//     secret: "it-is-very-secret",
//   })
// )

// generateApi(app.routes);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const port = process.env.PORT;
console.log(`Server is running on port ${port}`);

Bun.serve({
  port,
  fetch: app.fetch,
});

export type AppType = typeof app.routes;
