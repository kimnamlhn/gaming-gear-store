const urlSearchParams = new URLSearchParams(window.location.search);

const getProducts = async (page, search) => {
	try {
		const params = Object.fromEntries(urlSearchParams.entries()); // Get filter from Search Params
		params.page = page;
		if (search) params.search = search;
		const res = await fetch(
			`/api/product/?sorting=${params.sorting}&limit=${params.limit}&page=${params.page}&category=${params.category}&brand=${params.brand}&rating=${params.rating}&pricemin=${params.pricemin}&pricemax=${params.pricemax}&search=${params.search}`
		);
		if (!res.ok) {
			const message = 'Error with status code: ' + res.status;
			throw new Error(message);
		}
		const api = await res.json();
		$('#product-list').empty();
		$('.store-qty').empty();
		if (api.rows.length > 0) {
			api.rows.forEach((product) => {
				$('#product-list').append(`
			<tr>
				<th scope="row">${product.idProduct}</th>
				<td>${product.name}</td>
				<td>${product.nameCategory}</td>
				<td>${product.brand}</td>
				<td>${product.price}</td>
				<td>${product.stock}</td>
				<td>${product.creationDate}</td>
				<td>
					<div class="dropdown">
						<a class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
							<i class="dw dw-more"></i>
						</a>
						<div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
							<a class="dropdown-item" href="/products/${product.idProduct}"><i class="dw dw-eye"></i> View</a>
							<a class="dropdown-item" href="/account/admin/products/edit/${product.idProduct}"><i class="dw dw-edit2"></i> Edit</a>
							<a class="dropdown-item" href="/account/admin/products/delete/${product.idProduct}"><i class="dw dw-delete-3"></i> Delete</a>
						</div>
					</div>
				</td>
            </tr>
                `);
			});
		} else {
			$('#product-list').append(`
                <p>No product found.</p>
            `);
		}
		const count = Math.ceil(api.count / api.limit);
		$('.pagination-list').html(paginationProduct(page, count));
	} catch (error) {
		console.log(error);
	}
};
getProducts(0);

const queryManagement = (params) => {
	var newurl =
		window.location.protocol +
		'//' +
		window.location.host +
		window.location.pathname +
		'?' +
		params;
	window.history.pushState({ path: newurl }, '', newurl);
};

const reset_button = document.querySelector('#reset-btn');
reset_button.addEventListener('click', function (e) {
	urlSearchParams.delete('sorting');
	urlSearchParams.delete('limit');
	urlSearchParams.delete('category');
	urlSearchParams.delete('brand');
	urlSearchParams.delete('rating');
	urlSearchParams.delete('page');
	urlSearchParams.delete('pricemin');
	urlSearchParams.delete('pricemax');
	urlSearchParams.delete('search');
	var newurl =
		window.location.protocol +
		'//' +
		window.location.host +
		window.location.pathname +
		urlSearchParams;
	window.history.pushState({ path: newurl }, '', newurl);
	$('input[class=category-filter]:checked').prop('checked', false);
	$('input[class=brand-filter]:checked').prop('checked', false);
	$('input[class=rating-filter]:checked').prop('checked', false);
	$('#price-min').val('');
	$('#price-max').val('');
	$('#sort-method').val(0);
	$('#show-limit').val(12);
	getProducts(0);
});

const search_filter = document.querySelector('#search');
const params = Object.fromEntries(urlSearchParams.entries());
if (params.search) search_filter.value = params.search;
search_filter.addEventListener('keyup', function (e) {
	urlSearchParams.set('search', search_filter.value);
	urlSearchParams.delete('page');
	queryManagement(urlSearchParams);
	getProducts(0, search_filter.value);
});

const sort_method = document.querySelector('#sort-method');
sort_method.addEventListener('change', function (e) {
	urlSearchParams.set('sorting', sort_method.value);
	urlSearchParams.delete('page');
	queryManagement(urlSearchParams);
	getProducts(0);
});
const limit_filter = document.querySelector('#show-limit');
limit_filter.addEventListener('change', function (e) {
	urlSearchParams.set('limit', limit_filter.value);
	urlSearchParams.delete('page');
	queryManagement(urlSearchParams);
	getProducts(0);
});
const category_filter = document.querySelectorAll('.category-filter');
category_filter.forEach((element) =>
	element.addEventListener('change', function (e) {
		urlSearchParams.set('category', element.value);
		urlSearchParams.delete('page');
		queryManagement(urlSearchParams);
		getProducts(0);
	})
);
const brand_filter = document.querySelectorAll('.brand-filter');
brand_filter.forEach((element) =>
	element.addEventListener('change', function (e) {
		urlSearchParams.set('brand', element.value);
		urlSearchParams.delete('page');
		queryManagement(urlSearchParams);
		getProducts(0);
	})
);
const rating_filter = document.querySelectorAll('.rating-filter');
rating_filter.forEach((element) =>
	element.addEventListener('change', function (e) {
		urlSearchParams.set('rating', element.value);
		urlSearchParams.delete('page');
		queryManagement(urlSearchParams);
		getProducts(0);
	})
);
const pricemin_filter = document.querySelector('#price-min');
pricemin_filter.addEventListener('blur', function (e) {
	urlSearchParams.set('pricemin', pricemin_filter.value);
	urlSearchParams.delete('page');
	queryManagement(urlSearchParams);
	getProducts(0);
});
const pricemax_filter = document.querySelector('#price-max');
pricemax_filter.addEventListener('blur', function (e) {
	urlSearchParams.set('pricemax', pricemax_filter.value);
	urlSearchParams.delete('page');
	queryManagement(urlSearchParams);
	getProducts(0);
});
const getProductsPage = (page) => {
	urlSearchParams.set('page', page);
	queryManagement(urlSearchParams);
	getProducts(page);
};
