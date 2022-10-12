import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
// import ContextProvider from './component/store/ContextProvider';

import Browse from './pages/browse/Browse';
import Search from './pages/search/Search';


function App() {
	console.log('app');

	return (
	
		<BrowserRouter>
		  <Routes>
		  
			<Route path="/" element={<Browse/>}/>
			<Route path="/search" element={<Search/>}/>
			
		  </Routes>
		</BrowserRouter>
	  );
}

export default App;