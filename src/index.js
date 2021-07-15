import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
	<Auth0Provider
		domain='dev-8z5t2mgw.us.auth0.com'
		clientId='PZcV16dLb5FJQXburiq1bzEvYsYOCx1U'
		redirectUri={window.location.origin}>
		<ProductsProvider>
			<FilterProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</FilterProvider>
		</ProductsProvider>
	</Auth0Provider>,
	document.getElementById('root')
)
