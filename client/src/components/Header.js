import React from 'react';
import {Link} from 'react-router-dom';

const Header =()=>(
			<nav>
				<div className="nav-wrapper">
				<Link to={'/'}className="brand-logo">Chatbot</Link>
				
				</div>
			</nav>
		)

export default Header;