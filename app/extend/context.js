'use strict';

module.exports = {
  /**
   * 返回客户端的内容
   * @param data // 返回数据
   * @param msg // 返回信息提示
   * @param code // 返回状态码
   */
  returnBody(data = {}, msg = 'success', code = 200) {
    const responseData = {
      data,
      msg,
      status: code,
    };
    this.body = responseData;
  },
  async getToken(data) {
    return await this.app.jwt.sign(data, this.app.config.jwt.secret, {
      expiresIn: 30 * 24 * 60 * 60 + 's',
    });
  },
  async checkToken(token) {
    return await this.app.jwt.verify(token, this.app.config.jwt.secret);
  },
};
