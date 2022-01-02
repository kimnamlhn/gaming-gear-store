const idProduct = $('input[name=idProduct]').val();
const getComments = async (page) => {
	try {
		const res = await fetch(`/api/comment/${idProduct}?page=${page}`);
		if (!res.ok) {
			const message = 'Error with status code: ' + res.status;
			throw new Error(message);
		}
		res.json().then((api) => {
			$('.product-rating').html(rating_star(api.commentsCount.ratingAvg));
			$('.review-link').text(`${api.comments.count} Review(s) | Add your review`);
			$('#rating-tab-count').text(`Reviews (${api.comments.count})`);
			$('#rating-avg-number').text(api.commentsCount.ratingAvg);
			$('#rating-avg-stars').html(rating_star(api.commentsCount.ratingAvg));
			$('.rating-count').each(function (i, el) {
				$(this).html(
					rating_count(api.commentsCount.countPerRating, 5 - i, api.comments.count)
				);
			});
			$('.reviews').empty();
			if (!api.comments.count)
				$('.reviews').html(
					'<div class="text-center"><p>No comment for this product.</p><p>Be the first one now!</p></div>'
				);
			for (let e of api.comments.rows)
				$('.reviews').append(`
                <li>
                    <div class="review-heading">
                        <h5 class="name">
                            ${e.name}
                        </h5>
                        <p class="date">${e.creationAt}</p>
                        <div class="review-rating">
                            ${rating_star(e.rating)}
                        </div>
                    </div>
                    <div class="review-body">
                        <p>${e.content}</p>
                    </div>
                </li>
                `);
			const count = Math.ceil(api.comments.count / api.limit);
			$('.reviews-pagination').html(paginationComment(page, count));
		});
	} catch (error) {
		console.log(error);
	}
};
getComments(0);
const submit_comment = document.getElementById('submit-comment');
submit_comment.addEventListener('click', async function (e) {
	e.preventDefault();
	const commentData = {
		review_name: $('input[name=review_name]').val(),
		review_content: $('textarea[name=review_content]').val(),
		review_rating: $('input[name=review_rating]:checked').val(),
	};
	try {
		const res = await fetch(`/api/comment/submit/${idProduct}`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(commentData),
		});
		if (!res.ok) {
			const message = 'Error with status code: ' + res.status;
			res.json().then(
				(message) =>
					(document.querySelector('#warning-message').textContent = message.message)
			);
			throw new Error(message);
		}
		getComments(0);
		if (!$('input[name=review_name]').attr('readonly')) $('input[name=review_name]').val('');
		$('textarea[name=review_content]').val('');
		$('input[name=review_rating]:checked').prop('checked', false);
		$('input[id=star1]').prop('checked', true);
	} catch (error) {
		console.log(error);
	}
});
