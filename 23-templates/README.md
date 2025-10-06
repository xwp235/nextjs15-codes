## Templates（模板）

### 模板与布局（layouts）类似，它们也是在应用中多个页面之间共享的 UI。layout只会在挂载时加载，路由切换后还会保存之前的state，而template不会

### template的作用
当用户在使用同一个模板的不同路由之间切换时，系统会进行一次全新的初始化，包括：

1. 重新挂载一个新的模板组件实例
2. 重新创建 DOM 元素
3. 清除 state（状态）
4. 重新同步副作用（effects）

## 使用templates
1. 通过从 template.js 或 template.tsx 文件中导出一个默认的 React 组件来创建模板。
2. 与布局（layouts）类似，模板也需要接收一个 children 属性，用于渲染嵌套的路由片段（nested route segments）。

## 解析顺序
layout.tsx -> template.tsx -> page.tsx
