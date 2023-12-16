# vup 歌单页(ameki)

## 部署使用

### 制作歌单内容

1. 按照模板 `scrips/music.xlsx` 填写，制作歌单内容
2. 运行 `scripts/converter.exe` 生成歌单文件


### 启动开发环境

```bash
npm install
npm run dev
```

### 导出静态网站

已部署在vercel，提交代码自动构建
`，如果需要请更改为 `true`，并且更改 styles 中的相关样式
并且将鼠标指针图片放入 `./assets/cursor/` 目录下

## 修改相关

修改自项目:
[song-list-of-nanakaie](https://github.com/alan314m/song-list-of-nanakaie)
[song-list-of-nanakaie](https://github.com/Akegarasu/vup-song-list)

修改了若干处使项目更低门槛可以部署、编辑、发布。

本项目遵守 MIT License
