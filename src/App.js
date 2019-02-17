import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components';
import Home from './views/Home';
import Profile from './views/Profile';
import NotFound from './views/NotFound';

const App = () => (
	<Router>
		<div className="container">
			<Header />
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/artist/:name" component={Profile} />
					<Route component={NotFound} />
				</Switch>
			</main>
			<Footer />
		</div>
	</Router>
);

export default App;
