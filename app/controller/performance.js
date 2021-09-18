'use strict';

const Controller = require('egg').Controller;

class PerformanceController extends Controller {
  async getAll() {
    const { ctx } = this;
    const result = await ctx.service.performance.getAll();
    ctx.returnBody(result);
  }
  async trace() {
    const { ctx } = this;
    await ctx.service.performance.trace(ctx.request);
    ctx.returnBody({});
  }
}

module.exports = PerformanceController;
