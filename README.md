参考 DEMO adding-products-to-cart-commercejs.netlify.app

7.1、功能涵盖
● 类型选择支持 Small, Medium, Large
● 将产品添加到购物车的过程
● 确保给购物车更新通知给用户
● 列出已添加到购物车中的项目
● 添加一个按钮来清空整个购物车
● 在购物车内增加/减少数量的能力

7.2、技术要求
● 使用 VS Code 编辑器
● 使用 Next.js 框架
● 使用 Ant Design UI 库
● 运用所学的 React 知识——特别是 JSX、Props、事件绑定等
● 使用 React Hooks——特别是 useState()， useEffect()， useContext()等

【开发中遇到的问题】 1.开发者模式下，点击 1 次，开始正常+1，后来会+2，目前好像又正常，serve 模式下也是正常的

2.setState 一开始无法更新嵌套对象，目前已解决。先修改后返回新对象。setState 是异步，正常顺序打印拿到的是之前的数据

3.Object.entries(嵌套对象) 使用出现了问题
