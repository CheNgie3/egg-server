'use strict';

function getClientIP(req) {
  // return (
  //   req.header['x-forwarded-for'] || // 判断是否有反向代理 IP
  //   req.header['x-real-ip']
  // );
  const remoteAddress = req.socket.remoteAddress;
  const result = remoteAddress.match(/(\d+\.)+\d+/);
  return result && result.length > 0 ? result[0] : 'UNKNOWN';
}

function getClientPlatform(req) {
  return parseOperatingSystem(req.header['user-agent']);
}

function parseOperatingSystem(userAgentString) {
  let operatingSystem = null;

  if (
    userAgentString.indexOf('Windows') > -1 ||
    userAgentString.indexOf('Win') > -1
  ) {
    operatingSystem = 'Windows';
  } else if (
    userAgentString.indexOf('iPhone') > -1 ||
    userAgentString.indexOf('iPod') > -1 ||
    userAgentString.indexOf('iPad') > -1
  ) {
    operatingSystem = 'iOS';
  } else if (userAgentString.indexOf('Android') > -1) {
    operatingSystem = 'Android';
  } else if (userAgentString.indexOf('Mac OS X') > -1) {
    operatingSystem = 'Mac OS X';
  } else if (userAgentString.indexOf('Linux') > -1) {
    operatingSystem = 'Linux';
  } else {
    operatingSystem = 'UNKNOWN';
  }
  return operatingSystem;
}

function formatDate(date, fmt) {
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'S+': date.getMilliseconds(),
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? o[k]
          : ('00' + o[k]).substr(String(o[k]).length)
      );
    }
  }
  return fmt;
}
module.exports = {
  getClientIP,
  getClientPlatform,
  formatDate,
};
