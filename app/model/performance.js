'use strict';

// eslint-disable-next-line arrow-parens
module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const PerformanceSchema = new Schema(
    {
      _id: Schema.Types.ObjectId,
      LCP: Number,
      CLS: Number,
      FCP: Number,
      TTFB: Number,
      traceTime: String,
      ip: String,
      platform: String,
    },
    { versionKey: false }
  );
  return mongoose.model('Performance', PerformanceSchema, 'performance');
};
