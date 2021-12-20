const getProducts = async (div, sort, category) => {
	try {
		const res = await fetch(`/api/product/?sorting=${sort}&limit=4&category=${category}`);
		if (!res.ok) {
			const message = 'Error with status code: ' + res.status;
			throw new Error(message);
		}
		const api = await res.json();
		$(div).empty();
		if (api.rows.length > 0) {
			api.rows.forEach((product) => {
				$(div).append(`
                <div class="col-md-3 col-xs-6">
                    <div class="product">
                        <div class="product-img">
                            <img src="/store/img/${product.thumbnail}" alt="">
                            <!-- <div class="product-label">
                                <span class="sale">-30%</span>
                                <span class="new">NEW</span>
                            </div> -->
                        </div>
                        <div class="product-body">
                            <p class="product-category">${product.nameCategory} - ${
					product.brand
				}</p>
                            <h3 class="product-name"><a href="/products/${product.idProduct}">${
					product.name
				}</a></h3>
                            <h4 class="product-price">$${product.price}</h4>
                            <div class="product-rating">
                                ${rating_star(product.avgRating)}
                            </div>
                            <div class="product-btns">
                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
                                <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
                            </div>
                        </div>
                        <div class="add-to-cart">
                            <input type="hidden" value="${product.idProduct}">
                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
                        </div>
                    </div>
                    </div>
                `);
			});
		} else {
			$(div).append(`
                <div class="not-found">
                    <div class="col-12 store-center">
                        <img src="/store/img/no-products-found.png">
                    </div>
                    <div class="col-12 store-center">
                        <p class="mt-2">No products found.</p>
                    </div>
                </div>
            `);
		}
		const addToCart = document.querySelectorAll('.add-to-cart');
		addToCartProcessing(addToCart);
	} catch (error) {
		console.log(error);
	}
};

getProducts('#new-laptops', 5, 1);
getProducts('#new-pcs', 5, 2);
getProducts('#new-consoles', 5, 4);
getProducts('#high-rating', 3, null);
