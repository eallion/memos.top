<p align="center"><a href="https://usememos.com"><img height="64px" src="https://raw.githubusercontent.com/eallion/memos.top/main/assets/img/logo-full.webp" alt="✍️ memos" /></a></p>

<p align="center">Memos Top. A static page rendered with the Memos API.</p>
<p align="center">Simple HTML, Pure CSS, Vanilla JS. Anti-Framework.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Memos-Top-orange" />
  <img src="https://img.shields.io/badge/Author-eallion-brightgreen" />
</p>

<p align="center">
  <a href="https://memos.top/">Live Demo</a> •
  <a href="https://eallion.com/memos" target="_blank" rel="noopener noreferrer" class="pure-menu-link">I'm Feeling Lucky ✍</a>
</p>

<p align="center">
  <a href="https://memos.top/" target="_blank"><img alt="Memos Top" src="https://raw.githubusercontent.com/eallion/memos.top/main/screenshot.png"></a>
</p>

English | [中文](./README_cn.md)

### WebStack

> • Darkmode Support  
> • Mobile Friendly  

- [**Memos**](https://github.com/usememos/memos)
- [Highlight.js](https://github.com/highlightjs/highlight.js)
- [Markedjs](https://github.com/markedjs/marked)
- [Moment](https://github.com/moment/moment)
- [Vanilla-lazyload](https://github.com/verlok/vanilla-lazyload)
- [ViewImage.js](https://github.com/Tokinx/ViewImage)

### Usage

1. Clone this repo or Download [Release](https://github.com/eallion/memos.top/archive/refs/heads/main.zip) to self-hosted.

```bash
git clone https://github.com/eallion/memos.top
```

2. Setting

Replace the default value in `index.html`:

```html
    <script type="text/javascript">
        var memos = {
            host: 'https://demo.usememos.com/',  //修改为自己部署 Memos 的网址，末尾有 / 斜杠
            limit: '10',  //默认每次显示 10条
            creatorId: '101',  //默认为 101用户 https://demo.usememos.com/u/101
            domId: '#memos',  //默认为 #memos
            username: 'memos',  //发布者 ID 自定义
            name: 'Official Demo',  //发布者全称自定义
        }

    </script>
```

3. Logo & Avatar(*Option*)

Replace the Logo and Avatar in the `assets/img` folder.

- `logo.webp` is favicon
- `avatar.jpg` is your icon

4. Upload

Upload file `index.html` and folder `assets` to your web server. Enjoy!

### Hosted by GitHub Pages

> Demo: <https://www.memos.top>

1. Fork this
2. Setting as #[Usage.2]()
3. Go to your own `memos.top` repo - `Setting` - `Pages` - `Deploy from a branch` - `Branch(main/root)`

### Hosted by Vercel

> Demo: <https://memos.top>

1. Fork this
2. Setting as #[Usage.2]()
3. Go to your Vercel dash
4. Import GitHub repo
5. Configure Project default
6. Deploy

### Tips

How to post your memos:

1. Bilibili. Just URL. `BV/AV` support. `b23.tv` not support.

```
https://www.bilibili.com/video/BV1Sd4y1b7yg/ 
```

2. Youtube. Just URL.

```
https://www.youtube.com/watch?v=mNK6h1dfy2o
```

3. Youku. Just URL.

```
https://v.youku.com/v_show/id_XNTkyMjkxNTEyOA==.html
```

4. QQ Video. Just URL.

```
https://v.qq.com/x/cover/mzc00200z47sdeu/m0044zpag6c.html
```

5. Spotify. Share URL. `track/album` support.

```
https://open.spotify.com/track/6Uq8BnOxvXJsQiJ2XqfO5P
```

6. Netease music. Just URL.

```
https://music.163.com/#/song?id=4153490
```

7. QQ music. Support `sondmid` only, not `songid`.

```
https://y.qq.com/n/ryqq/songDetail/004W3BfK46dMXk
```

8. Douban. Just URL. Need your own API.

> If enable. You need to uncomment [`// fetchDB()`](https://github.com/eallion/memos.top/blob/main/assets/js/main.js#L201) and replace api [`var dbAPI = "https://api.example.com/"`](https://github.com/eallion/memos.top/blob/main/assets/js/main.js#L201) in [`assets/js/main.js`](https://github.com/eallion/memos.top/blob/main/assets/js/main.js)

```
https://book.douban.com/subject/2567698/
https://movie.douban.com/subject/1889243/
```

### [LICENSE](https://github.com/me-shaon/GLWTPL)

```
GLWT（Good Luck With That，祝你好运）公共许可证
版权所有© 每个人，除了作者

任何人都被允许复制、分发、修改、合并、销售、出版、再授权或
任何其它操作，但风险自负。

作者对这个项目中的代码一无所知。
代码处于可用或不可用状态，没有第三种情况。


                祝你好运公共许可证
            复制、分发和修改的条款和条件

0 ：在不导致作者被指责或承担责任的情况下，你可以做任何你想
要做的事情。

无论是在合同行为、侵权行为或其它因使用本软件产生的情形，作
者不对任何索赔、损害承担责任。

祖宗保佑。
```
