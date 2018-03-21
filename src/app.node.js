const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const curi = require('@curi/core');
const InMemory = require('@hickory/in-memory');
const { CuriProvider } = require('@curi/react');
const { default: routes } = require('./routes');
const { default: Layout } = require('./components/Layout');

const app = express();

app.get('*', (req, res) => {
    const history = InMemory({ locations: [req.url] });
    const router = curi(history, routes);
    
    router.respond(() => {
        res.send(`
            <html>
                <body>
                    <div id="root">${
                        ReactDOMServer.renderToString(
                            <CuriProvider router={ router }>
                                {({ response }) => {
                                    const { body: Body } = response;
                                    return (
                                        <Layout>
                                            <Body />
                                        </Layout>
                                    );
                                }}
                            </CuriProvider>
                        )
                    }</div>
                    <script src="static/js/bundle.js"></script>
                    <script src="static/js/bundle.js.map"></script>
                </body>
            </html>
        `);
    });
});

if (process.env.NODE_ENV === 'production') {
    app.listen(process.env.PORT || 8080);
} else {
    module.exports.default = app;
}