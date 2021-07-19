exports.handler = async function (event, context) {
	const { cart, shipping, total_amount } = JSON.parse(event.body)
	console.log(event)
	return {
		statusCode: 200,
		body: JSON.stringify(cart)
	}
}
