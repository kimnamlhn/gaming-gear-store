const addToCartProcessing = (e) => {
	e.forEach((btn) => {
		const idProduct = btn.querySelector('input').value;
		const addToCartBtn = btn.querySelector('button');
		addToCartBtn.addEventListener('click', async (e) => {
			e.preventDefault();
			const cartItem = { idProduct: idProduct, quantity: 1 };
			try {
				const res = await fetch(`/api/cart/add-to-cart`, {
					method: 'post',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(cartItem),
				});
				if (!res.ok) {
					const message = 'Error with status code: ' + res.status;
					throw new Error(message);
				}
				getCart();
			} catch (error) {
				console.log(error);
			}
		});
	});
};
