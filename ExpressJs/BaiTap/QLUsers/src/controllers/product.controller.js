const db = require('../lowdb');
module.exports.getProductByPage = (req, res) => {
    var products = db.get('products').value();
    var page = req.query.page || 1;
    var begin = (page - 1) * 20;
    var end = page * 20;

    var productInPage = products.slice(begin, end);

    var sessionId = req.signedCookies.sessionId;
    var cards = db.get('sessions').find({ id: sessionId }).get('cart').value();
    var cardsArr = [];
    for (const key in cards) {
        if (cards.hasOwnProperty(key)) {
            const count = cards[key];
            cardsArr.push({ id: key, count: count });
        }
    }

    return res.render('product', { products: productInPage, cards: cardsArr });
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
