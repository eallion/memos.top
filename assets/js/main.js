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
  var memoResult = "",
    resultAll = "";

  for (var i = 0; i < data.length; i++) {
    // Marked Options
    marked.setOptions({
      breaks: true,
      smartypants: true,
      langPrefix: 'language-'
    });
    // Marked Image 官方文档 https://marked.js.org/using_pro#renderer
    const renderer = {
      image(href, title, text) {
        return `
                  <div class="gallery">
                      <a href="${href}"><img loading="lazy" class="img" src="${href}" alt="${text}"></a>
                  </div>`;
      } // 为了图片加灯箱效果
    };
    // Custom Extensions 查找 Tags 并自定义样式的例子， 自己可参照写其他规则
    const tagReg = {
      name: 'tagReg',
      level: 'inline',
      start(src) { return src.match(/#/)?.index; },
      tokenizer(src, tokens) {
        const rule = /#([^\s#]+?) /;
        const match = rule.exec(src);
        if (match) {
          return {
            type: 'tagReg',
            raw: match[0],
            tagReg: this.lexer.inlineTokens(match[1].trim()),

          };
        }
      },
      renderer(token) {
        return `<span class="tag-span">#${this.parser.parseInline(token.tagReg)}</span> `;
      }
    };

    // Custom Extensions
    marked.use({ extensions: [tagReg] });
    marked.use({ renderer });

    // 正常版本
    // var memoContREG = marked.parse(data[i].content)

    // 引用 Pangu JS 增强中文排版的版本
    var memoContREG = marked.parse(pangu.spacing(data[i].content))

    //解析内置资源文件
    if (data[i].resourceList && data[i].resourceList.length > 0) {
      var resourceList = data[i].resourceList;
      var imgUrl = '',
        resUrl = '',
        resImgLength = 0;
      for (var j = 0; j < resourceList.length; j++) {
        var restype = resourceList[j].type.slice(0, 5);
        if (restype == 'image') {
          imgUrl += '<a href="' + memos + 'o/r/' + resourceList[j].id + '/' + resourceList[j].filename + ' "><img class="img thumbnail-image" src="' + memos + 'o/r/' + resourceList[j].id + '/' + resourceList[j].filename + '"/></a>'
          resImgLength = resImgLength + 1
        }
        if (restype !== 'image') {
          resUrl += '<a href="' + memos + 'o/r/' + resourceList[j].id + '/' + resourceList[j].filename + '" target="_blank" download="' + resourceList[j].filename + '">' + resourceList[j].filename + '</a>'
        }
      }
      if (imgUrl) {
        var resImgGrid = ""
        if (resImgLength !== 1) {
          var resImgGrid = "grid grid-" + resImgLength
        }
        memoContREG += '<div class="gallery ' + resImgGrid + '">' + imgUrl + '</div>'
      }
      if (resUrl) {
        memoContREG += '<p class="datasource">' + resUrl + '</p>'
      }
    }
    memoResult += '<li class="timeline"><div class="memos__content"><div class="memos__text"><div class="memos__userinfo"><div>' + memo.name + '</div><div><svg viewBox="0 0 24 24" aria-label="认证账号" class="memos__verify"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg></div><div class="memos__id">@' + memo.username + '</div></div><p>' + memoContREG + '</p></div><div class="memos__meta"><small class="memos__date">' + moment(data[i].createdTs * 1000).twitter() + ' • 来自「<a href="' + memo.host + 'm/' + data[i].id + '" target="_blank">Memos</a>」</small></div></div></li>'
  } // end for
  var memoBefore = '<ul class="">'
  var memoAfter = '</ul>'
  resultAll = memoBefore + memoResult + memoAfter
  memoDom.insertAdjacentHTML('beforeend', resultAll);
  document.querySelector('button.button-load').textContent = '加载更多';
  //图片灯箱
  // baguetteBox 灯箱 Issue: #190 Ajax 需要先销毁实例再初始化
  baguetteBox.run('.gallery', {
    // Custom options
    buttons: false,
    noScrollbars: true,
    fullScreen: false,
    filter: /.*/i
  });
}
// Memos End

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
