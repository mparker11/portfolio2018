import Home from './pages/Home';
import MyWork from './pages/MyWork';
import Resume from './pages/Resume';
import Mobile from './pages/Mobile';

const routes = [
    { 
        name: 'Home', 
        path: '',
        response: () => ({
            body: Home
        })
    },
    { 
        name: 'MyWork', 
        path: 'my-work',
        response: () => ({
            body: MyWork
        }),
        children: [
            { 
                name: 'Project', 
                path: ':title',
                response: () => ({
                    body: MyWork
                })
            }
        ]
    },
    { 
        name: 'Resume', 
        path: 'resume',
        response: () => ({
            body: Resume
        })
    },
    { 
        name: 'Mobile', 
        path: 'mobile',
        response: () => ({
            body: Mobile
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

export default routes;