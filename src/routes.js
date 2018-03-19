import Home from './pages/Home';
import Freelance from './pages/Freelance';
import Resume from './pages/Resume';
import Mobile from './pages/Mobile';
import NotFound from './pages/NotFound';

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
        name: 'Freelance', 
        path: 'freelance',
        match: {
            response: ({ set }) => {
                set.body(Freelance);
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
                set.body(NotFound);
            }
        } 
    }
];

export default routes;