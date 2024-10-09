import { createServer } from "./server.mjs";

const server = createServer();

try {
  const address = await server.listen({ port: 3000, host: "0.0.0.0" });
  console.log(`Server started on ${address}`);
} catch (err) {
  console.log(err);
  process.exit(1);
}