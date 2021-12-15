const { models } = require('../../models');
const sequelize = require('sequelize');
const product = require('../../models/product');
const moment = require('moment');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

// Product List Page
exports.getProductCount = () => {
	return models.product.count();
};

exports.getProductBrands = () => {
	return models.product.findAll({
		attributes: ['brand'],
		group: ['brand'],
		raw: true,
	});
};

exports.getProductCategories = () => {
	return models.product.findAll({
		include: [
			{
				model: models.category,
				attributes: ['nameCategory'],
				as: 'category_category',
			},
		],
		attributes: ['category',],
		group: ['category'],
		raw: true,
	});
};

exports.getProductSortByRating = () => {
	return models.product.findAll({
		raw: true,
		attributes: ['idProduct', 'name', 'brand', 'price', 'thumbnail'],
		include: [
			{
				model: models.category,
				attributes: ['nameCategory'],
				as: 'category_category',
			},
			{
				model: models.product_comments,
				attributes: [
					[sequelize.fn('AVG', sequelize.col('rating')), 'AvgRating'],
				],
				as: 'product_comments',
			},
		],
		order: [[sequelize.literal('`product_comments.AvgRating`'), 'DESC']],
		group: ['idProduct'],
	});
};
// Product Details Page
exports.getDetails = (id) => {
	return models.product.findOne({
		where: {
			idProduct: id,
		},
		raw: true,
		include: [
			{
				model: models.category,
				attributes: ['nameCategory'],
				as: 'category_category',
			},
		],
	});
};

exports.getDetailImages = (id) => {
	return models.product_images.findAll({
		where: {
			product: id,
		},
		raw: true,
	});
};

exports.getDetailRelatedProducts = (id, idCategory) => {
	return models.product.findAll({
		where: {
			idProduct: {
				[sequelize.Op.not]: id,
			},
			category: idCategory,
		},
		attributes: ['idProduct', 'name', 'price', 'brand', 'thumbnail'],
		raw: true,
		limit: 4,
		include: [
			{
				model: models.category,
				attributes: ['nameCategory'],
				as: 'category_category',
			},
		],
	});
};

// Admin Product List Page
exports.getAllProductsAdmin = () => {
	return models.product.findAll({
		raw: true,
		include: [
			{
				model: models.category,
				attributes: ['nameCategory'],
				as: 'category_category',
			},
		],
	});
};

exports.deleteProductComment = async (id) => {
	models.product_comments
		.destroy({ where: { idProduct: id } })
		.then(function () {
			console.log('Deleted');
		});
};

exports.deleteProductImage = async (id) => {
	const imageurls = await models.product_images.findAll({
		raw: true,
		attributes: ['imageurl'],
		where: { product: id },
	});
	const thumbnail_url = await models.product.findOne({
		raw: true,
		attributes: ['thumbnail'],
		where: { idProduct: id },
	});
	fs.unlink(
		path.join(
			__dirname,
			`../../public/store/img/${thumbnail_url.thumbnail}`
		),
		function (err) {
			if (err) console.log(err);
			console.log('Deleted ', thumbnail_url.thumbnail);
		}
	);
	for (let e of imageurls) {
		fs.unlink(
			path.join(__dirname, `../../public/store/img/${e.imageurl}`),
			function (err) {
				if (err) console.log(err);
				console.log('Deleted ', e.imageurl);
			}
		);
	}

	models.product_images.destroy({ where: { product: id } }).then(function () {
		console.log('Deleted');
	});
};

exports.deleteProduct = async (id) => {
	let product = await models.product.findOne({
		where: { idProduct: id },
	});
	product.destroy().then(function () {
		// res.status(200).json({
		// 	message: 'User deleted.',
		// });
		console.log('Deleted');
	});
};

exports.createProduct = async (entity) => {
	try {
		// console.log('trying to add:', entity);

		const product = models.product.build({
			idProduct: null,
			name: entity.name,
			generalInfo: entity.generalInfo,
			detailedDescription: entity.detailedDescription,
			category: entity.category,
			brand: entity.brand,
			stock: entity.stock,
			price: entity.price,
			thumbnail: entity.thumbnail,
			// images: entity.images,
			creationDate: moment(), //test truoc da
		});

		// console.log('trying to add row:', product);
		await product.save();
		return product.idProduct;
	} catch (e) {
		console.log('err:', e);
	}
};

exports.updateProduct = async (entity) => {
	try {
		console.log('trying to update:', entity);

		let product = await models.product.findOne({
			where: { idProduct: entity.idProduct },
		});

		product.set({
			idProduct: entity.idProduct,
			name: entity.name,
			category: entity.category,
			brand: entity.brand,
			stock: entity.stock,
			price: entity.price,
			thumbnail: entity.thumbnail,
			// images: entity.images,
			generalInfo: entity.generalInfo,
			desciption: entity.desciption,
			creationDate: moment(), //test truoc da
		});

		console.log('trying to update:', product);
		await product.save();
	} catch (e) {
		console.log('err:', e);
	}
};

exports.uploadImage = async (req, id) => {
	try {
		const product = await models.product.findOne({
			where: { idProduct: id },
		});
		if (product) {
			const form = formidable({ multiples: true });
			form.parse(req, async (err, fields, files) => {
				// Product Thumbnail
				let oldPath = files.product_thumbnail.filepath;
				let newPath =
					path.join(__dirname, '../../public/store/img') +
					'\\' +
					files.product_thumbnail.originalFilename;
				let rawData = fs.readFileSync(oldPath);

				fs.writeFile(newPath, rawData, function (err) {
					if (err) console.log(err);
				});
				product.set({
					thumbnail: files.product_thumbnail.originalFilename,
				});
				product.save();
				if (files.product_images.length > 1) {
					for (let i of files.product_images) {
						let oldPath = i.filepath;
						let newPath =
							path.join(__dirname, '../../public/store/img') +
							'\\' +
							i.originalFilename;
						let rawData = fs.readFileSync(oldPath);

						fs.writeFile(newPath, rawData, function (err) {
							if (err) console.log(err);
						});
						let image = await models.product_images.build({
							idImages: null,
							product: id,
							imageurl: i.originalFilename,
						});
						image.save();
					}
				} else {
					let oldPath = files.product_images.filepath;
					let newPath =
						path.join(__dirname, '../../public/store/img') +
						'\\' +
						files.product_images.originalFilename;
					let rawData = fs.readFileSync(oldPath);
					fs.writeFile(newPath, rawData, function (err) {
						if (err) console.log(err);
					});
					let image = await models.product_images.build({
						idImages: null,
						product: id,
						imageurl: files.product_images.originalFilename,
					});
					image.save();
				}
			});
		} else {
			return false;
		}
	} catch (err) {
		console.log(err);
		return false;
	}
};