const shoes = require ('../model/ProdMod');
const jewelry = require ('../model/jewel');
const fash = require ('../model/fashh.js');



const m = {
   main:(req, res) => {
      res.render('index', { title: 'index' });
},

sh:(req, res) => {
   shoes.getAll((err, result)=> {
      if(err) throw err;
      res.render('Shoes', { shoes: result });
   })
 },

js:(req, res) => {
   jewelry.getAll((err, result)=> {
      if(err) throw err;
      res.render('Jewellry', { jewelry: result });
   })
 },

fs:(req, res) => {
   fash.getAll((err, result)=> {
      if(err) throw err;
      res.render('Fashion', { fash: result });
   })
   },

bseller:(req, res) => {
res.render('bestseller', { title: 'bestseller' });
},

addprof:(req, res) => {
    res.render('addProf', { title: 'addProf' });
    },



home:(req, res) => {
    res.render('index', { title: 'index' });
    },
 



 cr:(req, res) => {
    res.render('cart', { title: 'cart' });
 },

 pr:(req, res) => {
    res.render('Profile', { title: 'Profile' });
 },




}

module.exports=m;
