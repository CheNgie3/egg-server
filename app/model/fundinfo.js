'use strict';

// eslint-disable-next-line arrow-parens
module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const FundSchema = new Schema({
    _id: Schema.Types.ObjectId,
    FundId: Number,
    FundCustId: Number,
    FundName: String,
    FundStatus: Number,
    DataRight: String,
    CompanyId: Number,
    EndDate: String,
    FundType: Number,
    FundCode: String,
    FundCaption: String,
    EstablishDate: String,
    FundShare: Number,
    InterbankId: Number,
    TrustAccountId: Number,
    FundTrusteeId: Number,
  });

  return mongoose.model('Fundinfo', FundSchema, 'fundinfo');
  // model(参数1，参数2，参数3）参数3是你数据表中需要操作的表的名字，
};
