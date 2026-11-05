# 个人主页项目

这是一个智能驾驶方向研究生个人主页课外实验项目，使用 HTML5、CSS3 和原生 JavaScript 实现，无第三方前端框架；联系表单通过 Formspree 转发留言。

## 在线地址

<https://zyk-0319.github.io/personal-homepage/>

## 项目结构

```text
Personal Homepage/
├─ index.html      页面结构
├─ style.css       样式、布局、响应式适配与动效
├─ script.js       导航、轮播、表单校验与提交、主题切换逻辑
├─ assets/         头像、项目示意图、社交分享图与站点图标
├─ package.json    最小项目信息
├─ screenshots/    桌面端、平板端、移动端与关键交互截图
├─ 制作说明文档.md 实验报告、AI协作记录与调试记录
└─ README.md       项目说明
```

## 本地运行

直接双击 `index.html`，或在浏览器中打开该文件即可。不需要安装依赖或启动服务器。

## 功能清单

- 导航锚点平滑滚动
- 根据当前浏览区域自动高亮导航项
- 移动端汉堡菜单，点击菜单项后自动收起
- 项目轮播，支持上一张/下一张、指示点、键盘方向键与触摸滑动切换
- 联系表单基础校验、无效输入状态、首个错误项聚焦，以及通过 Formspree 异步发送、防重复提交、成功/失败反馈
- 浅色/深色主题切换，并通过 localStorage 记住偏好
- 桌面端、平板端、移动端响应式布局
- 锚点跳转预留固定导航间距，长文本自动换行不撑破卡片
- 按钮悬停、卡片浮起、内容淡入等克制动效
- “跳到主要内容”链接、当前导航状态与深浅主题下的表单提示配色
- 图片尺寸提示、异步解码、头像 WebP 优先加载与脚本 defer 加载
- 键盘焦点样式、轮播键盘可达性、Esc 关闭移动端菜单、外链打开方式提示与打印友好样式
- 站点图标、canonical、Open Graph/Twitter 分享信息与 Person 结构化数据

## SEO 与站点图标

页面已包含页面标题与描述、作者、索引设置、canonical、Open Graph、Twitter Card、头像站点图标，以及使用正式绝对地址的 `schema.org` 的 `Person` 结构化数据。`assets/social-share.png` 为 1200×630 社交分享图，已配置为 Open Graph 和 Twitter 分享图片。正式地址为 `https://zyk-0319.github.io/personal-homepage/`。

## 联系表单与隐私

留言表单通过 Formspree 提交。访客填写的姓名、邮箱和留言内容会发送给 Formspree，并由其转发至站点所有者配置的 163 邮箱；页面本身不保存这些内容。请勿在留言中填写手机号、住址、身份证号、密码等敏感信息。

## 部署到 GitHub Pages 示例

1. 在 GitHub 中创建一个公开仓库，例如 `personal-homepage`。
2. 将本目录中的 `index.html`、`style.css`、`script.js`、`package.json`、`README.md`、`assets/` 和 `screenshots/` 上传到仓库根目录。
3. 进入仓库 `Settings` → `Pages`，选择 `Deploy from a branch`。
4. 选择主分支和 `/(root)` 目录，保存后等待部署完成。
5. 访问 `https://zyk-0319.github.io/personal-homepage/` 检查页面、站点图标和结构化数据。

## 验收截图

`screenshots/` 目录已按浏览器、桌面交互、手机端和平板端统一命名。完整对照见 `screenshots/图片命名清单.md`。

### Chrome 桌面端

- `chrome-01-home.png`：首页首屏
- `chrome-02-about.png`：关于我
- `chrome-03-projects.png`：项目与实践
- `chrome-04-blog.png`：博客与学习记录
- `chrome-05-contact-form.png`：联系表单初始状态
- `chrome-06-form-error.png`：表单校验错误
- `chrome-07-form-success.png`：表单提交成功
- `chrome-08-theme-dark.png`：深色主题

### Edge 桌面端

- `edge-01-home.png`：首页首屏
- `edge-02-about.png`：关于我
- `edge-03-projects.png`：项目与实践
- `edge-04-blog.png`：博客与学习记录
- `edge-05-contact-form.png`：联系表单初始状态
- `edge-06-form-error.png`：表单校验错误
- `edge-07-form-success.png`：表单提交成功
- `edge-08-theme-dark.png`：深色主题

### 桌面交互

- `carousel-slide-2.png`：项目轮播第二张

### 手机端

- `mobile-01-home.png`：首页首屏
- `mobile-02-about.png`：关于我
- `mobile-03-project-perception.png`：项目区环境感知平台
- `mobile-04-blog.png`：博客与学习记录
- `mobile-05-contact-form.png`：联系表单初始状态
- `mobile-06-menu-open.png`：汉堡菜单展开状态
- `mobile-07-form-error.png`：表单校验错误
- `mobile-08-form-success.png`：表单提交成功
- `mobile-09-theme-dark.png`：深色主题

### 平板端

- `tablet-01-home.png`：首页首屏
- `tablet-02-about.png`：关于我
- `tablet-03-project-perception.png`：项目区环境感知架构图
- `tablet-04-blog.png`：博客与学习记录
- `tablet-05-contact-form.png`：联系表单初始状态
- `tablet-06-form-success.png`：表单提交成功
- `tablet-07-form-error.png`：表单校验错误
- `tablet-08-theme-dark.png`：深色主题

### 部署与调试证据

- `deployed-url.png`：部署后的在线地址
- `devtools-console.png`：DevTools Console 无报错
- `devtools-network.png`：DevTools Network 资源加载
- `print-preview.png`：打印预览

## 验收检查

1. 点击导航项能滚动到对应区域。
2. 缩小窗口到 767px 以下，导航折叠为汉堡菜单，点击菜单项后自动收起。
3. 项目区能通过左右按钮和指示点切换，当前指示点高亮。
4. 分别测试姓名为空、邮箱缺少 `@`、留言为空、全部正确填写四种表单情况。
5. 切换深浅主题后刷新页面，主题偏好保持不变。
6. 使用浏览器开发者工具检查 375px 宽度，页面无横向滚动、文字遮挡、卡片重叠或按钮过小。
7. 确认个人信息、学校邮箱、GitHub 链接和 CSDN 博客链接显示正确。
8. 使用 Tab 聚焦项目轮播后，按左右方向键确认能切换项目。
9. 展开移动端菜单后按 Esc，确认菜单关闭。
10. 使用浏览器打印预览，确认页面为黑白布局、项目卡片不跨页断裂且链接地址可见。
11. 确认浏览器标签页显示头像图标。
12. 部署后使用结构化数据校验工具确认 `Person` 信息可解析。
13. 表单提交时确认按钮禁用并显示发送中状态；成功后重新输入内容，确认旧提示自动清除。
14. 使用社交分享调试工具确认 canonical、Open Graph、Twitter Card 和分享图片能被正确读取。
15. 模拟网络失败时确认页面显示备用邮箱提示，且按钮恢复为可点击状态。




