'use strict';
const { getClientIP, getClientPlatform, formatDate } = require('../utils');
const Service = require('egg').Service;

class PerformanceService extends Service {
  getAll() {
    const { ctx } = this;
    return ctx.model.Performance.find();
  }

  trace(req) {
    const { ctx, app } = this;
    console.log(req);
    const data = req.body;
    const newData = {
      _id: app.mongoose.Types.ObjectId(),
      ...data,
      ip: getClientIP(req),
      platform: getClientPlatform(req),
      traceTime: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    };
    return ctx.model.Performance.create(newData, function (err) {
      if (err) throw new Error(err);
    });
  }
}
module.exports = PerformanceService;
