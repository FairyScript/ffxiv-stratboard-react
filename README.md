# FFXIV Stratboard React

FFXIV Stratboard React 是一个基于 React 和 TypeScript 的项目，旨在为《最终幻想14》提供一个战术板工具，帮助玩家更好地规划和执行战斗策略。该项目使用 Vite 作为构建工具，提供了快速的开发体验。

## 功能特性
- **战术板组件**：包括圆形AOE、线性AOE、图标等多种战斗元素。
- **动态背景**：支持多种背景图片切换。
- **模块化设计**：每个功能模块都封装为独立的 React 组件。

## 项目结构
```
src/
├── @types/            # 类型定义文件
├── assets/            # 静态资源（背景图片、对象图片等）
│   ├── background/    # 背景图片
│   └── objects/       # 战斗对象图片
├── components/        # React 组件
│   ├── Board.tsx      # 主战术板组件
│   ├── CircleAoe.tsx  # 圆形AOE组件
│   ├── Donut.tsx      # 环形AOE组件
│   ├── Icon.tsx       # 图标组件
│   ├── LineAoe.tsx    # 线性AOE组件
│   ├── LineBlock.tsx  # 线性阻挡组件
│   ├── NormalIcon.tsx # 普通图标组件
│   └── TextBlock.tsx  # 文本块组件
├── utils/             # 工具函数
│   ├── iconMap.ts     # 图标映射工具
│   └── staticImage.ts # 静态图片工具
├── App.tsx            # 应用主入口
├── main.tsx           # React 渲染入口
└── index.css          # 全局样式
```

## 使用方法
1. 克隆仓库：
   ```bash
   git clone https://github.com/your-repo/ffxiv-stratboard-react.git
   ```
2. 安装依赖：
   ```bash
   bun install
   ```
3. 启动开发服务器：
   ```bash
   bun run dev
   ```
4. 打开浏览器访问 `http://localhost:5173`。

## 贡献
欢迎对本项目提出建议或提交代码贡献！

## 许可证
本项目采用 MIT 许可证。
