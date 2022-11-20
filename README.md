<p align="center"><a href="https://usememos.com"><img height="64px" src="https://raw.githubusercontent.com/eallion/memos.top/main/assets/img/logo-full.webp" alt="✍️ memos" /></a></p>

<p align="center">Memos Top. A static page rendered with the Memos API.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Memos-Top-orange" />
  <img src="https://img.shields.io/badge/Author-eallion-brightgreen" />
  <a href="https://github.com/eallion/memos.top/releases" target="_blank"><img alt="GitHub all releases" src="https://img.shields.io/github/downloads/eallion/memos.top/total"></a>
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

> Darkmode Support  
> Mobile Friendly  

 - [**Memos**](https://github.com/usememos/memos)
 - [BaguetteBox.js](https://github.com/feimosi/baguetteBox.js)
 - [Github-markdown-css](https://github.com/sindresorhus/github-markdown-css)
 - [Markedjs](https://github.com/markedjs/marked)
 - [Moment](https://github.com/moment/moment)
 - [Pangu.js](https://github.com/vinta/pangu.js)
 - [Pure.CSS](https://purecss.io/)
 - [Vanilla-lazyload](https://github.com/verlok/vanilla-lazyload)
 - [Vercel](https://vercel.com)

### Usage

1. Download from [Release](https://github.com/eallion/memos.top/releases), or clone this repo to self-hosted.

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

### Update

Memos Top won't update unless the Memos API update.  
So, you need to update or fix yourself.

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