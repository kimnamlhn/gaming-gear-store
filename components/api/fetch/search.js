const search_box = document.querySelector('#search-box');
const search_result = document.querySelector('#search-result');
let result_hovered = false;

search_box.addEventListener('focusin', function () {
	search_result.classList.remove('hidden');
	getSearchProducts();
});

search_box.addEventListener('focusout', function () {
	if (!result_hovered) search_result.classList.add('hidden');
});
let timeout = null;
search_box.addEventListener('keyup', function () {
	clearTimeout(timeout);
	timeout = setTimeout(getSearchProducts, 200);
});

const getSearchProducts = async (page) => {
	try {
		if (!page) page = 0;
		const res = await fetch(`/api/product/search/?limit=5&page=${page}`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ data: search_box.value }),
		});
		if (!res.ok) {
			const message = 'Error with status code: ' + res.status;
			throw new Error(message);
		}
		const result = await res.json();
		while (search_result.firstChild) {
			search_result.removeChild(search_result.firstChild);
		}
		if (result.count === 0) {
			const p = document.createElement('p');
			p.appendChild(document.createTextNode('No results found.'));
			search_result.appendChild(p);
		} else {
			search_result.classList.remove('hidden');
			for (product of result.rows) {
				// Image
				const img = document.createElement('img');
				img.setAttribute('src', `/store/img/${product.thumbnail}`);
				const div_img = document.createElement('div');
				div_img.classList.add('search-item-img');
				div_img.appendChild(img);
				// Text
				const h5 = document.createElement('h5');
				h5.appendChild(document.createTextNode(`${product.name}`));
				const p_text = document.createElement('p');
				p_text.appendChild(
					document.createTextNode(`${product.nameCategory} - ${product.brand}`)
				);
				const div_text = document.createElement('div');
				div_text.classList.add('search-item-text');
				div_text.appendChild(h5);
				div_text.appendChild(p_text);
				// Price
				const p_price = document.createElement('p');
				p_price.appendChild(document.createTextNode(`$${product.price}`));
				const div_price = document.createElement('div');
				div_price.classList.add('search-item-price');
				div_price.appendChild(p_price);
				const a = document.createElement('a');
				a.classList.add('search-item');
				a.setAttribute('href', `/products/${product.idProduct}`);
				a.appendChild(div_img);
				a.appendChild(div_text);
				a.appendChild(div_price);
				a.addEventListener('mouseover', function () {
					result_hovered = true;
				});
				a.addEventListener('mouseout', function () {
					result_hovered = false;
				});
				search_result.appendChild(a);
			}
			const ul = document.createElement('ul');
			ul.classList.add('store-pagination');
			ul.classList.add('search-pagination');
			ul.addEventListener('mouseover', function () {
				result_hovered = true;
			});
			ul.addEventListener('mouseout', function () {
				result_hovered = false;
			});
			search_result.appendChild(ul);
			const count = Math.ceil(result.count / result.limit);
			$('.search-pagination').append(paginationSearch(page, count));
		}
	} catch (error) {
		console.log(error);
	}
};
