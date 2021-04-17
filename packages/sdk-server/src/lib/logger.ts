import { config } from "@monotonous/conf";
import pino from "pino";

export const logger = pino({
  enabled: config.mode !== "test",
  level: config.mode === "production" ? "warn" : "trace",
  prettyPrint: true,
});
