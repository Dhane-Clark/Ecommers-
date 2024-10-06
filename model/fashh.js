const db = require('../config/db'); // Import the database connection

const fs = {
    getAll:(callback) => {
        const query = "select * from product_table ";
        db.query(query, callback);
    }}
module.exports= fs ;