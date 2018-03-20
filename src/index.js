import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

import curi from '@curi/core';
import Browser from '@hickory/browser';
import { CuriProvider } from '@curi/react';
import routes from './routes';
import firebaseConfig from './firebase.config';
import Layout from './components/Layout';

const history = Browser();
const router = curi(history, routes);

const root = document.getElementById('root');

firebase.initializeApp(firebaseConfig);

router.respond(() => {
    ReactDOM.hydrate((
        <CuriProvider router={ router }>
            {({ response }) => {
                return (
                    <Layout>
                        <response.body />
                    </Layout>
                );
            }}
        </CuriProvider>
    ), root);
});

registerServiceWorker();
