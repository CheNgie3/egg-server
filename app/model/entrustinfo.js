'use strict';

// eslint-disable-next-line arrow-parens
module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const EntrustSchema = new Schema({
    _id: Schema.Types.ObjectId,
    MarketNo: Number,
    TradePlatformId: Number,
    StockType: Number,
    EntrustDirection: Number,
    EntrustDirectionName: String,
    DisplayOrder: Number,
    UpdateNo: Number,
  });

  return mongoose.model('Entrustinfo', EntrustSchema, 'entrustinfo');
};
