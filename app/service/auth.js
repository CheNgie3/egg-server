'use strict';

const Service = require('egg').Service;

class AuthService extends Service {
  async register(req) {
    console.log('register', req);
    const { ctx } = this;
    const data = {
      provider: 'local',
      username: 'Amy',
      password: '123456',
    };
    return ctx.model.User.create(data);
  }
}
module.exports = AuthService;
