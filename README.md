# Node + Express + superagent 转发 Api 请求
简单的几行代码实现如何通过Node + Express + superagent 转发 API 请求。

**安装依赖**

Node.js 转发请求用到了 `express`和`superagent`. [superanget](https://github.com/visionmedia/superagent)是一个 Node.js HTTP client。
```
npm i express superagent -S
```

**端口设置**

由于部署到 Heroku 时，端口是动态分配的，所以需要根据 `process.env.NODE_ENV` 动态设置端口:
```javascript
app.set('port', (process.env.PORT || 5000));
```
如果不需要部署到 Heroku，端口可直接写死。

**接口文档**

* 首页
 - /api/v2


* 内容详情页
  - /api/v1/posts/:id


* 相关文章
 - /api/v1/posts/:id/related


 * 分类栏目
  - /api/v1/columns/:id


* 一周热门
 - /api/v1/posts/hot_in_week


* 限制文章数量
 - /api/v1/posts/?per=**


* 下一页
 - ?page=**


**CORS设置**

>跨源资源共享 ( [CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS) )机制让Web应用服务器能支持跨站访问控制，从而使得安全地进行跨站数据传输成为可能。
主要是通过设置`Access-Control-Allow-Origin: *`
```javascript
app.all('*', ((req, res, next) => {
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  if ('OPTIONS' == req.method) return res.send(200);
  next();
}));
```
**端口监听**

```javascript
app.listen(app.get('port'), (() => {
  console.log('Node app is running on port', app.get('port'));
}));
```
**启动**

```
cd node-proxy-geekpark
node index.js
```

具体见`index.js`

# 部署到Heroku
详情见： [官方 Getting Started](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
