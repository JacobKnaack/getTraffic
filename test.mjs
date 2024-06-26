import { handler } from './index.mjs';
import fs from 'fs';

fs.readFile('./mocks/api_request.json', 'utf8', (err, data) => {
  if (err) {
    console.error('ERROR READING JSON', err);
  } else {
    let json = JSON.parse(data);
    handler(json).then(console.log).catch(console.error);
  }
});
