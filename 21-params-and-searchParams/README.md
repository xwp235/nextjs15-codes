## params 和 searchParams

### 对于给定的 URL：
1. params 是一个 Promise，它解析为一个对象，包含动态路由参数（例如 id）。
2. searchParams 是一个 Promise，它解析为一个对象，包含查询参数（例如筛选和排序条件）。
3. page.tsx可以同时访问params和searchParams,layout.tsx只能访问params。
4. use()可以在Server Component中直接“解包”一个Promise或Context，让异步数据像同步一样使用。

### 使用use()时的注意事项
1. 只能在 Server Component 中使用（即没有 "use client" 的组件）。
2. 不能在普通的客户端 Hook 中使用（如 useState、useEffect 里）。
3. 如果use()的Promise抛出错误，React会自动触发error boundary。
