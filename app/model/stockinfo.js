'use strict';

// eslint-disable-next-line arrow-parens
module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const StockSchema = new Schema({
    _id: Schema.Types.ObjectId,
    InterCode: Number,
    ReportCode: String,
    MarketNo: Number,
    StockName: String,
    StockStopFlag: Number,
    StockStatus: Number,
    StockType: Number,
    StockSpell: String,
    AssetType: Number,
  });

  return mongoose.model('Stockinfo', StockSchema, 'stockinfo');
};
