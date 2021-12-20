module.exports = (rows) => {
	if (!rows) return 0;
	let sum = 0;
	rows.forEach((e) => {
		sum += e['idProduct_product.price'] * e.quantity;
	});
	sum = +sum.toFixed(2);
	return sum;
};
