const urlSearchParams = new URLSearchParams(window.location.search);

const getUserList = async (page) => {
	try {
		const params = Object.fromEntries(urlSearchParams.entries()); // Get filter from Search Params
		params.page = page;
		const res = await fetch(`/api/user/admin?page=${params.page}`);
		if (!res.ok) {
			const message = 'Error with status code: ' + res.status;
			throw new Error(message);
		}
		const api = await res.json();
		console.log(api);

		$('#user-list').empty();
		if (api.rows.length > 0) {
			api.rows.forEach((user) => {
				$('#user-list').append(`
				<tr>
					<th scope="row">${user.idAccount}</th>
					<td>${user.email}</td>
					<td>${user.name}</td>
					<td>${user.phone}</td>
					<td>${user.createdAt}</td>
				</tr>
                `);
			});
		} else {
			$('#user-list').append(`
                <p>No user found.</p>
            `);
		}
		const count = Math.ceil(api.count / api.limit);
		$('.pagination-list').html(paginationUserList(page, count));
	} catch (error) {
		console.log(error);
	}
};
getUserList(0);

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

const getUserListPage = (page) => {
	urlSearchParams.set('page', page);
	queryManagement(urlSearchParams);
	getUserList(page);
};
