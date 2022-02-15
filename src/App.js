import './App.css';
import Countries from './components/Countries/Countries';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorites from './components/Cities/Favorites';
import Cities from './components/Cities/Cities';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {NavItem, NavLink, Nav} from 'reactstrap'

require('dotenv').config()

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
			<Route path='/' element={<Countries />} />
			<Route path='/favorites' element={<Favorites />} />
			<Route path='/cities'>
        <Route path=':id' element={<Cities />} />
      </Route>
	</Routes>
		</div>
		</Router>
	);
}

export default App;
