import './App.css';
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {NavItem, NavLink, Nav} from 'reactstrap'

function App() {
	return (
		<Router>
		<div className="App">
		<Nav>
    <NavItem>
      <NavLink
        active
        href="/"
      >
        Countries
      </NavLink>
    </NavItem>
	<NavItem>
      <NavLink href="/favorites">
        Favorites
      </NavLink>
    </NavItem>
	<NavItem>
      <NavLink
        disabled
        href="/cities"
      >
        Cities
      </NavLink>
    </NavItem>
	</Nav>
	<Routes>
			<Route path='/' element={<Posts />} />
			{/* <Route path='/favorites' element={<Favorites />} /> */}
			{/* <Route path='/cities' element={<Cities />} /> */}
	</Routes>
		</div>
		</Router>
	);
}

export default App;
