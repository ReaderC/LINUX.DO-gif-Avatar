# Linux.do GIF Avatar Fixer

这是一个简单的 Chrome 扩展程序，旨在解决 `linux.do` 网站上用户头像的显示问题。

## 用途

在 `linux.do` 网站上，只有达到 3 级的用户才能以 GIF 动态图的形式加载和显示头像。对于等级不足的用户，他们的 GIF 头像会被强制显示为静态的 PNG 图片。

本插件的功能是：允许用户手动设置自己的头像地址，插件会在页面加载时自动将 `.png` 后缀的头像地址替换为 `.gif` 后缀，从而让低等级用户也能看到自己或其他用户的动态头像。

## 安装与使用

1.  下载本项目的 `.zip` 包并解压，或者直接克隆本仓库。
2.  打开 Chrome 浏览器，访问 `chrome://extensions`。
3.  启用页面右上角的“开发者模式”。
4.  点击“加载已解压的扩展程序”，并选择本项目的文件夹。
5.  点击浏览器工具栏上新增的插件图标。
6.  在弹出窗口中，输入你的头像 `.png` 地址的路径部分 (例如 `/user_avatar/linux.do/yourname/96/12345_2.png`)。
![image](https://github.com/user-attachments/assets/c9cbb9f5-cacd-414a-9e6b-3fc98d85284e)
![image](https://github.com/user-attachments/assets/df874913-0b17-4f78-aa39-38a40e380bb7)
7.  点击“保存”。刷新 `linux.do` 页面即可看到效果。

---

> **声明**: 这个 Chrome 插件项目的所有代码，包括 `manifest.json`, `HTML`, `CSS`, `JavaScript` 文件以及图标，完全由 Google Gemini 模型生成。
