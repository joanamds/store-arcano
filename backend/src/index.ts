// fonte: https://github.com/joanamds/projeto-tfc/blob/main/app/backend/src/server.ts
import { App } from './app';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 3001;

new App().start(PORT);