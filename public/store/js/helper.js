const rating_star = (star) => {
	let result = '';
	let floor = Math.floor(star);
	for (let i = 0; i < 5; i++) {
		if (i < floor) result += `<i class="fa fa-star"></i> `;
		else result += `<i class="fa fa-star-o"></i> `;
	}
	return result;
};

const rating_count = (rating, checkingRating, totalRating) => {
	let result = '';
	let percentage = 0;
	let count = 0;
	for (let e of rating) {
		if (e.rating !== checkingRating) continue;
		else {
			percentage = (e.ratingcount / totalRating) * 100;
			count = e.ratingcount;
		}
	}
	result = `
    <div class="rating-progress">
    <div style="width: ${percentage}%;"></div>
    </div>
    <span class="sum">${count}</span>
    `;
	return result;
};

const paginationComment = (page, count) => {
	let result = '';
	page++;
	if (page > count) {
		return '';
	}
	switch (count) {
		case 0:
			return '';
		case 1:
			return `<li class="active">${page}</li>`;
		case 2: {
			if (page === 1)
				return `<li class="active">${page}</li><li onclick="getComments(${page})">${
					page + 1
				}</li>`;
			else
				return `<li onclick="getComments(${page - 2})">${
					page - 1
				}</li><li class="active">${page}</li>`;
		}
		case 3:
		case 4: {
			for (let i = 0; i < count; i++) {
				if (page - 1 === i) result += `<li class="active">${page}</li>`;
				else result += `<li onclick="getComments(${i})">${i + 1}</li>`;
			}
			return result;
		}
		default: {
			if (page - 1 !== 0 && page !== count)
				result += `
                <li onclick="getComments(${page - 2})"><i class="fa fa-angle-left"></i></li>
                <li onclick="getComments(${page - 2})">${page - 1}</li>
                <li class="active">${page}</li>
                <li onclick="getComments(${page})">${page + 1}</li>
                <li onclick="getComments(${page})"><i class="fa fa-angle-right"></i></li>`;
			else {
				if (page - 1 === 0)
					result += `
                <li class="active">${page}</li>
                <li onclick="getComments(${page})">${page + 1}</li>
                <li onclick="getComments(${page + 1})">${page + 2}</li>
                <li onclick="getComments(${page})"><i class="fa fa-angle-right"></i></li>`;
				else {
					result += `
                    <li onclick="getComments(${count - 2})"><i class="fa fa-angle-left"></i></li>
                    <li onclick="getComments(${count - 3})">${count - 2}</li>
                    <li onclick="getComments(${count - 2})">${count - 1}</li>
                    <li class="active">${count}</li>`;
				}
			}
			return result;
		}
	}
};

const paginationProduct = (page, count) => {
	let result = '';
	page++;
	if (page > count) {
		return '';
	}
	switch (count) {
		case 0:
			return '';
		case 1:
			return `<li class="active">${page}</li>`;
		case 2: {
			if (page === 1)
				return `<li class="active">${page}</li><li onclick="getProductsPage(${page})">${
					page + 1
				}</li>`;
			else
				return `<li onclick="getProductsPage(${page - 2})">${
					page - 1
				}</li><li class="active">${page}</li>`;
		}
		case 3:
		case 4: {
			for (let i = 0; i < count; i++) {
				if (page - 1 === i) result += `<li class="active">${page}</li>`;
				else result += `<li onclick="getProductsPage(${i})">${i + 1}</li>`;
			}
			return result;
		}
		default: {
			if (page - 1 !== 0 && page !== count)
				result += `
                <li onclick="getProductsPage(0)"><i class="fa fa-angle-double-left"></i></li>
                <li onclick="getProductsPage(${page - 2})"><i class="fa fa-angle-left"></i></li>
                <li onclick="getProductsPage(${page - 2})">${page - 1}</li>
                <li class="active">${page}</li>
                <li onclick="getProductsPage(${page})">${page + 1}</li>
                <li onclick="getProductsPage(${page})"><i class="fa fa-angle-right"></i></li>
                <li onclick="getProductsPage(${
					count - 1
				})"><i class="fa fa-angle-double-right"></i></li>`;
			else {
				if (page - 1 === 0)
					result += `
                <li class="active">${page}</li>
                <li onclick="getProductsPage(${page})">${page + 1}</li>
                <li onclick="getProductsPage(${page + 1})">${page + 2}</li>
                <li onclick="getProductsPage(${page})"><i class="fa fa-angle-right"></i></li>
                <li onclick="getProductsPage(${
					count - 1
				})"><i class="fa fa-angle-double-right"></i></li>`;
				else {
					result += `
                    <li onclick="getProductsPage(0)"><i class="fa fa-angle-double-left"></i></li>
                    <li onclick="getProductsPage(${
						count - 2
					})"><i class="fa fa-angle-left"></i></li>
                    <li onclick="getProductsPage(${count - 3})">${count - 2}</li>
                    <li onclick="getProductsPage(${count - 2})">${count - 1}</li>
                    <li class="active">${count}</li>`;
				}
			}
			return result;
		}
	}
};

const paginationSearch = (page, count) => {
	let result = '';
	page++;
	if (page > count) {
		return '';
	}
	switch (count) {
		case 0:
			return '';
		case 1:
			return `<li class="active">${page}</li>`;
		case 2: {
			if (page === 1)
				return `<li class="active">${page}</li><li onclick="getSearchProducts(${page})">${
					page + 1
				}</li>`;
			else
				return `<li onclick="getSearchProducts(${page - 2})">${
					page - 1
				}</li><li class="active">${page}</li>`;
		}
		case 3:
		case 4: {
			for (let i = 0; i < count; i++) {
				if (page - 1 === i) result += `<li class="active">${page}</li>`;
				else result += `<li onclick="getSearchProducts(${i})">${i + 1}</li>`;
			}
			return result;
		}
		default: {
			if (page - 1 !== 0 && page !== count)
				result += `
                <li onclick="getSearchProducts(${page - 2})"><i class="fa fa-angle-left"></i></li>
                <li onclick="getSearchProducts(${page - 2})">${page - 1}</li>
                <li class="active">${page}</li>
                <li onclick="getSearchProducts(${page})">${page + 1}</li>
                <li onclick="getSearchProducts(${page})"><i class="fa fa-angle-right"></i></li>`;
			else {
				if (page - 1 === 0)
					result += `
                <li class="active">${page}</li>
                <li onclick="getSearchProducts(${page})">${page + 1}</li>
                <li onclick="getSearchProducts(${page + 1})">${page + 2}</li>
                <li onclick="getSearchProducts(${page})"><i class="fa fa-angle-right"></i></li>`;
				else {
					result += `
                    <li onclick="getSearchProducts(${
						count - 2
					})"><i class="fa fa-angle-left"></i></li>
                    <li onclick="getSearchProducts(${count - 3})">${count - 2}</li>
                    <li onclick="getSearchProducts(${count - 2})">${count - 1}</li>
                    <li class="active">${count}</li>`;
				}
			}
			return result;
		}
	}
};

const paginationUserList = (page, count) => {
	let result = '';
	page++;
	if (page > count) {
		return '';
	}
	switch (count) {
		case 0:
			return '';
		case 1:
			return `<li class="active">${page}</li>`;
		case 2: {
			if (page === 1)
				return `<li class="active">${page}</li><li onclick="getUserListPage(${page})">${
					page + 1
				}</li>`;
			else
				return `<li onclick="getUserListPage(${page - 2})">${
					page - 1
				}</li><li class="active">${page}</li>`;
		}
		case 3:
		case 4: {
			for (let i = 0; i < count; i++) {
				if (page - 1 === i) result += `<li class="active">${page}</li>`;
				else result += `<li onclick="getUserListPage(${i})">${i + 1}</li>`;
			}
			return result;
		}
		default: {
			if (page - 1 !== 0 && page !== count)
				result += `
                <li onclick="getUserListPage(0)"><i class="fa fa-angle-double-left"></i></li>
                <li onclick="getUserListPage(${page - 2})"><i class="fa fa-angle-left"></i></li>
                <li onclick="getUserListPage(${page - 2})">${page - 1}</li>
                <li class="active">${page}</li>
                <li onclick="getUserListPage(${page})">${page + 1}</li>
                <li onclick="getUserListPage(${page})"><i class="fa fa-angle-right"></i></li>
                <li onclick="getUserListPage(${
					count - 1
				})"><i class="fa fa-angle-double-right"></i></li>`;
			else {
				if (page - 1 === 0)
					result += `
                <li class="active">${page}</li>
                <li onclick="getUserListPage(${page})">${page + 1}</li>
                <li onclick="getUserListPage(${page + 1})">${page + 2}</li>
                <li onclick="getUserListPage(${page})"><i class="fa fa-angle-right"></i></li>
                <li onclick="getUserListPage(${
					count - 1
				})"><i class="fa fa-angle-double-right"></i></li>`;
				else {
					result += `
                    <li onclick="getUserListPage(0)"><i class="fa fa-angle-double-left"></i></li>
                    <li onclick="getUserListPage(${
						count - 2
					})"><i class="fa fa-angle-left"></i></li>
                    <li onclick="getUserListPage(${count - 3})">${count - 2}</li>
                    <li onclick="getUserListPage(${count - 2})">${count - 1}</li>
                    <li class="active">${count}</li>`;
				}
			}
			return result;
		}
	}
};

const paginationOrderList = (page, count) => {
	let result = '';
	page++;
	if (page > count) {
		return '';
	}
	switch (count) {
		case 0:
			return '';
		case 1:
			return `<li class="active">${page}</li>`;
		case 2: {
			if (page === 1)
				return `<li class="active">${page}</li><li onclick="getOrderListPage(${page})">${
					page + 1
				}</li>`;
			else
				return `<li onclick="getOrderListPage(${page - 2})">${
					page - 1
				}</li><li class="active">${page}</li>`;
		}
		case 3:
		case 4: {
			for (let i = 0; i < count; i++) {
				if (page - 1 === i) result += `<li class="active">${page}</li>`;
				else result += `<li onclick="getOrderListPage(${i})">${i + 1}</li>`;
			}
			return result;
		}
		default: {
			if (page - 1 !== 0 && page !== count)
				result += `
                <li onclick="getOrderListPage(0)"><i class="fa fa-angle-double-left"></i></li>
                <li onclick="getOrderListPage(${page - 2})"><i class="fa fa-angle-left"></i></li>
                <li onclick="getOrderListPage(${page - 2})">${page - 1}</li>
                <li class="active">${page}</li>
                <li onclick="getOrderListPage(${page})">${page + 1}</li>
                <li onclick="getOrderListPage(${page})"><i class="fa fa-angle-right"></i></li>
                <li onclick="getOrderListPage(${
					count - 1
				})"><i class="fa fa-angle-double-right"></i></li>`;
			else {
				if (page - 1 === 0)
					result += `
                <li class="active">${page}</li>
                <li onclick="getOrderListPage(${page})">${page + 1}</li>
                <li onclick="getOrderListPage(${page + 1})">${page + 2}</li>
                <li onclick="getOrderListPage(${page})"><i class="fa fa-angle-right"></i></li>
                <li onclick="getOrderListPage(${
					count - 1
				})"><i class="fa fa-angle-double-right"></i></li>`;
				else {
					result += `
                    <li onclick="getOrderListPage(0)"><i class="fa fa-angle-double-left"></i></li>
                    <li onclick="getOrderListPage(${
						count - 2
					})"><i class="fa fa-angle-left"></i></li>
                    <li onclick="getOrderListPage(${count - 3})">${count - 2}</li>
                    <li onclick="getOrderListPage(${count - 2})">${count - 1}</li>
                    <li class="active">${count}</li>`;
				}
			}
			return result;
		}
	}
};
