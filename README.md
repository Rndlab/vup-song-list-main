# vup 歌单站(雨纪ameki)

[雨纪ameki的歌单](https://www.ameki.online)

### 零编程基础，更新歌单列表！

1.告诉我你的github用户名，之后确认接受管理项目的邀请。

2.去这里下载 github 桌面端软件: https://desktop.github.com/
安装完成后就可以用桌面端登陆账号啦。



![](/step/1.png)

### 制作歌单内容

1. 按照模板 `scrips/music.xlsx` 填写，制作歌单内容
2. 运行 `scripts/converter.exe` 生成歌单文件
3. 提交代码到本项目，完成更新

### 启动开发环境
如果只是想更新歌单表music.xlsx，则可以不用做这一步。

如果想要本地调试web页面，需要先安装nodejs： https://nodejs.org/en

之后运行：
```bash
npm install
npm run dev
```

### 导出静态网站

项目已部署在vercel，会监听到提交代码时自动构建后在线发布


## 修改相关

修改自项目:

[song-list-of-nanakaie](https://github.com/alan314m/song-list-of-nanakaie)


[vup-song-list](https://github.com/Akegarasu/vup-song-list)

感谢以上项目的开源贡献。
修改了若干处使项目更低门槛可以部署、编辑、发布。

本项目遵守 MIT License
