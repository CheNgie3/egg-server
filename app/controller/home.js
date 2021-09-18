'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.body);
    ctx.body = ctx.state;
  }
  async register() {
    const { ctx } = this;
    const result = await ctx.service.auth.register(ctx.request.body);
    ctx.returnBody(result, '注册成功', 200);
  }
}

module.exports = HomeController;
