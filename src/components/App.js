import React from 'react';
import NavigationBar from './NavigationBar';

const App = (props) => (
	<div>
  	<NavigationBar />
  	<main>{props.children}</main>
  </div>
);

export default App;
