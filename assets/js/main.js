// Lazyload Start
(function () {
  function logElementEvent(eventName, element) {
    console.log(Date.now(), eventName, element.getAttribute("data-src"));
  }

  var callback_enter = function (element) {
    logElementEvent("🔑 ENTERED", element);
  };
  var callback_exit = function (element) {
    logElementEvent("🚪 EXITED", element);
  };
  var callback_loading = function (element) {
    logElementEvent("⌚ LOADING", element);
  };
  var callback_loaded = function (element) {
    logElementEvent("👍 LOADED", element);
  };
  var callback_error = function (element) {
    logElementEvent("💀 ERROR", element);
    element.src = "/assets/img/error.png";
  };
  var callback_finish = function () {
    logElementEvent("✔️ FINISHED", document.documentElement);
  };
  var callback_cancel = function (element) {
    logElementEvent("🔥 CANCEL", element);
  };

  var ll = new LazyLoad({
    class_applied: "lz-applied",
    class_loading: "lz-loading",
    class_loaded: "lz-loaded",
    class_error: "lz-error",
    class_entered: "lz-entered",
    class_exited: "lz-exited",
    // Assign the callbacks defined above
    callback_enter: callback_enter,
    callback_exit: callback_exit,
    callback_cancel: callback_cancel,
    callback_loading: callback_loading,
    callback_loaded: callback_loaded,
    callback_error: callback_error,
    callback_finish: callback_finish
  });
})();
// Lazyload End

// Memos Start
var memo = {
  host: 'https://demo.usememos.com/',
  limit: '10',
  creatorId: '101',
  domId: '#memos',
  username: 'Admin',  
  name: 'Administrator'
}
if (typeof (memos) !== "undefined") {
  for (var key in memos) {
    if (memos[key]) {
      memo[key] = memos[key];
    }
  }
}

var limit = memo.limit
var memos = memo.host
var memoUrl = memos + "api/memo?creatorId=" + memo.creatorId + "&rowStatus=NORMAL"
var page = 1,
  offset = 0,
  nextLength = 0,
  nextDom = '';
var memoDom = document.querySelector(memo.domId);
var load = '<button class="load-btn button-load">努力加载中……</button>'
if (memoDom) {
  memoDom.insertAdjacentHTML('afterend', load);
  getFirstList() //首次加载数据
  var btn = document.querySelector("button.button-load");
  btn.addEventListener("click", function () {
    btn.textContent = '努力加载中……';
    updateHTMl(nextDom)
    if (nextLength < limit) { //返回数据条数小于限制条数，隐藏
      document.querySelector("button.button-load").remove()
      return
    }
    getNextList()
  });
}

function getFirstList() {
  var memoUrl_first = memoUrl + "&limit=" + limit;
  fetch(memoUrl_first).then(res => res.json()).then(resdata => {
    updateHTMl(resdata.data)
    var nowLength = resdata.data.length
    if (nowLength < limit) { //返回数据条数小于 limit 则直接移除“加载更多”按钮，中断预加载
      document.querySelector("button.button-load").remove()
      return
    }
    page++
    offset = limit * (page - 1)
    getNextList()
  });
}
//预加载下一页数据
function getNextList() {
  var memoUrl_next = memoUrl + "&limit=" + limit + "&offset=" + offset;
  fetch(memoUrl_next).then(res => res.json()).then(resdata => {
    nextDom = resdata.data
    nextLength = nextDom.length
    page++
    offset = limit * (page - 1)
    if (nextLength < 1) { //返回数据条数为 0 ，隐藏
      document.querySelector("button.button-load").remove()
      return
    }
  })
}
// 插入 html
function updateHTMl(data) {
  var memoResult = "", resultAll = "";

  const TAG_REG = /#([^\s#]+?) /g;
  const B23_REG = /<a href="https:\/\/b23\.tv\/([a-z|A-Z|0-9]{7})\/">.*<\/a>/g;
  const BILIBILI_REG = /<a\shref="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?">.*<\/a>/g;
  const YOUTUBE_REG = /<a href="https:\/\/www\.youtube\.com\/watch\?v\=([a-z|A-Z|0-9]{11})\">.*<\/a>/g;

    // Marked Options
    marked.setOptions({
      breaks: true,
      smartypants: true,
      langPrefix: 'language-'
  });

    // Memos Content
    for (var i = 0; i < data.length; i++) {
      var memoContREG = data[i].content
          .replace(TAG_REG, "<span class='tag-span'><a rel='noopener noreferrer' href='#'>#$1</a></span> ")

      memoContREG = marked.parse(memoContREG)
          .replace(BILIBILI_REG, "<div class='video-wrapper'><iframe src='//player.bilibili.com/player.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true' style='position:absolute;height:100%;width:100%;'></iframe></div>")
          .replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>")

      //解析内置资源文件 
      if (data[i].resourceList && data[i].resourceList.length > 0) {
            var resourceList = data[i].resourceList;
            var imgUrl = '', resUrl = '', resImgLength = 0;
            for (var j = 0; j < resourceList.length; j++) {
                var resType = resourceList[j].type.slice(0, 5);
                if (resType == 'image') {
                    imgUrl += '<img loading="lazy" src="' + memos + 'o/r/' + resourceList[j].id + '/' + resourceList[j].filename + '"/>'
                    resImgLength = resImgLength + 1
                }
                if (resType !== 'image') {
                    resUrl += '<a target="_blank" rel="noreferrer" href="' + memos + 'o/r/' + resourceList[j].id + '/' + resourceList[j].filename + '">' + resourceList[j].filename + '</a>'
                }
            }
            if (imgUrl) {
                var resImgGrid = ""
                if (resImgLength !== 1) { var resImgGrid = "grid grid-" + resImgLength }
                memoContREG += '<div class="resimg ' + resImgGrid + '">' + imgUrl + '</div>'
            }
            if (resUrl) {
                memoContREG += '<p class="datasource">' + resUrl + '</p>'
            }
        }
        memoResult += '<li class="timeline"><div class="memos__content"><div class="memos__text"><div class="memos__userinfo"><div>' + memo.name + '</div><div><svg viewBox="0 0 24 24" aria-label="认证账号" class="memos__verify"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg></div><div class="memos__id">@' + memo.username + '</div></div><p>' + memoContREG + '</p></div><div class="memos__meta"><small class="memos__date">' + moment(data[i].createdTs * 1000).twitter() + ' • 来自「<a href="' + memo.host + 'm/' + data[i].id + '" target="_blank">Memos</a>」</small></div></div></li>'
    }
  var memoBefore = '<ul class="">'
  var memoAfter = '</ul>'
  resultAll = memoBefore + memoResult + memoAfter
  memoDom.insertAdjacentHTML('beforeend', resultAll);
  document.querySelector('button.button-load').textContent = '加载更多';
}
// Memos End

// 图片灯箱效果
window.ViewImage && ViewImage.init('.container img');

// Memos Total Start
//获取 Memos 总条数
function getTotal() {
  var totalUrl = memos + "api/memo/amount?creatorId=" + memo.creatorId
  fetch(totalUrl).then(response => {
    return response.json();
  }).then(data => {
    var memosCount = document.getElementById('total');
    memosCount.innerHTML = data.data;
  }).catch(err => {
    // Do something for an error here
  });
};
window.onload = getTotal();
// Memos Total End

// Toggle theme
const localTheme = window.localStorage && window.localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");

if (localTheme) {
  document.body.classList.remove("light-theme", "dark-theme");
  document.body.classList.add(localTheme);
}

themeToggle.addEventListener("click", () => {
  const themeUndefined = !new RegExp("(dark|light)-theme").test(document.body.className);
  const isOSDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (themeUndefined) {
    if (isOSDark) {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.add("dark-theme");
    }
  } else {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
  }

  window.localStorage &&
    window.localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme",
    );
});
// Darkmode End