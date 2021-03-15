import env from "env-var";
import { config as dotenv } from "dotenv";
import { resolve } from "path";

const mode = process.env.NODE_ENV || "development";
const rootPath = resolve(__dirname, "../..").replace("/build", "");
dotenv({ path: `${rootPath}/.env` });

export const config = {
  api: {
    host: env.get("API_HOST").default("0.0.0.0").asString(),
    port: env.get("API_PORT").default("3000").asPortNumber(),
  },
  web: {
    host: env.get("WEB_HOST").default("localhost").asString(),
    port: env.get("WEB_PORT").default("3000").asPortNumber(),
  },
  redis: {
    host: env.get("REDIS_HOST").default("127.0.0.1").asString(),
    port: env.get("REDIS_PORT").default("6379").asPortNumber(),
  },
  mode,
  paths: {
    root: rootPath,
  },
  auth: {
    cookiePrefix: env.get("COOKIE_PREFIX").default("session").asString(),
    secret: env.get("AUTH_JWT_SECRET").default("supersecret").asString(),
    loginTTL: 60 * 3, // 3 min in seconds
  },
  mailer: {
    host: env.get("MAILER_SMTP_HOST").default("127.0.0.1").asString(),
    port: env.get("MAILER_SMTP_PORT").default("1025").asPortNumber(),
  },
};
