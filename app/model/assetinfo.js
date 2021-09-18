'use strict';

// eslint-disable-next-line arrow-parens
module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const AssetSchema = new Schema({
    _id: Schema.Types.ObjectId,
    AssetId: Number,
    FundId: Number,
    AssetName: String,
    AssetStatus: Number,
    DataRight: String,
    AssetCode: Number,
    UpdateNo: Number,
    MdbOperateType: Number,
  });

  return mongoose.model('Assetinfo', AssetSchema, 'assetinfo');
};
