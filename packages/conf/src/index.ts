import env from "env-var";
import { config as dotenv } from "dotenv";
import { resolve } from "path";

const mode = process.env.NODE_ENV || "development";
const rootPath = resolve(__dirname, "../../../../");
dotenv({ path: `${rootPath}/.env` });

export const config = {
  api: {
    host: env.get("API_HOST").default("localhost").asString(),
    port: env.get("API_PORT").default("3000").asPortNumber(),
  },
  web: {
    host: env.get("WEB_HOST").default("localhost").asString(),
    port: env.get("WEB_PORT").default("8080").asPortNumber(),
  },
  redis: {
    host: env.get("REDIS_HOST").default("127.0.0.1").asString(),
    port: env.get("REDIS_PORT").default("6379").asPortNumber(),
  },
  mode,
  isDev: mode === "development",
  isProd: mode === "production",
  paths: {
    root: rootPath,
  },
  auth: {
    cookiePrefix: env.get("COOKIE_PREFIX").default("session").asString(),
    secret: env.get("AUTH_JWT_SECRET").default("supersecret").asString(),
    loginTTL: 60 * 15, // 15 min in seconds
    expires: new Date().getTime() + 1000 * 60 * 60 * 60 * 24 * 30, // 30 days in seconds
  },
  mailer: {
    host: env.get("MAILER_SMTP_HOST").default("127.0.0.1").asString(),
    port: env.get("MAILER_SMTP_PORT").default("1025").asPortNumber(),
  },
};
