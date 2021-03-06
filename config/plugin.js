'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  // jwt: {
  //   enable: true,
  //   package: 'egg-jwt',
  // },
  // passport: {
  //   enable: true,
  //   package: 'egg-passport',
  // },
  // passportLocal: {
  //   enable: true,
  //   package: 'egg-passport-local',
  // },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};
