const urlSearchParams = new URLSearchParams(window.location.search);

const getOrderList = async (page) => {
	try {
		const params = Object.fromEntries(urlSearchParams.entries()); // Get filter from Search Params
		params.page = page;
		const res = await fetch(`/api/order/admin?page=${params.page}`);
		if (!res.ok) {
			const message = 'Error with status code: ' + res.status;
			throw new Error(message);
		}
		const api = await res.json();
		$('#order-list').empty();
		if (api.rows.length > 0) {
			api.rows.forEach((order) => {
				$('#order-list').append(`
				<tr>
					<th scope="row">${order.idOrder}</th>
					<td>${order.customerName}</td>
					<td>${order.status}</td>
					<td>${order.creationDate}</td>
					<td>${order.shippedDate}</td>
					<td>
						<div class="dropdown">
							<a class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
								href="#" role="button" data-toggle="dropdown">
								<i class="dw dw-more"></i>
							</a>
							<div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                <a class="dropdown-item" href="/api/order/admin/${order.idAccount}"><i
                                        class="dw dw-view"></i> Xem chi tiết (WIP)</a>
								<a class="dropdown-item" href="/account/admin/orders/action/${order.idAccount}?action=1"><i
										class="dw dw-checked"></i> Đã giao</a>
								<a class="dropdown-item" href="/account/admin/orders/action/${order.idAccount}?action=2"><i
										class="dw dw-truck"></i> Đang giao</a>
                                <a class="dropdown-item" href="/account/admin/orders/action/${order.idAccount}?action=3"><i
										class="dw dw-menu-2"></i> Chưa giao</a>
                                <a class="dropdown-item" href="/account/admin/orders/action/${order.idAccount}?action=4"><i
										class="dw dw-cancel"></i> Hủy đơn</a>
							</div>
						</div>
					</td>
				</tr>
                `);
			});
		} else {
			$('#order-list').append(`
                <p>No order found.</p>
            `);
		}
		const count = Math.ceil(api.count / api.limit);
		$('.pagination-list').html(paginationOrderList(page, count));
	} catch (error) {
		console.log(error);
	}
};
getOrderList(0);

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

const getOrderListPage = (page) => {
	urlSearchParams.set('page', page);
	queryManagement(urlSearchParams);
	getOrderList(page);
};
