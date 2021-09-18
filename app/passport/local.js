'use strict';

const R = require('ramda');

module.exports = async (ctx, { username, password }) => {
  const user = await ctx.model.User.findOne({ username, password });
  if (!user) {
    ctx.returnBody({ token: '' }, '账号密码错误', 200);
  } else {
    const raw_user = R.omit(['password', 'created_at'], user.toJSON());
    const token = await ctx.getToken(raw_user);
    ctx.returnBody({ token }, 'success', 200);
    console.log('token', token);
    return token;
  }
};
