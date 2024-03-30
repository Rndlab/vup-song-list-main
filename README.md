# vup 歌单站(雨纪ameki)

[雨纪ameki的歌单](https://www.ameki.online)

### 零编程基础，就可以更新歌单列表

1.告诉我你的github用户名，之后确认接受管理项目的邀请。b站 【爪哇莫斯】联系我。

2.去这里下载 github 桌面端软件: https://desktop.github.com/
安装完成后就可以用桌面端登陆账号啦。

3.打开桌面端软件，如果你已经获取项目的管理权限，就可以在右侧列表看到项目了，选择它点击Clone。

![](/steps/1.png)

4. 在local path选择一个合适的本地目录存放项目，点击Clone。

![](/steps/2.png)

5.等待下载完成，桌面端界面变成下面的样子，说明可以开始编辑歌单了。

![](/steps/3.png)

6.在本地打开你刚才设置的本地目录，打开 vup-song-list-main ，打开里面的scripts文件夹，music.xlsx就可以编辑了。

![](/steps/4.png)

7.表格填写格式参考已有内容自行领会一下，BV号如果是分p歌切，则需要在bv号后面加上形如【&p=1】

![](/steps/5.png)

8.打开桌面端软件，它会知道你已经更新了表格内容，按下图填写说明（第二个框可不填），点击commit to main。之后就可以等待几分钟，网站就会更新了。

![](/steps/6.png)

9.日常如果想再做修改更新，先点一下Fetch origin，同步目前项目的最新状态，等待更新完成后再进行编辑。

![](/steps/7.png)


### 启动开发环境
如果只是想更新歌单表music.xlsx，则可以不用做这一步。

如果想要本地调试web页面，需要先安装nodejs： https://nodejs.org/en

之后运行：
```bash
npm install
npm run dev
```

### 发布到网站

项目已部署在vercel，会监听到提交代码时自动构建后在线发布


## 修改相关

修改自项目:

[song-list-of-nanakaie](https://github.com/alan314m/song-list-of-nanakaie)


[vup-song-list](https://github.com/Akegarasu/vup-song-list)

感谢以上项目的开源贡献。
修改了若干处使项目更低门槛可以部署、编辑、发布。

本项目遵守 MIT License
