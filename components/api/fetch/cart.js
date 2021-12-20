const cart_list = document.querySelector('.cart-list');

const getCart = async () => {
	try {
		const res = await fetch(`/api/cart`);
		if (!res.ok) {
			const message = 'Error with status code: ' + res.status;
			throw new Error(message);
		}
		const result = await res.json();
		while (cart_list.firstChild) {
			cart_list.removeChild(cart_list.firstChild);
		}
		let sumPrice = 0;
		let sumQuantity = 0;
		if (result.cartItems.count === 0) {
			const p = document.createElement('p');
			p.appendChild(document.createTextNode('No item in cart.'));
			cart_list.appendChild(p);
		} else {
			result.cartItems.rows.forEach((item) => {
				sumPrice += item.quantity * item['idProduct_product.price'];
				sumQuantity += item.quantity;
				const div_product = document.createElement('div');
				div_product.classList.add('product-widget');
				const div_product_img = document.createElement('div');
				div_product_img.classList.add('product-img');
				const img = document.createElement('img');
				img.setAttribute('src', `/store/img/${item['idProduct_product.thumbnail']}`);
				div_product_img.appendChild(img);
				const div_product_body = document.createElement('div');
				div_product_body.classList.add('product-body');
				const h3 = document.createElement('h3');
				h3.classList.add('product-name');
				const a = document.createElement('a');
				a.setAttribute('href', `/products/${item.idProduct}`);
				a.appendChild(document.createTextNode(item['idProduct_product.name']));
				h3.appendChild(a);
				const h4 = document.createElement('h4');
				h4.classList.add('product-price');
				const span = document.createElement('span');
				span.classList.add('qty');
				span.appendChild(document.createTextNode(`${item.quantity}x`));
				h4.appendChild(span);
				h4.appendChild(document.createTextNode(`$${item['idProduct_product.price']}`));
				div_product_body.appendChild(h3);
				div_product_body.appendChild(h4);
				const del_btn = document.createElement('button');
				del_btn.classList.add('delete');
				const i = document.createElement('i');
				i.classList.add('fa');
				i.classList.add('fa-close');
				del_btn.appendChild(i);
				div_product.appendChild(div_product_img);
				div_product.appendChild(div_product_body);
				div_product.appendChild(del_btn);
				cart_list.appendChild(div_product);
			});
		}
		document.querySelector('#cart-qty').textContent = sumQuantity;
		document.querySelector('#cart-count').textContent = `${sumQuantity} Item(s) selected`;
		sumPrice = +sumPrice.toFixed(2);
		document.querySelector('#total-price').textContent = `SUBTOTAL: $${sumPrice}`;
		// console.log(result.cartItems.rows[0]['idProduct_product.name']);
	} catch (error) {
		console.log(error);
	}
};
