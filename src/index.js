import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import curi from '@curi/core';
import Browser from '@hickory/browser';
import { CuriProvider } from '@curi/react';
import routes from './routes';

const history = Browser();
const router = curi(history, routes);

const root = document.getElementById('root');

router.respond(() => {
    ReactDOM.hydrate((
        <CuriProvider router={ router }>
            {({ response }) => {
                return <response.body />;
            }}
        </CuriProvider>
    ), root);
});

registerServiceWorker();
