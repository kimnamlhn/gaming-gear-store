const urlSearchParams = new URLSearchParams(window.location.search);
const getProducts = async (page) => {
    try {
        const params = Object.fromEntries(urlSearchParams.entries()); // Get filter from Search Params
        params.page = page;
        const res = await fetch(`/api/product/?sorting=${params.sorting}&limit=${params.limit}&page=${params.page}&category=${params.category}&brand=${params.brand}&rating=${params.rating}&pricemin=${params.pricemin}&pricemax=${params.pricemax}`);
        if(!res.ok) {
            const message = "Error with status code: " + res.status;
            throw new Error(message);
        }
        const api = await res.json();
        $('#product-list').empty();
        $('.store-qty').empty();
        if(api.rows.length > 0) {
            api.rows.forEach(product => {
                $('#product-list').append(`
                    <div class="col-md-4 col-xs-6">
                        <div class="product">
                            <div class="product-img">
                                <img src="/store/img/${product.thumbnail}" alt="">
                                <!-- <div class="product-label">
                                    <span class="sale">-30%</span>
                                    <span class="new">NEW</span>
                                </div> -->
                            </div>
                            <div class="product-body">
                                <p class="product-category">${product.nameCategory} - ${product.brand}</p>
                                <h3 class="product-name"><a href="/products/${product.idProduct}">${product.name}</a></h3>
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
                                <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
                            </div>
                        </div>
                    </div>
                `)
                
            });
            //$('.store-qty').text(`Showing ${api.limit} - ${api.count}`);
        }
        else {
            $('#product-list').append(`
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
        const count = Math.ceil(api.count/api.limit);
        $('.store-pagination').html(paginationProduct(page,count))
        console.log('API: ',api);
    } catch (error) {
        console.log(error);
    }
}
getProducts(0);
const reset_button = document.querySelector('#reset-btn');
reset_button.addEventListener('click', function(e){
    urlSearchParams.delete('sorting');
    urlSearchParams.delete('limit');
    urlSearchParams.delete('category');
    urlSearchParams.delete('brand');
    urlSearchParams.delete('rating');
    urlSearchParams.delete('page');
    urlSearchParams.delete('pricemin');
    urlSearchParams.delete('pricemax');
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + urlSearchParams;
    window.history.pushState({ path: newurl }, '', newurl);
    $('input[class=category-filter]:checked').prop('checked',false);
    $('input[class=brand-filter]:checked').prop('checked',false);
    $('input[class=rating-filter]:checked').prop('checked',false);
    $('#price-min').val("");
    $('#price-max').val("");
    $('#sort-method').val(0);
    $('#show-limit').val(12);
    getProducts(0);
})
const sort_method = document.querySelector('#sort-method');
sort_method.addEventListener('change', function(e) {
    urlSearchParams.set('sorting',sort_method.value);
    urlSearchParams.delete('page');
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlSearchParams;
    window.history.pushState({ path: newurl }, '', newurl);
    getProducts(0);
})
const limit_filter = document.querySelector('#show-limit');
limit_filter.addEventListener('change', function(e) {
    urlSearchParams.set('limit',limit_filter.value);
    urlSearchParams.delete('page');
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlSearchParams;
    window.history.pushState({ path: newurl }, '', newurl);
    getProducts(0);
})
const category_filter = document.querySelectorAll('.category-filter');
category_filter.forEach(element => element.addEventListener('change', function(e){
    urlSearchParams.set('category',element.value);
    urlSearchParams.delete('page');
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlSearchParams;
    window.history.pushState({ path: newurl }, '', newurl);
    getProducts(0);
}))
const brand_filter = document.querySelectorAll('.brand-filter');
brand_filter.forEach(element => element.addEventListener('change', function(e){
    urlSearchParams.set('brand',element.value);
    urlSearchParams.delete('page');
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlSearchParams;
    window.history.pushState({ path: newurl }, '', newurl);
    getProducts(0);
}))
const rating_filter = document.querySelectorAll('.rating-filter');
rating_filter.forEach(element => element.addEventListener('change', function(e){
    urlSearchParams.set('rating',element.value);
    urlSearchParams.delete('page');
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlSearchParams;
    window.history.pushState({ path: newurl }, '', newurl);
    getProducts(0);
}))
const pricemin_filter = document.querySelector('#price-min');
pricemin_filter.addEventListener('blur', function(e) {
    urlSearchParams.set('pricemin',pricemin_filter.value);
    urlSearchParams.delete('page');
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlSearchParams;
    window.history.pushState({ path: newurl }, '', newurl);
    getProducts(0);
})
const pricemax_filter = document.querySelector('#price-max');
pricemax_filter.addEventListener('blur', function(e) {
    urlSearchParams.set('pricemax',pricemax_filter.value);
    urlSearchParams.delete('page');
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlSearchParams;
    window.history.pushState({ path: newurl }, '', newurl);
    getProducts(0);
})
const getProductsPage = (page) => {
    $('#top-header')[0].scrollIntoView();
    urlSearchParams.set('page',page);
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlSearchParams;
    window.history.pushState({ path: newurl }, '', newurl);
    getProducts(page);
}
