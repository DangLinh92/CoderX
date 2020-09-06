const db = require('../lowdb');
const Product = require('../models/Product');
const Session = require('../models/Session');

module.exports.getProductByPage = async (req, res) => {
    try {
        var products = await Product.find({}); //db.get('products').value();

        var page = req.query.page || 1;
        var begin = (page - 1) * 20;
        var end = page * 20;

        var productInPage = products.slice(begin, end);

        var sessionId = req.signedCookies.sessionId;
        var cards = db
            .get('sessions')
            .find({ id: sessionId })
            .get('cart')
            .value();
        var cardsArr = [];
        for (const key in cards) {
            if (cards.hasOwnProperty(key)) {
                const count = cards[key];
                cardsArr.push({ id: key, count: count });
            }
        }
        productInPage = productInPage.map((product) => product.toObject());
        return res.render('product', {
            products: productInPage,
            cards: cardsArr,
        });
    } catch (error) {
        return res.render('Error');
    }
};

module.exports.addToCard = (req, res) => {
    var productId = req.params.id;
    var sessionId = req.signedCookies.sessionId;

    if (!sessionId) {
        res.redirect('/products');
        return;
    }

    var count = db
        .get('sessions')
        .find({ id: sessionId })
        .get('cart.Id_' + productId, 0)
        .value();
    db.get('sessions')
        .find({ id: sessionId })
        .set('cart.Id_' + productId, count + 1)
        .write();
    res.redirect('/products');
    return;
};
