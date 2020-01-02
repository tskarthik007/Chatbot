import React from 'react';
import Landing from './pages/Landing';
import About from './pages/About';
import Shop from './shop/Shop';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Chatbot from './chatbot/Chatbot';

const App= ()=>(
		<div>
			<Router>
				<div className="container">
					<Header/>
						<Route exact path="/" component ={Landing} />
						<Route exact path="/about" component ={About} />
						<Route exact path="/shop" component ={Shop} />
					<Chatbot/>
				</div>
			</Router>
		</div>
	)

export default App;