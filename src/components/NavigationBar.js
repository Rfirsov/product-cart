import React from 'react';
import { Link } from 'react-router-dom';


const NavigationBar = () => ({
 render() {
  return (
  	<nav className="navbar navbar-default">
  		<div className="container-fluid">
				<div className="navbar-header"></div>
				 <div className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li><Link to="/products">Products</Link></li>
						<li><Link to="/cart">Cart</Link></li>
					</ul>
				</div>
			</div>
		</nav>
  );
 }
});

export default NavigationBar;
