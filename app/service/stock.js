'use strict';

const Service = require('egg').Service;

class StockService extends Service {
  async getStockAndEntrust() {
    const ctx = this.ctx;
    return ctx.model.Stockinfo.aggregate([
      {
        $match: {
          MarketNo: 1,
          StockType: 1,
          StockStatus: 49,
        },
      },
      {
        $lookup: {
          from: 'entrustinfo',
          localField: 'StockType',
          foreignField: 'StockType',
          let: {},
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$TradePlatformId', 1],
                },
              },
            },
          ],
          as: 'entrusts',
        },
      },
      {
        $project: {
          _id: 0,
          InterCode: 1,
          StockName: 1,
          entrusts: {
            EntrustDirection: 1,
            EntrustDirectionName: 1,
          },
        },
      },
    ]);
  }
  async getAllStock() {
    const { ctx } = this;
    return ctx.model.Stockinfo.find(
      {
        MarketNo: 1,
        StockType: 1,
        StockStatus: 49,
      },
      { InterCode: 1, StockName: 1, _id: 0 }
    );
  }
  async getAllStockTest() {
    const { ctx } = this;
    return ctx.model.Stockinfo.find({}, { _id: 0 });
  }
  async getAllEntrustTest() {
    const { ctx } = this;
    return ctx.model.Entrustinfo.find({}, { _id: 0 });
  }
  async getEntrustByStock(params) {
    const { ctx } = this;
    const { InterCode } = params;
    console.log(params.InterCode);
    const condition = [
      {
        $match: {
          InterCode: params.InterCode || 889903001,
        },
      },
      {
        $lookup: {
          from: 'entrustinfo',
          localField: 'StockType',
          foreignField: 'StockType',
          let: {},
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$TradePlatformId', 1],
                },
              },
            },
          ],
          as: 'entrusts',
        },
      },
      {
        $unwind: '$entrusts',
      },
      {
        $project: {
          _id: 0,
          entrusts: {
            EntrustDirection: 1,
            EntrustDirectionName: 1,
          },
        },
      },
    ];
    return ctx.model.Stockinfo.aggregate(condition);
    // const { InterCode as interCode } = params;
    // console.log('InterCode', InterCode);
    // return ctx.model.Entrustinfo.aggregate([
    //   {
    //     $match: {
    //       TradePlatformId: 1,
    //     },
    //   },
    //   {
    //     $lookup: {
    //       from: 'stockinfo',
    //       let: { stock_type: '$StockType' },
    //       pipeline: [
    //         {
    //           $match: {
    //             $expr: {
    //               $and: [
    //                 { $eq: ['$InterCode', 889903001] },
    //                 { $eq: ['$$stock_type', '$StockType'] },
    //               ],
    //             },
    //           },
    //         },
    //       ],
    //       as: 'stock',
    //     },
    //   },
    //   {
    //     $project: {
    //       _id: 0,
    //       EntrustDirection: 1,
    //       EntrustDirectionName: 1,
    //     },
    //   },
    // ]);
  }
  async getAllFund() {
    const { ctx } = this;
    return ctx.model.Fundinfo.find({}, { FundCode: 1, FundName: 1, _id: 0 });
  }
  async getAssetByFund() {
    const { ctx } = this;
    return ctx.model.Assetinfo.find({}, { AssetCode: 1, AssetName: 1, _id: 0 });
  }
  async getPriceList(params) {
    const { ctx } = this;
    // const { EntrustDirection } = params;
    return ctx.model.Priceinfo.aggregate([
      { $match: { TradePlatformId: 1, MarketNo: 1 } },
      {
        $group: {
          _id: {
            EntrustPriceType: '$EntrustPriceType',
            PriceName: '$PriceName',
          },
        },
      },
      { $sort: { '_id.EntrustPriceType': 1 } },
    ]);
  }
}
module.exports = StockService;
