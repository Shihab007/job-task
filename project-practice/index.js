'use strict';

const Hapi = require('@hapi/hapi');
const pg = require('pg');
const Path = require("path");

const init_db = async () => {
    const pool = new pg.Pool({
        user: "postgres",
        host: "localhost",
        database: "postgres",
        password: "postgres",
        port: "5432",
    });
    return pool;
}


const init = async () => {
    const pool = await init_db();
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ["*"],
            },
        },
    });

    server.route({
        method: 'POST',
        path: '/get-hello',
        handler: (request, h) => {

            console.log(request.pg);

            return {
                'name': request.payload.user_name
            };
        }
    });

    await server.register({
        plugin: require("hapi-auto-route"),
        options: {
            routes_dir: Path.join(__dirname, "routes"),
        },
    });

    server.ext("onRequest", function (request, h) {
        request.pg = pool;
        return h.continue;
    });

    server.events.on("start", () => {
        pool.connect().then((err, client, release) => console.log(`Postgres connected`));
        pool.on("error", (err) => {
            console.log(`Postgres bad has happened!`, err.stack);
        });
        console.log(`Hapi js(${server.version}) running on ${server.info.uri}`);
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

