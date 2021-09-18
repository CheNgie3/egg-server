'use strict';

const Controller = require('egg').Controller;

class StockController extends Controller {
  async getAllStock() {
    const { ctx } = this;
    const info = await ctx.service.stock.getAllStock();
    ctx.returnBody(info);
  }
  async getAllStockTest() {
    const { ctx } = this;
    const info = await ctx.service.stock.getAllStockTest();
    ctx.returnBody(info);
  }
  async getAllEntrustTest() {
    const { ctx } = this;
    const info = await ctx.service.stock.getAllEntrustTest();
    ctx.returnBody(info);
  }
  async getStockAndEntrust() {
    const { ctx } = this;
    const info = await ctx.service.stock.getStockAndEntrust();
    ctx.returnBody(info);
  }
  async getEntrustByStock() {
    const { ctx } = this;
    const params = ctx.request.query;
    const info = await ctx.service.stock.getEntrustByStock(params);
    ctx.returnBody(info);
  }
  async getAllFund() {
    const { ctx } = this;
    const info = await ctx.service.stock.getAllFund();
    ctx.returnBody(info);
  }
  async getAssetByFund() {
    const { ctx } = this;
    const info = await ctx.service.stock.getAssetByFund();
    ctx.returnBody(info);
  }
  async getPriceList() {
    const { ctx } = this;
    const { query } = ctx.request;
    const info = await ctx.service.stock.getPriceList(query);
    ctx.returnBody(info);
  }
}

module.exports = StockController;
