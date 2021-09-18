'use strict';
// const { verify } = require('./passport');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;

  // 挂载passport中间件
  // app.passport.verify(verify);
  // controller.passport = {};
  // const local = app.passport.authenticate('local', {
  //   successRedirect: '/',
  //   session: false,
  // });
  // controller.passport.local = local;

  // router.post('/login', controller.passport.local);

  // router.post('/register', controller.home.register);
  router.get('/', controller.home.index);

  router.get('/getAllStock', controller.stock.getAllStock);
  router.get('/getStockAndEntrust', controller.stock.getStockAndEntrust);
  router.get('/getEntrustByStock', controller.stock.getEntrustByStock);
  router.get('/getAllFund', controller.stock.getAllFund);
  router.get('/getAssetByFund', controller.stock.getAssetByFund);
  router.get('/getPriceList', controller.stock.getPriceList);

  router.get('/getAllStockTest', controller.stock.getAllStockTest);
  router.get('/getAllEntrustTest', controller.stock.getAllEntrustTest);

  // 页面性能上传
  router.post('/PerformanceTrace', controller.performance.trace);
  router.get('/getAllPerformance', controller.performance.getAll);
};
