import { config } from '@monotonous/conf';
import { createServer } from './server';

async function init() {
  try {
    const server = createServer();

    server.listen(config.api.port, config.api.host, (err, address) => {
      if (err) {
        server.log.error(err.toString());
        process.exit(1);
      }

      server.log.info('listening on ' + address);
    });

    return server;
  } catch (error) {
    console.error('Error starting api: ' + error);
    process.exit(1);
  }
}

init();
