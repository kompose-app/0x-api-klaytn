/**
 * This module can be used to run the Staking HTTP service standalone
 */

import bodyParser = require('body-parser');
import * as cors from 'cors';
import * as express from 'express';
// tslint:disable-next-line:no-implicit-dependencies
import * as core from 'express-serve-static-core';
import { Server } from 'http';

import { AppDependencies, getDefaultAppDependenciesAsync } from '../app';
import * as defaultConfig from '../config';
import { STAKING_PATH } from '../constants';
import { rootHandler } from '../handlers/root_handler';
import { logger } from '../logger';
import { errorHandler } from '../middleware/error_handling';
import { requestLogger } from '../middleware/request_logger';
import { createStakingRouter } from '../routers/staking_router';
import { providerUtils } from '../utils/provider_utils';

process.on('uncaughtException', err => {
    logger.error(err);
    process.exit(1);
});

process.on('unhandledRejection', err => {
    if (err) {
        logger.error(err);
    }
});

if (require.main === module) {
    (async () => {
        const provider = providerUtils.createWeb3Provider(defaultConfig.KLAYTN_RPC_URL);
        const dependencies = await getDefaultAppDependenciesAsync(provider, defaultConfig);
        await runHttpServiceAsync(dependencies, defaultConfig);
    })().catch(error => logger.error(error));
}

async function runHttpServiceAsync(
    dependencies: AppDependencies,
    config: { HTTP_PORT: string },
    _app?: core.Express,
): Promise<Server> {
    const app = _app || express();
    app.use(requestLogger());
    app.use(cors());
    app.use(bodyParser.json());
    app.get('/', rootHandler);
    const server = app.listen(config.HTTP_PORT, () => {
        logger.info(`Staking API (HTTP) for Klaytn listening on port ${config.HTTP_PORT}!`);
    });

    // staking http service
    app.use(STAKING_PATH, createStakingRouter(dependencies.stakingDataService));
    app.use(errorHandler);
    return server;
}
