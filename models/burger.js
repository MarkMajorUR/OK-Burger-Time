var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },


  insertOne: function(cols, vals, cb) {
  orm.create("burger", cols, vals, function(res) {
    cb(res);
   });
  },
  
  updateOne: function(objColVals, condition, cb) {
  orm.update("burger", objColVals, condition, function(res) {
    cb(res);
   });
  }
};

module.exports = burger;