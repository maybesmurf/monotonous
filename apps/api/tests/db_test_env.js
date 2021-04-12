const { Client } = require("pg");
const NodeEnvironment = require("jest-environment-node");
const { nanoid } = require("nanoid");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { join } = require("path");

const prismaBinary = join(
  __dirname,
  "../../../",
  "node_modules",
  ".bin",
  "prisma"
);

class PrismaTestEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    this.schema = `test_${nanoid()}`;
    this.connectionString = `postgresql://postgres@localhost:5432/monotonous-test?schema=${this.schema}`;
  }

  async setup() {
    await super.setup();
    process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;

    await exec(`${prismaBinary} db push --skip-generate --preview-feature`);
    return super.setup();
  }

  async teardown() {
    const client = new Client({ connectionString: this.connectionString });
    await client.connect();
    await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`);
    await client.end();
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PrismaTestEnvironment;
