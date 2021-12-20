module.exports = (rows) => {
	if (!rows) return 0;
	let sum = 0;
	rows.forEach((e) => {
		sum += e.quantity;
	});
	return sum;
};
