const db = require('../lowdb');
module.exports.getProductByPage = (req, res) => {
    var products = db.get('products').value();
    var page = req.query.page || 1;
    var begin = (page - 1) * 20;
    var end = page * 20;

    var productInPage = products.slice(begin, end);
    return res.render('product', { products: productInPage });
};
