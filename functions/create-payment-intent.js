require('dotenv').config()

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

exports.handler = async function (event, context) {
	const { cart, shipping, total_amount } = JSON.parse(event.body)
	console.log(event)
	return {
		statusCode: 200,
		body: JSON.stringify(cart)
	}
}
