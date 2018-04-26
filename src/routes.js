import Home from './pages/Home';
import MyWork from './pages/MyWork';
import Resume from './pages/Resume';
import Mobile from './pages/Mobile';

const { detect } = require('detect-browser');
const browser = detect();

let routes = [];

//if mobile/tablet, there will only be one page
if (browser.os === 'iOS' || browser.os === 'Android OS' || browser.os === 'BlackBerry OS' || browser.os === 'Windows Mobile' || browser.os === 'Amazon OS') {
    routes = [
        { 
            name: 'Mobile', 
            path: 'mobile',
            response: () => ({
                body: Mobile,
                data: {
                    isMobile: true
                }
            })
        },
        { 
            name: 'Not Found', 
            path: '(.*)',
            response: () => ({
                redirectTo: { 
                    name: 'Mobile' 
                }
            })
        }
    ];
} else {
    routes = [
        { 
            name: 'Home', 
            path: '',
            response: () => ({
                body: Home,
                data: {
                    browser: browser
                }
            })
        },
        { 
            name: 'MyWork', 
            path: 'my-work',
            response: () => ({
                body: MyWork,
                data: {
                    browser: browser
                }
            }),
            children: [
                { 
                    name: 'Project', 
                    path: ':title',
                    response: () => ({
                        body: MyWork,
                        data: {
                            browser: browser
                        }
                    })
                }
            ]
        },
        { 
            name: 'Resume', 
            path: 'resume',
            response: () => ({
                body: Resume,
                data: {
                    browser: browser
                }
            })
        },
        { 
            name: 'Not Found', 
            path: '(.*)',
            response: () => ({
                redirectTo: { 
                    name: 'Home' 
                }
            })
        }
    ];
}

export default routes;