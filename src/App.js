import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar, Sidebar, Footer} from './components'
import {
	Home,
	Products,
	SingleProduct,
	About,
	Cart,
	Checkout,
	Error,
	PrivateRoute
} from './pages'

function App() {
	return (
		<div>
			<h4>e-shop starter</h4>
		</div>
	)
}

export default App
