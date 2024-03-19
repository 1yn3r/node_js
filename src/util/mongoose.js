module.exports = {
  mutipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongooses) => mongooses.toObject());
  },
  mongoosesToObject: function (mongooses) {
    return mongooses ? mongooses.toObject() : mongooses;
  },
};
