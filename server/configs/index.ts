import * as _ from 'lodash';
import { db } from './db.config';

const app = {
  secrets: {
    session: 'application-secret'
  },
  userRoles: ['guest', 'user', 'admin']
}

export default _.merge(app, db);