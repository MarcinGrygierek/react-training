import React, { Suspense } from 'react';
import { 
    BrowserRouter as Router, Link, Redirect, Route, Switch,
} from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
// import News from './News';
// import NotFound from './NotFound';
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));
const News = React.lazy(() => import('./News'));
const NotFound = React.lazy(() => import('./NotFound'));

const Routing = () => {
    return (
    <Router>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/news'>News</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <Suspense fallback={<h1>Ładowanie</h1>}>
            <Switch>
                {/* <Route path='/' exact component={About} /> */}
                <Route path='/' exact render={() => <Redirect to='/about' />} />
                <Route path='/about' component={About} />
                <Route path='/news'>
                    <News />
                </Route>
                <Route path='/contact' component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </Suspense>
    </Router>
    )
}

export default Routing;