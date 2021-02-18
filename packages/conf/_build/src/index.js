"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const tslib_1 = require("tslib");
const env_var_1 = tslib_1.__importDefault(require("env-var"));
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const mode = process.env.NODE_ENV || 'development';
const rootPath = path_1.resolve(__dirname, '../..').replace('/dist', '');
dotenv_1.config({ path: `${rootPath}/.env` });
exports.config = {
    api: {
        host: env_var_1.default.get('API_HOST').default('0.0.0.0').asString(),
        port: env_var_1.default.get('API_PORT').default('3000').asPortNumber(),
    },
    web: {
        host: env_var_1.default.get('WEB_HOST').default('localhost').asString(),
        port: env_var_1.default.get('WEB_PORT').default('3000').asPortNumber(),
    },
    mode,
    paths: {
        root: rootPath,
    },
    auth: {
        cookiePrefix: env_var_1.default
            .get('AUTH_JWT_COOKIE_PREFIX')
            .default('session')
            .asString(),
        secret: env_var_1.default.get('AUTH_JWT_SECRET').default('supersecret').asString(),
    },
    mailer: {
        host: env_var_1.default.get('MAILER_SMTP_HOST').default('localhost').asString(),
        port: env_var_1.default.get('MAILER_SMTP_PORT').default('465').asPortNumber(),
        auth: {
            user: env_var_1.default.get('MAILER_SMTP_USER').asString(),
            pass: env_var_1.default.get('MAILER_SMTP_PASSWORD').asString(),
        },
    },
};
//# sourceMappingURL=index.js.map