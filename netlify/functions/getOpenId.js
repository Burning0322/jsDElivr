const axios = require('axios');

exports.handler = async function(event, context) {
  const { code } = JSON.parse(event.body);

  try {
    const appId = 'wxdd7db43b84f5a022';
    const appSecret = '52f1eafca32b0f9c0e918cd0d36247b8';

    const response = await axios.get('https://api.weixin.qq.com/sns/jscode2session', {
      params: {
        appid: appId,
        secret: appSecret,
        js_code: code,
        grant_type: 'authorization_code'
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('请求微信服务器失败:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: '请求失败' })
    };
  }
};
