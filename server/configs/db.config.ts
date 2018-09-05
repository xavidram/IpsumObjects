import { Thing } from '../api/things/thing.entity';

export const db = {
  dbConfig: {
    'type': 'mongodb',
    'host': 'ds137812.mlab.com',
    'port': 37812,
    'username': 'sample',
    'password': 'test123',
    'database': 'testing',
    'synchronize': true,
    'logging': false,
    'entities': [
      //`${__dirname}/api/**/*.entity{.ts,.js}`
      Thing
    ]
  }
}
