'use strict';
module.exports = (options) => {
  return async function jwt(ctx, next) {
    console.log('authorization', options);
    console.log(ctx);
    let token = ctx.headers.authorization || '';
    if (!token) {
      ctx.returnBody({}, '请先登录', 401);
      return;
    }
    token = token.substring(7); // 把Bearer 截取掉
    let user;
    try {
      user = await ctx.checkToken(token);
    } catch (e) {
      ctx.returnBody({}, 'Token 无效，请重新登录', 401);
    }
    if (!user) {
      ctx.returnBody({}, 'Token 无效，请重新登录', 401);
      return;
    }
    ctx.request.user = user;
    await next();
  };
};
