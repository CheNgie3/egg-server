'use strict';

// const R = require('ramda');
// const chalk = require('chalk');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
    security: {
      csrf: {
        // ignore: () => true,
        ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
      },
      domainWhiteList: ['*'],
    },
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1:27017/o45',
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      },
    },
    // jwt: {
    //   secret: '123456', // 自定义token的加密条件字符串，可按各自的需求填写
    //   ignore(ctx) {
    //     console.log('ignore');
    //     const paths = ['/login', '/register'];
    //     // if (DEV) {
    //     const tip = `${chalk.yellow('[JWT]')} --> ${
    //       R.contains(ctx.path, paths)
    //         ? chalk.green(ctx.path)
    //         : chalk.red(ctx.path)
    //     }`;
    //     console.log(tip);
    //     // }
    //     return R.contains(ctx.path, paths);
    //   },
    // },
    passportLocal: {
      usernameField: 'username',
      passwordField: 'password',
    },
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  });
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1627024922714_8815';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
