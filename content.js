// 脚本开始时打印日志，方便调试
console.log("LDO Avatar Fixer: content script loaded.");

chrome.storage.sync.get(['avatarUrl'], (result) => {
  const savedPngPath = result.avatarUrl;

  // 如果用户没有设置 URL，则不执行任何操作
  if (!savedPngPath) {
    console.log("LDO Avatar Fixer: No avatar URL saved.");
    return;
  }
  
  console.log("LDO Avatar Fixer: Found saved PNG path:", savedPngPath);

  // 根据 .png 路径生成 .gif 路径
  const targetGifPath = savedPngPath.replace(/\.png$/, '.gif');
  console.log("LDO Avatar Fixer: Target GIF path:", targetGifPath);


  // 定义一个函数来替换匹配的图片
  const replaceAvatar = () => {
    const images = document.getElementsByTagName('img');
    for (const img of images) {
      try {
        // 使用 URL 对象来解析 img.src，这样可以轻松获取路径名
        const imgSrcUrl = new URL(img.src);
        
        // 检查图片的 src 路径是否与用户保存的 .png 路径完全匹配
        if (imgSrcUrl.pathname === savedPngPath) {
          // 构建完整的新 URL，避免相对路径问题
          const newSrc = imgSrcUrl.origin + targetGifPath;
          // 检查一下，避免重复设置导致无限循环或不必要的网络请求
          if (img.src !== newSrc) {
            console.log(`LDO Avatar Fixer: Replacing ${img.src} with ${newSrc}`);
            img.src = newSrc;
          }
        }
      } catch (e) {
        // 如果 img.src 不是一个有效的 URL，可能会抛出异常，忽略它
      }
    }
  };

  // 使用 MutationObserver 来监听 DOM 变化 (例如，通过 AJAX 加载的新内容)
  const observer = new MutationObserver((mutations) => {
    replaceAvatar();
  });

  // 关键改动：等待 DOM 加载完毕再开始观察
  // 这样可以确保 document.body 存在
  const startObserving = () => {
    if (document.body) {
      // 先立即执行一次替换
      replaceAvatar();
      // 然后开始观察未来的变化
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      console.log("LDO Avatar Fixer: Observer started.");
    } else {
      // 如果 body 还不存在，等一帧再试
      requestAnimationFrame(startObserving);
    }
  };

  // 启动替换和观察进程
  startObserving();
});