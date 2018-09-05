import * as Boom from 'boom';
import * as Router from 'koa-router';
import * as send from 'koa-send';

export function initRoutes(app: any) {
    const router = new Router();

    router.get('/api', (ctx, next) => {
        ctx.body = 'Welcome to the API';
    });

    app.use(router.routes());
    app.use(router.allowedMethods({
      throw: true,
      notImplemented: () => new Boom.notImplemented(),
      methodNotAllowed: () => new Boom.methodNotAllowed()
    }));
    app.use(function* index() {
        yield send(this, __dirname + '/index.html');
    });
}
