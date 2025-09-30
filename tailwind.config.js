/** @type {import('tailwindcss').Config} */
export default {
  // === 配置项 1: 内容扫描路径 (必需) ===
  // 告诉 Tailwind 需要扫描哪些文件来查找正在使用的 CSS 类。
  // 如果不配置这个，Tailwind 生成的 CSS 文件将是空的。
  content: [
    "./index.html",                // 扫描根目录的 index.html
    "./src/**/*.{js,ts,jsx,tsx}",  // 扫描 src 文件夹下所有的 .js, .ts, .jsx, .tsx 文件
  ],

  // === 配置项 2: 深色模式策略 (必需) ===
  // NormalCV.jsx 通过给 <html> 标签添加 "dark" 类来切换主题。
  // 这个配置告诉 Tailwind 启用这种 "class-based" 的深色模式。
  darkMode: 'class',

  // === 配置项 3: 主题扩展 (可选) ===
  theme: {
    extend: {},
  },

  // === 配置项 4: 插件 (可选) ===
  plugins: [],
}