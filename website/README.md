根据项目文件结构和配置，我来说明如何构建这个网站的开发环境:

1. 首先需要进入 website 目录并安装依赖:

```bash
cd website
npm install
```

2. 启动开发服务器:

```bash
npm start
```

这会执行 package.json 中定义的 `kkt start` 命令,启动开发服务器。

3. 构建生产版本:

```bash
npm run build
```

这会执行 `kkt build` 命令生成生产环境的构建文件。

主要的技术栈和配置说明:

1. 项目使用 KKT 作为构建工具,主要配置在 `.kktrc.ts` 中:
- 使用 less modules 处理样式
- 配置了 markdown 预览加载器
- 配置了生产环境的代码分割优化

2. 主要依赖:
- React 18
- React Router v6 用于路由
- styled-components 用于样式
- @uiw/react-markdown-editor 作为 Markdown 编辑器
- @tanstack/react-query 用于数据获取

3. 开发环境特性:
- 支持热重载
- TypeScript 支持
- Less 预处理器支持
- SVG 组件导入
- Markdown 预览支持

4. 生产环境特性:
- 代码分割优化
- 静态资源处理
- Docker 构建支持

项目使用了 Docker 进行部署,Dockerfile 配置使用了 lipanski/docker-static-website 作为基础镜像。

这是一个典型的现代 React 应用开发环境,提供了完整的开发和构建工具链支持。
