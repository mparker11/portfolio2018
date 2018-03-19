const path = require('path');

const React = require('react');
const firebase = require('firebase');
import { createReactAppExpress, handleUniversalRender } from '@cra-express/core';

const curi = require('@curi/core');
const InMemory = require('@hickory/in-memory');
const { CuriProvider } = require('@curi/react');
const { default: routes } = require('../../src/routes');
const { default: firebaseConfig } = require('../../src/firebase.config');

const memoryHistory = InMemory();
const router = curi(memoryHistory, routes);

const clientBuildPath = path.resolve(__dirname, 'client');
const app = createReactAppExpress({
    clientBuildPath,
    universalRender: handleUniversalRender(
        <CuriProvider router={ router }>
            {({ response }) => {
                return <response.body />;
            }}
        </CuriProvider>
    )
});

firebase.initializeApp(firebaseConfig);

module.exports = app;
