const product_table = require ('../model/ProdMod');

const m = {

main:(req, res) => {
   res.render('index', { title: 'index' });

},

bseller:(req, res) => {
res.render('bestseller', { title: 'bestseller' });
},

addprof:(req, res) => {
    res.render('addProf', { title: 'addProf' });
    },

fs:(req, res) => {
    res.render('Fashion', { title: 'Fashion' });
    },

home:(req, res) => {
    res.render('index', { title: 'index' });
    },
 js:(req, res) => {
    res.render('Jewellry', { title: 'Jewellry' });
 },

sh:(req, res) => {
   product_table.getall((err, result) => {
      if (err) throw err;
      res.render('Shoes', { product_table: result });
   })
 },

 cr:(req, res) => {
    res.render('cart', { title: 'cart' });
 },

 pr:(req, res) => {
    res.render('Profile', { title: 'Profile' });
 },




}

module.exports=m;