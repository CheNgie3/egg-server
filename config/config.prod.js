'use strict';

module.exports = {
  mongoose: {
    client: {
      url: 'mongodb://root:123456@172.27.24.217:27017/o45?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  },
};
