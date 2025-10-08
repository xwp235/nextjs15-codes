### 路由处理器

1. Route Handlers 在进行外部 API 请求时同样非常有用。
例如，当你构建一个需要与第三方服务通信的应用时，
2. Route Handlers 在服务器端运行，因此像私钥这样的敏感信息会保持安全，不会暴露到浏览器中。
3. Route Handlers 相当于 Page Router 中的 API 路由。
4. Next.js 支持的请求方法包括：GET、POST、PUT、PATCH、DELETE、HEAD 和 OPTIONS。
如果调用了不受支持的请求方法，Next.js 将返回一个 405 Method Not Allowed 响应。


### Cookies

Cookies 是服务器发送到用户浏览器中的一小段数据。
浏览器可以保存这些 Cookies，并在后续请求中将它们发送回同一个服务器。
Cookies 主要有以下三种用途：

1. 管理会话（例如用户登录和购物车）
2. 处理个性化（例如用户偏好和主题设置）
3. 追踪行为（例如记录和分析用户行为）

### 路由处理器中的缓存机制

1. Route Handlers 默认情况下不会启用缓存，但在使用 GET 方法时可以选择启用缓存。
缓存仅适用于 GET 请求方法。
2. 其他 HTTP 方法（如 POST、PUT 或 DELETE）永远不会被缓存。
如果在 GET 方法中使用了动态函数（例如 headers() 或 cookies()），或者与 request 对象交互，则不会应用缓存。

### 中间件（Middleware）

Next.js 中的中间件是一项强大的功能，它允许你拦截并控制整个应用中的请求与响应流程。
中间件在全局层面运行，可显著增强诸如重定向、URL 重写、身份验证、请求头、Cookies 等功能。
