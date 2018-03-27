import Home from './pages/Home';
import MyWork from './pages/MyWork';
import Resume from './pages/Resume';
import Mobile from './pages/Mobile';

const routes = [
    { 
        name: 'Home', 
        path: '',
        match: {
            response: ({ set }) => {
                set.body(Home);
            }
        } 
    },
    { 
        name: 'MyWork', 
        path: 'my-work',
        children: [
            { 
                name: 'Project', 
                path: ':title',
                match: {
                    response: ({ set }) => {
                        set.body(MyWork);
                    }
                }
            }
        ],
        match: {
            response: ({ set }) => {
                set.body(MyWork);
            }
        }
    },
    { 
        name: 'Resume', 
        path: 'resume',
        match: {
            response: ({ set }) => {
                set.body(Resume);
            }
        }
    },
    { 
        name: 'Mobile', 
        path: 'mobile',
        match: {
            response: ({ set }) => {
                set.body(Mobile);
            }
        }
    },
    { 
        name: 'Not Found', 
        path: '(.*)',
        match: {
            response: ({ set }) => {
                set.redirect({ name: 'Home' });
            }
        } 
    }
];

export default routes;