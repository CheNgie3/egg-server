'use strict';

// eslint-disable-next-line arrow-parens
module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const PriceSchema = new Schema({
    _id: Schema.Types.ObjectId,
    MarketNo: Number,
    TradePlatformId: Number,
    EntrustDirection: Number,
    EntrustPriceType: Number,
    PriceName: String,
    LimitPriceFlag: Number,
    UpdateNo: Number,
  });

  return mongoose.model('Priceinfo', PriceSchema, 'priceinfo');
};
