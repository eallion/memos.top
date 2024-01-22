<p align="center"><a href="https://usememos.com"><img height="64px" src="https://raw.githubusercontent.com/eallion/memos.top/main/assets/img/logo-full.webp" alt="✍️ memos" /></a></p>

<p align="center">Memos Top. A static page rendered with the Memos API.</p>
<p align="center">Simple HTML, Pure CSS, Vanilla JS.</p>

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

> [!NOTE]  
> If you're looking to embed your Mastodon toots on your website, you might want to check out this project.  
> <https://github.com/eallion/mastodon-embed-feed-timeline>

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
            host: 'https://demo.usememos.com/',  // Your Memos, with '/' end.
            limit: '10',  // Pagination to show.
            creatorId: '1',  // The old instance is 101, and the new instance is 1.
            domId: '#memos',  // Default #memos.
            username: 'memos',  // You can customize the display ID that is not related to memos.
            name: 'Official Demo',  // You can customize the displayed full name, that is not related to memos.
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

### Other

Yes! You can deploy to Cloudflare Pages or Netlify and so on.

### Tips

<details>
<summary>
How to post your memos: 👇👇👇
</summary>  

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

> If enable. You need to uncomment [`// fetchDB()`](https://github.com/eallion/memos.top/blob/main/assets/js/main.js#L208) and replace api [`var dbAPI = "https://api.example.com/"`](https://github.com/eallion/memos.top/blob/main/assets/js/main.js#L218) in [`assets/js/main.js`](https://github.com/eallion/memos.top/blob/main/assets/js/main.js)

```
https://book.douban.com/subject/2567698/
https://movie.douban.com/subject/1889243/
```

</details>

### [LICENSE GLWTPL](https://github.com/me-shaon/GLWTPL)

```
               GLWT(Good Luck With That) Public License
                 Copyright (c) Everyone, except Author

Everyone is permitted to copy, distribute, modify, merge, sell, publish,
sublicense or whatever they want with this software but at their OWN RISK.

                            Preamble

The author has absolutely no clue what the code in this project does.
It might just work or not, there is no third option.


                GOOD LUCK WITH THAT PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION, AND MODIFICATION

  0. You just DO WHATEVER YOU WANT TO as long as you NEVER LEAVE A
TRACE TO TRACK THE AUTHOR of the original product to blame for or hold
responsible.

IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.

Good luck and Godspeed.
```
