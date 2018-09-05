import 'reflect-metadata';
import {createKoaServer, useContainer} from 'routing-controllers';
import {Container} from 'typedi';
import { createConnection, ConnectionOptions } from 'typeorm';
import * as serve from 'koa-static';
import * as routes from './routes';

import * as config from './configs';
const db = config.default.dbConfig;

useContainer(Container);

const app = createKoaServer({
    routePrefix: '/api',
    controllers: [`${__dirname}/api/**/*.controller{.ts,.js}`]
});

const uri = `${db.type}://${db.username}:${db.password}@${db.host}:${db.port}/${db.database}`;
createConnection(<ConnectionOptions>{
    url: uri,
    type: db.type,
    useNewUrlParser: true,
    synchronize: db.synchronize,
    logging: db.logging,
    entities: db.entities
}).then(connection => {
    console.log('Connected to Database!');
}).catch(err => console.error(err));
app.use(serve(__dirname + '/../public'));
routes.initRoutes(app);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
