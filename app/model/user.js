'use strict';

// eslint-disable-next-line arrow-parens
module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    id: { type: Schema.Types.ObjectId },
    provider: String,
    uid: String,
    username: { type: String, unique: true },
    avatar: String,
    password: String,
    createdAt: { type: Date, default: Date.now },
  });

  return mongoose.model('User', UserSchema, 'user');
  // model(参数1，参数2，参数3）参数3是你数据表中需要操作的表的名字，
};
