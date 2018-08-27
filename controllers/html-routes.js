let groceryData = require('../data/groceries.json');

module.exports = function (app) {
  // Home Page to display grocery data
  app.get('/', function (req, res) {
    const hbsObject = {
      data: groceryData
    }
    // console.log(hbsObject);
    // pass the handlebars object created to the index.handlebars template to render html content with grocery data
    res.render('index', {
      title: 'Grocery List',
      hbsObject: hbsObject
    });
  });
};
